import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const initialFormState = { name: "", description: "" };

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [nextToken, setNextToken] = useState(undefined)
  const [nextNextToken, setNextNextToken] = useState()
  const [prevToken, setPrevToken] =useState([])
  const limit=5 

/*   useEffect(() => {
    fetchNotes();
  }, []); */

  useEffect(() => {
    async function fetchNotes() {
      const apiData = await API.graphql({ query: listNotes, variables: {nextToken, limit} })
      setNextNextToken(apiData.data.listNotes.nextToken)
    
      const notesFromAPI = apiData.data.listNotes.items;
      console.log(notesFromAPI);
      await Promise.all(
        notesFromAPI.map(async (note) => {
          console.log(note);
          if (note.image) {
            const image = await Storage.get(note.image);
            note.image = image;
          }
          return note;
        })
      );
     setNotes(apiData.data.listNotes.items);
    }
    fetchNotes()
    
  }, [nextToken])


  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      console.log(formData.image);
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
   // fetchNotes();
  }

  const getNext=() => {
    setPrevToken((prev) => [...prev, nextToken])
    console.log("get next")
    setNextToken(nextNextToken)
    setNextNextToken(null)
  }
  const getPrev = () => {
    console.log("get prev")
    setNextToken(prevToken.pop())
    setPrevToken([...prevToken])
    setNextNextToken(null)
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <button onClick={getNext}>next 5</button>
      <button onClick={getPrev}>previous 5</button>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Note description"
        value={formData.description}
      />
      {<input type="file" onChange={onChange} />}
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {notes.map((note) => (
          <div key={note.id || note.name}>
            <h2>{note.name}</h2>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note)}>Delete note</button>
            {note.image && <img src={note.image} style={{ width: 400 }} />}
          </div>
        ))}
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

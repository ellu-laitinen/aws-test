import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listDepartments, listEmployees, getDepartment} from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,

} from "./graphql/mutations";

import { Link, useParams, Switch, useRouteMatch, Route, BrowserRouter as Router } from 'react-router-dom'
import Department from "./Department";

function Layout() {
  
  const initialFormState = { name: "", age: ""};
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

let match= useRouteMatch();
console.log(match)



  const [nextToken, setNextToken] = useState(undefined)
  const [nextNextToken, setNextNextToken] = useState()
  const [prevToken, setPrevToken] =useState([])
  const limit=5 
  /* console.log(formData.comments.content) */
/*   useEffect(() => {
    fetchNotes();
  }, []); */

  useEffect(() => {
    async function fetchDepartments() {
      const apiData = await API.graphql({ query: listDepartments, variables: { nextToken, limit} })


      setNextNextToken(apiData.data.listDepartments.nextToken)
    
      const dataFromAPI = apiData.data.listDepartments.items;

  /*     await Promise.all(
        dataFromAPI.map(async (note) => {
          console.log(note);
          if (note.image) {
            const image = await Storage.get(note.image);
            note.image = image;
          }
          return note;
        })
      ); */
     setDepartments(apiData.data.listDepartments.items);


    }
    fetchDepartments()
    
  }, [nextToken])
  console.log(departments)

/*  deptId = departments.map((i) => i.id)
 console.log(deptId) */


/*   const commentHandler = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value
    })
  } */

/*   const saveData = ({name, value}) => {
    setFormData({
      ...formData,
      [name]: value
    })
  } */

/*   const addComment = (e) => {
    saveData({
      name: "comments",
      value: [...formData.comments, comments.comments]
    })
  } */

/*   console.log(formData.comments)
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
    console.log(notes)
  } */

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

/*   async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  } */

/*   async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file); */
   // fetchNotes();
/*   } */

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
/* console.log(comment) */
  return ( <div className="App">
    <Router>
      <Switch>
        
        <Route path="/departments/:deptId">
      <Department/>
        </Route>
        <Route path={match.path}>
   
      <h1>My Notes App</h1>
      <button onClick={getNext}>next 5</button>
      <button onClick={getPrev}>previous 5</button>
      <input
        onChange={changeHandler}
        placeholder="Note name"
        name="name"
        value={formData.name}
      />
 {/*      <input
        onChange={changeHandler}
        placeholder="Note description"
        value={formData.age}
        name="description"
      /> */}
{/*       <input
        onChange={commentHandler}
        placeholder="comments"
        value={formData.comments.comments}
        name="comments"
      />
      <button onClick={addComment}>add comment</button> */}

{/*       {<input type="file" onChange={onChange} />}
      <button onClick={createNote}>Create Note</button> */}
      <div style={{ marginBottom: 30 }}>
        {departments.map((dept) => (
          <div key={dept.id || dept.name}>
            <h2>Title: {dept.name}</h2>
         
           <Link to={`${match.url}/${dept.id}`}>get dept</Link>
{/*             <p>Description: {note.description}</p>
            <p>Comments</p>
           {note.comments.map((i) => (<li>{i}</li>))}
 
            <button onClick={() => deleteNote(note)}>Delete note</button>
            {note.image && <img src={note.image} style={{ width: 400 }} />} */}
          </div>
        ))} 
 
           
      </div>
    
      <AmplifySignOut />
   
    </Route>
    </Switch>
    </Router> </div>
  );
}

export default Layout;

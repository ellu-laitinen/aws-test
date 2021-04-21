import React, {useEffect, useState} from 'react';
import { API, Storage } from "aws-amplify";
import { listDepartments, listEmployees, getDepartment} from "./graphql/queries";
import { useParams, Switch, useRouteMatch, Link, Route, BrowserRouter as Router } from "react-router-dom";


const Department = () => {
    const [department, setDepartment] = useState("");
    let { deptId} = useParams()
   
    useEffect(() => {
          async function fetchDepartment () {
    const apiData = await API.graphql({ query: getDepartment,
    variables: {id: deptId}
  })
  console.log(apiData)
  setDepartment(apiData.data.getDepartment)
  }
fetchDepartment(); 
    }, [])
  
console.log(department)
console.log(department.manager)
console.log(department.employees)

    return (
        <div>

           <p>{department.name}</p>  
      {department ? 
<div>
      <p>Manager: {department.manager.name}</p> 
      <p>Employees:{department.employees.items.map((i) => <li key={i.id}>{i.name}</li>)}</p>
   
 
    </div> : ""}

         
      
     
        </div>
    );
}

export default Department;


import { API_URL } from "../../constants/Api";
//import Container from "react-bootstrap/esm/Container";
import Heading from "../layout/Heading";
import { useState, useEffect } from "react";


function Projects() {
 const [projects, setProject] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(API_URL);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setProject(json);
    } else {
     setError("An error occured");
    }
   } catch (error) {
    setError(error.toString());
   } finally {
    setLoading(false);
   }
  }
  fetchData();
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }

 return (
        <>
        <Heading title="Våre Prosjekter"/>
         {projects.map(function (project) {
          return <div className= "projects-page" key={project.id}>
           <h1> {project.title.rendered} </h1>
           <img className="d-block w-100" src={project.featured_media} alt="project-foto" /> 
           <p>{project.content.rendered}</p>
           <p>{project.date}</p>
          </div>
            ;
         })}
        </>
       );
      }


export default Projects;

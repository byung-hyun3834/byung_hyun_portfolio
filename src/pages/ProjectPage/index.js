import {Route} from "react-router-dom";
import Pages from "../index";
import React, {useState, useEffect} from "react";
import Styles from "./styles";
import ProjectCard from "./components/ProjectCard";
import axios from 'axios';


function ProjectPage() {
    const [project, setProject] = useState(null);
    const getData = async () =>{
        try{
            const result = await axios.get('https://edward-shawn.github.io/myapi/data.json')
            setProject(result.data)
        }catch (error){
            console.log('Data load failed:'+ error);
        }
    }

    useEffect(()=>{
        getData();
    }, [])

    return (
        <Styles.Container>
            <div className="pageTitle">
                Project 💻
            </div>
            <div className="list_wrap">
                {
                    project && project.map((data, index) => <ProjectCard project={data} key={index} />)
                }
            </div>
        </Styles.Container>
    );
}


export default ProjectPage;
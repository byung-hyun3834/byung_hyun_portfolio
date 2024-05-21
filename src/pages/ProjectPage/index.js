import {Route} from "react-router-dom";
import Pages from "../index";
import React, {useState, useEffect} from "react";
import Styles from "./styles";
import Tag from "../../components/Tag";
import ProjectCard from "./components/ProjectCard";
import data from '../../db/data.json'

function ProjectPage() {
    const mockData = data

    const [project, setProject] = useState([]);

    const getData = () =>{
        setProject(mockData)
    }

    useEffect(()=>{
        getData();
    }, [])

    console.log(project)


    return (
        <Styles.Container>
            <div className="pageTitle">
                Project 💻
            </div>
            <div className="list_wrap">
                {
                    project.map((data, index) => <ProjectCard project={data} key={index} />)
                }
            </div>
        </Styles.Container>
    );
}


export default ProjectPage;
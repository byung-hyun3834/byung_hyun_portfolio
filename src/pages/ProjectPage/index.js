import {Route} from "react-router-dom";
import Pages from "../index";
import React, {useState, useEffect} from "react";
import Styles from "./styles";
import ProjectCard from "./components/ProjectCard";
import ImageRenderer from "../../components/ImageRenderer";
import axios from 'axios';
import SkeletonItem from "../../components/SkeletonItem";


function ProjectPage() {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getData = async () => {
        try {
            const result = await axios.get('https://edward-shawn.github.io/myapi/data.json')
            setProject(result.data)
            setTimeout(() => {
                setIsLoading(true);
            }, 1500);
        } catch (error) {
            console.log('Data load failed:' + error);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (<Styles.Container>
        <div className="pageTitle">
            Project 💻
        </div>
        <img src={'/img/test_img.jpg'} width={'392'} height={'261'} />
        <div>asdfsdfsadf</div>
        <div>asdfsdfsadf</div>
        <div>asdfsdfsadf</div>
        <div>asdfsdfsadf</div>
        <div>asdfsdfsadf</div>
        <div className="list_wrap">


            {/*{!isLoading && new Array(10).fill(1).map((_, i) => <SkeletonItem key={i}/>)}*/}
            {/*{ isLoading &&*/}
            {/*    project.map((data, index) => <ProjectCard project={data} key={index}/>)*/}
            {/*}*/}
        </div>
    </Styles.Container>);
}


export default ProjectPage;
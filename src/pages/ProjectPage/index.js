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
            // setTimeout(() => {
            //     setIsLoading(true);
            // }, 3000);
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
            <div className="list_wrap">
                {/*<ImageRenderer width='363' height="242" />*/}
                {/*{!project ? <SkeletonItem /> : <img src={'/img/icons/test_img.jpg'} />}*/}
                {/*<img src={'/img/test_img.jpg'} />*/}

                {/*{ !project && new Array(10).fill(1).map((_, i) => <SkeletonItem key={i}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    project && project.map((data, index) => <ProjectCard project={data} key={index} />)*/}
                {/*}*/}

                { project &&
                    project.map((data, index) => <ProjectCard project={data} key={index}/>)
                }
            </div>
        </Styles.Container>);
}


export default ProjectPage;
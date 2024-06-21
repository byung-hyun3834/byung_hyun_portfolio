import Tag from "../../../../components/Tag";
import React, {useEffect, useState} from "react";
import Styles, {Skeleton} from "./styles";
import {Link} from "react-router-dom";

const ProjectCard = ({project}) => {
    console.log(project)
    const { thumbnail, title, description, tags, git, link } = project;


    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = thumbnail;
        img.onload = () => setImgLoaded(true);
    }, [thumbnail])

    return(
        <Styles.Card>
                <div className="img_wrap">
                    { !imgLoaded ?
                        <Styles.Skeleton>
                            <div className='inner'></div>
                        </Styles.Skeleton>
                        :
                        <img src={project.thumbnail} loading="lazy" />

                    }
                </div>
                <div className="wrap">
                    <div className="title">
                        {project.title}
                    </div>
                    <div className="description">
                        {project.description}
                    </div>
                    <div className="tags">
                        {
                            project.tags.map((tag, index) => <Tag name={tag} key={index} />)
                        }
                    </div>
                    <div className="button_group">
                        {project.git && <a target="_blank" href={project.git} >github</a>}
                        {project.link && <a target="_blank" href={project.link} >view</a>}
                        {/*<button>github</button>*/}
                        {/*<button>view</button>*/}
                    </div>
                </div>
        </Styles.Card>
    )
}

export default ProjectCard;
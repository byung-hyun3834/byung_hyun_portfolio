import Tag from "../../../../components/Tag";
import React from "react";

const ProjectCard = ({project}) => {
    console.log(project)
    return(
        <div className="item">
            <img src={project.thumbnail} />
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
                    <button>github</button>
                    <button>view</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
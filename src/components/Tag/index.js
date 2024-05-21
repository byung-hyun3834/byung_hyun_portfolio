import React from "react";
import Styles from "./styles";
const Tag = ({name}) => {
    return(
        <Styles.Tag className="tag">{name}</Styles.Tag>
    )
}

export default Tag;
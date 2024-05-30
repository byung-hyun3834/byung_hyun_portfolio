import styled, { keyframes } from 'styled-components';
import Styles, {SkeletonSpan} from "./styles";
import React from "react";






const SkeletonItem = () => {
    return (
        <Styles.SkeletonLayout>
            <div className="skeleton_img"></div>
            <div className="wrap">
                <Styles.SkeletonSpan className="title" width="40%" height="18px"></Styles.SkeletonSpan>
                <Styles.SkeletonSpan className="description" width="60%" height="20px"></Styles.SkeletonSpan>
                <Styles.SkeletonSpan className="tag" width="50%" height="30px"></Styles.SkeletonSpan>
                <Styles.SkeletonSpan className="button_group" width="50%" height="50px"></Styles.SkeletonSpan>
            </div>
        </Styles.SkeletonLayout>
    );
}




export default SkeletonItem;
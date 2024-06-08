import React from 'react';
import styled from "styled-components";


const ImageStyle = styled.div`
  
    background-color: #ccc;
    overflow: hidden;
    position: relative;
    max-width: 800px;
    margin: 20px auto;
  `
const ImageRenderer = ({ url, width, height}) => {

    return (
        <ImageStyle
            className="image-container"
            // ref={imgRef}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: '100%'
            }}
        />
    );
}
export default ImageRenderer;
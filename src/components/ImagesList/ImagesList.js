import React from 'react';
import ImageCard from '../ImageCard/ImageCard'
import {ImageContainer} from './ImagesList.Style'
const ImagesList = (props) =>{
    const images = props.images.map((image)=>{
        return <ImageCard id={image.id} image={image}/>;
    });
    return <ImageContainer> {images}</ImageContainer>
}
export default ImagesList
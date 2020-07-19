import React from 'react';
import {ImageContainer} from './ImagesList.Style'
const ImagesList = (props) =>{
    const images = props.images.map(({id, description,urls} )=>{
        return <ImageContainer style={{width:'40vw'}} key={id} alt={description} src={urls.regular}/>;
    });
    
    return <div > {images}</div>
}
export default ImagesList
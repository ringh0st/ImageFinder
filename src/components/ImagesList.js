import React from 'react';

const ImagesList = (props) =>{
    const images = props.images.map(({id, description,urls} )=>{
        return <img style={{width:'40vw'}} key={id} alt={description} src={urls.regular}/>;
    });
    
    return <div > {images}</div>
}
export default ImagesList
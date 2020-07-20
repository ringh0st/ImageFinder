import React from 'react';
import {ImageItem} from './ImageCard.style';

class ImageCard extends React.Component{
    render(){
        const {description,urls} =this.props.image;
        return(
            <>
                <ImageItem 
                    alt={description}
                    src={urls.regular}
                    />
            </>
        );
    }
}
export default ImageCard
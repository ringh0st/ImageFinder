import React from 'react';
import {ImageItem} from './ImageCard.style';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spans:0
        }
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans =()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }
    render(){
        const {description,urls} =this.props.image;
        return(
            <>
                <ImageItem style={{gridRowEnd:`span ${this.state.spans}`}}
                    ref={this.imageRef} 
                    alt={description}
                    src={urls.regular}
                    />
            </>
        );
    }
}
export default ImageCard
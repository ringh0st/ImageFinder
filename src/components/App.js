import React from 'react';
// import axios from 'axios'
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';
import ImagesList from './ImagesList';

class App extends React.Component{
    state = {images:[]};

    // ComponentDidMount(){
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params:{query: term},
    //         headers:{
    //             Authorization:'Client-ID f5bTvvo9cN2R6gdYC_i18xV4IL6TIHgnCY1cEeaIlcQ'
    //         }
    //     });
    //     this.setState({images: response.data.results})

    // }
 
    onSearchSubmit = async (term) => {
        // console.log(this.state.images);
        
        const response = await unsplash.get('/search/photos', {
            params:{query: term},
        });
        this.setState({images: response.data.results})
        
        
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>

                {/* images:<div>{this.state.images.length}</div> */}
                search results: {this.state.images && this.state.images.length} images found.   
                {/* imagesV3: {this.state.images ? <div>{this.state.images.length}</div> : <div>NO INFO!!</div>} */}
                {/* { this.state.images && <div>{this.state.images.length}</div>} */}
                <ImagesList images={this.state.images}/>
            </div>

        );
    }
}

export default App;
import React from 'react';




class SearchBar extends React.Component{
    state={term:""}
    onFormSubmit= event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        
    }


    render(){
        return(
            <div className="ui segment">
                <form 
                onSubmit={this.onFormSubmit}className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        {/* לא שמים סוגריים אחרי שמעבירים את הקולבק פנקשיין כדי לא לקרוא לה כל פעם שמבצעים רנדר בקומפוננטה */}
                        <input 
                        autocomplete="on"
                        type="text"
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
        
    }
}
export default SearchBar;
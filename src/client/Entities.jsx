import React from 'react';
import ReactDOM from 'react-dom';

export default class Entities extends React.Component {

    render() {
        const urlss = this.props.entities.urls;
        const urlsList = urlss.map(item=>{

            return (<a href={item.url}><p>{item.display_url}</p></a>)
        })
        return(
                <div>
                {urlsList}
                </div>
            )
    }

}
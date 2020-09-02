import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {

    render() {
        return(
                <div>
                    <div> <img src={this.props.user.profile_image_url} /> {this.props.user.name} @{this.props.user.screen_name}</div>
                    <p>{((Date.now() - Date.parse(this.props.user.created_at))/86,400).toFixed(0)} days ago.</p>
                </div>
            )
    }

}
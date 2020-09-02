import React from 'react';
import ReactDOM from 'react-dom';

export default class Stats extends React.Component {

    render() {
        return(
                <div>
                    <p>Retweets: {this.props.retweet}  Favorited: {this.props.favorite}</p>

                </div>
            )
    }

}
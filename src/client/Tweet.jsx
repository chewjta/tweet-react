import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import Entities from './Entities';
import Stats from './Stats';

export default class Tweet extends React.Component {

    render() {
        return(
                <div>
                <User user={this.props.tweet.user}/>
                <Entities entities={this.props.tweet.entities}/>
                <Stats retweet={this.props.tweet.retweet_count} favorite={this.props.tweet.favorite_count} />
                </div>
            )
    }

}
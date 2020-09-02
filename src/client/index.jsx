import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import tweets from './tweets';

class App extends React.Component {
  render() {
    const divStyle={
        border:'3px solid #5198F0',
        marginBottom: '10px',
        listStyleType: 'none',
        width:'400px'
    }

    const containerStyle = {
        display:'flex',
        justifyContent: 'center',
        alighItems:'center'
    }

    let tweet = tweets.tweets;
    const tweetsList = tweet.map(item=>{
        return(
            <li style={divStyle}><Tweet tweet={item}/></li>
            )
    })
    return (
        <div style={containerStyle}>
        <ul>{tweetsList}</ul>
        </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//


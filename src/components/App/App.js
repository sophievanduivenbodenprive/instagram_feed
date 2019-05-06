import React from 'react';
import './App.scss';
import InstagramFeed from '../InstagramFeed/InstagramFeed';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <InstagramFeed />
      </div>
    );
  }
}

export default App;

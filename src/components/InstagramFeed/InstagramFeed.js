import React from 'react';
import './InstagramFeed.scss';
import instafeed from 'react-instafeed';

const options = {
  accessToken: '44166178.e9f1b2b.a2a306a871c449569ebbe55001c7b03a',
  clientId: 'e9f1b2b86d8d46c4800cd8a20717e0a5',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: 'sophievanduivenboden',
  userId: 44166178,
}

const data = instafeed(options);
//console.log(data)

class InstagramFeed extends React.Component {

  state = { data }

  componentDidMount = () => {
    data.then(function(value) {
      console.log(value.data);
      // expected output: 123
    });
  }


  render(){
    return (
      <div>
      </div>
    );
  }
}

export default InstagramFeed;

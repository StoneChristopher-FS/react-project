import React, {Component} from 'react';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Form from './components/Form';
import Post from './components/Post';
import Ad from './components/Ad';

import Home from './images/home.jpg';
import WaterFront from './images/waterfront.jpg';
import Aerial from './images/aerial.jpg'
import AvatarIcon from './images/profile-pic.jpg';


class App extends Component {
  state = {
    postList: [
      {
        postTitle: 'Aerial Photography',
        postDescription: 'Beautiful photo over the Chesapeake Bay in Maryland',
        postImage: Aerial,
        postAlt: 'Drone aerial over the Chesapeake Bay'
      }
    ]
  }

  getInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  //Nice work on add the post to the top of the list.
  addPost = e => {
    e.preventDefault()
    this.setState({
      postList: [{postTitle: this.state.postTitle, postDescription: this.state.postDescription}, ...this.state.postList]
    });
    e.target.reset()
  }
  //Try to use the filter method for the delete. It keeps the state pure. It does not cause mutation of the state.
  removePost = key => {
    const newPostList = [...this.state.postList]
    newPostList.splice(key, 1);
    this.setState(() => ({
      postList: newPostList
    }));
  }

  render() {

    let myPosts = this.state.postList.map((element, i) => {
      return <Post key={i} val={element} delMe={() => this.removePost(i)} />
    })
    
    return (
      <div style={styles.container}>
        <Header title="HouseHunter" avatarIcon={AvatarIcon} avatarAlt="Christopher Stone" userName="Christopher Stone" />
        {/* <div style={styles.container}>
          <div style={styles.nav}> */}
          {/* </div> */}
          <main style={styles.main}>
            <MainNav nav1="News Feed" nav2="Messages" nav3="Watch" />
            {/* You can make a component for your cards. */}
            <section style={styles.card}> 
              <Form avatarIcon={AvatarIcon} avatarAlt="Christopher Stone" getInput={this.getInput} addPost={this.addPost} />
              {myPosts}
            </section>
            <aside style={styles.ad}>
              <Ad adImg={Home} adTitle="Keller Williams Raleigh" adDescription="Sell your home with Keller Williams Today!!" />
              <Ad adImg={WaterFront} adTitle="Water Front Property" adDescription="New water front property available!" />
            </aside>
          </main>
      </div>
    );
  }
}

export default App;

const styles = {
  body: {
    // backgroundColor: '#003C52',
    // height: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E5CE',
    height: '100%'
  },
  nav: {
    width: '45%'
  },
  card:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    marginTop: '20px'
  },
  ad: {
    width: '45%'
  }
}

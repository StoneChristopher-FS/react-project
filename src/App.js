import React, {Component} from 'react';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Form from './components/Form';
import Post from './components/Post';
import Ad from './components/Ad';

import Home from './images/home.jpg';
import WaterFront from './images/waterfront.jpg';


class App extends Component {
  render() {
    return (
      <div className="App" style={styles.body}>
        <Header />
        <div style={styles.container}>
          <div style={styles.nav}>
            <MainNav />
          </div>
          <div style={styles.main}>
            <div style={styles.card}>
              <Form />
            </div>
            <div style={styles.card}>
              <Post />
            </div>
          </div>
          <aside style={styles.ad}>
            <Ad adImg={Home} adTitle="Keller Williams Raleigh" adDescription="Sell your home with Keller Williams Today!!" />
            <Ad adImg={WaterFront} adTitle="Water Front Property" adDescription="New water front property available!" />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  body: {
    backgroundColor: '#003C52',
    height: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F3E5CE',
    height: '100%'
  },
  nav: {
    width: '45%'
  },
  card:{
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    marginTop: '20px'
  },
  ad: {
    width: '45%'
  }
}

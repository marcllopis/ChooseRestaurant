import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('auth', currentUser);
      this.setState({ currentUser });
    });
    this.restaurantRef.on('value', (snapshot) => {
      this.setState({ restaurants: snapshot.val() });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {
            currentUser
              ?
                <div>
                  <NewRestaurant />
                  <Restaurants restaurants={restaurants} user={currentUser} />
                  <CurrentUser user={currentUser} />
                </div>
              :
                <SignIn />
          }
        </div>
      </div>
    );
  }
}

export default Application;

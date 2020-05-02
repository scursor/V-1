import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Geolocation } from '@ionic-native/geolocation';
class MyApp extends Geolocation {
    lattitude : number = 0 ;
    longitude : number = 0 ;  
    constructor() {
      super();
      this.watchPosition().subscribe(data => {
        this.lattitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        console.log(this.longitude + "------" + this.lattitude);
      })
      console.log("Location Set");
    };
  }
  var element = (<h1>Not working</h1>);
  const variable = new MyApp;
ReactDOM.render(<App />, document.getElementById('root'));
variable.watchPosition().subscribe(data => {
    element = (
    <li>
      <ul> lattitude : {data.coords.latitude}</ul>
      <ul> longitude : {data.coords.longitude} </ul>
    </li>
  )
  ReactDOM.render(element, document.getElementById('lister'));
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

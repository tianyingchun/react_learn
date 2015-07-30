/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-enable no-unused-vars*/

var Router = require('react-router');
var Route = Router.Route;

/*eslint-disable no-unused-vars*/
var Redirect = Router.Redirect;
/*eslint-disable no-unused-vars*/

var DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
var BootStrap = require('./BootStrap.jsx');
var Home = require('./components/Home.jsx');
var NoteApp = require('./components/NoteApp.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={BootStrap}>
    <Route name="home" handler={Home}/>
    <Route name="noteapp" handler={NoteApp}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = AppRoutes;

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
var Master = require('./Master.jsx');
var Home = require('./components/Home.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <DefaultRoute handler={Master}/>
  </Route>
);

module.exports = AppRoutes;

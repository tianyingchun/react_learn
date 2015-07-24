/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 */
var React = require('react');
var AppRoutes = require('./App-Router.jsx');
var Router = require('react-router');

if (typeof window !== 'undefined') {
    window.onload = function() {
        Router
        // Runs the router, similiar to the Router.run method. You can think of it as an
        // initializer/constructor method.
            .create({
                routes: AppRoutes,
                scrollBehavior: Router.ScrollToTopBehavior
            })
            // This is our callback function, whenever the url changes it will be called again.
            // Handler: The ReactComponent class that will be rendered
            .run(function(Handler) {
                React.render( <Handler />, document.body);
            });
    };
}

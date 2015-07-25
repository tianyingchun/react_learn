/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 */
var React = require('react');
var AppRoutes = require('./AppRoutes.jsx');
var ReactRouter = require('react-router');

if (typeof window !== 'undefined') {
    window.onload = function() {
        ReactRouter
        // Runs the router, similiar to the Router.run method. You can think of it as an
        // initializer/constructor method.
            .create({
                routes: AppRoutes,
                location: ReactRouter.HistoryLocation,
                scrollBehavior: ReactRouter.ScrollToTopBehavior
            })
            // This is our callback function, whenever the url changes it will be called again.
            // Handler: The ReactComponent class that will be rendered
            .run(function(Handler) {
                React.render(<Handler />, document.body);
            });
    };
}

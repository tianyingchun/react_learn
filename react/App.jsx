/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

// for ie8 Polyfills
require('es5-shim/es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

var React = require('react');
var NoteApp = require('./components/NoteApp.jsx');
var App = React.createClass({
    render: function() {
        return (
            <html>
                <head lang="en">
                    <base href="/"/>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>React Note app</title>
                    <link href="css/bootstrap.css" rel="stylesheet"/>
                    <link href="css/app.css" rel="stylesheet"/>
                </head>
                <body>
                    <NoteApp/>
                    <script type="text/javascript" src="/js/vendor/vendor.js"></script>
                    <script type="text/javascript" src="/js/browserify/bundle.js"></script>
                </body>
            </html>
        );
    }
});


module.exports = App;

/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteApp=require('./components/NoteApp.jsx');

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
                    <script type="text/javascript" src="/js/browserify/bundle.js"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                    <script src="js/bootstrap.js"></script>
                </body>
            </html>
        )
    }
});


module.exports=App;
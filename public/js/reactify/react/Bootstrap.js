/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 */
var React = require('react');
var App = require('./App.jsx');

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.render(React.createElement(App, null), document);
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUg7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUUvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUMvQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVc7UUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuQyxDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cblxuLyoqXG4gKiAgRm9yIHJlbmRlcmluZyB0aGUgYXBwIG9uIGNsaWVudCBzaWRlLlxuICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzeCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudCk7XG4gICAgfTtcbn1cbiJdfQ==
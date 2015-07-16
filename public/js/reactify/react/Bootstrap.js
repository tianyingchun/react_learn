/**
 * @jsx React.DOM
 */

/**
 *  For rendering the app on client side.
 */
var React = require('react');
var App=require('./App.jsx');

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(App(), document);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZWQuanMiLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEdBQUc7O0FBRUg7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUU3QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtJQUMvQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVc7UUFDdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG4vKipcbiAqICBGb3IgcmVuZGVyaW5nIHRoZSBhcHAgb24gY2xpZW50IHNpZGUuXG4gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwPXJlcXVpcmUoJy4vQXBwLmpzeCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudChBcHAoKSwgZG9jdW1lbnQpO1xuICAgIH1cbn0iXX0=
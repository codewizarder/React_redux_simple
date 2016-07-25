var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var hashHistory = Router.hashHistory;

var News = require('./components/NewsWidget');

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Reaact works</h1>
            </div>
        )
    }
})

ReactDom.render(<Home />, document.getElementById('content'));
ReactDom.render(<News />, document.getElementById('news'));



//ReactDom.render((
//  <Router history={hashHistory}>
//    <Route path="/" component={News}/>
//  </Router>
//), document.getElementById('content'))


// this is the reducer, this a just a function that accepts current state of an action, and returns the new state




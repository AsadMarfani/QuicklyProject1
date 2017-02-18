var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<Main/>,
    document.getElementById('app')
);

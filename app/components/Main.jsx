var React = require('react');
var ReactDOM = require('react-dom');
import { Menu } from "Menu";
var Main = (props) => {
	return(
		<div  className = "row">
		<h1 className = "text-center">Menu Tabs</h1>
		<hr/>
			<Menu />
		</div>
	);
}
module.exports = Main;
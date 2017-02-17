var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from "Link";
export class Menu extends React.Component{
	render() {
		let menus = [" About ", " Services ", " Portfolio ", " Contact Us "];
		return (
			<div>
				{
					menus.map(function(v, i){
						return <Link key = {i} label = {v}/>
					})
				}
			</div>
		);
	}

}

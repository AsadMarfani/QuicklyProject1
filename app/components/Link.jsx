var React = require('react');
var ReactDOM = require('react-dom');
export class Link extends React.Component{
	render() {
		const url = '/'+ this.props.label.toLowerCase().trim().replace(' ','-');
		return (
				<a href = {url} className = "columns medium-3 hollow button expanded"><h5>{this.props.label}</h5></a>
		);
	}
}

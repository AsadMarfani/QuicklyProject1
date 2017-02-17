var React = require('react');
var Main = (props) => {
	return(
		<div>
			<h1>This Is The Main Component</h1>
			{props.children}
		</div>
	);
}
module.exports = Main;
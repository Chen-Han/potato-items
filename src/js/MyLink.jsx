import { Link } from "react-router";
// polyfill
if (!Object.assign) Object.assign = React.__spread;

export default class MyLink extends Link{
	render(){
		var props = assign({}, this.props, {
		  href: this.getHref(),
		  className: this.getClassName(),
		  onClick: this.handleClick.bind(this)
		});

		if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

		return React.DOM.a(props, this.props.children);
	}
}
import (default as React) from "react";
// polyfill
if (!Object.assign) Object.assign = React.__spread;


export default class Card extends React.Component{
	render(){
		var props = this.props; //save it
		var {name,location,cell,time,moreClick,className,...otherProps} = this.props;
		function getClassName(className){
			return "potato-card " + (className||"");
		}
		function handleMoreClick(e){
			if(moreClick)moreClick(e,props);
		}
		return (
				<article className={getClassName(className)} {...otherProps}>
	                <h4 className="name">{name}</h4>
	                <ul className="info-list">
	                    <li className="info-item"><i className="fa fa-map-marker"></i><a href="">1234 Main Street</a></li>
	                    <li className="info-item"><i className="fa fa-phone"></i><a href="">(123)-334-1234</a></li>
	                    {time?(<li className="info-item"><i className="fa fa-clock-o"></i><a href="">M-F 8:00am - 4:00pm</a></li>):""}
	                </ul>
	                <a className="more" onClick={handleMoreClick}>
	                    <i className="fa fa-ellipsis-h"></i>
	                </a>
	            </article>
			);
	}
}



Card.propTypes = {
    name:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    cell:React.PropTypes.string.isRequired,
    time:React.PropTypes.string,
    moreClick:React.PropTypes.func,
};
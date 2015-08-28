import React from "react";
import Card from "./Card.jsx";

// polyfill
if (!Object.assign) Object.assign = React.__spread;


export deafult class CardItem extends React.Component{
	var {card,className,opened,items,...otherProps} = this.props;
	render(){
		return (
				<div className={"row " + (className || "")}>
					<div className="col-xs-12">
						<Card {...card}></Card>
					</div>
					<div >
						{
							// More item details 
						}
					</div>
				</div>
			);
	}
}

CardItem.propTypes = {
    // title:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element]).isRequired,
    card:React.PropTypes.object.isRequired,
    // links:React.PropTypes.object.isRequired,
    opened:React.PropTypes.bool,
    items:React.PropTypes.array,
};
import React from "react";
import CardItem from "./CardItem.jsx";

// polyfill
if (!Object.assign) Object.assign = React.__spread;


export deafult class CardList extends React.Component{
	var {cards,className,...otherProps} = this.props;
	render(){
		return (
				<div className={"pt-card-list "+(className || "")}>
					{cards.map(function(i){
						var {items,opened,...otherCardProps} = i;
						var handleMoreClick = otherCardProps['onMoreClick'];
						otherCardProps['onMoreClick'] = function(){
							
						}
						return (<CardItem card={otherCardProps} items={items} opened={opened}></CardItem>);
					}}
				</div>
			);
	}
}

CardList.propTypes = {
    // title:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element]).isRequired,
    cards:React.PropTypes.array.isRequired,
    // links:React.PropTypes.object.isRequired,
    // size:React.PropTypes.string //size optional
};
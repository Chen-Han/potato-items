import Item from "../src/js/Item.jsx";
import Card from "../src/js/Card.jsx";

var link1 = {
	shop:{

	},
	more:{

	}
};
React.render(
	(<div className="row">
		<div className="col-xs-12">
			<Item imgUrl="" title="$0.99/lb" links={link1}></Item>
		</div>
		<div className="col-xs-12">
			<Card className="long" name="Solanum Farm" location="999 King St." 
			cell="(519)-056-8923" time="M-F 9:00am-5:00pm" moreClick={function(e,f){console.log(e);}}></Card>
		</div>

	</div>),
	document.getElementById("content"));
import React from "react";

// polyfill
if (!Object.assign) Object.assign = React.__spread;
/**
 *
 *
 * links = {
    shop: {
        to: 
        params:
        query: 
        //similar as react router link
    },
    more:{
        //similar to shop
    }
 }
 * size = sm|md|lg sets the size for each item
 */


export default class Article extends React.Component{
    render(){
        var {links,imgUrl,title,size,className,...otherProps} = this.props;
        function getClassName(size,className){
            return "potato-article " + (size?"article-"+size: ""); 
        }
        return (
            <article className={getClassName(size,className)} {...otherProps}>
                <img src={imgUrl} className="img img-full"/>
                <aside className="detail text-center">
                    <h4 className="title">
                        {title}
                    </h4>
                    <span className="links">
                        <Link {...links.shop}>
                            <i className="fa fa-shopping-cart"></i>
                        </Link>
                        <Link {...links.more}>
                            <i className="fa fa-link"></i>
                        </Link>
                    </span>
                </aside>
            </article>
        );
    }
}

Article.propTypes = {
    title:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element]).isRequired,
    imgUrl:React.PropTypes.string.isRequired,
    links:React.PropTypes.object.isRequired,
    size:React.PropTypes.string //size optional
};
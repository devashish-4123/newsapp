import React, { Component } from 'react'

export class NewsItem extends Component {
    //constructor tab run karata hai jab iss class ka object banata hai
    //example
    // constructor(){
    //     super();
    //     console.log("Hello I am a constructor from news item");

    // }
    render() {
        let {title, description, imgUrl,newsurl} = this.props;
        return (
            
            <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                    <img src={!imgUrl ? "https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg" : imgUrl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noopener noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

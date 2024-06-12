import React, { Component } from "react";

export class NewsItem extends Component {
  //constructor tab run karata hai jab iss class ka object banata hai
  //example
  // constructor(){
  //     super();
  //     console.log("Hello I am a constructor from news item");

  // }
  render() {
    let { title, description, imgUrl, newsurl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >
            {source}
            
          </span>
          <img
            src={
              !imgUrl
                ? "https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const addHoverEffect = () => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
        .card:hover {
            transform: scale(1.05);
        }
        .btn-primary:hover {
            background-color: #0056b3 !important;
            border-color: #0056b3 !important;
        }
    `;
  document.head.appendChild(styleSheet);
};

addHoverEffect();



export default NewsItem;

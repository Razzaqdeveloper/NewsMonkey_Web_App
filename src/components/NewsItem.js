import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="container">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
          <img src={!imgUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg": imgUrl} className="card-img-top img-thumbnail" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener norefferer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

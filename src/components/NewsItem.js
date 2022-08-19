import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '5px', top: '5px' }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imgUrl ? imgUrl : 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/26/full/1637909767-8552.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className="my-3">
            <div className="card" style={{ height: "29.7rem", width: "25.75rem" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-success">{source}</span>
                </div>
                <img src={!imageUrl ? "https://thumbs.dreamstime.com/z/breaking-news-latest-report-wifi-signal-symbol-isolated-icon-vector-info-announcement-online-broadcast-web-article-loudspeaker-161132254.jpg" : imageUrl} width="1025" height="189" className="card-img-top" alt="img not found" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem

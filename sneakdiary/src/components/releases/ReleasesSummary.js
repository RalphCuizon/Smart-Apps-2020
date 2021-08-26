import React from 'react'
import moment from 'moment'

const ReleasesSummary = ({release}) => {
    return (
        <div className="card horizontal releases-summary">
          <div class="card-image">
            <img
              class="responsive-img"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg"
              alt="sneaker"
            ></img>
          </div>
          <div className="card-content blue-grey-text text-darken-3">
            <span className="card-title">{release.sneakerTitle}</span>
            <p><b>Info</b>: {release.sneakerInfo}</p>
            <p><b>Release Date</b>: {moment(release.releaseDate.toDate()).format('L')}</p>
            <p><b>Price</b>: {release.price} €</p>
          </div>
        </div>
    )
}

export default ReleasesSummary
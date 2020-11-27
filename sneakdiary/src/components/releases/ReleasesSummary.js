const ReleasesSummary = () => {
    return (
        <div className="card horizontal releases-summary">
          <div class="card-image">
            <img
              class="responsive-img"
              src="/img/sneaker-questionmark.jpg"
              alt="sneaker"
            ></img>
          </div>
          <div className="card-content blue-grey-text text-darken-3">
            <span className="card-title">Sneaker 1</span>
            <p>INFO</p>
            <p>20/12/20</p>
            <p>190€</p>
          </div>
        </div>
    )
}

export default ReleasesSummary
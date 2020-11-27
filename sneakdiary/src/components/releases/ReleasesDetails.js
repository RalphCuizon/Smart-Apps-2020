const ReleasesDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section releases-details">
      <div className="card horizontal z-depth-0">
        <div class="card-image">
          <img
            class="responsive-img"
            src="/img/sneaker-questionmark.jpg"
            alt="sneaker"
          ></img>
        </div>
        <div className="card-content blue-grey-text text-darken-3">
  <span className="card-title">Sneaker 1 - {id}</span>
          <p>INFO</p>
          <p>20/12/20</p>
          <p>190€</p>
        </div>
      </div>
    </div>
  );
};

export default ReleasesDetails;

const MyCollectionsSummary = () => {
  return (
    <div className="col s12 m6">
      <div className="card horizontal releases-summary">
        <div class="card-image">
          <img
            class="responsive-img"
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg"
            alt="sneaker"
          ></img>
        </div>
        <div class="card-stacked">
          <div className="card-content blue-grey-text text-darken-3">
            <span className="card-title">Sneaker 1</span>
            <p>Size: 43</p>
            <p>Date of Purchase: 19/09/2018</p>
            <p>Purchase Price: 190€</p>
            <p>Selling Price: 300€</p>
          </div>
          <div class="card-action">
            <a href="#">Update</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollectionsSummary;

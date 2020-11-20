const ReleasesList = () => {
    return (
        <div className="releases-list section">
            <div className="col s12 m6">
                <div className="card releases-summary">
                    <div class="card-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg"></img>
                    </div>
                    <div className="card-content blue-grey-text text-darken-3">
                        <span className="card-title">Sneaker 1</span>
                        <p>INFO</p>
                        <p>20/12/20</p>
                        <p>190€</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m6">
            <div className="card releases-summary">
                <div className="card-content blue-grey-text text-darken-3">
                    <span className="card-title">Sneaker 2</span>
                    <p>INFO</p>
                    <p>2/12/20</p>
                    <p>120€</p>
                </div>
            </div>
            </div>

            <div className="col s12 m6">
            <div className="card releases-summary">
                <div className="card-content blue-grey-text text-darken-3">
                    <span className="card-title">Sneaker 3</span>
                    <p>INFO</p>
                    <p>10/12/20</p>
                    <p>180€</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ReleasesList;
import MyCollectionsList from "./MyCollectionsList";

function MyCollection() {
  return (
    <div className="mycollection container">
      <div className="row">
        <MyCollectionsList />
        <div>
          <a
            class="btn-floating btn-large waves-effect waves-light light-blue lighten-2"
            href="/createcollection"
          >
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default MyCollection;

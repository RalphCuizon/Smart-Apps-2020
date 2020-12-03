import MyCollectionsSummary from './MyCollectionsSummary'

const MyCollectionsList = ({mycollections}) => { 
  return (
    <div className="releases-list section">
     { mycollections && mycollections.map(mycollection => {
        return (
          <MyCollectionsSummary mycollection={mycollection} key={mycollection.id} />
        )
      })}  
    </div>
  );
};
export default MyCollectionsList;

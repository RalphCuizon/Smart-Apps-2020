import MyCollectionsSummary from './MyCollectionsSummary'
import { Link } from 'react-router-dom'

const MyCollectionsList = ({mycollections}) => { 
  return (
    <div className="releases-list section">
     { mycollections && mycollections.map(mycollection => {
        return (
          <Link to={'/mycollection/' + mycollection.id} key={mycollection.id}>
          <MyCollectionsSummary mycollection={mycollection}  />
          </Link>
        )
      })}  
    </div>
  );
};
export default MyCollectionsList;

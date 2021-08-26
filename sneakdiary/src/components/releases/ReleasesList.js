import ReleasesSummary from "./ReleasesSummary";

const ReleasesList = ({releases}) => {
  return (
    <div className="releases-list section">
         { releases && releases.map(release => {
        return (
          <ReleasesSummary release={release} key={release.id} />
        )
      })}  
    </div>
  );
};
export default ReleasesList;

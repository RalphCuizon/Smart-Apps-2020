import IntroductionCard from "./IntroductionCard";
import ReleasesList from "../releases/ReleasesList";

function Home() {
  return (
    <div className="home container">
      <div className="row">
        <div className="col s12">
          <IntroductionCard />
          <ReleasesList />
        </div>
      </div>
    </div>
  );
}
export default Home;

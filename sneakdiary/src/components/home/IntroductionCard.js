import homewallpaper from "../../img/homewallpaper.jpg";

const IntroductionCard = () => {
  return (
    <div className="container row">
      <div className="col l10 offset-l1 s12 m12">
        <div className="card ">
          <div className="card-image">
            <img src={homewallpaper} alt="Introduction Wallpaper"></img>
            <span className="card-title">SneakDiary</span>
          </div>
          <div className="card-content">
            <p>
              We are SneakDiary. The place to get updates about the hypest
              releases from around the globe. All the releases are always
              visible the current month. We made it also possible for all the
              sneakerheads to create their own sneaker's collection!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroductionCard;

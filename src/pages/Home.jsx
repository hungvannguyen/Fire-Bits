import loaImage from '../assets/img/loa.png';

export default function Home() {
    
  return (
    <div className="">
      <div className="hero">
        <div className="heading-content">
          <div className="subheading">
            <div className="__text">
              <h1>Leading</h1>
            </div>
            <div className="bg-text"> 
              <div className="__text">
                <h1>Innovation</h1>
              </div>
            </div>
            <div className="__text">
              <h1>in</h1>
            </div>
            <div className="__text">
              <h1>Digital</h1>
            </div>
            <div className="bg-icon">
                <div className="__icon">
                <img src={loaImage} alt="" className="" />
                </div>
            </div>
            <div className="__text">
              <h1>Solution.</h1>
            </div>
          </div>

          <div className="rich-text">
            <p className="paragraphS">
            We are a strategic partner, working alongside businesses to create innovative solutions that help them achieve sustainable success and exceptional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import loaImage from "../assets/img/loa.png";
import heroImage from "../assets/img/hero.png";
import whyUsImage from "../assets/img/whyUs.jpg";
import ExploreButton from "../components/ExploreButton";
import TagAndHeading from "../components/TagAndHeading";
import ServiceCard from "../components/ServiceCard";
import { House, Graph, Rocket, UserFocus, Atom } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="home">
        {/* hero section */}
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
            <p className="paragraphS text-white/80">
              We are a strategic partner, working alongside businesses to create
              innovative solutions that help them achieve sustainable success
              and exceptional growth.
            </p>
          </div>
        </div>
        <ExploreButton text="Explore our service" link="#" />

        <div className="background_gradient"></div>
        <div className="image_content">
          <div className="image_container">
            <img src={heroImage} alt="" className="hero_image" />
          </div>
          <div className="text_runner">
            <section className="">
              <ul className="">
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Best Marketing Agency
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Best Marketing Agency
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Best Marketing Agency
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Best Marketing Agency
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div className="background_gradient-2"></div>
        </div>
      </div>
      {/* service section */}
      <div>
        <section className="service_section my_wrapper">
          <div className="_container">
            <div className="heading">
              <div className="content_1">
                <div className="box">
                  <TagAndHeading tag="Service" heading="What we are offering" />
                  <div className="h-min w-full"></div>
                </div>
              </div>
              <div className="">
                <ExploreButton text="view all service" link="#" />
              </div>
            </div>

            <div className="service_container">
              <div className="_grid">
                <ServiceCard
                  icon={House}
                  title="Outsourcing"
                  description="We offer high-quality outsourcing services that help businesses reduce costs and optimize operations by outsourcing tasks such as software development, customer support, and IT services."
                  link="#"
                />
                <ServiceCard
                  icon={House}
                  title="SaaS (Software as a Service)"
                  description="We provide SaaS solutions that allow businesses to access powerful tools without worrying about infrastructure and maintenance, enabling more efficient and scalable operations."
                  link="#"
                />
                <ServiceCard
                  icon={House}
                  title="SEO (Search Engine Optimization)"
                  description="Our SEO services help businesses enhance their online presence, improve search engine rankings, attract potential customers, and increase revenue."
                  link="#"
                />
                <ServiceCard
                  icon={House}
                  title="Ecommerce"
                  description="Firebits offers comprehensive eCommerce solutions that empower businesses to build and scale online stores, optimize user experience, and drive revenue growth in the digital marketplace."
                  link="#"
                />
                <ServiceCard
                  icon={House}
                  title="AI Agency"
                  description="Our AI services help businesses implement artificial intelligence solutions, from data analysis to process automation, optimizing efficiency and boosting creativity in business strategies."
                  link="#"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="whyUs_section">
        <div className="backGround_img">
            <div className="">
                <img src={whyUsImage} alt="" className="" />
            </div>
        </div>
        
        <div className="overlay"></div>

        <div className="topContent">
            <div className="statistics">
                <div className="_item" style={{transform:'translateY(28.6152px)'}}>
                    <div className="_circleBox">
                        <div className="_circleContent">
                            <div className="-heading">
                                <p>24/7</p>
                            </div>
                            <div className="-subText">
                                <p className="paragraphXS text-white/80">Support everywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_item">
                    <div className="_circleBox">
                        <div className="_circleContent">
                            <div className="-heading">
                                <p>100%</p>
                            </div>
                            <div className="-subText">
                                <p className="paragraphXS text-white/80">Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_item" style={{transform:'translateY(28.6152px)'}}>
                    <div className="_circleBox">
                        <div className="_circleContent">
                            <div className="-heading">
                                <p>3</p>
                            </div>
                            <div className="-subText">
                                <p className="paragraphXS text-white/80">Country</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_item">
                    <div className="_circleBox">
                        <div className="_circleContent">
                            <div className="-heading">
                                <p>160</p>
                            </div>
                            <div className="-subText">
                                <p className="paragraphXS text-white/80">5 Star Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottomContent">
            <div className="_content1">
                <div>
                    <div className="-itemContainer">
                        <div className="-itemBox">
                            <div className="-icon">
                                <div>
                                    <Rocket size={42} className="text-lightTone relative" />
                                </div>
                            </div>

                            <div className="-text">
                                <div className="_heading">
                                    <h3 className="text-center">heading</h3>
                                </div>
                                <div className="_subText">
                                    <p className="paragraphXS text-white/80 text-center">
                                        we have built a reputation as a trusted and reliable partner in achieving business success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="-itemContainer">
                        <div className="-itemBox">
                            <div className="-icon">
                                <div>
                                    <Graph size={42} className="text-lightTone relative" />
                                </div>
                            </div>

                            <div className="-text">
                                <div className="_heading">
                                    <h3 className="text-center">heading</h3>
                                </div>
                                <div className="_subText">
                                    <p className="paragraphXS text-white/80 text-center">
                                        we have built a reputation as a trusted and reliable partner in achieving business success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="-itemContainer">
                        <div className="-itemBox">
                            <div className="-icon">
                                <div>
                                    <UserFocus size={42} className="text-lightTone relative" />
                                </div>
                            </div>

                            <div className="-text">
                                <div className="_heading">
                                    <h3 className="text-center">heading</h3>
                                </div>
                                <div className="_subText">
                                    <p className="paragraphXS text-white/80 text-center">
                                        we have built a reputation as a trusted and reliable partner in achieving business success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="_content2">
                <div className="-itemContainer">
                    <div className="-itemBox">
                        <div className="-icon">
                            <div>
                                <Atom size={20} className="text-lightTone relative" />
                            </div>
                        </div>

                        <div className="-text">
                            <p className="paragraphXS text-white">Continuous Innovation</p>
                        </div>
                    </div>
                </div>
                <div className="-itemContainer">
                    <div className="-itemBox">
                        <div className="-icon">
                            <div>
                                <Atom size={20} className="text-lightTone relative" />
                            </div>
                        </div>

                        <div className="-text">
                            <p className="paragraphXS text-white">Dedicated Support</p>
                        </div>
                    </div>
                </div>

                <div className="-itemContainer">
                    <div className="-itemBox">
                        <div className="-icon">
                            <div>
                                <Atom size={20} className="text-lightTone relative" />
                            </div>
                        </div>

                        <div className="-text">
                            <p className="paragraphXS text-white">Positive Client Experiencies</p>
                        </div>
                    </div>
                </div>

                <div className="-itemContainer">
                    <div className="-itemBox">
                        <div className="-icon">
                            <div>
                                <Atom size={20} className="text-lightTone relative" />
                            </div>
                        </div>

                        <div className="-text">
                            <p className="paragraphXS text-white">Commitment to Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

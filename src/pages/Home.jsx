import loaImage from "../assets/img/loa.png";
import heroImage from "../assets/img/hero.png";
import whyUsImage from "../assets/img/whyUs.jpg";
import ExploreButton from "../components/ExploreButton";
import TagAndHeading from "../components/TagAndHeading";
import ServiceCard from "../components/ServiceCard";
import CardBgBlur from "../components/CardBgBlur";
import CircleTag from "../components/CircleTag";
import {
  Network,
  Cloud,
  ShieldCheck,
  ShoppingCart,
  Robot,
  Graph,
  Rocket,
  UserFocus,
  Atom,
} from "@phosphor-icons/react";

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
      <section className="service_section my_wrapper">
        <div className="_container">
          <div className="heading">
            <div className="content_1">
              <div className="box">
                <TagAndHeading
                  tag="Service"
                  heading="What we are offering"
                  className="ver1"
                />
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
                icon={Network}
                title="Outsourcing"
                description="We offer high-quality outsourcing services that help businesses reduce costs and optimize operations by outsourcing tasks such as software development, customer support, and IT services."
                link="#"
              />
              <ServiceCard
                icon={Cloud}
                title="SaaS (Software as a Service)"
                description="We provide SaaS solutions that allow businesses to access powerful tools without worrying about infrastructure and maintenance, enabling more efficient and scalable operations."
                link="#"
              />
              <ServiceCard
                icon={ShieldCheck}
                title="SEO (Search Engine Optimization)"
                description="Our SEO services help businesses enhance their online presence, improve search engine rankings, attract potential customers, and increase revenue."
                link="#"
              />
              <ServiceCard
                icon={ShoppingCart}
                title="Ecommerce"
                description="Firebits offers comprehensive eCommerce solutions that empower businesses to build and scale online stores, optimize user experience, and drive revenue growth in the digital marketplace."
                link="#"
              />
              <ServiceCard
                icon={Robot}
                title="AI Agency"
                description="Our AI services help businesses implement artificial intelligence solutions, from data analysis to process automation, optimizing efficiency and boosting creativity in business strategies."
                link="#"
              />
            </div>
          </div>
        </div>
      </section>
      {/* about us section */}
      <section className="aboutUs_section">
        <div className="backGround_img">
          <div className="">
            <img src={whyUsImage} alt="" className="" />
          </div>
        </div>

        <div className="overlay"></div>

        <div className="topContent">
          <div className="statistics">
            <div
              className="_item"
              style={{ transform: "translateY(28.6152px)" }}
            >
              <div className="_circleBox">
                <div className="_circleContent">
                  <div className="-heading">
                    <p>24/7</p>
                  </div>
                  <div className="-subText">
                    <p className="paragraphXS text-white/80">
                      Support everywhere
                    </p>
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
                    <p className="paragraphXS text-white/80">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="_item"
              style={{ transform: "translateY(28.6152px)" }}
            >
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
            <CardBgBlur
              icon={Rocket}
              heading="heading"
              subText="we have built a reputation as a trusted and reliable partner in achieving business success."
            />

            <CardBgBlur
              icon={Graph}
              heading="Tailored Solutions"
              subText="We offer personalized solutions tailored to your specific goals, audience, and industry."
            />

            <CardBgBlur
              icon={UserFocus}
              heading="Client-Centric Focus"
              subText="Your success is our priority. We prioritize understanding your business goals."
            />
          </div>
          <div className="_content2">
            <div className="-itemContainer">
              <div className="-itemBox">
                <div className="-icon">
                  <div>
                    <Atom size={20} className="relative text-lightTone" />
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
                    <Atom size={20} className="relative text-lightTone" />
                  </div>
                </div>

                <div className="-text">
                  <p className="paragraphXS text-white">
                    Positive Client Experiencies
                  </p>
                </div>
              </div>
            </div>

            <div className="-itemContainer">
              <div className="-itemBox">
                <div className="-icon">
                  <div>
                    <Atom size={20} className="relative text-lightTone" />
                  </div>
                </div>

                <div className="-text">
                  <p className="paragraphXS text-white">
                    Commitment to Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video section */}
      <section className="video_section">
        <div className="_container">
          <div className="bgGradient"></div>
          <div className="_videoContainer">
            <div className="_videoBox">
              <div className="video">
                <iframe
                  src="https://www.youtube.com/embed/Ly1auHs_ofo?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="_titleBox">
                <div className="-heading">
                  <h5 className="text-white">Magnus Hawthorne</h5>
                </div>
                <div className="-subText">
                  <p className="label text-whiteo50">Owner, Bayleaf</p>
                </div>
              </div>
            </div>
            <div className="_videoBox">
              <div className="video">
                <iframe
                  src="https://www.youtube.com/embed/ay2e0VXtmfI?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="_titleBox">
                <div className="-heading">
                  <h5 className="text-white">Thaddeus Montgomery</h5>
                </div>
                <div className="-subText">
                  <p className="label text-whiteo50">Owner, goldgarden</p>
                </div>
              </div>
            </div>
          </div>
          <ExploreButton text="View all reviews" link="#" />
        </div>
      </section>
      {/* why us section */}
      <section className="whyUs_section my_wrapper">
        <div className="_container">
          <div className="heading">
            <div className="content_1">
              <div className="box">
                <TagAndHeading
                  tag="Why us"
                  heading="Our Specialities"
                  className="ver2"
                />
                <div className="h-min w-full"></div>
              </div>
            </div>
            <div className="content_2">
              <div className="_textRichContainer">
                <p className="paragraphS text-white/60">
                  At Firebits, we specialize in delivering cutting-edge
                  technology solutions tailored to global businesses. Our
                  expertise spans outsourcing, providing scalable and
                  cost-effective development teams, SaaS solutions that drive
                  business growth, SEO strategies to maximize online visibility,
                  and e-commerce platforms optimized for seamless user
                  experience. We also leverage AI-powered innovations to
                  automate processes and enhance decision-making. With a
                  commitment to quality, efficiency, and innovation, Firebits is
                  the trusted partner for businesses looking to scale and
                  succeed in the digital era.
                </p>
              </div>
            </div>
          </div>
          <div className="whyUs_container">
            <div className="-content_flex _content-center">
              <div className="item1">
                <div className="_background-img">
                  <img
                    decoding="async"
                    sizes="max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 1.5, 1px)"
                    srcSet="https://framerusercontent.com/images/4kHUitVXjDybX5JAOM1zzCTKd4.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/4kHUitVXjDybX5JAOM1zzCTKd4.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/4kHUitVXjDybX5JAOM1zzCTKd4.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/4kHUitVXjDybX5JAOM1zzCTKd4.jpg 3392w"
                    src="https://framerusercontent.com/images/4kHUitVXjDybX5JAOM1zzCTKd4.jpg?scale-down-to=1024"
                    alt=""
                  />
                </div>
                <div className="_background-gradient"></div>
                <div className="_heading">
                  <div className="richTextContainer _text justify-center">
                    <p className="bodyXXL">150%</p>
                  </div>
                  <div className="richTextContainer _subtext justify-start">
                    <p className="bodyUppercase">average traffic increase</p>
                  </div>
                </div>
                <div className="_description">
                  <div className="richTextContainer justify-start">
                    <p className="paragraphXS text-white/80">
                      Firebits helps businesses achieve remarkable growth with
                      comprehensive digital transformation strategies. Our
                      clients trust us for outstanding results and long-term
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="item2">
                <div className="_heading">
                  <div className="richTextContainer _text justify-center">
                    <p className="bodyXXL">80%</p>
                  </div>
                  <div className="richTextContainer _subtext justify-start">
                    <p className="bodyUppercase">foreign investment</p>
                  </div>
                </div>

                <div className="richTextContainer justify-start">
                  <p className="paragraphXS text-white/80">
                    With international funding and strategic partnerships,
                    Firebits is built for long-term innovation and sustainable
                    growth in the global market.
                  </p>
                </div>
              </div>
            </div>
            <div className="-content_flex _content-end">
              <div className="item1">
                <div className="_background-img">
                  <img
                    decoding="async"
                    src="https://framerusercontent.com/images/QHwiFG8CdFS1wdIHWtWHvAuzLAM.jpg?scale-down-to=1024"
                    alt=""
                  />
                </div>
                <CircleTag />
              </div>

              <div className="item2">
                <div className="_heading">
                  <div className="richTextContainer justify-start">
                    <p className="bodyUppercase text-right text-darkTone">
                      enhanced brand visibility
                    </p>
                  </div>
                  <div className="richTextContainer justify-center">
                    <p className="bodyXXL text-right text-darkTone">80%</p>
                  </div>
                </div>

                <div className="richTextContainer justify-start">
                  <p className="paragraphXS text-darkTone">
                    With advanced AI and SaaS strategies, Firebits boosts your
                    brand’s visibility by 80% within just six months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import loaImage from "../assets/img/loa.png";
import heroImage from "../assets/img/hero.png";
import whyUsImage from "../assets/img/whyUs.jpg";
import ExploreButton from "../components/ExploreButton";
import TagAndHeading from "../components/TagAndHeading";
import ServiceCard from "../components/ServiceCard";
import CardBgBlur from "../components/CardBgBlur";
import CircleTag from "../components/CircleTag";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import {
  Atom,
  Cloud,
  Graph,
  Network,
  Robot,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  UserFocus,
} from "@phosphor-icons/react";
import AccordionArrow from "../components/AccordionArrow.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // gsap animation for text runner
  const textRunnerRef = useRef(null);
  useEffect(() => {
    const container = textRunnerRef.current;
    const track = container.querySelector(".track");

    const clone = track.innerHTML;
    track.innerHTML += clone;

    const singleWidth = track.scrollWidth / 2;

    gsap.set(track, { x: 0 });

    const anim = gsap.to(track, {
      x: -singleWidth,
      ease: "none",
      duration: 40,
      repeat: -1,
      onRepeat: () => {
        gsap.set(track, { x: 0 });
      },
    });

    return () => anim.kill();
  }, []);

  // gsap animation for brand collaboration section
  const brandCollabRef = useRef(null);
  const brandCollabSectionRef = useRef(null);
  useEffect(() => {
    const section = brandCollabSectionRef.current;
    const container = brandCollabRef.current;
    const track = container.querySelector("ul");

    // Clone nội dung để tạo loop
    const clone = track.innerHTML;
    const singleWidth = track.scrollWidth / 2;
    track.innerHTML += clone;

    console.log(singleWidth);

    gsap.set(track, { x: 0 });

    const anim = gsap.to(track, {
      x: -singleWidth,
      ease: "none",
      duration: 30,
      repeat: -1,
      onRepeat: () => {
        gsap.set(track, { x: 0 });
      },
    });

    const fadeIn = gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    return () => {
      anim.kill();
      fadeIn.revert();
    };
  }, []);

  // gsap animation for hero heading and banner
  const heroHeadingRef = useRef(null);
  const heroBannerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroHeadingRef.current, {
        y: -500,
        opacity: 0,
        duration: 1,
      });
      gsap.from(heroBannerRef.current, {
        y: 500,
        opacity: 0,
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  // gsap animation for service section
  const serviceSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const serviceSection = serviceSectionRef.current;
      const cards = Array.from(serviceSection.querySelectorAll(".ServiceCard"));

      for (let i = 0; i < cards.length; i += 2) {
        const group = cards.slice(i, i + 2);

        gsap.from(group, {
          y: 100,
          opacity: 0,
          duration: 1,

          scrollTrigger: {
            trigger: group[0],
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            // markers: true,
          },
        });
      }
    }, serviceSectionRef);

    return () => ctx.revert();
  }, [serviceSectionRef]);

  // gsap animation for about us section
  const aboutUsSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const aboutUsSection = aboutUsSectionRef.current;

      gsap.from(aboutUsSection, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutUsSection,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      const circleUp = aboutUsSection.querySelectorAll(".circleUp");
      gsap.to(circleUp, {
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutUsSection,
          start: "top 90%",
          end: "bottom 90%",
          scrub: true,
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // gsap animation for video section
  const videoSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoSection = videoSectionRef.current;
      gsap.from(videoSection, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoSection,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    }, videoSectionRef);

    return () => ctx.revert();
  }, []);

  // gsap animation for whyUs_section
  const whyUsSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const whyUsSection = whyUsSectionRef.current;
      const heading = whyUsSection.querySelector(".heading");
      gsap.from(heading, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      const content1 = whyUsSection.querySelector("._content-center");
      gsap.from(content1, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content1,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      const content2 = whyUsSection.querySelector("._content-end");
      gsap.from(content2, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content2,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // gsap animation for FAQ section
  const FAQSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const FAQSection = FAQSectionRef.current;
      gsap.from(FAQSection, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: FAQSection,
          start: "top 80%",
          toggleAcctions:"play none none none"
        }
      });
    }, FAQSectionRef);

    return () => ctx.revert();
  },[])
  return (
    <div className="home">
      {/* hero section */}
      <div className="hero">
        <div
          className="relative flex h-min w-full flex-col justify-center gap-[31px] overflow-hidden"
          ref={heroHeadingRef}
        >
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
                We are a strategic partner, working alongside businesses to
                create innovative solutions that help them achieve sustainable
                success and exceptional growth.{" "}
              </p>
            </div>
          </div>

          <ExploreButton text="Explore our service" link="#" />
        </div>

        <div className="background_gradient"></div>

        <div className="image_content" ref={heroBannerRef}>
          <div className="image_container">
            <img src={heroImage} alt="" className="hero_image" />
          </div>
          <div className="text_runner" ref={textRunnerRef}>
            <section className="">
              <ul className="track">
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Innovation Digital Solution{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="text_container">
                      <p className="bodyXXL text-white">
                        Innovation Digital Solution{" "}
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
      <section className="service_section my_wrapper" ref={serviceSectionRef}>
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
                className="ServiceCard"
                icon={Network}
                title="Outsourcing"
                description="We offer high-quality outsourcing services that help businesses reduce costs and optimize operations by outsourcing tasks such as software development, customer support, and IT services."
                link="#"
              />
              <ServiceCard
                className="ServiceCard"
                icon={Cloud}
                title="SaaS (Software as a Service)"
                description="We provide SaaS solutions that allow businesses to access powerful tools without worrying about infrastructure and maintenance, enabling more efficient and scalable operations."
                link="#"
              />
              <ServiceCard
                className="ServiceCard"
                icon={ShieldCheck}
                title="SEO (Search Engine Optimization)"
                description="Our SEO services help businesses enhance their online presence, improve search engine rankings, attract potential customers, and increase revenue."
                link="#"
              />
              <ServiceCard
                className="ServiceCard"
                icon={ShoppingCart}
                title="Ecommerce"
                description="Firebits offers comprehensive eCommerce solutions that empower businesses to build and scale online stores, optimize user experience, and drive revenue growth in the digital marketplace."
                link="#"
              />
              <ServiceCard
                className="ServiceCard"
                icon={Robot}
                title="AI Agency"
                description="Our AI services help businesses implement artificial intelligence solutions, from data analysis to process automation, optimizing efficiency and boosting creativity in business strategies."
                link="#"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand collap section */}
      <section
        className="my_wrapper brand_collapse_section"
        ref={brandCollabSectionRef}
      >
        <div className="_heading">
          <div className="_container">
            <TagAndHeading
              tag="brand collabboration"
              heading="Brands that trust us"
              className="only_center"
            />
          </div>
        </div>

        <div className="_brand_marqueeCarousel" ref={brandCollabRef}>
          <div className="_container">
            <div className="relative h-[98px] flex-[1_0_0px]">
              <div className="_wrapper">
                <ul>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/ai5aTS5GwmknA02FMovLXZcdo.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/or0Wlg5UKFRZGfVPFnLR5bath6I.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="_brandCollap">
                      <div className="_container">
                        <div className="_logo">
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/HtNOvy5spiFjxciDATmaZhCH9U.svg"
                              alt="brand-logo"
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us section */}
      <section className="aboutUs_section" ref={aboutUsSectionRef}>
        <div className="backGround_img">
          <div className="">
            <img src={whyUsImage} alt="" className="" />
          </div>
        </div>

        <div className="overlay"></div>

        <div className="topContent">
          <div className="statistics">
            <div
              className="_item circleUp"
              style={{ transform: "translateY(70px)" }}
            >
              <div className="_circleBox">
                <div className="_circleContent">
                  <div className="-heading">
                    <p>24/7</p>
                  </div>
                  <div className="-subText">
                    <p className="paragraphXS text-white/80">
                      Support everywhere{" "}
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
                      Customer Satisfaction{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="_item circleUp"
              style={{ transform: "translateY(70px)" }}
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
                    Positive Client Experiencies{" "}
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
                    Commitment to Excellence{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video section */}
      <section className="video_section" ref={videoSectionRef}>
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
      <section className="whyUs_section my_wrapper" ref={whyUsSectionRef}>
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
                  succeed in the digital era.{" "}
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
                      partnerships.{" "}
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
                    growth in the global market.{" "}
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
                      enhanced brand visibility{" "}
                    </p>
                  </div>
                  <div className="richTextContainer justify-center">
                    <p className="bodyXXL text-right text-darkTone">80%</p>
                  </div>
                </div>

                <div className="richTextContainer justify-start">
                  <p className="paragraphXS text-darkTone">
                    With advanced AI and SaaS strategies, Firebits boosts your
                    brand’s visibility by 80% within just six months.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="questions" ref={FAQSectionRef}>
        <div className="__wrapper">
          <TagAndHeading
            tag="Frequently Asked Questions"
            heading="Got Questions?
We've Got Answers!"
            className="only_center"
          />

          <div className="__accordion">
            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits’ outsourcing service help businesses optimize efficiency?"
              content="Firebits offers software development outsourcing services that help businesses reduce costs and accelerate product development. Our expert teams in the US and Europe ensure high-quality, scalable solutions. We provide flexible collaboration models—ranging from full product development to supporting in-house teams—ensuring maximum efficiency for our clients."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What benefits do Firebits’ SaaS solutions bring to businesses?"
              content="Firebits’ SaaS (Software as a Service) solutions help businesses reduce infrastructure costs and streamline operations. We offer software for business management, data analytics, and workflow automation, allowing companies to scale effortlessly without worrying about maintenance or system updates."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits implement SEO strategies to drive business growth?"
              content="Our SEO services focus on optimizing websites according to the latest Google standards, improving search rankings, and increasing organic traffic. Firebits provides a comprehensive SEO strategy, including keyword research, content optimization, and link-building, helping clients enhance their global market presence."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits support businesses in the e-commerce sector?"
              content="We develop and optimize e-commerce platforms, including Shopify, Magento, WooCommerce, and custom solutions. Firebits also offers payment integration, logistics solutions, and user experience optimization to help clients maximize online revenue."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits’ AI Agency service help businesses, and why should they invest in AI?"
              content="Firebits enables businesses to integrate AI into their operations to improve efficiency and gain a competitive edge. We develop AI models for chatbots, data analysis, and process automation, helping businesses leverage data effectively, optimize decision-making, and enhance customer experiences."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits’ experience with clients in the UK, China, and Vietnam benefit businesses?"
              content="Having worked with multinational companies in the UK, China, and Vietnam, we understand the specific needs and market dynamics of each region. Firebits provides flexible services, from product development to strategic consulting, ensuring smooth and efficient project execution."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits ensure security and scalability in its technology solutions?"
              content="Security and scalability are at the core of Firebits’ technology solutions. We follow industry best practices for data protection, compliance, and cybersecurity. Our scalable architectures ensure that businesses can grow without performance issues, while our cloud-based solutions guarantee high availability and reliability."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

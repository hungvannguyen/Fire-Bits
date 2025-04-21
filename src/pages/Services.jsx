import PageHeading from "../components/PageHeading";
import ServiceCard from "../components/ServiceCard";
import TagAndHeading from "../components/TagAndHeading";
import CardBgBlur from "../components/CardBgBlur";
import {
  Atom,
  ChatsTeardrop,
  Cloud,
  Graph,
  HandHeart,
  Network,
  Robot,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  UserFocus,
} from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  // gsap animate for pageHeading and service section
  const pageHeadingRef = useRef(null);
  const servicesSectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pageHeadingRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
      });
      gsap.from(servicesSectionRef.current, {
        y: 200,
        opacity: 0,
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  // gsap animate for whyChooseUs section
  const whyChooseUsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(whyChooseUsRef.current, {
        opacity: 0,
        y: 100,
        duration:1,
        ease: "power2.out",
        scrollTrigger:{
          trigger: whyChooseUsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      })
    },whyChooseUsRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <div className="services_page">
      <div className="" ref={pageHeadingRef}>
        <PageHeading title="Discovers" titleLine2="Our Services" />
      </div>

      <section className="_services_section" ref={servicesSectionRef}>
        <div className="_container">
          <div className="_grid">
            <ServiceCard
              icon={Network}
              title="Outsourcing"
              description="We offer high-quality outsourcing services that help businesses reduce costs and optimize operations by outsourcing tasks such as software development, customer support, and IT services."
              link="/outsourcing"
            />
            <ServiceCard
              icon={Cloud}
              title="SaaS (Software as a Service)"
              description="We provide SaaS solutions that allow businesses to access powerful tools without worrying about infrastructure and maintenance, enabling more efficient and scalable operations."
              link="/sass"
            />
            <ServiceCard
              icon={ShieldCheck}
              title="SEO (Search Engine Optimization)"
              description="Our SEO services help businesses enhance their online presence, improve search engine rankings, attract potential customers, and increase revenue."
              link="/seo"
            />
            <ServiceCard
              icon={ShoppingCart}
              title="Ecommerce"
              description="Firebits offers comprehensive eCommerce solutions that empower businesses to build and scale online stores, optimize user experience, and drive revenue growth in the digital marketplace."
              link="/ecommerce"
            />
            <ServiceCard
              icon={Robot}
              title="AI Agency"
              description="Our AI services help businesses implement artificial intelligence solutions, from data analysis to process automation, optimizing efficiency and boosting creativity in business strategies."
              link="/ai-agency"
            />
          </div>
        </div>
      </section>

      <section className="whyChooseUs_section my_wrapper" ref={whyChooseUsRef}>
        <div className="_container">
          <TagAndHeading
            tag="why choose us"
            heading="Why we are your best choice"
            className="only_center"
          />

          <div className="_card_container">
            <div className="_grid">
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
              <CardBgBlur
                icon={ChatsTeardrop}
                heading="heading"
                subText="we have built a reputation as a trusted and reliable partner in achieving business success."
              />

              <CardBgBlur
                icon={HandHeart}
                heading="Tailored Solutions"
                subText="We offer personalized solutions tailored to your specific goals, audience, and industry."
              />

              <CardBgBlur
                icon={Atom}
                heading="Client-Centric Focus"
                subText="Your success is our priority. We prioritize understanding your business goals."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

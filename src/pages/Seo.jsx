import HeadingPageWithButton from "../components/HeadingPageWithButton.jsx";
import TagAndHeading from "../components/TagAndHeading.jsx";
import Accordion from "../components/Accordion.jsx";
import MarqueeCarousel from "../components/MarqueeCarousel.jsx";
import ReviewWithIcon from "../components/ReviewWithIcon.jsx";
import {
  Atom,
  ChatsTeardrop,
  Graph,
  HandHeart,
  Rocket,
  UserFocus,
} from "@phosphor-icons/react";
import CardBgBlur from "../components/CardBgBlur.jsx";
import Step from "../components/Step.jsx";
import AccordionArrow from "../components/AccordionArrow.jsx";
import TextBlock from "../components/TextBlock.jsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateOnScroll } from "../components/animateOnScroll.jsx";

export default function Seo() {
  const items = [
    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,

    <div className="flex h-[56px] w-[186px] shrink-0 items-center justify-center rounded-[20px] bg-whiteo10 px-7 py-[14px]">
      <img
        className="h-fit w-fit object-cover"
        src="https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg"
        alt="About Us"
      />
    </div>,
  ];

  const reviews = [
    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,

    <ReviewWithIcon
      content="Firebits has been a game-changer for our business. Their outsourcing services allowed us to focus on our core competencies while they handled the technical aspects with expertise."
      name="John Doe"
      role="CEO, Tech Innovations"
    />,
  ];
  const headingPageRef = useRef(null);
  const Section1Ref = useRef(null);
  const Section2Ref = useRef(null);
  const Section3Ref = useRef(null);
  const Section4Ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingPageRef.current.querySelectorAll(".__content"), {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(headingPageRef.current.querySelectorAll(".__image"), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      animateOnScroll(Section1Ref.current);
      animateOnScroll(Section2Ref.current);
      animateOnScroll(Section3Ref.current);
      animateOnScroll(Section4Ref.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="detail">
      <div className="__headingPage" ref={headingPageRef}>
        <div className="__content">
          <HeadingPageWithButton
            title="Service Details"
            content="At Firebits, we provide cutting-edge digital solutions tailored to your business needs. From outsourcing and SaaS to SEO, e-commerce, and AI-driven strategies, we empower companies to scale, optimize, and innovate in a fast-changing digital landscape."
            buttonText="Get Started"
          />
        </div>

        <div className="__image">
          <img src="https://placehold.co/1440x700" alt="Heading Image" />
        </div>
      </div>

      <div className="benefits" ref={Section1Ref}>
        <div className="__wrapper">
          <TagAndHeading tag="benefits" heading="Why you need our service?" />

          <p className="paragraphL font-thin">
            SEO (Search Engine Optimization) is a crucial strategy that helps
            businesses increase online visibility, drive organic traffic, and
            boost conversions. Firebits provides data-driven, AI-powered SEO
            solutions to ensure your brand ranks higher in search results and
            stays ahead of the competition.{" "}
          </p>

          <div className="__accordion">
            <div>
              <Accordion
                title="01."
                subtitle="Data-Driven Keyword Optimization"
                content="Firebits conducts in-depth keyword research to identify high-impact search terms that attract the right audience. Our SEO strategies ensure that your business appears at the top of search engine results, driving relevant and high-converting traffic."
              />
            </div>
            <div>
              <Accordion
                title="02."
                subtitle="Cost-Effective & Long-Term Growth"
                content="Unlike paid ads, SEO is a cost-effective strategy that delivers sustainable growth over time. Firebits helps businesses build a strong organic presence, reducing reliance on expensive advertising while maximizing return on investment."
              />
            </div>
            <div>
              <Accordion
                title="03."
                subtitle="Faster Ranking Improvements"
                content="Our SEO experts use advanced optimization techniques and AI-driven insights to accelerate your website’s ranking progress. Firebits ensures that your site gains higher visibility in search engines faster while maintaining high-quality standards."
              />
            </div>
            <div>
              <Accordion
                title="04."
                subtitle="Focus on Core Business Growth"
                content="By outsourcing SEO to Firebits, your team can focus on business strategy, product development, and customer engagement, while we handle technical SEO, content optimization, and link-building to drive sustainable growth."
              />
            </div>
            <div>
              <Accordion
                title="05."
                subtitle="High-Quality Content & Authority Building"
                content="Content is king in SEO, and Firebits delivers high-quality, engaging, and SEO-optimized content that enhances your website’s authority. Our content strategies attract visitors, boost brand credibility, and improve search rankings."
              />
            </div>
            <div>
              <Accordion
                title="06."
                subtitle="AI-Powered Optimization & Automation"
                content="Firebits integrates AI and automation into SEO campaigns to analyze trends, predict search behaviors, and continuously optimize content. This leads to smarter, faster, and more effective SEO strategies with minimal manual effort."
              />
            </div>
            <div>
              <Accordion
                title="07."
                subtitle="Technical SEO & Seamless Website Performance"
                content="We optimize your website’s speed, mobile-friendliness, and technical structure to improve search engine rankings. Firebits ensures that your site is fast, secure, and fully optimized for both users and search engines."
              />
            </div>
            <div>
              <Accordion
                title="08."
                subtitle="Global Reach & Market-Specific SEO Strategies"
                content="With expertise in the US, UK, China, and Vietnam, Firebits customizes SEO strategies for different markets and industries. We understand search behavior across regions, ensuring localized and effective SEO campaigns that drive results."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services" ref={Section2Ref}>
        <div className="__wrapper">
          <TagAndHeading
            tag="services detail"
            heading="What We Do"
            className="only_center"
          />

          <div className="__introduction">
            <p className="paragraphL">
              <strong>SEO (Search Engine Optimization)</strong> is a crucial
              strategy for businesses aiming to improve their online visibility,
              drive organic traffic, and enhance their digital presence. At
              Firebits, we provide comprehensive SEO services designed to help
              companies rank higher on search engines, attract targeted traffic,
              and increase conversions. Our expert team uses a blend of
              data-driven strategies, industry best practices, and continuous
              optimization to achieve long-term SEO success.{" "}
            </p>
          </div>

          <div className="__body">
            <TextBlock
              title="SEO Strategy & Consultation"
              content="We start with a detailed SEO audit and in-depth market research to understand your business and industry. Our team then develops a customized SEO strategy that aligns with your goals, ensuring a tailored approach to improve your search rankings."
            />
            <TextBlock
              title="On-Page SEO Optimization"
              content="Our experts optimize your website’s content, metadata, header tags, images, and internal linking structure, making sure that search engines can crawl, index, and rank your pages effectively. We focus on enhancing content quality and user experience to drive higher engagement."
            />
            <TextBlock
              title="Technical SEO & Site Performance"
              content="We handle technical aspects like site speed, mobile-friendliness, URL structure, and schema markup. Our team ensures your website is technically sound, fast, and optimized for all devices, providing an excellent user experience while boosting your SEO efforts."
            />
            <TextBlock
              title="Keyword Research & Content Strategy"
              content="We identify high-value keywords and create compelling, SEO-optimized content that resonates with both users and search engines. Our content strategy includes blog posts, articles, landing pages, and more, tailored to attract and convert your target audience."
            />
            <TextBlock
              title="Link Building & Off-Page SEO"
              content="We help improve your website’s authority by acquiring high-quality backlinks from reputable sources. Our link-building strategies focus on ethical, white-hat practices to ensure long-term SEO success and enhance your domain authority."
            />
            <TextBlock
              title="Local SEO & Google My Business Optimization"
              content="If you're a local business, we optimize your website for local search results and ensure your Google My Business profile is fully optimized. We help you appear in local searches and map results, driving traffic from nearby customers."
            />
            <TextBlock
              title="Analytics & Reporting Dashboards"
              content="We provide real-time reporting tools and detailed analytics dashboards to help you track your SEO performance. You can easily monitor rankings, traffic, and conversions, allowing you to make data-driven decisions."
            />
            <TextBlock
              title="Continuous Monitoring & Optimization"
              content="SEO is an ongoing process. Our team employs continuous monitoring and optimization to adjust strategies based on performance and changes in search engine algorithms, ensuring your rankings remain high and your website continues to perform at its best. By partnering with Firebits, you gain access to a dedicated team of SEO experts who work tirelessly to improve your website's visibility, attract more qualified leads, and help you grow your online presence."
            />
            <TextBlock
              content="  By partnering with Firebits, you gain access to a dedicated team
              of SEO experts who work tirelessly to improve your website's
              visibility, attract more qualified leads, and help you grow your
              online presence."
            />
          </div>
        </div>
      </div>

      <section className="whyChooseUs my_wrapper" ref={Section3Ref}>
        <div className="bg_gradient"></div>
        <div className="_container">
          <TagAndHeading
            tag="Why Choose Us"
            heading="Why we are your best choice"
            className="only_center"
          />
          <div className="_card_container">
            <div className="__grid">
              <CardBgBlur
                icon={Rocket}
                heading="Proven Track Record"
                subText="We have built a reputation as a trusted and reliable partner in achieving business success."
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
                heading="Transparent Communication"
                subText="We believe in open and honest communication every step of the way."
              />

              <CardBgBlur
                icon={HandHeart}
                heading="Dedicated Support"
                subText="Your success is our priority, and we're here to support you every step of the way."
              />

              <CardBgBlur
                icon={Atom}
                heading="Expertise Across Industries"
                subText="Our team has extensive experience working across various industries."
              />
            </div>
          </div>
        </div>
      </section>

      <div className="brands" ref={Section4Ref}>
        <div className="__wrapper">
          <TagAndHeading
            tag="brands"
            heading="Brands that Took Our Outsourcing Service"
            className="only_center"
          />

          <MarqueeCarousel
            items={items}
            speed={100}
            className="box-border rounded-[30px] rounded-b-none border border-b-0 border-whiteo10"
          />

          <MarqueeCarousel
            items={reviews}
            speed={100}
            className="box-border rounded-[30px] rounded-t-none border border-t-0 border-whiteo10"
          />
        </div>
      </div>

      <div className="process">
        <div className="__wrapper">
          <TagAndHeading
            tag="how we work"
            heading="Our 4 Stage Process"
            className="only_center"
          />

          <div className="__footer">
            <Step
              lightBar={true}
              title="Discovery & Consultation"
              badgeText="Step 01"
              stepNumber="01"
              text="In the first stage, we focus on understanding our clients'
                  needs, goals, and challenges. Our expert team conducts
                  in-depth research on the market, competitors, and technology
                  trends to provide the most suitable direction."
            />

            <Step
              lightBar={true}
              title="Strategy & Solution Design"
              badgeText="Step 02"
              stepNumber="02"
              text="Based on the collected data, we develop a customized strategy
                  for each client. Whether it’s a SaaS solution, SEO
                  optimization, eCommerce development, or AI implementation, we
                  ensure that your strategy has a clear roadmap aligned with
                  your business objectives."
            />

            <Step
              lightBar={true}
              title="Implementation and Execution"
              badgeText="Step 03"
              stepNumber="03"
              text="Once the strategy is finalized, the Firebits team executes the
                  plan with precision and efficiency. We leverage cutting-edge
                  technologies to develop products, optimize performance, and
                  ensure an outstanding user experience."
            />

            <Step
              title="Optimization & Growth"
              badgeText="Step 04"
              stepNumber="04"
              text=" Beyond implementation, Firebits is committed to monitoring,
                  analyzing data, and continuously optimizing solutions. We help
                  clients scale up, enhance performance, and ensure sustainable
                  growth in the global market."
            />
          </div>
        </div>
      </div>

      <div className="questions">
        <div className="__wrapper">
          <TagAndHeading
            tag="Frequently Asked Questions"
            heading="Everything You Need to Know About Outsourcing with Firebits"
            className="only_center"
          />

          <div className="__accordion">
            <AccordionArrow
              className="__accordion-item"
              title="What SEO services does Firebits offer?"
              content="We provide comprehensive SEO services, including On-page SEO, Off-page SEO, Technical SEO, AI-powered SEO, eCommerce SEO, and International SEO to help businesses improve search rankings on Google, Bing, and other search engines."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What technologies does Firebits use for SEO optimization?"
              content="We leverage AI for search data analysis, automated keyword optimization, and personalized SEO strategies. We also utilize advanced tools such as Ahrefs, SEMrush, Google Search Console, and custom analytics for data-driven SEO decisions."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can Firebits’ SEO services help businesses expand into international markets?"
              content="Yes. We specialize in multilingual SEO, local SEO targeting different countries, hreflang tag optimization, international keyword research, and global backlink strategies to help businesses reach customers worldwide."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits offer SEO services for eCommerce platforms?"
              content="Yes. We optimize SEO for Shopify, WooCommerce, Magento, and other eCommerce platforms, focusing on increasing organic traffic, improving conversion rates, and enhancing product visibility on Google Shopping."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How can I track the effectiveness of Firebits' SEO strategies?"
              content="We provide detailed monthly SEO reports, tracking keyword rankings, organic traffic, conversion rates, and ROI using Google Analytics 4 and other industry-leading tracking tools."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits guarantee top rankings on Google?"
              content="While we guarantee significant ranking improvements, we do not promise “instant top rankings,” as Google’s algorithms constantly evolve. Instead, we focus on White Hat SEO strategies to ensure sustainable, long-term results."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits help recover from Google algorithm updates?"
              content="Yes. We continuously monitor and analyze Google’s algorithm updates, adjusting our SEO strategies to prevent negative impacts and ensure websites maintain strong search performance."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import HeadingPageWithButton from "../components/HeadingPageWithButton.jsx";
import TagAndHeading from "../components/TagAndHeading.jsx";
import Accordion from "../components/Accordion.jsx";
import MarqueeCarousel from "../components/MarqueeCarousel.jsx";
import { Tag } from "@phosphor-icons/react";
import ReviewWithIcon from "../components/ReviewWithIcon.jsx";

export default function Outsourcing() {
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
  return (
    <div className="detail">
      <div className="__headingPage">
        <HeadingPageWithButton
          title="Service Details"
          content="At Firebits, we provide cutting-edge digital solutions tailored to your business needs. From outsourcing and SaaS to SEO, e-commerce, and AI-driven strategies, we empower companies to scale, optimize, and innovate in a fast-changing digital landscape."
          buttonText="Get Started"
        />

        <div className="__image">
          <img src="https://placehold.co/1440x700" alt="Heading Image" />
        </div>
      </div>

      <div className="benefits">
        <div className="__wrapper">
          <TagAndHeading tag="benefits" heading="Why you need our service?" />

          <p className="paragraphL">
            Outsourcing is a strategic solution that allows businesses to stay
            competitive, scale efficiently, and access specialized expertise
            without the burden of managing in-house teams. By leveraging
            Firebits' outsourcing services, companies can reduce costs,
            accelerate product development, and focus on their core business
            objectives.{" "}
          </p>

          <div className="__accordion">
            <div>
              <Accordion
                title="01."
                subtitle="Access to Top-Tier Global Talent"
                content="Outsourcing with Firebits gives you access to a highly skilled workforce across the US, Europe, and Asia. Our experts in AI, SaaS, SEO, E-commerce, and software development bring deep industry experience and technical excellence to your projects."
              />
            </div>
            <div>
              <Accordion
                title="02."
                subtitle="Cost-Effective and Scalable Solutions"
                content="Hiring and maintaining an in-house team can be expensive. Firebits provides flexible outsourcing models, allowing you to scale your team up or down based on project needs—without the overhead costs of full-time employees."
              />
            </div>
            <div>
              <Accordion
                title="03."
                subtitle="Faster Time-to-Market"
                content="With dedicated teams and optimized workflows, Firebits helps you accelerate product development cycles, ensuring your solutions reach the market faster while maintaining high quality."
              />
            </div>
            <div>
              <Accordion
                title="04."
                subtitle="Focus on Core Business Growth"
                content="By outsourcing operational tasks to Firebits, your business can concentrate on strategy, innovation, and market expansion while we handle the technical and development aspects."
              />
            </div>
            <div>
              <Accordion
                title="05."
                subtitle="High-Quality Deliverables & Security Compliance"
                content="Our teams follow international standards and best practices to ensure top-tier quality and security in every project. With rigorous QA testing and compliance with global regulations, your business is in safe hands."
              />
            </div>
            <div>
              <Accordion
                title="06."
                subtitle="AI-Driven Optimization & Automation"
                content="We integrate AI and automation into our outsourcing solutions to enhance efficiency, reduce errors, and improve decision-making, leading to smarter and faster business processes."
              />
            </div>
            <div>
              <Accordion
                title="07."
                subtitle="Dedicated Support & Seamless Integration"
                content="Firebits ensures smooth collaboration by providing a dedicated team for each project. Our services integrate effortlessly into your existing systems, ensuring a seamless transition."
              />
            </div>
            <div>
              <Accordion
                title="08."
                subtitle="Global Reach & Market Adaptation"
                content="With a strong presence in the US, UK, China, and Vietnam, we understand regional markets and business cultures. This allows us to provide outsourcing solutions tailored to different industries and geographies."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <TagAndHeading
          tag="services detail"
          heading="What We Do"
          className="only_center"
        />
      </div>

      <div className="brands">
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
    </div>
  );
}

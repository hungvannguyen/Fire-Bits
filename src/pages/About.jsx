import Accordion from "../components/Accordion.jsx";
import MarqueeCarousel from "../components/MarqueeCarousel.jsx";
import GalleryItem from "../components/GalleryItem.jsx";
import AccordionArrow from "../components/AccordionArrow.jsx";
import TagAndHeading from "../components/TagAndHeading.jsx";
import Step from "../components/Step.jsx";

export default function About() {
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
  return (
    <div className="about">
      <div className="hero">
        <div className="__image">
          <div className="absolute inset-0 z-[1] h-full flex-none overflow-hidden bg-[linear-gradient(180deg,rgba(191,51,19,0)_19.980063795853216%,var(--token-2f560859-5998-4075-847c-9f666c5cfc0b,rgb(10,10,10))_73%)] opacity-75"></div>

          <div className="absolute top-1/2 left-1/2 z-[1] h-full w-full flex-none -translate-x-1/2 -translate-y-1/2 transform overflow-hidden bg-[var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321,#e85442)] opacity-0 mix-blend-multiply"></div>

          <div className="__content">
            <h1 className="inner-page">
              Firebits - Powering Innovation, Building Trust{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="company">
        <div className="__wrapper">
          <TagAndHeading tag="who are we" heading="About our Company" />

          <div className="__footer">
            <p className="__content paragraphL">
              Firebits is a global technology company specializing in
              outsourcing, SaaS, SEO, E-commerce, and AI solutions. We deliver
              high-quality digital services to clients across the UK, China, and
              Vietnam. With a strong foundation backed by international
              investors, Firebits is dedicated to driving innovation and
              transforming businesses worldwide.{" "}
            </p>
            <div className="__accordion">
              <Accordion
                title="01."
                subtitle="Our Mission"
                content="At Firebits, we aim to empower businesses with cutting-edge technology. We believe in creating scalable, high-performance solutions that help our clients achieve long-term success. By combining expertise, innovation, and customer-centric strategies, we position ourselves as a trusted partner in digital transformation."
              />

              <Accordion
                title="02."
                subtitle="Our Vision"
                content="We aspire to become the leading service provider and strategic partner for companies worldwide. Firebits is committed to helping businesses grow, optimize operations, and enhance customer experiences through tailored digital solutions. Our vision is to contribute to the success of our partners, ensuring they stay ahead in an ever-evolving digital landscape."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="brand">
        <div className="__wrapper">
          <TagAndHeading
            tag="brands"
            heading="Brands we have worked with"
            className="only_center"
          />

          <div className="__footer">
            <MarqueeCarousel
              items={items}
              speed={100}
              className="box-border rounded-[30px] rounded-b-none border border-b-0 border-whiteo10"
            />

            <MarqueeCarousel
              items={items}
              speed={100}
              direction="right"
              className="box-border rounded-[30px] rounded-t-none border border-t-0 border-whiteo10"
            />
          </div>
        </div>
      </div>

      <div className="value">
        <div className="__wrapper">
          <p className="__text">Values</p>
        </div>
      </div>

      <div className="process">
        <div className="__wrapper">
          <TagAndHeading
            tag="how we work"
            heading="Our 4 Stage Process"
            className="only_center"
          />

          <div>
            <Step
              title="Discovery & Consultation"
              badgeText="Step 01"
              stepNumber="01"
              text="In the first stage, we focus on understanding our clients'
                  needs, goals, and challenges. Our expert team conducts
                  in-depth research on the market, competitors, and technology
                  trends to provide the most suitable direction."
            />

            <Step
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

      <div className="gallery">
        <div className="__wrapper">
          <div className="__wrapper">
            <TagAndHeading tag="gallery" heading="Our Agency Snaps" />
            <div className="__sub-header">
              <p className="parageaphS">
                At Firebits, we believe that a great work environment fuels
                innovation and collaboration. Our offices are designed to
                inspire creativity and efficiency. From modern workspaces to
                high-tech meeting rooms, every corner of our office reflects our
                passion for technology and excellence. <br /> <br /> Take a
                glimpse inside Firebits and see where ideas come to life!{" "}
              </p>
            </div>
          </div>

          <div className="__gallery">
            <GalleryItem
              first="https://loremflickr.com/1200/480"
              second="https://loremflickr.com/1200/480"
            />

            <GalleryItem
              reversed
              first="https://loremflickr.com/1200/480"
              second="https://loremflickr.com/1200/480"
            />

            <GalleryItem
              first="https://loremflickr.com/1200/480"
              second="https://loremflickr.com/1200/480"
            />
          </div>
        </div>
      </div>

      <div className="questions">
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
      </div>
    </div>
  );
}

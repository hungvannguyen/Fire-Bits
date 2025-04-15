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

          <p className="paragraphL font-thin">
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
        <div className="__wrapper">
          <TagAndHeading
            tag="services detail"
            heading="What We Do"
            className="only_center"
          />

          <div className="__introduction">
            <p className="paragraphL">
              Outsourcing is a strategic solution that helps businesses delegate
              specialized tasks to external experts, ensuring cost efficiency,
              operational flexibility, and access to world-class talent. At
              Firebits, we offer end-to-end outsourcing solutions tailored to
              businesses of all sizes, empowering them with advanced technology,
              seamless execution, and reliable expertise. By partnering with
              Firebits, companies can focus on core business objectives while we
              handle the complexities of IT, software development, business
              processes, and digital solutions. Here’s an overview of the key
              components of our Outsourcing Services:{" "}
            </p>
          </div>

          <div className="__body">
            <TextBlock
              title="IT & Software Development Outsourcing"
              content="Firebits offers full-cycle software development services tailored to your business goals. From custom software and mobile apps to scalable cloud infrastructure, we deliver high-quality, secure, and high-performance solutions. Our expertise spans web and mobile development, cloud and DevOps, as well as AI-driven applications and data analytics to support smarter business decisions."
            />
            <TextBlock
              title="Business Process Outsourcing (BPO)"
              content="We help companies optimize operations through reliable and professional BPO services. Whether it's 24/7 multilingual customer support, accurate data entry and processing, or full HR and payroll management, Firebits ensures your back-office functions run efficiently and securely."
            />
            <TextBlock
              title="Digital Marketing & SEO Outsourcing"
              content="Firebits boosts your online presence with targeted digital marketing strategies. Our SEO and content marketing solutions are designed to drive visibility and engagement, while our social media and paid advertising campaigns are built to deliver measurable ROI and business growth."
            />
            <TextBlock
              title="eCommerce & Retail Outsourcing"
              content="We support eCommerce businesses with end-to-end services, including store development on platforms like Shopify, WooCommerce, and Magento. Our team handles everything from product listing and SEO optimization to logistics and order fulfillment, helping clients scale efficiently in a competitive market."
            />
            <TextBlock
              title="IT Support & Infrastructure Management"
              content="Our round-the-clock IT support ensures seamless business operations. We provide proactive maintenance, robust cybersecurity solutions, and scalable cloud infrastructure management to keep your systems secure, compliant, and high-performing."
            />
            <TextBlock
              title="Dedicated Development Teams"
              content="Firebits offers flexible, scalable development teams tailored to your specific project needs. With experienced engineers across multiple technologies and a strong Agile project management approach, we ensure transparency, speed, and quality in every delivery."
            />
          </div>
        </div>
      </div>

      <section className="whyChooseUs my_wrapper">
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

      <div className="process">
        <div className="__wrapper">
          <TagAndHeading
            tag="how we work"
            heading="Our 4 Stage Process"
            className="only_center"
          />

          <div className="__footer">
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
              title="What is outsourcing, and why should I choose Firebits for it?"
              content="Outsourcing involves delegating specific tasks or projects to external experts. Choosing Firebits ensures access to a global team of skilled professionals, cost optimization, and high-quality results, thanks to our expertise in software development, AI implementation, and digital solutions."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What types of outsourcing services does Firebits offer?"
              content="Firebits specializes in various outsourcing services, including software development, IT support, AI integration, and digital marketing solutions. Our global team tailors each service to meet the unique needs of clients from the UK, China, and Vietnam."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits ensure quality and timely delivery?"
              content="We follow a structured 4-stage process, from discovery to continuous support, to ensure quality and efficiency. Our team leverages agile methodologies and regular progress tracking to meet project deadlines and maintain high standards."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can I monitor the progress of my outsourced project with Firebits?"
              content="Absolutely. Firebits provides transparent project management through collaborative tools, enabling real-time updates, progress tracking, and direct communication with the project team."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits handle data security and confidentiality?"
              content="Data security is a top priority. We implement robust cybersecurity measures, follow international data protection regulations, and sign non-disclosure agreements (NDAs) to ensure client data is fully protected throughout the project."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What if I need adjustments or support after the project is completed?"
              content="Firebits offers ongoing support and maintenance after project delivery. We continuously monitor performance, implement updates, and provide technical support to ensure your solution remains efficient and up-to-date."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How do I get started with outsourcing through Firebits?"
              content="Simply reach out to us through our website or contact form. Our team will schedule a consultation to understand your requirements and offer a customized outsourcing strategy aligned with your business goals."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

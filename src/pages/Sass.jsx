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

export default function Sass() {
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
            SaaS (Software-as-a-Service) is a modern solution that helps
            businesses enhance efficiency, reduce costs, and scale effortlessly.
            With Firebits’ expertise in SaaS, companies can leverage cloud-based
            technology to automate processes, improve collaboration, and stay
            competitive in an ever-evolving digital landscape.{" "}
          </p>

          <div className="__accordion">
            <div>
              <Accordion
                title="01."
                subtitle="Scalable & Customizable Solutions"
                content="Firebits provides flexible and scalable SaaS platforms designed to grow with your business. Our solutions are highly customizable, allowing seamless integration with your existing tools and workflows, ensuring a tailored approach that fits your operational needs."
              />
            </div>
            <div>
              <Accordion
                title="02."
                subtitle="Cost-Effective & Subscription-Based"
                content="Investing in traditional software can be expensive and resource-intensive. With Firebits’ subscription-based SaaS solutions, you gain access to enterprise-level technology at a fraction of the cost, eliminating the need for heavy upfront investments while maintaining full scalability."
              />
            </div>
            <div>
              <Accordion
                title="03."
                subtitle="Faster Deployment & Automatic Updates"
                content="Unlike traditional software, SaaS solutions from Firebits are cloud-based and ready for rapid deployment. Our platforms offer automatic updates and security patches, ensuring your business always operates with the latest features and performance enhancements—without downtime or manual intervention."
              />
            </div>
            <div>
              <Accordion
                title="04."
                subtitle="Focus on Core Business Growth"
                content="By adopting SaaS solutions from Firebits, companies can shift their focus to business strategy, innovation, and market expansion while we handle software maintenance, system optimization, and continuous improvements to keep your operations running smoothly."
              />
            </div>
            <div>
              <Accordion
                title="05."
                subtitle="Secure & Compliant Cloud Infrastructure"
                content="Security is at the core of our SaaS offerings. Firebits follows global security standards and best practices, ensuring data protection, compliance with regulations, and reliable cloud infrastructure with 99.9% uptime, so your business stays secure and operational at all times."
              />
            </div>
            <div>
              <Accordion
                title="06."
                subtitle="AI-Driven Optimization & Automation"
                content="Firebits integrates Artificial Intelligence and automation into our SaaS platforms, optimizing processes, reducing human errors, and delivering valuable data-driven insights. This allows businesses to make smarter decisions, improve efficiency, and enhance customer experiences."
              />
            </div>
            <div>
              <Accordion
                title="07."
                subtitle="Seamless Integration & User-Friendly Experience"
                content="Our SaaS solutions are designed to integrate effortlessly with third-party tools, CRMs, and enterprise systems. Firebits ensures a smooth user experience with intuitive interfaces, allowing your team to adopt and utilize the software efficiently with minimal learning curves."
              />
            </div>
            <div>
              <Accordion
                title="08."
                subtitle="Global Reach & Industry Adaptation"
                content="With a strong presence in the US, UK, China, and Vietnam, Firebits understands diverse market needs and business cultures. Our SaaS solutions are tailored to different industries, ensuring that businesses in various sectors can benefit from optimized, region-specific digital strategies."
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
              <strong>SaaS (Software as a Service)</strong> is a game-changing
              solution that enables businesses to deliver scalable, cloud-based
              applications while reducing infrastructure costs and accelerating
              time-to-market. At Firebits, we offer full-cycle SaaS development
              services, providing companies with secure, high-performance
              platforms tailored to their needs. Our expert team handles
              everything from product ideation and UI/UX design to cloud
              infrastructure and continuous optimization, allowing businesses to
              focus on growth and innovation without the complexities of
              software development.{" "}
            </p>
          </div>

          <div className="__body">
            <TextBlock
              title="SaaS Development & Cloud-Based Solutions"
              content="Firebits builds end-to-end SaaS platforms that empower businesses to scale efficiently and deliver value to their users. We provide full-cycle development services—covering everything from product discovery to deployment—ensuring your platform is secure, scalable, and built for performance."
            />
            <TextBlock
              title="Custom SaaS Development"
              content="We turn your ideas into market-ready products with tailored architectures, clean UI/UX, and seamless user experiences. Our team handles both frontend and backend development using modern, scalable tech stacks."
            />
            <TextBlock
              title="Multi-Tenant Cloud Architecture"
              content="Firebits develops robust cloud-native infrastructures that support multi-tenancy, ensuring your platform can serve many customers securely and efficiently. We leverage AWS, Azure, and other top-tier cloud providers to deliver high availability and global scalability."
            />
            <TextBlock
              title="Subscription & Billing Systems"
              content="Our team integrates or custom-builds subscription models, billing engines, user management, and access controls—ensuring a smooth and monetizable experience for your end-users."
            />
            <TextBlock
              title="Analytics & Reporting Dashboards"
              content="We design built-in reporting tools and real-time analytics dashboards to help both you and your users make informed, data-driven decisions from day one."
            />
            <TextBlock
              title="Third-Party Integrations"
              content="Need to connect your SaaS with CRMs, ERPs, payment gateways, or third-party APIs? We've done it all—and make integration seamless and secure."
            />
            <TextBlock
              title="DevOps & Ongoing Optimization"
              content="We use modern DevOps practices, CI/CD pipelines, automated testing, and monitoring to ensure smooth deployment, continuous improvement, and high availability—across staging and production environments."
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
              title="Is Firebits' SaaS suitable for large enterprises?"
              content="Yes. Firebits provides highly scalable SaaS solutions designed to meet the needs of medium and large enterprises. Our systems support multi-user access, large-scale data management, and seamless integration with popular ERP and CRM platforms."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits ensure high performance for its SaaS solutions?"
              content="We utilize robust cloud infrastructure with global CDN support to ensure fast load times and 99.99% uptime. Our SaaS architecture is based on microservices, enabling flexible scaling and optimized system performance."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits offer multi-tenant SaaS architecture?"
              content="Yes. Our multi-tenant architecture allows multiple clients to use the same platform securely, with strict data separation. This model increases efficiency and reduces operational costs."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How is data stored and backed up in Firebits' SaaS platforms?"
              content="Data is securely hosted on leading cloud providers like AWS and Google Cloud, with automated daily and weekly backups. We also implement Disaster Recovery (DR) strategies to ensure rapid data recovery in case of failure."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What security standards does Firebits follow for its SaaS products?"
              content="Firebits complies with leading global standards such as ISO 27001, GDPR, and SOC 2. We implement multi-factor authentication (MFA), AES-256 encryption, and DDoS protection to keep client data safe."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits offer AI-powered SaaS solutions?"
              content="Yes. We build AI-integrated SaaS platforms that automate processes, provide smart analytics, and personalize user experiences. Features include AI chatbots, advanced data analytics, and intelligent recommendation systems."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can Firebits’ SaaS be deployed on-premise, or is it cloud-only?"
              content="While our SaaS solutions are primarily cloud-based for performance and flexibility, we also support hybrid or on-premise deployments for clients with specific data control or security requirements."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function AiAgency() {
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
            Artificial Intelligence (AI) is revolutionizing industries by
            automating processes, enhancing decision-making, and unlocking new
            business opportunities. Firebits provides cutting-edge AI solutions
            that help businesses streamline operations, improve efficiency, and
            drive innovation.{" "}
          </p>

          <div className="__accordion">
            <div>
              <Accordion
                title="01."
                subtitle="AI-Powered Automation & Efficiency"
                content="Firebits develops AI-driven automation tools that reduce manual workload, eliminate repetitive tasks, and enhance operational efficiency, allowing businesses to focus on strategy and growth."
              />
            </div>
            <div>
              <Accordion
                title="02."
                subtitle="Cost-Effective & Scalable AI Solutions"
                content="AI helps businesses cut operational costs while boosting productivity. Firebits offers scalable AI services that adapt to your business needs, ensuring maximum efficiency without heavy investment."
              />
            </div>
            <div>
              <Accordion
                title="03."
                subtitle="Faster Data Processing & Smart Decision-Making"
                content="With AI-powered analytics, Firebits helps businesses process large volumes of data in real-time, uncover patterns, and make data-driven decisions faster and more accurately."
              />
            </div>
            <div>
              <Accordion
                title="04."
                subtitle="Focus on Core Business Growth"
                content="By leveraging Firebits’ AI expertise, companies can concentrate on expanding their business, improving products, and increasing revenue, while our AI solutions handle the complexities of automation and analytics."
              />
            </div>
            <div>
              <Accordion
                title="05."
                subtitle="AI-Driven Customer Insights & Personalization"
                content="Firebits uses advanced machine learning algorithms to analyze customer behavior, predict trends, and provide personalized recommendations, enhancing user engagement and boosting customer satisfaction."
              />
            </div>
            <div>
              <Accordion
                title="06."
                subtitle="AI for SEO, E-commerce & Marketing Optimization"
                content="We integrate AI into SEO, digital marketing, and E-commerce strategies to optimize content, improve ad targeting, and automate customer interactions, maximizing conversions and ROI."
              />
            </div>
            <div>
              <Accordion
                title="07."
                subtitle="Secure & Ethical AI Implementation"
                content="Firebits ensures that all AI solutions adhere to global security standards and ethical AI principles, prioritizing data privacy, compliance, and responsible AI use."
              />
            </div>
            <div>
              <Accordion
                title="08."
                subtitle="Global AI Expertise & Multi-Market Adaptation"
                content="With experience in the US, UK, China, and Vietnam, Firebits delivers custom AI solutions that align with industry-specific needs, ensuring businesses stay ahead in their respective markets."
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
              <strong>Artificial Intelligence (AI)</strong> is revolutionizing
              industries by automating processes, enhancing decision-making, and
              driving innovation. At Firebits, we specialize in providing
              AI-powered solutions that enable businesses to leverage advanced
              technologies for improved efficiency, performance, and customer
              experiences. From AI strategy and implementation to continuous
              optimization, our team delivers tailored AI solutions to meet your
              unique business needs.{" "}
            </p>
          </div>

          <div className="__body">
            <TextBlock
              title="AI Strategy & Consultation"
              content="We begin by understanding your business goals and challenges, then craft a customized AI strategy that aligns with your objectives. Our expert team works with you to explore AI opportunities, ensuring the implementation of the most effective solutions for your business."
            />
            <TextBlock
              title="Machine Learning (ML) Solutions"
              content="Our team develops machine learning models that enable businesses to make data-driven decisions and improve processes. From predictive analytics and demand forecasting to recommendation engines and customer segmentation, we build tailored ML models to solve complex problems and optimize operations."
            />
            <TextBlock
              title="Natural Language Processing (NLP)"
              content="We specialize in NLP solutions that enable businesses to extract valuable insights from text and voice data. Our AI-driven tools include chatbots, sentiment analysis, language translation, and content generation, improving customer interactions and data analysis."
            />
            <TextBlock
              title="Computer Vision & Image Recognition"
              content="Our AI solutions include advanced computer vision and image recognition capabilities. We build systems that can analyze and interpret visual data, enabling applications in industries like retail, healthcare, and security for tasks such as object detection, facial recognition, and image classification."
            />
            <TextBlock
              title="AI-Powered Chatbots & Virtual Assistants"
              content="We create intelligent chatbots and virtual assistants that can handle customer inquiries, automate support, and improve engagement. Our AI-powered solutions are designed to understand natural language and provide accurate, timely responses, enhancing customer service and reducing operational costs."
            />
            <TextBlock
              title="AI in Business Automation"
              content="We help businesses automate repetitive tasks and optimize workflows with AI-driven process automation solutions. From automating data entry and report generation to enhancing supply chain management, we ensure that AI helps you improve efficiency and reduce manual work."
            />
            <TextBlock
              title="Predictive Analytics"
              content="We develop predictive analytics models that forecast future trends, customer behavior, and market dynamics. Our AI-driven models allow businesses to anticipate changes, make informed decisions, and gain a competitive edge."
            />
            <TextBlock
              title="AI Integration with Existing Systems"
              content="Firebits integrates AI capabilities into your existing platforms and systems, enhancing functionality without disrupting your current operations. Whether it’s integrating AI into your CRM, ERP, or ecommerce platform, we ensure smooth and secure integration for optimal performance."
            />
            <TextBlock
              title="AI Solutions for Personalization"
              content="We build AI-powered personalization systems that enhance the customer experience by delivering tailored content, recommendations, and offers based on user behavior and preferences. This drives engagement, conversions, and customer loyalty."
            />
            <TextBlock
              title="AI Data Analysis & Insights"
              content="Our team uses AI to analyze vast amounts of data, identifying patterns, trends, and insights that inform business strategies. From marketing analytics to financial modeling, we empower businesses with actionable data to make smarter decisions."
            />
            <TextBlock
              title="Ongoing AI Optimization & Support"
              content="AI solutions require continuous monitoring and optimization. We provide ongoing support and improvements to your AI systems, ensuring that models stay accurate and effective over time, adapting to changing data and business requirements."
            />
            <TextBlock content="Partnering with Firebits allows your business to unlock the full potential of AI, automating processes, enhancing customer experiences, and driving innovation. Let us help you integrate cutting-edge AI solutions that elevate your business to the next level." />
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
              title="What AI services does Firebits provide as an AI agency?"
              content="We offer custom AI solutions including machine learning model development, AI-powered automation, NLP (Natural Language Processing), computer vision, and AI integrations for SaaS and Ecommerce platforms."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Which industries does Firebits serve with AI solutions?"
              content="Our AI services support various industries such as retail, finance, healthcare, logistics, and education—offering tailored AI models to solve real business challenges like demand forecasting, fraud detection, and customer behavior prediction."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits develop custom AI models or use third-party tools?"
              content="We develop custom AI models in-house, trained on your proprietary data for maximum accuracy and relevance. We also integrate with third-party AI APIs when it adds value or reduces time-to-market."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can Firebits integrate AI into existing software systems?"
              content="Yes. We provide end-to-end AI integration services using APIs or direct embedding into your current systems, including CRMs, ERP, Ecommerce platforms, or mobile apps"
            />

            <AccordionArrow
              className="__accordion-item"
              title="Do you provide AI consulting or only development?"
              content="Both. Firebits offers AI consulting to help businesses identify the right use cases, assess feasibility, and build an AI roadmap—followed by full development, deployment, and ongoing support."
            />

            <AccordionArrow
              className="__accordion-item"
              title="What are some real-world use cases Firebits has worked on?"
              content="Examples include AI chatbots for customer service, dynamic pricing engines, smart product recommendations, automated content generation, visual recognition for quality control, and AI-powered analytics dashboards."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

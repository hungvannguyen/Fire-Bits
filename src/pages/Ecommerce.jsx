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

export default function Ecommerce() {
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
    const ctx = gsap.context(() =>{
      gsap.from(headingPageRef.current.querySelectorAll(".__content"),{
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(headingPageRef.current.querySelectorAll(".__image"),{
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
            E-commerce is transforming the way businesses sell products and
            engage with customers. Firebits provides AI-powered, scalable, and
            high-performance E-commerce solutions that help brands boost sales,
            enhance customer experience, and dominate the online market.{" "}
          </p>

          <div className="__accordion">
            <div>
              <Accordion
                title="01."
                subtitle="Scalable & Customizable E-commerce Platforms"
                content="Firebits builds scalable and fully customizable E-commerce solutions tailored to your brand’s unique needs. Whether you need a B2B, B2C, or multi-vendor marketplace, we create platforms that grow with your business."
              />
            </div>
            <div>
              <Accordion
                title="02."
                subtitle="Cost-Effective & Revenue-Boosting Solutions"
                content="Our conversion-driven E-commerce strategies optimize every aspect of your online store, reducing costs while maximizing revenue. Firebits ensures higher profit margins through smart automation and optimized sales funnels."
              />
            </div>
            <div>
              <Accordion
                title="03."
                subtitle="Faster Website Speed & Seamless Shopping Experience"
                content="A slow website kills sales. Firebits develops lightning-fast, mobile-friendly, and intuitive E-commerce platforms, ensuring smooth navigation and a frictionless shopping experience that keeps customers coming back."
              />
            </div>
            <div>
              <Accordion
                title="04."
                subtitle="Focus on Core Business Growth"
                content="By outsourcing E-commerce development and management to Firebits, businesses can focus on marketing, branding, and product expansion while we handle the technical side, security, and platform optimization."
              />
            </div>
            <div>
              <Accordion
                title="05."
                subtitle="AI-Driven Personalization & Smart Recommendations"
                content="We integrate AI-powered recommendation engines, chatbots, and personalized content to enhance customer engagement, improve retention rates, and drive higher average order values."
              />
            </div>
            <div>
              <Accordion
                title="06."
                subtitle="SEO & Digital Marketing for Maximum Visibility"
                content="Firebits combines E-commerce SEO, paid advertising, and social media strategies to increase organic traffic, improve rankings, and boost brand awareness, helping your store attract and retain more customers."
              />
            </div>
            <div>
              <Accordion
                title="07."
                subtitle="Secure Payments & Advanced Fraud Protection"
                content="Our E-commerce platforms feature secure payment gateways, multi-layer encryption, and fraud detection systems, ensuring safe and seamless transactions for both businesses and customers."
              />
            </div>
            <div>
              <Accordion
                title="08."
                subtitle="Global Reach & Multi-Market Adaptation"
                content="With expertise in the US, UK, China, and Vietnam, Firebits develops E-commerce solutions that cater to regional shopping behaviors, payment preferences, and market trends, ensuring success in different international markets."
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
              <strong>Ecommerce</strong> is transforming the way businesses
              interact with customers, providing an efficient and scalable
              solution to sell products or services online. At Firebits, we
              offer end-to-end ecommerce development services, building
              high-performance online stores that are user-friendly, secure, and
              tailored to meet your business needs. Our expert team handles
              everything from store design to payment integration, ensuring a
              seamless shopping experience for your customers.{" "}
            </p>
          </div>

          <div className="__body">
            <TextBlock
              title="Custom Ecommerce Website Development"
              content="We create fully custom ecommerce platforms that deliver a superior user experience and are optimized for both desktop and mobile devices. Our team builds intuitive, responsive, and scalable stores with clean UI/UX design, ensuring your customers enjoy an engaging shopping experience."
            />
            <TextBlock
              title="Shopping Cart & Checkout Optimization"
              content="We optimize your ecommerce website’s shopping cart and checkout process to reduce cart abandonment and improve conversion rates. With user-friendly interfaces and secure payment processing, we make the buying process fast, easy, and reliable."
            />
            <TextBlock
              title="Product Catalog Management"
              content="Our team helps you create and manage a comprehensive product catalog that is easy to navigate and update. We integrate advanced search and filtering features, making it simple for your customers to find the products they are looking for."
            />
            <TextBlock
              title="Payment Gateway Integration"
              content="Firebits integrates a wide range of secure and reliable payment gateways, including PayPal, Stripe, and other global or local payment solutions. We ensure that transactions are processed safely and smoothly, providing your customers with a seamless checkout experience."
            />
            <TextBlock
              title="Multi-Channel Ecommerce Solutions"
              content="We help you expand your reach by integrating your ecommerce platform with popular marketplaces and social media channels. Whether you’re selling on Amazon, eBay, or through Instagram, our solutions allow you to manage all your sales from a single, centralized platform."
            />
            <TextBlock
              title="Inventory & Order Management"
              content="Our ecommerce solutions provide seamless inventory and order management, ensuring that your stock levels are always accurate, orders are tracked efficiently, and customers are kept up to date on their order status. We automate many aspects of the process to improve efficiency and reduce manual errors."
            />
            <TextBlock
              title="SEO for Ecommerce"
              content="We implement SEO best practices to ensure your ecommerce site is discoverable by search engines and ranks high for relevant keywords. Our team optimizes product pages, metadata, content, and technical elements to drive organic traffic and boost your store’s visibility."
            />
            <TextBlock
              title="Mobile Ecommerce Development"
              content="With more people shopping on mobile devices, we ensure your ecommerce platform is fully optimized for mobile. We build mobile-responsive websites and create dedicated mobile apps that provide an excellent shopping experience on smartphones and tablets."
            />
            <TextBlock
              title="Customer Account Management"
              content="We integrate advanced customer account features, including personalized shopping experiences, wish lists, order history, and loyalty programs. These features help you build stronger customer relationships and encourage repeat business."
            />
            <TextBlock
              title="Ecommerce Analytics & Reporting"
              content="Our team implements advanced analytics and reporting tools, providing you with insights into customer behavior, sales performance, and marketing effectiveness. This data helps you make informed decisions and continuously improve your ecommerce business."
            />
            <TextBlock
              title="Ongoing Support & Maintenance"
              content="We provide continuous support and maintenance for your ecommerce platform, ensuring your store remains secure, up-to-date, and optimized. Whether it’s troubleshooting issues, implementing new features, or upgrading your system, we’re here to ensure your ecommerce business thrives."
            />
            <TextBlock content="By partnering with Firebits, you gain access to a dedicated team of ecommerce experts who will help you build a successful online store that drives sales, enhances the customer experience, and supports your business growth." />
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

          <div>
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
              title="What Ecommerce solutions does Firebits offer?"
              content="We provide full-scale Ecommerce solutions, including platform development (Shopify, Magento, WooCommerce, custom-built stores), performance optimization, SEO, AI-driven personalization, and payment gateway integration."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can Firebits help migrate my existing online store to another platform?"
              content="Yes. We offer seamless migration services between platforms (e.g., Magento to Shopify, WooCommerce to a custom solution) while preserving product data, SEO rankings, and user experience."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits offer AI-powered Ecommerce solutions?"
              content="Yes. Our AI-powered solutions include smart product recommendations, automated chatbots, AI-driven inventory management, and data-driven customer insights to optimize sales and engagement."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits offer SEO services for eCommerce platforms?"
              content="Yes. We optimize SEO for Shopify, WooCommerce, Magento, and other eCommerce platforms, focusing on increasing organic traffic, improving conversion rates, and enhancing product visibility on Google Shopping."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How does Firebits ensure the security of Ecommerce websites?"
              content="We implement SSL encryption, PCI-DSS compliance, multi-factor authentication, and regular security audits to protect online stores from cyber threats and ensure secure transactions."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Can Firebits optimize my Ecommerce store for SEO and conversions?"
              content="Absolutely. We optimize Ecommerce sites for speed, mobile responsiveness, structured data (rich snippets), and high-converting UI/UX, ensuring better search rankings and improved sales performance."
            />

            <AccordionArrow
              className="__accordion-item"
              title="Does Firebits provide ongoing maintenance and support for Ecommerce stores?"
              content="Yes. We offer 24/7 monitoring, bug fixes, performance optimization, and feature updates to ensure your Ecommerce store runs smoothly and stays competitive."
            />

            <AccordionArrow
              className="__accordion-item"
              title="How can I scale my Ecommerce business with Firebits?"
              content="We help scale businesses by implementing cloud-based solutions, automation, multi-store management, cross-border Ecommerce strategies, and marketplace integrations (Amazon, eBay, Alibaba)."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

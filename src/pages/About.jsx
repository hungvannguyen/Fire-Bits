import Accordion from "../components/Accordion.jsx";
import MarqueeCarousel from "../components/MarqueeCarousel.jsx";
import GalleryItem from "../components/GalleryItem.jsx";

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

      <div className="about">
        <div className="__header">
          <div className="__badge">
            <p className="paragraphL">who we are</p>
          </div>
          <h2 className="__title">About our Company</h2>
        </div>

        <div className="__footer">
          <p className="__content paragraphL">
            Firebits is a global technology company specializing in outsourcing,
            SaaS, SEO, E-commerce, and AI solutions. We deliver high-quality
            digital services to clients across the UK, China, and Vietnam. With
            a strong foundation backed by international investors, Firebits is
            dedicated to driving innovation and transforming businesses
            worldwide.{" "}
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

      <div className="brand">
        <div className="__header">
          <div className="__badge">
            <p className="paragraphL">Brands</p>
          </div>
          <h2 className="__title">Brands we have worked with</h2>
        </div>

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

      <div className="value">
        <div>
          <p className="__text">Values </p>
        </div>
      </div>

      <div className="process">
        <div className="__header">
          <div className="__badge">
            <p className="paragraphL">How we work</p>
          </div>
          <h2 className="__title">Our 4 Stage Process</h2>
        </div>

        <div className="__footer">
          <div className="__step">
            <div className="__wrapper">
              <div className="__timeline">01</div>
              <div className="__progress-bar"></div>
            </div>
            <div className="__content">
              <div className="__header">
                <div className="__badge">
                  <p className="paragraphL">Step 01</p>
                </div>
                <h3 className="__title">Discovery & Consultation</h3>
              </div>
              <p className="__text paragraphXS">
                In the first stage, we focus on understanding our clients'
                needs, goals, and challenges. Our expert team conducts in-depth
                research on the market, competitors, and technology trends to
                provide the most suitable direction.{" "}
              </p>
            </div>
          </div>

          <div className="__step">
            <div className="__wrapper">
              <div className="__timeline">02</div>
              <div className="__progress-bar"></div>
            </div>
            <div className="__content">
              <div className="__header">
                <div className="__badge">
                  <p className="paragraphL">Step 02</p>
                </div>
                <h3 className="__title">Strategy & Solution Design</h3>
              </div>
              <p className="__text paragraphXS">
                Based on the collected data, we develop a customized strategy
                for each client. Whether it’s a SaaS solution, SEO optimization,
                eCommerce development, or AI implementation, we ensure that your
                strategy has a clear roadmap aligned with your business
                objectives.{" "}
              </p>
            </div>
          </div>

          <div className="__step">
            <div className="__wrapper">
              <div className="__timeline">03</div>
              <div className="__progress-bar"></div>
            </div>
            <div className="__content">
              <div className="__header">
                <div className="__badge">
                  <p className="paragraphL">Step 03</p>
                </div>
                <h3 className="__title">Implementation and Execution</h3>
              </div>
              <p className="__text paragraphXS">
                Once the strategy is finalized, the Firebits team executes the
                plan with precision and efficiency. We leverage cutting-edge
                technologies to develop products, optimize performance, and
                ensure an outstanding user experience.{" "}
              </p>
            </div>
          </div>

          <div className="__step">
            <div className="__wrapper">
              <div className="__timeline">04</div>
            </div>
            <div className="__content">
              <div className="__header">
                <div className="__badge">
                  <p className="paragraphL">Step 04</p>
                </div>
                <h3 className="__title">Optimization & Growth</h3>
              </div>
              <p className="__text paragraphXS">
                Beyond implementation, Firebits is committed to monitoring,
                analyzing data, and continuously optimizing solutions. We help
                clients scale up, enhance performance, and ensure sustainable
                growth in the global market.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="__wrapper">
          <div className="__header">
            <div className="__badge">
              <p className="paragraphL">who we are</p>
            </div>
            <h2 className="__title">About our Company</h2>
          </div>
          <div className="flex justify-end">
            <p className="__sub-header parageaphS">
              At Firebits, we believe that a great work environment fuels
              innovation and collaboration. Our offices are designed to inspire
              creativity and efficiency. From modern workspaces to high-tech
              meeting rooms, every corner of our office reflects our passion for
              technology and excellence. <br /> <br /> Take a glimpse inside
              Firebits and see where ideas come to life!{" "}
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
  );
}

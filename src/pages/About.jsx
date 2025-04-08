import Accordion from "../components/Accordion.jsx";

export default function About() {
  return (
    <>
      <div className="hero">
        <div className="__image">
          {/* <img src="https://picsum.photos/1200/1200" alt="About Us" /> */}
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
      </div>
    </>
  );
}

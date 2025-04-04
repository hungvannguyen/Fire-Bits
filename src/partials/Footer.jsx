export default function Footer() {
  return (
    <footer className="footer">
      <div className="__container">
        <div className="__head">
          <div className="__left">
            <p>Let's</p>
            <p>Talk!</p>
          </div>
          <div className="__right">
            <form>
              <label className="__label">
                <span>Name</span>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="__input"
                  />
                </div>
              </label>

              <label className="__label">
                <span>Name</span>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="__input"
                  />
                </div>
              </label>

              <label className="__label">
                <span>Name</span>
                <div>
                  <textarea placeholder="Your Name" className="__input" />
                </div>
              </label>

              <button type="submit" className="__btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="__footer">
          <div className="__container">
            <div className="__top">
              <div className="__left">
                <div></div>
              </div>
              <div>
                <span>Right</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="__credit">
          <span>
            &copy; {new Date().getFullYear()} Firebits. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

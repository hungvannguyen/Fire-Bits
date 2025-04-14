import React, { useEffect } from "react";
import { Atom } from "@phosphor-icons/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const CircleTag = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".-item", {
      type: "x,y",
      // Không sử dụng bounds để cho phép kéo tự do ra ngoài container
      throwProps: true,
      onDragStart: function () {
        // Lưu lại vị trí ban đầu của phần tử nếu chưa lưu
        if (!this.target.dataset.initialX) {
          const initialX = gsap.getProperty(this.target, "x") || 0;
          const initialY = gsap.getProperty(this.target, "y") || 0;
          this.target.dataset.initialX = initialX;
          this.target.dataset.initialY = initialY;
        }
      },
      onDragEnd: function () {
        // Lấy vị trí ban đầu và animate về đó với hiệu ứng bounce
        const initialX = parseFloat(this.target.dataset.initialX) || 0;
        const initialY = parseFloat(this.target.dataset.initialY) || 0;
        gsap.to(this.target, {
          x: initialX,
          y: initialY,
          duration: 0.3,
          ease: "back.out",
        });
      },
    });
  }, []);

  return (
    <div className="CircleTag">
      <div
        className="-item bottom-0 left-[50%]"
        style={{ transform: "translateX(-50%)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Quality</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[47px] left-[47px]"
        style={{ transform: "rotate(2deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Personalization</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[37px] left-[222px]"
        style={{ transform: "rotate(-4deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Reliability</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[91px] left-[201px]"
        style={{ transform: "rotate(-17deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Collaboration</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[101px] left-[48%]"
        style={{ transform: "translateX(-50%) rotate(-14deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Innovation</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[151px] left-[-5px]"
        style={{ transform: "rotate(11deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Customer Focus</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[154px] left-[125px]"
        style={{ transform: "rotate(11deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">
              Long-Term Relationships{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[208px] left-[17px]"
        style={{ transform: "rotate(-15deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Positive Experience</p>
          </div>
        </div>
      </div>
      <div
        className="-item right-[-16px] bottom-[194px]"
        style={{ transform: "rotate(3deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Trustworthiness</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[255px] left-[192px]"
        style={{ transform: "rotate(24deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Passion</p>
          </div>
        </div>
      </div>
      <div
        className="-item bottom-[273px] left-[28px]"
        style={{ transform: "rotate(-28deg)" }}
      >
        <div className="-wrapper">
          <div className="-icon">
            <div>
              <Atom size={20} className="relative text-darkTone" />
            </div>
          </div>
          <div className="-text richTextContainer">
            <p className="paragraphXS text-darkTone">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleTag;

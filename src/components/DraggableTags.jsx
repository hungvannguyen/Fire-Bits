import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Đăng ký plugin Draggable cho GSAP
gsap.registerPlugin(Draggable);

const DraggableTags = () => {
  // Mảng các tag (label) muốn hiển thị
  const tags = [
    { id: 1, label: "Customer Support" },
    { id: 2, label: "Positive Experience" },
    { id: 3, label: "Customer Focus" },
    { id: 4, label: "Personalization" },
    { id: 5, label: "Passion" },
    { id: 6, label: "Trustworthiness" },
    { id: 7, label: "Long-Term Relationships" },
    { id: 8, label: "Innovation" },
    { id: 9, label: "Collaboration" },
    { id: 10, label: "Reliability" },
    { id: 11, label: "Quality" },
  ];

  // Lưu trữ tham chiếu đến các DOM element của từng tag
  const tagRefs = useRef([]);
  tagRefs.current = [];

  // Tham chiếu đến vùng chứa (để tạo bounds khi kéo)
  const containerRef = useRef(null);

  // Khởi tạo Draggable khi component mount
  useEffect(() => {
    if (!containerRef.current) return;

    // Trên mỗi tag, kích hoạt Draggable
    tagRefs.current.forEach((el) => {
      Draggable.create(el, {
        type: "x,y",
        bounds: containerRef.current,
        inertia: true,
        onRelease() {
          // Khi thả chuột, quay lại vị trí gốc
          gsap.to(el, {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  // Hàm callback để gắn ref cho từng tag
  const addTagRef = (el) => {
    if (el && !tagRefs.current.includes(el)) {
      tagRefs.current.push(el);
    }
  };

  // Kích thước khung (giống với style.width/height)
  const size = 366;
  // Bán kính (dùng để tính vị trí các thẻ)
  const R = size / 2;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        margin: "50px auto",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        // Phần viền, blur… tuỳ ý
        border: "1px solid rgba(255, 255, 255, 0.5)",
        background: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      {tags.map((tag) => {
        // Tạo toạ độ ngẫu nhiên trong vòng tròn
        const theta = Math.random() * Math.PI * 2;
        // sqrt(random) để phân bố đồng đều trong diện tích hình tròn
        const randRadius = Math.sqrt(Math.random()) * (R * 0.9);
        // Nhân thêm 0.9 để tránh chạm sát viền
        const xPos = randRadius * Math.cos(theta);
        const yPos = randRadius * Math.sin(theta);

        // Tạo góc xoay ngẫu nhiên (tuỳ ý)
        const rotation = Math.random() * 30 - 15; // -15 -> 15 độ

        return (
          <div
            key={tag.id}
            ref={addTagRef}
            style={{
              position: "absolute",
              // Đưa về hệ toạ độ container
              left: `${R + xPos}px`,
              top: `${R + yPos}px`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              padding: "8px 16px",
              background: "#f90", // màu cam
              color: "#fff",
              borderRadius: "9999px",
              cursor: "grab",
              userSelect: "none",
              fontSize: "14px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {tag.label}
          </div>
        );
      })}
    </div>
  );
};

export default DraggableTags;

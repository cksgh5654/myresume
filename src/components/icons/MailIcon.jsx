import { useState } from "react";

const MailIcon = (props) => {
  const { width, height } = props;
  const [hovered, setHovered] = useState(false); // hover 상태 관리
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)} // 마우스가 들어올 때
      onMouseLeave={() => setHovered(false)} // 마우스가 나갈 때
    >
      <path
        d="M1 4.27775L9.32897 9.8304C10.0381 10.3032 10.9619 10.3032 11.671 9.8304L20 4.27775M3.11111 15.8889H17.8889C19.0549 15.8889 20 14.9437 20 13.7778V3.2222C20 2.05626 19.0549 1.11108 17.8889 1.11108H3.11111C1.94518 1.11108 1 2.05626 1 3.2222V13.7778C1 14.9437 1.94518 15.8889 3.11111 15.8889Z"
        className="icon-path"
        stroke={hovered ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.7)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;

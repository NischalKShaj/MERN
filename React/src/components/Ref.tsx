// <========================== file to show the working of the use Ref ===============>

// importing the required modules
import { useEffect, useRef } from "react";

const Ref = () => {
  const colorRef = useRef<HTMLParagraphElement>(null);
  const getRandom = () => {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.color = getRandom();
    }
  }, []);
  return (
    <div>
      <p ref={colorRef}>change the color</p>
    </div>
  );
};

export default Ref;

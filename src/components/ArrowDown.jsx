import React, { useState, useEffect } from "react";
import Image from "next/image";
import Down from '../images/down.svg'

function RotateElement() {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    const resetRotation = () => {
      setIsRotated(false);
    };
    window.addEventListener("beforeunload", resetRotation);
    return () => {
      window.removeEventListener("beforeunload", resetRotation);
    };
  }, []);

  return (
    <Image 
     src = {Down}
     width ={20}
     height = {20}
      style={{
        transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease-in-out",
        marginTop : "10px"
      }}
      alt="arrow button"
      onClick={handleClick}
    />
  );
}

export default RotateElement;

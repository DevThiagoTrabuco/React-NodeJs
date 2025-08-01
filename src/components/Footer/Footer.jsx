import { Link } from "react-router";
import { FooterBottom, FooterTop } from "./FooterStyled";
import { useEffect, useState, useRef } from "react";

export function Footer() {
  const [isTop, setIsTop] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const atTop = window.scrollY === 0;
      setIsTop(atTop);

      if (atTop) {
        timeoutRef.current = setTimeout(() => {
          setIsTop(false);
        }, 3000);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function FooterContent() {
    return (
      <p>
        Projeto criado por{" "}
        <Link
          to="https://github.com/DevThiagoTrabuco"
          style={{
            textDecoration: "none",
            color: "#0bade3",
            fontFamily: "Google Sans Code",
            fontSize: "1.2rem",
          }}
          target="_blank"
        >
          DevThiagoTrabuco
        </Link>
      </p>
    );
  }

  return (
    <>
      <FooterTop $isTop={isTop}>
        <FooterContent />
      </FooterTop>

      {!isTop && (
        <FooterBottom>
          <FooterContent />
        </FooterBottom>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";

function Data() {
  const texts = [
    "Web Developer",
    "MERN Stack Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Web Designer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = isDeleting ? 50 : 100; // Speed for typing & deleting

  useEffect(() => {
    const currentText = texts[textIndex];

    // Update displayed text
    setDisplayText(currentText.substring(0, charIndex));

    // Logic for typing & deleting
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Change text
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const [typed, setTyped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTyped(true);
    }, 3000);
  }, []);

  return (
    <div className="home__data">
      <h1 className={`home__title ${typed ? "typed" : ""}`}>Md Sagor</h1>
      <h3 className="home__subtitle">A {displayText}</h3>
      <p className="home__description">
        I am a Full Stack Web Developer specializing in the MERN stack. Please
        feel free to reach out to me with any inquiries or messages.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <i className="bx bxs-send home__send"></i>
      </a>
    </div>
  );
}

export default Data;

import React from "react";

const EmailButton = ({ className, buttonText, email, subject, body }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button onClick={handleEmailClick} className={className}>
      {buttonText}
    </button>
  );
};

export default EmailButton;
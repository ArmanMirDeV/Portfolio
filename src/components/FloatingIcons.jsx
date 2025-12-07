import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";

export default function FloatingIcons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const baseButtonStyles =
    "fixed p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all text-white";

  return (
    <>
      {/* Message Icon */}
      <button
        onClick={handleEmailClick}
        className={`${baseButtonStyles} bottom-6 left-6`}
      >
        <Mail size={26} />
      </button>

      {/* Scroll To Top Icon */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className={`${baseButtonStyles} bottom-6 right-6`}
        >
          <ArrowUp size={26} />
        </button>
      )}
    </>
  );
}

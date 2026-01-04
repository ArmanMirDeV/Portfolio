import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, delay = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentString = text[textIndex];

    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    } else {
      if (currentIndex < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, text, speed, delay]);

  return displayText;
};

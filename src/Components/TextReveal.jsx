import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.mask');

    gsap.fromTo(
      items,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        delay: 2,
        ease: 'power4.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Split children into words and wrap in spans
  const wrapWords = (node) => {
    if (typeof node === 'string') {
      return node.split(' ').map((word, i) => (
        <span key={i} className="mask overflow-hidden inline-block mr-1">
          <span className="inline-block">{word}</span>
        </span>
      ));
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children: wrapWords(node.props.children),
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => <React.Fragment key={i}>{wrapWords(child)}</React.Fragment>);
    }

    return node;
  };

  return (
    <h1 className={className} ref={containerRef}>
      {wrapWords(children)}
    </h1>
  );
};

export default TextReveal;

import React, { useState, useEffect, useRef } from 'react';

const DraggableSlider = ({ riskToleranceHandler }) => {
  const [position, setPosition] = useState(0); // Initial position at 0%
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const newLeft = Math.min(
          Math.max(0, event.clientX - sliderRef.current.getBoundingClientRect().left),
          sliderWidth
        );
        const newPosition = newLeft / sliderWidth * 100;
        setPosition(newPosition); // Convert to percentage
      }
    };

    const handleTouchMove = (event) => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const touch = event.touches[0];
        const newLeft = Math.min(
          Math.max(0, touch.clientX - sliderRef.current.getBoundingClientRect().left),
          sliderWidth
        );
        const newPosition = newLeft / sliderWidth * 100;
        setPosition(newPosition); // Convert to percentage
      }
    };

    const handleMouseUp = () => {
      riskToleranceHandler(Math.round(position / 10));
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchEnd = () => {
      riskToleranceHandler(Math.round(position / 10));
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener('mousedown', (event) => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      });

      sliderRef.current.addEventListener('touchstart', (event) => {
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [position, riskToleranceHandler]);

  const sliderPosition = Math.round(position / 10) * 10; // Snap to nearest 10%

  return (
    <div className="w-full md:w-[300px] flex-shrink-0">
      <div className="w-full space-y-4 rounded-lg bg-white p-6 xs:w-[345px] md:w-[448px]">
        <div className="flex justify-between">
          <div className="font-bold" aria-atomic="true" aria-live="polite">
            Risk score: {sliderPosition / 10}
          </div>
          <div className="text-sm">Example portfolio</div>
        </div>
        <div className="relative h-1.5 w-full rounded-full bg-orange-400" ref={sliderRef}>
          <div
            style={{
              left: `${sliderPosition}%`,
              cursor: 'grab',
              transform: 'translate(-50%, -50%)',
            }}
            tabIndex="0"
            aria-valuemax="10"
            aria-valuemin="0.5"
            aria-valuenow={sliderPosition / 10}
            draggable="false"
            role="slider"
            aria-label="Drag to select portfolio score"
            className="absolute top-1/2 h-6 w-6 rounded-full border border-orange-500 border-opacity-20 bg-white shadow-lg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DraggableSlider;

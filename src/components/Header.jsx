import React from 'react';
import DraggableSlider from './DraggableSlider';

const Header = ({ riskToleranceHandler }) => {
  
  return (
    <div className="absolute top-0 left-0 right-0 flex -translate-y-1/2 transform justify-center">
      {/* <div className="w-[683px] md:w-[300px] flex-shrink-0">
        <div className="w-[310px] space-y-4 rounded-lg bg-white p-6 xs:w-[345px] md:w-[448px]">
          <div className="flex justify-between">
            <div className="font-bold" aria-atomic="true" aria-live="polite">
              Risk score: 10.0
            </div>
            <div className="text-sm">Example portfolio</div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-orange-400">
            <div
              style={{
                position: 'absolute',
                zIndex: 0,
                cursor: 'grab',
                transform: 'translate(388px, -9px)',
              }}
              tabIndex="0"
              aria-valuemax="10"
              aria-valuemin="0.5"
              aria-valuenow="10"
              draggable="false"
              role="slider"
              aria-label="Drag to select portfolio score"
              className="h-6 w-6 rounded-full border border-orange-500 border-opacity-20 bg-white shadow-lg"
            ></div>
          </div>
        </div>
      </div> */}

      <DraggableSlider riskToleranceHandler={riskToleranceHandler} />
    </div>
  );
};

export default Header;

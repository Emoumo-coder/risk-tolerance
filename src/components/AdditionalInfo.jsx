import React from 'react';

const AdditionalInfo = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start pt-8 text-eggplant sm:py-10 lg:pl-8">
      <div className="order-last w-auto space-y-4 justify-self-center px-8 md:px-12 lg:order-first lg:justify-self-end lg:px-6 xl:w-96 2xl:w-[500px]">
        <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Smarter investing, brilliantly personalized.</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg lg:w-[300px] 2xl:w-[334px] 3xl:w-[420px]">
              Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.
            </p>
          </div>
          <div className="flex flex-row md:items-center lg:space-x-8">
            <a
              className="relative items-center justify-center rounded-md transition-all font-medium px-5 py-3 text-lg bg-blue-600 text-white inline-flex whitespace-nowrap"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

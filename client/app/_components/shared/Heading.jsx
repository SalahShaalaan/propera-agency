import React from "react";

export default function Heading({
  title,
  description,
  className,
  titleColor = "text-mainBlack",
  descriptionColor = "text-gray-700",
}) {
  return (
    <div className="mb-8">
      <div className="flex mb-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center space-x-2">
            <span className="text-mainGold opacity-70 text-3xl">★</span>
            <span className="text-mainGold opacity-50 text-2xl">★</span>
            <span className="text-mainGold opacity-30 text-xl">★</span>
          </div>
        </div>
      </div>
      <div className={`${className} max-w-3xl`}>
        <h1 className={`text-4xl font-bold my-3 ${titleColor}`}>{title}</h1>
        <p className={`text-lg font-normal ${descriptionColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

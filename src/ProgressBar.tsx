import React from 'react';

type ProgressBarProps = {
  currentHorizontalIndex: number;
  totalHorizontalSlides: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentHorizontalIndex,
  totalHorizontalSlides,
}) => {
  if (totalHorizontalSlides === 0) {
    return null; // Or some placeholder if preferred
  }

  const progressPercentage = ((currentHorizontalIndex + 1) / totalHorizontalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-200"> {/* Or use theme colors */}
      <div
        className="h-full bg-blue-500" // Or use theme colors
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;

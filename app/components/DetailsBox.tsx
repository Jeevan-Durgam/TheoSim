import React from "react";

interface DetailsBoxProps {
  className: string;
}

const DetailsBox: React.FC<DetailsBoxProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <p>This contains data for all the items in the page.</p>
    </div>
  );
};

export default DetailsBox;

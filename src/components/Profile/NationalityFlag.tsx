import React from "react";
import Flag from "react-world-flags";

interface NationalityFlagProps {
  nationality: string;
  country: string;
}

const NationalityFlag: React.FC<NationalityFlagProps> = ({
  nationality,
  country,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold mb-2 md:mb-0 md:mr-2">Nationality:</div>
      <div className="flex items-center">
        <Flag code={nationality} className="w-10 h-10" />
        <span className="text-lg font-semibold ml-2">{country}</span>
      </div>
    </div>
  );
};

export default NationalityFlag;

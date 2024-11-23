import React from "react";
import { useAppContext } from "../context/AppContext";

const WardrobeVisualization: React.FC = () => {
  const { state } = useAppContext();
  const { formats } = state;

  const cabinetFormat = formats.find((format) => format.type === "Bok szafy");
  const shelfFormat = formats.find((format) => format.type === "Półka");
  const partitionFormat = formats.find((format) => format.type === "Przegroda");

  
  const cabinetHeight = cabinetFormat?.height || 2000; 
  const cabinetDepth = cabinetFormat?.width || 600; 
  const shelvesCount = shelfFormat?.count || 6;
  const partitionsCount = partitionFormat?.count || 0;

 
  const padding = 64;

 
  const partitionWidth = cabinetDepth / (partitionsCount + 1);
  const shelfHeight = cabinetHeight / (shelvesCount + 1);

  return (
    <div className="bg-black text-white p-4 mb-6 mx-auto max-w-3xl border border-current">
      <h2 className="text-lg mb-4">Wizualizacja szafy</h2>
      <svg
        viewBox={`0 -${padding} ${cabinetDepth} ${cabinetHeight + 2 * padding}`}
        width="100%"
        height="400px"
        className="bg-customBg border border-white"
      >
      
        <rect
          x="0"
          y="0"
          width={cabinetDepth}
          height={cabinetHeight}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-lime-400"
        />

        {[...Array(partitionsCount)].map((_, i) => (
          <line
            key={`partition-${i}`}
            x1={(i + 1) * partitionWidth}
            y1="0"
            x2={(i + 1) * partitionWidth}
            y2={cabinetHeight}
            stroke="currentColor"
            strokeWidth="4"
            className="text-lime-400"
          />
        ))}

       
        {[...Array(shelvesCount)].map((_, i) => (
          <line
            key={`shelf-${i}`}
            x1="0"
            y1={(i + 1) * shelfHeight}
            x2={cabinetDepth}
            y2={(i + 1) * shelfHeight}
            stroke="currentColor"
            strokeWidth="4"
            className="text-lime-400"
          />
        ))}
      </svg>
    </div>
  );
};

export default WardrobeVisualization;

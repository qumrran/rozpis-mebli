import React from "react";
import { useAppContext } from "../context/AppContext";

const WardrobeVisualization: React.FC = () => {
  const { state } = useAppContext();
  const { formats } = state;

  
  const [cabinetFormat, shelfFormat, partitionFormat, bottomTopFormat] = [
    "Bok szafy",
    "Półka",
    "Przegroda",
    "Wieniec dolny/górny",
  ].map((type) => formats.find((format) => format.type === type));

 
  const cabinetHeight = cabinetFormat?.height || 2000;
  const cabinetWidth = cabinetFormat?.width || 600;
  const plateThickness = cabinetFormat?.plateThickness || 18;
  const bottomTopWidth = bottomTopFormat?.width || 596;
  const totalWidth = bottomTopWidth + 2 * plateThickness;

  
  const shelvesCount = shelfFormat?.count || 6;
  const partitionsCount = partitionFormat?.count || 0;

  
  const padding = 64;
  const partitionWidth = totalWidth / (partitionsCount + 1);
  const shelfHeight = cabinetHeight / (shelvesCount + 1);

  
  console.log({
    cabinetHeight,
    cabinetWidth,
    bottomTopWidth,
    totalWidth,
    shelvesCount,
    partitionsCount,
    partitionWidth,
    shelfHeight,
  });

  return (
    <div className="bg-black text-white p-4 mb-6 mx-auto max-w-3xl border border-current">
      <h2 className="text-lg mb-4">Wizualizacja szafy</h2>
      <svg
        viewBox={`0 -${padding} ${totalWidth} ${cabinetHeight + 2 * padding}`}
        width="100%"
        height="400px"
        className="bg-customBg border border-white"
      >
      
        <rect
          x="0"
          y="0"
          width={totalWidth}
          height={cabinetHeight}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-lime-400"
        />

     
        {[...Array(partitionsCount)].map((_, i) => (
          <line
            key={i}
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
            key={i}
            x1="0"
            y1={(i + 1) * shelfHeight}
            x2={totalWidth}
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

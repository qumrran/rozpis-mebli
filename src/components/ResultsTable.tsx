import React from "react";
import { useAppContext } from "../context/AppContext";
import { generatePDF } from "../utils/pdfUtils";
import { IoMdDownload } from "react-icons/io";

const ResultsTable: React.FC = () => {
  const { state } = useAppContext();

  return (
    <div className="mt-6">
      <div className="bg-black text-white p-4 mb-6 mx-auto max-w-3xl border border-current">
        <h2 className="text-lg font-bold mb-4">Lista formatek:</h2>
        {state.formats.length === 0 ? (
          <p className="text-gray-400 font-light">Brak wyników do wyświetlenia.</p>
        ) : (
          <>
            <table className="w-full text-left border-collapse border border-inherit">
              <thead>
                <tr>
                  <th className="table-cell text-lime-400">Opis</th>
                  <th className="table-cell text-lime-400">Wymiary</th>
                  <th className="table-cell text-lime-400">Ilość</th>
                </tr>
              </thead>
              <tbody>
                {state.formats.map((format, index) => (
                  <tr key={index} className="border border-lime-400 ">
                    <td className="table-cell">{format.type}</td>
                    <td className="table-cell">{`${format.width} x ${format.height}`}</td>
                    <td className="table-cell">{format.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => generatePDF(state.formats)}
              className="btn-custom mt-4 flex items-center justify-center space-x-2"
            >
              <span>Pobierz PDF</span>
              <IoMdDownload className="text-xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsTable;

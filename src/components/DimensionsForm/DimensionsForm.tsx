import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { calculateFormats } from "../../utils/calculateFormats";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { DimensionsFormData, NumericDimensionsFormData } from "./DimensionsForm.types";

const DimensionsForm: React.FC = () => {
  const { dispatch } = useAppContext();
  const [formData, setFormData] = useState<DimensionsFormData>({
    width: "600",
    height: "2000",
    depth: "600",
    shelvesCount: "6",
    partitionsCount: "0",
    plateThickness: "18",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericFormData: NumericDimensionsFormData = {
      width: Number(formData.width),
      height: Number(formData.height),
      depth: Number(formData.depth),
      shelvesCount: Number(formData.shelvesCount),
      partitionsCount: Number(formData.partitionsCount),
      plateThickness: Number(formData.plateThickness),
    };
    const formats = calculateFormats(numericFormData);
    dispatch({ type: "SET_FORMATS", payload: formats });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black border border-current text-white p-4 mb-6">
      <h2 className="text-lg mb-4">Wprowadź wymiary szafy</h2>

      <label className="block mb-3">
        <span className="text-sm font-light">Szerokość szafy (mm):</span>
        <input
          type="number"
          name="width"
          value={formData.width}
          onChange={handleChange}
          className="input-base"
          min="1"
          max="2800"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-light">Wysokość szafy (mm):</span>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="input-base"
          min="1"
          max="2800"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-light">Głębokość szafy (mm):</span>
        <input
          type="number"
          name="depth"
          value={formData.depth}
          onChange={handleChange}
          className="input-base"
          min="1"
          max="2800"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-light">Liczba przegród poziomych (półek):</span>
        <input
          type="number"
          name="shelvesCount"
          value={formData.shelvesCount}
          onChange={handleChange}
          className="input-base"
          min="0"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-light">Liczba przegród pionowych:</span>
        <input
          type="number"
          name="partitionsCount"
          value={formData.partitionsCount}
          onChange={handleChange}
          className="input-base"
          min="0"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm font-light">Grubość płyty (mm):</span>
        <select
          name="plateThickness"
          value={formData.plateThickness}
          onChange={handleChange}
          className="input-base"
        >
          <option value="16">16 mm</option>
          <option value="18">18 mm</option>
        </select>
      </label>

      <button
        type="submit"
        className="btn-custom flex items-center justify-center space-x-2"
      >
        <span>Oblicz formatki</span>
        <PiArrowsCounterClockwiseBold className="text-xl" />
      </button>
    </form>
  );
};

export default DimensionsForm;

import { jsPDF } from "jspdf";
import "jspdf-autotable";

export interface Format {
  type: string;
  width: number;
  height: number;
  count: number;
}

export const generatePDF = (formats: Format[]) => {
  const doc = new jsPDF();

  doc.setFont("helvetica");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Lista formatek", 10, 20);

  doc.autoTable({
    startY: 30,
    head: [["Opis", "Wymiary", "Ilość"]],
    body: formats.map((format) => [
      format.type,
      `${format.width} x ${format.height}`,
      format.count,
    ]),
    styles: {
      fontSize: 12,
      cellPadding: 5,
    },
    headStyles: {
      fillColor: [0, 0, 0],
      textColor: [255, 255, 255],
    },
    bodyStyles: {
      textColor: [0, 0, 0],
    },
    margin: { top: 20 },
  });

  doc.save("formatki.pdf");
};

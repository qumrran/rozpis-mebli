import React from "react";
import Header from "./components/Header";
import DimensionsForm from "./components/DimensionsForm";
import ResultsTable from "./components/ResultsTable";
import { AppProvider } from "./context/AppContext";
import Footer from "./components/Footer";
import WardrobeVisualization from "./components/WardrobeVisualization";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-black text-white font-mono p-4">
      <Header />
        <main className="max-w-3xl mx-auto">
          <DimensionsForm />
          <ResultsTable />
          <WardrobeVisualization />
        </main>
       <Footer/>
      </div>
    </AppProvider>
  );
};

export default App;

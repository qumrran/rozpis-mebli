import React from 'react';
import Header from './components/Header/Header';
import DimensionsForm from './components/DimensionsForm/DimensionsForm';
import ResultsTable from './components/ResultsTable/ResultsTable';
import { AppProvider } from './context/AppContext';
import Footer from './components/Footer/Footer';
import WardrobeVisualization from './components/WardrobeVisualization/WardrobeVisualization';

const App: React.FC = () => {
	return (
		<AppProvider>
			<div className='min-h-screen bg-black text-white font-mono p-4'>
				<Header />
				<main className='max-w-3xl mx-auto'>
					<DimensionsForm />
					<WardrobeVisualization />
					<ResultsTable />
				</main>
				<Footer />
			</div>
		</AppProvider>
	);
};

export default App;

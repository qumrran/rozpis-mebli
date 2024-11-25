import React from 'react';
import { useAppContext } from '../../context/AppContext';

const WardrobeVisualization: React.FC = () => {
	const { state } = useAppContext();
	const { formats } = state;

	const [cabinetFormat, shelfFormat, partitionFormat, bottomTopFormat] = [
		'Bok szafy',
		'Półka',
		'Przegroda',
		'Wieniec dolny/górny',
	].map((type) => formats.find((format) => format.type === type));

	const cabinetHeight = cabinetFormat?.height || 2000;
	const plateThickness = cabinetFormat?.plateThickness || 18;
	const bottomTopWidth = bottomTopFormat?.width || 564;
	const totalWidth = bottomTopWidth + 2 * plateThickness;

	const shelvesCount = shelfFormat?.count || 6;
	const partitionsCount = partitionFormat?.count || 0;

	const padding = Math.max(16, Math.min(64, cabinetHeight / 20));
	const horizontalPadding = Math.max(16, Math.min(64, totalWidth / 20));

	const partitionWidth = totalWidth / (partitionsCount + 1);
	const sectionShelvesCount = Math.floor(shelvesCount / (partitionsCount + 1));
	const shelfHeight = cabinetHeight / (sectionShelvesCount + 1);
	const dynamicStrokeWidth = Math.max(
		1,
		Math.min(totalWidth, cabinetHeight) / 200
	);

	return (
		<div className='bg-black text-white p-4 mb-6 mx-auto max-w-3xl border border-current'>
			<h2 className='text-lg mb-4'>Wizualizacja szafy</h2>
			<svg
				viewBox={`-${horizontalPadding} -${padding} ${
					totalWidth + 2 * horizontalPadding
				} ${cabinetHeight + 2 * padding}`}
				width='100%'
				height='400px'
				className='bg-customBg border border-white'
			>
				<rect
					x='0'
					y='0'
					width={totalWidth}
					height={cabinetHeight}
					fill='none'
					stroke='currentColor'
					strokeWidth={dynamicStrokeWidth}
					className='text-lime-400'
				/>

				{[...Array(partitionsCount)].map((_, i) => (
					<line
						key={`partition-${i}`}
						x1={(i + 1) * partitionWidth}
						y1='0'
						x2={(i + 1) * partitionWidth}
						y2={cabinetHeight}
						stroke='currentColor'
						strokeWidth={dynamicStrokeWidth}
						className='text-lime-400'
					/>
				))}

				{[...Array(sectionShelvesCount)].map((_, i) => (
					<line
						key={`shelf-${i}`}
						x1='0'
						y1={(i + 1) * shelfHeight}
						x2={totalWidth}
						y2={(i + 1) * shelfHeight}
						stroke='currentColor'
						strokeWidth={dynamicStrokeWidth}
						className='text-lime-400'
					/>
				))}
			</svg>
		</div>
	);
};

export default WardrobeVisualization;

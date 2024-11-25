export function calculateFormats({
	width,
	height,
	depth,
	shelvesCount,
	partitionsCount,
	plateThickness,
}: {
	width: number;
	height: number;
	depth: number;
	shelvesCount: number;
	partitionsCount: number;
	plateThickness: number;
}) {
	const formats = [];

	
	const cabinetWidth = width - 2 * plateThickness;

	
	const calculateShelfWidth = () => {
		return parseFloat(
			(
				(cabinetWidth - partitionsCount * plateThickness) /
				(partitionsCount + 1)
			).toFixed(1)
		);
	};

	const totalShelvesCount = shelvesCount * (partitionsCount + 1);

	
	formats.push({
		type: 'Bok szafy',
		width: depth,
		height,
		count: 2,
		plateThickness,
	});


	formats.push({
		type: 'Wieniec dolny/górny',
		width: cabinetWidth,
		height: depth,
		count: 2,
		plateThickness,
	});

	
	if (shelvesCount > 0) {
		formats.push({
			type: 'Półka',
			width: calculateShelfWidth(),
			height: depth - 3,
			count: totalShelvesCount, 
			plateThickness,
		});
	}

	
	if (partitionsCount > 0) {
		const partitionHeight = height - 2 * plateThickness;
		formats.push({
			type: 'Przegroda',
			width: depth,
			height: partitionHeight,
			count: partitionsCount,
			plateThickness,
		});
	}

	return formats;
}

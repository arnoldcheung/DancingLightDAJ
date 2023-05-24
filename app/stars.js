function setupStars(){
	starsGraphics = createGraphics(width, height);
	
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: starsGraphics, colorMode: 'mono'});

	overlayStarsGraphics = createGraphics(width, height);
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: overlayStarsGraphics, colorMode: 'mono'});


	// overlayStarGraphics = createGraphics(width, height);
	// drawStars(3000, {minSize: 1, maxSize: 5, canvas: overlayStarGraphics});

}

function drawStars(numEllipses, options={}){
	
	const defaults = {
		minSize: 5,
		maxSize: 20,
		canvas: null,
		colorMode: 'mono'
	};
		
	const { minSize, maxSize, canvas, colorMode } = { ...defaults, ...options };
		
		// if(colorMode == 'mono'){
		// 	canvas.fill('#FFFFFF');
		// }	

	// console.log(colorMode);

	for (let i = 0; i < numEllipses; i++) {
		let x = random(0, canvas.width);
		let y = random(0, canvas.height);
		let ellipseSize = random(minSize, maxSize);
		
		let starColor;

		if(colorMode == 'random'){
			starColor = color(random(255), random(255), random(255));
		} else if (colorMode == 'mono'){
			starColor = color('#FFFFFF');
		}

		// console.log(starColor)

		// if(colorMode == 'random'){
		// 	// let r = random(255);
		// 	// let g = random(255);
		// 	// let b = random(255);

		// 	// if(canvas){
		// 	// 	canvas.fill(starColor);
		// 	// 	// console.log('random stars')
		// 	// } else {
		// 	// 	fill(random(255), random(255), random(255));
		// 	// }
		// }
			
		if(canvas){
			canvas.noStroke();
			canvas.fill(starColor);
			canvas.ellipse(x, y, ellipseSize, ellipseSize);
		} else {
			noStroke();
			fill(starColor);
			ellipse(x, y, ellipseSize, ellipseSize);
		}	
	}
}
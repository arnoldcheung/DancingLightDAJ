function setupWaves(){
	waveGraphics = createGraphics(width, height);

}

function drawWave(chi=false){
	waveGraphics.push();
	
	if(chi == false){
		waveGraphics.fill(colorList[3]);
	} else if (chi == true) {
		// print('hihihi');
		waveGraphics.fill(255, 1);
		// waveGraphics.noFill();
		
	}

	waveGraphics.noStroke();
	waveGraphics.beginShape();
	waveGraphics.vertex(-100, waveHeight);
	waveGraphics.vertex(-100, 0);
	waveGraphics.vertex(width + 100, 0);
	waveGraphics.vertex(width + 100, waveHeight);
	
	for(var i=waveGraphics.width + 100; i >= -100; i-=waveGraphics.width / 100){
		let y = waveHeight * map(noise(frameCount * 0.002, i * 0.001), 0, 1, 0.4, 1.6);
		if(chi == true){
			// y = y + 100;
			waveGraphics.curveVertex(i, y + 15);
			// print('down')
		} else {
			waveGraphics.curveVertex(i, y);

		}
	}
	waveGraphics.endShape(CLOSE);

	if(chi == true) {
		waveGraphics.push();
		waveGraphics.drawingContext.clip();
		// waveGraphics.fill(255, 0, 0);
		waveGraphics.image(overlayStarsGraphics, 0, 0)
		waveGraphics.pop();
	}

	waveGraphics.pop();
}
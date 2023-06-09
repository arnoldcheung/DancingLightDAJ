// function sliderSetup(){
// 	//slider definition
// 	size_slider = createSlider(10, min(width, height) * 0.8, 10, 1);
// 	energySizeSlider = createSlider(5, 50, 20, 1);
// 	// waveFrequencySlider = createSlider(0.00001, 0.005, 0.001, 0.00001);
// 	energyHeightSlider = createSlider(-600, 1600, 0, 1);
// 	orbit_speed_slider = createSlider(-5, 5, 0.5, 0.0001);
// 	radiationSizeSlider = createSlider(0.1, 1, 0.5, 0.01);
	
// 	// set slider parent and classes
// 	size_slider.parent(controlPanel);
// 	energySizeSlider.parent(controlPanel);
// 	// waveFrequencySlider.parent(controlPanel);
// 	energyHeightSlider.parent(controlPanel);
// 	orbit_speed_slider.parent(controlPanel);
// 	radiationSizeSlider.parent(controlPanel);

// 	size_slider.class('custom-slider');
// 	energySizeSlider.class('custom-slider');
// 	// waveFrequencySlider.class('custom-slider');
// 	energyHeightSlider.class('custom-slider');
// 	orbit_speed_slider.class('custom-slider');
// 	radiationSizeSlider.class('custom-slider');

// 	resetSliders();
	
	
// 	// slider events
// 	size_slider.mouseReleased(resetSizeSlider);
// 	size_slider.touchEnded(resetSizeSlider);
	
// 	size_slider.touchStarted(puntoSliderEvent);
// 	size_slider.mousePressed(puntoSliderEvent);
	
// 	energySizeSlider.touchStarted(energySliderEvent);
// 	energySizeSlider.mousePressed(energySliderEvent);
	
// 	energyHeightSlider.touchStarted(energySliderEvent);
// 	energyHeightSlider.mousePressed(energySliderEvent);
	
// 	orbit_speed_slider.touchStarted(orbitSliderEvent);
// 	orbit_speed_slider.mousePressed(orbitSliderEvent);
	
// 	radiationSizeSlider.touchStarted(radiationSliderEvent);
// 	radiationSizeSlider.mousePressed(radiationSliderEvent);
	
// 	// waveFrequencySlider.touchStarted(WaveSliderEvent);
// 	// waveFrequencySlider.mousePressed(WaveSliderEvent);

	
// }

function sliderSetup(){
	//slider definition
	backgroundSlider = createSlider(0, 255, 255, 1);

	puntoSizeSlider = createSlider(width * 0.1, width * 0.9, width * 0.7, 1);
	roundnessSlider = createSlider(0, 50, 50, 1);
	infinityNumSlider = createSlider(0, 3, 3, 1);
	// infinityWidthSlider = createSlider(50, 250, 100, 1);
	waveHeightSlider = createSlider(-10, waveGraphics.height * 0.9, waveGraphics.height * 0.6, 1);
	chiSlider = createSlider(0, 255, 255, 1);

	
	// set slider parent and classes
	backgroundSlider.parent(controlPanel);
	
	puntoSizeSlider.parent(controlPanel);
	roundnessSlider.parent(controlPanel);
	infinityNumSlider.parent(controlPanel);
	// infinityWidthSlider.parent(controlPanel);
	waveHeightSlider.parent(controlPanel);
	chiSlider.parent(controlPanel);


	backgroundSlider.class('custom-slider');

	puntoSizeSlider.class('custom-slider');
	roundnessSlider.class('custom-slider');
	infinityNumSlider.class('custom-slider');
	// infinityWidthSlider.class('custom-slider');
	waveHeightSlider.class('custom-slider');
	chiSlider.class('custom-slider');

	resetSliders();
	
	
	// slider events

	backgroundSlider.touchStarted(backgroundSliderEvent);
	backgroundSlider.mousePressed(backgroundSliderEvent);

	puntoSizeSlider.touchStarted(puntoSliderEvent);
	puntoSizeSlider.mousePressed(puntoSliderEvent);

	roundnessSlider.touchStarted(puntoSliderEvent);
	roundnessSlider.mousePressed(puntoSliderEvent);

	infinityNumSlider.touchStarted(infinitySliderEvent);
	infinityNumSlider.mousePressed(infinitySliderEvent);
	
	// infinityWidthSlider.touchStarted(infinitySliderEvent);
	// infinityWidthSlider.mousePressed(infinitySliderEvent);
	
	waveHeightSlider.touchStarted(waveSliderEvent);
	waveHeightSlider.mousePressed(waveSliderEvent);	

	chiSlider.touchStarted(chiSliderEvent);
	chiSlider.mousePressed(chiSliderEvent);	
}

// function resetSliders(){

// 	size_slider.position(movementCheckbox.x + parseFloat(movementCheckbox.style('width')) + 10, puntoCheckbox.y);
// 	energyHeightSlider.position(size_slider.x, energyCheckbox.y);
// 	energySizeSlider.position(size_slider.x, movementCheckbox.y);
// 	orbit_speed_slider.position(size_slider.x, orbitCheckbox.y);
// 	radiationSizeSlider.position(size_slider.x, radiationCheckbox.y);
// 	// waveFrequencySlider.position(size_slider.x, waveCheckbox.y);

// 	// slider style
// 	size_slider.style('width', controlPanel.width * 0.95 - size_slider.x + 'px');
// 	energySizeSlider.style('width', size_slider.style('width'));
// 	// waveFrequencySlider.style('width', size_slider.style('width'));
// 	energyHeightSlider.style('width', size_slider.style('width'));
// 	orbit_speed_slider.style('width', size_slider.style('width'));
// 	radiationSizeSlider.style('width', size_slider.style('width'));

// 	// reset slider values

// 	size_slider.value(10);
// 	energySizeSlider.value(20);
// 	// waveFrequencySlider.value(0.001);
// 	energyHeightSlider.value(0);
// 	orbit_speed_slider.value(0.5);
// 	radiationSizeSlider.value(0.5);	
// }

function resetSliders(){
	
	let longestName;
	if(currentLanguage == 'en'){
		longestName = waveCheckbox;
	} else if (currentLanguage == 'zh'){
		longestName = puntoCheckbox;
	}

	backgroundSlider.position(longestName.x + parseFloat(longestName.style('width')) + 10, backgroundCheckbox.y);

	puntoSizeSlider.position(backgroundSlider.x, puntoCheckbox.y);
	roundnessSlider.position(backgroundSlider.x, roundnessCheckbox.y);
	infinityNumSlider.position(backgroundSlider.x, brushCheckbox.y);
	// infinityWidthSlider.position(puntoSizeSlider.x, infinityCheckbox.y + sliderSpacing);
	waveHeightSlider.position(backgroundSlider.x, waveCheckbox.y);
	chiSlider.position(backgroundSlider.x, chiCheckbox.y);


	// slider style
	backgroundSlider.style('width', controlPanel.width * 0.9 - backgroundSlider.x + 'px');

	puntoSizeSlider.style('width', backgroundSlider.style('width'));
	roundnessSlider.style('width', backgroundSlider.style('width'));
	infinityNumSlider.style('width', backgroundSlider.style('width'));
	// infinityWidthSlider.style('width', puntoSizeSlider.style('width'));
	waveHeightSlider.style('width', backgroundSlider.style('width'));
	chiSlider.style('width', backgroundSlider.style('width'));


	// reset slider values
	backgroundSlider.value(255);

	puntoSizeSlider.value(width * 0.7);
	roundnessSlider.value(50);
	infinityNumSlider.value(3);
	// infinityWidthSlider.value(100);
	waveHeightSlider.value(waveGraphics.height * 0.6);
	chiSlider.value(255);
}

function backgroundSliderEvent(){
	currentColorSelectionIndex = 0;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// energyCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	backgroundSlider.addClass('current-selected');
}

function puntoSliderEvent(){
	currentColorSelectionIndex = 1;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// puntoCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	puntoSizeSlider.addClass('current-selected');
	roundnessSlider.addClass('current-selected');
}

function infinitySliderEvent(){
	currentColorSelectionIndex = 2;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// infinityCheckbox.checked(true);
	generated = false;
	
	resetCurrentSelected();
	infinityNumSlider.addClass('current-selected');

}

function waveSliderEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// waveCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	waveHeightSlider.addClass('current-selected');

}

function chiSliderEvent(){
	currentColorSelectionIndex = 4;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// waveCheckbox.checked(true);
	generated = false;

	resetCurrentSelected();
	chiSlider.addClass('current-selected');

}


// function resetSizeSlider(){
// 	size_slider.value(10);
// 	punto_r = 10;
// }

// function puntoSliderEvent(){
// 	currentColorSelectionIndex = 2;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	// puntoCheckbox.checked(true);
// 	generated = false;
// }

// function energySliderEvent(){
// 	currentColorSelectionIndex = 3;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	// energyCheckbox.checked(true);
// 	generated = false;
// }

// function orbitSliderEvent(){
// 	currentColorSelectionIndex = 5;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	// orbitCheckbox.checked(true);
// 	generated = false;
// }

// function radiationSliderEvent(){
// 	currentColorSelectionIndex = 6;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	// radiationCheckbox.checked(true);
// 	generated = false;
// }

// // function WaveSliderEvent(){
// // 	currentColorSelectionIndex = 7;
// // 	elementName.html(colorNameList[currentColorSelectionIndex]);
// // 	elementName.style('color', colorList[currentColorSelectionIndex]);
// // 	waveCheckbox.checked(true);
// // 	generated = false;
// // }
function checkboxSetup(){
	// slider intro text
	sliderIntroText = createDiv(getTranslation("adjustSliderInstruction"));
	sliderIntroText.parent(controlPanel);
	sliderIntroText.addClass('controlPanelText');
	// sliderIntroText.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 15);	

	//checkbox definition
	// puntoCheckbox = createCheckbox('Punto', true);
	// orbitCheckbox = createCheckbox('Vitality', true);
	// energyCheckbox = createCheckbox('Energy', true);
	// movementCheckbox = createCheckbox('Movement', true);
	// radiationCheckbox = createCheckbox('Radiation', true);
	// waveCheckbox = createCheckbox('Wave', false);
	// signatureCheckbox = createCheckbox('Signature', false);

	// test.....................................................................................
	backgroundCheckbox = createDiv('Space');
	
	puntoCheckbox = createDiv('Punto');
	roundnessCheckbox = createDiv('Energy');
	brushCheckbox = createDiv('Movement');
	waveCheckbox = createDiv('Vitality');
	chiCheckbox = createDiv('Chi');

	// radiationCheckbox = createDiv('Radiation');
	
	// checkbox parent
	backgroundCheckbox.parent(controlPanel);

	puntoCheckbox.parent(controlPanel);
	roundnessCheckbox.parent(controlPanel);
	brushCheckbox.parent(controlPanel);
	waveCheckbox.parent(controlPanel);
	chiCheckbox.parent(controlPanel);
	// radiationCheckbox.parent(controlPanel);
	// waveCheckbox.parent(controlPanel);

	backgroundCheckbox.addClass('controlPanelText');

	puntoCheckbox.addClass('controlPanelText');
	roundnessCheckbox.addClass('controlPanelText');
	brushCheckbox.addClass('controlPanelText');
	waveCheckbox.addClass('controlPanelText');
	chiCheckbox.addClass('controlPanelText')
	// radiationCheckbox.addClass('controlPanelText');

	resetCheckboxes();

	// checkbox events
	// puntoCheckbox.touchStarted(puntoEvent);
	// puntoCheckbox.mouseClicked(puntoEvent);
	
	// energyCheckbox.touchStarted(energyEvent);
	// energyCheckbox.mouseClicked(energyEvent);
	
	// orbitCheckbox.touchStarted(orbitEvent);
	// orbitCheckbox.mouseClicked(orbitEvent);
	
	// radiationCheckbox.touchStarted(radiationEvent);
	// radiationCheckbox.mouseClicked(radiationEvent);
	
	// waveCheckbox.touchStarted(WaveEvent);
	// waveCheckbox.mouseClicked(WaveEvent);
}

function resetCheckboxes(){

	sliderIntroText.html(getTranslation("adjustSliderInstruction"));
	sliderIntroText.position(numberInput.x, elementName.y + parseFloat(elementName.style('height')) + 15);	

	backgroundCheckbox.html(getTranslation('elementList')[5]);

	puntoCheckbox.html(getTranslation('elementList')[0]);
	roundnessCheckbox.html(getTranslation('elementList')[1]);
	brushCheckbox.html(getTranslation('elementList')[2]);
	waveCheckbox.html(getTranslation('elementList')[3]);
	chiCheckbox.html(getTranslation('elementList')[4]);

	// radiationCheckbox.html(getTranslation('elementList')[4]);
	
	backgroundCheckbox.position(numberInput.x, sliderIntroText.y + 35);	// this position here controls all the checkbox / sliders' position relative this this


	puntoCheckbox.position(numberInput.x, backgroundCheckbox.y + sliderSpacing);	// this position here controls all the checkbox / sliders' position relative this this
	// puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	roundnessCheckbox.position(puntoCheckbox.x, backgroundCheckbox.y + 2 * sliderSpacing);
	brushCheckbox.position(puntoCheckbox.x, backgroundCheckbox.y + 3 * sliderSpacing);
	waveCheckbox.position(puntoCheckbox.x, backgroundCheckbox.y + 4 * sliderSpacing);
	chiCheckbox.position(puntoCheckbox.x, backgroundCheckbox.y + 5 * sliderSpacing);

	// radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);
	// waveCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);

	// puntoCheckbox.checked(true);
	// orbitCheckbox.checked(true);
	// energyCheckbox.checked(true);
	// movementCheckbox.checked(true);
	// radiationCheckbox.checked(true);
	// waveCheckbox.checked(false);
}

// function puntoEvent(){
// 	currentColorSelectionIndex = 2;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

// function energyEvent(){
// 	currentColorSelectionIndex = 3;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

// function orbitEvent(){
// 	currentColorSelectionIndex = 5;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

// function radiationEvent(){
// 	currentColorSelectionIndex = 6;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

// function WaveEvent(){
// 	currentColorSelectionIndex = 7;
// 	elementName.html(colorNameList[currentColorSelectionIndex]);
// 	elementName.style('color', colorList[currentColorSelectionIndex]);
// 	generated = false;
// }

function signatureEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);

	signature = false;
}

function messageEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}
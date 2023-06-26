currentPixelDensity = 1;

// Control Panel Setup ----------------------------------------------------------------------------------------
let panelVisible = true; // boolean to check if controlPanel is currently visible
let controlPanel; // the Div that is the control panel

let iroPickerDiv; // div that contains the colorpicker

let elementName; // element name Div element

// buttons ----------------------------------------------------------------------------------------
let generateButton;
let fontButton;

let nextElementButton;
let hideShowButton; // the button toggle that turns the controlPanel on & off (will rename)
let captureButton;
let resetButton;
let translateButton;

// list of canvas and graphics stacked on top of base canvas ----------------------------------------------------------------------------------------
let mainCanvas;
let puntoGraphics;
let starsGraphics;
let infinityGraphics;

let brushGraphics;

let brushGraphics1;
let brushGraphics2;
let brushGraphics3;


let waveGraphics;

let overlayStarsGraphics;
let puntoStarsGraphics;

let buttonMenuDiv;

let buttonMenuHeight = 70;

let bottomBannerGraphics;

let downloadCanvas;

// flag to show signature or not ----------------------------------------------------------------------------------------
let signature = false;

// punto variables ----------------------------------------------------------------------------------------
var punto_r;

// flag that checks if the art is generated or modified ----------------------------------------------------------------------------------------
let generated = false;

// the generation number ----------------------------------------------------------------------------------------
let universeNumber;

// sliders ----------------------------------------------------------------------------------------

let sliderIntroText; // adjust the composition

let sliderSpacing = 40;

let puntoSizeSlider;
let roundnessSlider;
let infinityNumSlider;
let infinityWidthSlider;
let waveHeightSlider;
let chiSlider;

// newly adsded sliders ---
let backgroundSlider;
let signatureSlider;

// let size_slider;

// let energySizeSlider;

// // let waveFrequencySlider;
// let energyHeightSlider;

// let orbit_speed_slider;

// let radiationSizeSlider

// Checkboxes ----------------------------------------------------------------------------------------
let puntoCheckbox;
let roundnessCheckbox;
let infinityCheckbox;
let brushCheckbox;
let waveCheckbox;
let chiCheckbox;

// newly adsded checkboxes ---
let backgroundCheckbox;
let signatureCheckbox;

// let puntoCheckbox;
// let orbitCheckbox;
// let energyCheckbox;
// let radiationCheckbox
// let waveCheckbox;

// text inputs ----------------------------------------------------------------------------------------
let nameInput;
let messageInput;
let numberInput;

// font ----------------------------------------------------------------------------------------
// let fonts = [
// 	'Courier New',
// 	'Arial',
// 	'Georgia',
// 	'Times New Roman',
// 	'Verdana' ];
// let currentFontIndex = 0;
// let currentFont = fonts[currentFontIndex];
// let numSelectableFonts = fonts.length;

let fonts;

let currentFontIndex = 0;
let currentFont;
let numSelectableFonts;

// text and messages ----------------------------------------------------------------------------------------
let mySignature = '';
let myMessage = '';


// color selection toggle ----------------------------------------------------------------------------------------

let colorList = [
	'#635c47', // bg
	'#FFFFFF', // heaven chi
	'#43fa7a', // punto chi
	'#5d43c4', // Punto
	// 'f', // Light
	'#f263d6', // Wave
	'#000000']; // signature

let waveChiColor = '#FFFFFF';

let colorNameList = [
	'Earth',
	'Punto',
	'Light',
	'Wave',
	'Chi',
	'Signature'];

let numSelectableColors = colorList.length;
let currentColorSelectionIndex = 0;


// // orbit variable ----------------------------------------------------------------------------------------
// const numCircles = 1200;
// let circleData = [];

// infinity variables ----------------------------------------------------------------------------------------
let infinityWidth;
let numBrush;
let roundness;

// wave variables ----------------------------------------------------------------------------------------
let waveHeight;


// mgm logo
let logo;
let logoImg;
let exhibitionTitleDiv;

function preload() {
  logo = loadImage("assets/logos/MGM 3D Logo.png");
  
  enFont1 = loadFont("assets/fonts/FontsFree-Net-Proxima-Nova-Sbold.otf");
  enFont2 = loadFont("assets/fonts/Cinzel-ExtraBold.ttf");
  enFont3 = loadFont("assets/fonts/VinaSans-Regular.ttf");
  zhFont1 = loadFont("assets/fonts/NotoSerifHK-SemiBold.ttf");
  zhFont2 = loadFont("assets/fonts/NotoSansTC-Bold.otf");
  zhFont3 = loadFont("assets/fonts/NotoSerifJP-Medium.otf");

  fonts = [
	  enFont1,
	  enFont2,
	  enFont3,
	  zhFont1,
	  zhFont2,
	  zhFont3]

  currentFont = fonts[currentFontIndex];
  numSelectableFonts = fonts.length;

}

function setup() {
	createMetaTag();
	pixelDensity(currentPixelDensity);
	createCanvas(windowWidth, windowHeight);

	background(0);
	
	angleMode(DEGREES);
	
	//create main canvas ----------------------------------------------------------------------------------------
	mainCanvas = createGraphics(width, height);
	mainCanvas.angleMode(DEGREES);

	// create download Canvas ----------------------------------------------------------------------------------------
	downloadCanvas = createGraphics(mainCanvas.width, mainCanvas.height + buttonMenuHeight);
	
	// // create orbit cancvas ----------------------------------------------------------------------------------------
	// setupOrbit();
	
	// Create punto grapghics ----------------------------------------------------------------------------------------
	setupPunto();
	
	// Create scatter grapghics ----------------------------------------------------------------------------------------
	setupStars();
	
	// // Create energy grapghics ----------------------------------------------------------------------------------------
	// setupEnergy();
	
	// Create wave grapghics ----------------------------------------------------------------------------------------
	setupWaves();	
	
	// Create radiation graphics ----------------------------------------------------------------------------------------
	setupRadiation();
	
	// Create brushStroke graphics ----------------------------------------------------------------------------------------
	setupBrushStroke();
	
	
	// Setup control panel ----------------------------------------------------------------------------------------
	setupControlPanel();

	setupNumberInput();

	setupNameInput();

	setupMessageInput();
	
	// Create Checkboxes ----------------------------------------------------------------------------------------
	checkboxSetup();

	// Create sliders ----------------------------------------------------------------------------------------
	sliderSetup();


	setupColorPicker();
	

	
	// Setup the three buttons at the bottom ----------------------------------------------------------------------------------------

	setupButtonMenu();
	setupBottomBanner();

	togglePanel(); //turn panel off at the beginning

	resetUniverse();
}

function draw() {
	clear(); // reset base canvas
	mainCanvas.background(colorList[0]); // reset background

	mainCanvas.push();
	mainCanvas.blendMode(SCREEN);
	mainCanvas.fill(255, 255, 255, 200);
	mainCanvas.rect(0, 0, width, height);
	mainCanvas.blendMode(BLEND);
	mainCanvas.pop();
	
	puntoGraphics.clear();
	waveGraphics.clear();  // reset wave
	// infinityGraphics.clear(); // reset infinity
	
	// get values from sliders ----------------------------------------------------------------------------------------
		
    punto_r = puntoSizeSlider.value();
	numBrush = infinityNumSlider.value();
	roundness = roundnessSlider.value();
	waveHeight = waveHeightSlider.value();
	chiAlpha = chiSlider.value();
	// infinityWidth = infinityWidthSlider.value();

	backgroundChiAlpha = backgroundSlider.value();

	
	// Star grapghics ----------------------------------------------------------------------------------------

	mainCanvas.push();
	mainCanvas.tint('#FFFFFF' + hex(backgroundChiAlpha, 2));
	mainCanvas.image(starsGraphics, 0, 0);
	mainCanvas.pop();
	
	// wave grapghics ----------------------------------------------------------------------------------------
	if(waveHeight >=10 ){
		drawWave(chi=false);
		mainCanvas.image(waveGraphics, 0, 0);	
	}
	
	// // radiation graphics ----------------------------------------------------------------------------------------
	// if(radiationSize > 0.1){
	// 	drawRadiation();
	// 	mainCanvas.push();
	// 	mainCanvas.imageMode(CENTER);
	// 	mainCanvas.translate(width / 2, height / 2);
	// 	mainCanvas.rotate(frameCount * 0.2);
	// 	mainCanvas.image(radiationGraphics, 0, 0); // the triangles
	// 	mainCanvas.pop();
	// }
	
	// punto graphics ----------------------------------------------------------------------------------------
	// if(puntoCheckbox.checked()){
	drawPunto();
	mainCanvas.image(puntoGraphics, 0, 0); // the circle
	// }

	// infinity graphics ----------------------------------------------------------------------------------------
	// if(infinityCheckbox.checked()){
	mainCanvas.push();		
	mainCanvas.tint(colorList[2]);

	if(numBrush >= 1){
		mainCanvas.image(brushGraphics1, 0, 0, mainCanvas.width, mainCanvas.height);
	}
	
	if(numBrush >= 2){
		mainCanvas.image(brushGraphics2, 0, 0, mainCanvas.width, mainCanvas.height);
	}
	
	if(numBrush >= 3){
		mainCanvas.image(brushGraphics3, 0, 0, mainCanvas.width, mainCanvas.height);
	}

	mainCanvas.pop();
	// }

	// Wave Chi grapghics ----------------------------------------------------------------------------------------
	if(waveHeight >=10 ){
		mainCanvas.push();
		// mainCanvas.tint('#FFFFFF' + hex(chiAlpha, 2));
		mainCanvas.tint(waveChiColor + hex(chiAlpha, 2));
		waveGraphics.clear();
		drawWave(chi=true);
		mainCanvas.image(waveGraphics, 0, 0);	
		mainCanvas.pop();	// }
	}

	
	// signature ----------------------------------------------------------------------------------------
	if(signature){
		mainCanvas.push();
		mainCanvas.fill(colorList[5]);
		mainCanvas.textFont(currentFont);
		mainCanvas.textAlign(RIGHT, BOTTOM);
		mainCanvas.textSize(20);

		universeNumberDisplay = generated ? universeNumber : '';

		mainCanvas.text(universeNumberDisplay + ' ' + mySignature + ' @MGM', width - 10, height - 10);
		mainCanvas.pop();
	}

	// Message ----------------------------------------------------------------------------------------

	mainCanvas.push();
	// mainCanvas.rectMode(CORNERS);
	mainCanvas.fill(colorList[5]);
	mainCanvas.textFont(currentFont);
	mainCanvas.textAlign(RIGHT, TOP);
	mainCanvas.textSize(30);
	mainCanvas.text(myMessage, width * 0.6, 10,  (width - 10) - (width * 0.6), height * 0.25);
	mainCanvas.pop();
	
	// generate universe number ----------------------------------------------------------------------------------------
	
	// if(generated){
	// 	mainCanvas.push();
	// 	mainCanvas.fill(colorList[6]);
	// 	mainCanvas.textFont(currentFont);
	// 	mainCanvas.textAlign(CENTER, BOTTOM);
	// 	mainCanvas.textSize(20);
	// 	mainCanvas.text(universeNumber, width / 2, height - 5 - buttonMenuHeight);
	// 	mainCanvas.pop();
	// }

	// mainCanvas.image(bottomBannerGraphics, 0, height - buttonMenuHeight);
		
	// composing the canvas ----------------------------------------------------------------------------------------
	// base
	// |- mainCanvas (background = space color)
	//    |- starsGraphics
	//    |- waveGraphics
	//    |- radiationGraphics
	//    |- puntoGraphics
	//    |- orbitGraphics
	//    |- energyGraphics
	//    |- Signature
	//	  |- Universe Number
	//


	// mainCanvas.push();
	// mainCanvas.fill('#FF0000');
	// mainCanvas.textFont(fonts[0]);
	// mainCanvas.textAlign(LEFT, TOP);
	// mainCanvas.textSize(100);
	// mainCanvas.text('Test 46', 0, 0);
	// mainCanvas.pop();




	image(mainCanvas, 0, 0); // drawing the main canvas onto the base canvas
}



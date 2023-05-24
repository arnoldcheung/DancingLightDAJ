// Dictionary of translations
const translations = {
    en: {
        language: "中",
        nameInputDefaultInstruction: "Your Signature (Optional)",
        messageInputDefaultInstruction: "Your Message (Optional) ",
        fontInstruction: "Font",
        generateInstruction: "Generate your unique artwork",
        goInstruction: "Go",
        eightDigitInstruction: "Enter your 8 digit code",
        manualInstruction: "Or create your universe manually",
        nextElementInstruction: "Next",
        colorInstruction: "Choose the color of elements",
        hideControlInstruction: "Hide Control",
        showControlInstruction: "Show Control",
        captureInstruction: "Capture",
        resetInstruction: "Reset",
        adjustSliderInstruction: '⬅ Adjust the composition ⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’ ",

        colorNameList: [
          'Earth',
          'Chi 1',
          'Chi 2',
          'Punto',
          'Light',
          'Heaven',
          'Signature'],

        elementList: [
            'Punto',
            'Tao',
            'Light',
            'Heaven',
            'Chi'],
    },



    zh: {
        language: "en",
        nameInputDefaultInstruction: "您的簽名（可選）",
        messageInputDefaultInstruction: "您的留言（可選）",
        fontInstruction: "字體",
        generateInstruction: "生成您的獨特藝術品",
        goInstruction: "生成",
        eightDigitInstruction: "輸入您的8位代碼",
        manualInstruction: "或手動創建您的宇宙",
        nextElementInstruction: "換元素",
        colorInstruction: "選擇元素的顏色",
        hideControlInstruction: "隱藏控制",
        showControlInstruction: "顯示控制",
        captureInstruction: "截圖",
        resetInstruction: "重置",
        adjustSliderInstruction: '⬅調整構圖⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’",

        colorNameList: [
          '地',
          '炁 1',
          '炁 2',
          '庞图',
          '靈光',
          '天',
          '字體'],

        elementList: [
            '龐圖',
            '道',
            '靈光',
            '天',
            '炁'],
    },
  };
  
let currentLanguage = "en";

  // Function to get the translated text based on the current language
function getTranslation(key) {
    return translations[currentLanguage][key];
  }
  
  // Function to toggle the language and re-render the text
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    // console.log(currentLanguage)
    resetUniverse(); // Re-render the sketch with the updated language
  }
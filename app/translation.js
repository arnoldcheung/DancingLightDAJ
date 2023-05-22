// Dictionary of translations
const translations = {
    en: {
        language: "en",
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
          'Space',
          'Stars',
          'Punto',
          'Light',
          'Wave',
          'Signature'],

        elementList: [
            'Punto',
            'Tao',
            'Light',
            'Wave'],
    },



    zh: {
        language: "簡中",
        nameInputDefaultInstruction: "您的签名（可选）",
        messageInputDefaultInstruction: "您的留言（可选）",
        fontInstruction: "字体",
        generateInstruction: "生成您的独特艺术品",
        goInstruction: "生成",
        eightDigitInstruction: "输入您的8位代码",
        manualInstruction: "或手动创建您的宇宙",
        nextElementInstruction: "换元素",
        colorInstruction: "选择元素的颜色",
        hideControlInstruction: "隐藏控制",
        showControlInstruction: "显示控制",
        captureInstruction: "截图",
        resetInstruction: "重置",
        adjustSliderInstruction: '⬅调整构图⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’",

        colorNameList: [
          '宇宙',
          '星尘',
          '庞图',
          '靈光',
          'e1234',
          '5743541'],

        elementList: [
            '庞图',
            '道',
            '靈光',
            '活力'],
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
// Dictionary of translations
const translations = {
      en: {
        language: "中",
        dajTitle: "Digital Art Jamming",
        nameInputDefaultInstruction: "Your name",
        messageInputDefaultInstruction: "Your Message (Optional) ",
        fontInstruction: "Font",
        generateInstruction: "Generate your unique universe",
        goInstruction: "Go",
        eightDigitInstruction: "Enter your 8 digit code",
        manualInstruction: "Create your universe manually",
        nextElementInstruction: "Next",
        colorInstruction: "Choose the color of elements",
        hideControlInstruction: "Hide Control",
        showControlInstruction: "Show Control",
        captureInstruction: "Capture",
        resetInstruction: "Reset",
        adjustSliderInstruction: '⬅ Adjust the composition ⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’ ",

        retrieveSketchTitle: "Thank you for joining the Digital Art Jamming {{name}}",
        retrieveSketchTitleNoName: "Thank you for joining the Digital Art Jamming",
        retrieveSketchSubTitle: "Scan to download your universe",
        retrievingMessage: "Retrieving your Cosmo Image...", 



        // colorNameList: [
        //   'Earth',
        //   'Chi 1',
        //   'Chi 2',
        //   'Punto',
        //   'Light',
        //   'Heaven',
        //   'Signature'],

        colorNameList: [
          'Earth',
          'Punto',
          'Light',
          'Heaven',
          'Chi',
          'Signature'],

        elementList: [
            'Punto',
            'Tao',
            'Light',
            'Heaven',
            'Chi',
            'Earth'],
    },



    zh: {
      language: "EN",
      dajTitle: "數字藝術創作體驗",
      nameInputDefaultInstruction: "您的名字",
      messageInputDefaultInstruction: "您的留言（可選）",
      fontInstruction: "字體",
      generateInstruction: "自動生成您專屬的超元宇宙",
      goInstruction: "生成",
      eightDigitInstruction: "輸入8位數字代碼﹐如出生日期",
      manualInstruction: "手動創建您的超元宇宙",
      nextElementInstruction: "換元素",
      colorInstruction: "設定元素的屬性顏色",
      hideControlInstruction: "隱藏控制",
      showControlInstruction: "顯示控制",
      captureInstruction: "截圖",
      resetInstruction: "重置",
      adjustSliderInstruction: '⬅ 調整您的宇宙構圖 ⮕',
      exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’",

      retrieveSketchTitle: "{{name}}, 感謝您參與數字藝術創作",
      retrieveSketchTitleNoName: "感謝您參與數字藝術創作",
      retrieveSketchSubTitle: "請掃描二維碼下載你的超元宇宙",
      retrievingMessage: "您的超元宇宙圖像正在生成中...",


        // colorNameList: [
        //   '地',
        //   '炁 1',
        //   '炁 2',
        //   '龐圖',
        //   '靈光',
        //   '天',
        //   '字體'],

          colorNameList: [
            '地',
            '龐圖',
            '靈光',
            '天',
            '炁',
            '字體'],

        elementList: [
            '龐圖',
            '道',
            '靈光',
            '天',
            '炁',
            '地'],
    },
  };
  
let currentLanguage = "zh";

// Function to get the translated text based on the current language
function getTranslation(key, args={}) {
  let translation = translations[currentLanguage][key];
  Object.entries(args).forEach(([key, value]) => {
    translation = translation.replace(`{{${key}}}`, value)
  })
  return translation;
}
  
  // Function to toggle the language and re-render the text
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    // console.log(currentLanguage)
    resetUniverse(); // Re-render the sketch with the updated language
    resetUniverse(); // Re-render the sketch with the updated language

  }
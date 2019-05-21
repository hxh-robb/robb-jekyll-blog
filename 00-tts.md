---
title: 单词听写
en_title: TTS
layout: default
---
<script src="//code.responsivevoice.org/responsivevoice.js?key=y9mpza5r"></script>
<script src="/assets/js/oald7-words.js"></script>
<script>
  /*
  const UKF = "UK English Female";
  const UKM = "UK English Male";
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  let voice = UKF;
  const play = async (text, ms) => {
    await sleep(millisec === undefined ? 0 : millisec);
    voice = (voice === UKM ? UKF : UKM);
    // responsiveVoice.setDefaultVoice(voice)
    // responsiveVoice.speak(text);
    console.log(voice);
  }

  async function testTTS(){
    let word = 'ambitious';
    play(word);
    if(words[word]){
      for(let sentence of words[word]){
        await sleep(5000);
        // play(sentence, 5000);
        console.log(sentence);
      }
    }
    // responsiveVoice.speak(word);
    // responsiveVoice.setDefaultVoice("UK English Male");
    // responsiveVoice.speak(words[word][0]);
  }
  */
  
  function sleep(ms) {
   return new Promise(res => setTimeout(res, ms));
  }
  
  const UKF = "UK English Female";
  const UKM = "UK English Male";
  let voice = UKF;
  function speak(text){
    responsiveVoice.setDefaultVoice(voice);
    responsiveVoice.speak(text);
    voice = voice === UKM ? UKF : UKM;
  }

  async function play(word) {
    speak(word);
    if(oald7[word]){
      for (let sentence of oald7[word]) {
        await sleep(6000);
        speak(sentence);
      }
    }
  }
  
  function testTTS(){
    play('ambitious');
  }
</script>

<div class="tts-wrapper">
  <input type="button" value="Test" onclick="javascript:testTTS()"></input>
</div>

---
## Alex's lessons
<div class="tts-wrapper">
  <span>
    {prompt message:#1 word out of 10, #1 sentence out of 3}
  </span>
</div>
<details class="tts-wrapper">
  <summary>word list</summary>
</details>
<div class="tts-wrapper">  
  <input type="button" value="Start Test"></input>
  <input type="button" value="One by One"></input>
  <input type="button" value="Replay Word"></input>
  <input type="button" value="Replay Sentence"></input>
</div>
<div class="tts-wrapper">
  <input type="button" value="All"></input>
  <input type="button" value="Session 01"></input>
  <input type="button" value="Session 02"></input>
  <input type="button" value="Session 03"></input>
  <input type="button" value="Session 04"></input>
</div>

---
## Oxford 3K

TODO

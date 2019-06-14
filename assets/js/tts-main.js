/* ***** 3rd Party TTS API ***** */
function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

const UKF = "UK English Female";
const UKM = "UK English Male";
let voice = UKF;
function speak(text){
  // responsiveVoice.setDefaultVoice(voice);
  responsiveVoice.speak(text,voice);
  voice = voice === UKM ? UKF : UKM;
}

// async function play(word,interval) {
//   speak(word);
//   if(oald7[word]){
//     let idx = 1;
//     for (let sentence of oald7[word]) {
//       await sleep(interval ? interval : 6000);
//       speak(sentence);
//       document.getElementsByClassName("prompt")[0].innerText = `${idx}/${oald7[word].length}`;
//       idx++;
//     }
//   }
// }

/* ***** "View" functions ***** */

function player(){
  return document.querySelector("div.tts-player");
}

function toggleButtons(){
  document.querySelectorAll("input[type=button]").forEach(
    btn => btn.disabled = !btn.disabled
  );
}
function renderDetails(clazz, array){
  let details = player().querySelector(`details.${clazz}`);
  while(details.children.length > 1){
    details.removeChild(details.lastElementChild);
  }

  let ul = document.createElement("ul");
  details.append(ul);
  array.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  }); 
}

function renderProgress(clazz, index, total){
  const details = player().querySelector(`details.${clazz}`);
  const summary = details.children[0];
  const ul = details.lastElementChild;
  index = index ? index : 0;
  total = total ? total : 0;
  if(index <= total && ul && ul.tagName === 'UL' && ul.children.length == total){
    let progress = summary.lastElementChild;
    if(progress){
      progress.remove();
    }
    progress = document.createElement('span');
    progress.innerText = `(${index ? index : '-'}/${total ? total : '-'})`;
    summary.append(progress);

    // highlight item
    if(index){
      Array.from(ul.children).forEach(item=>item.removeAttribute('class'));
      ul.children[index-1].setAttribute('class','tts-item-highlight');
    }
  }
}

function renderWordList(list){
  renderDetails('tts-words', list);
  renderProgress('tts-words', wordCursor, list.length);
}

function renderSentenceList(list){
  renderDetails('tts-sentences', list);
  renderProgress('tts-sentences', sentenceCursor, list.length);
}

/* ***** "Model" functions ***** */

const MAX_SENTENCE_COUNT = 3;
const WORD_LIST = [], SENTENCE_LIST = [];
let wordCursor, sentenceCursor;
let ongoingWord, ongoingSentence;

function shuffle(array){
  for(let i = array.length-1; i > 0; i-- ){
    const j = Math.floor(Math.random() * (i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array;
}

function fillWordList(words){
  WORD_LIST.splice(0,WORD_LIST.length);
  WORD_LIST.push(...shuffle(words));
  wordCursor = 0;

  fillSentenceList([]);
}

function fillSentenceList(sentences){
  const limited = [...sentences];
  while(limited.length > MAX_SENTENCE_COUNT){
    const idx = Math.floor(Math.random() * limited.length);
    limited.splice(idx,1);
  }
  SENTENCE_LIST.splice(0, SENTENCE_LIST.length);
  SENTENCE_LIST.push(...shuffle(limited));
  sentenceCursor = 0;
}

function nextWord(){
  if(WORD_LIST.length){
    wordCursor++;
    wordCursor = wordCursor % (WORD_LIST.length + 1);
    ongoingWord = wordCursor ? WORD_LIST[wordCursor-1] : undefined;
    if(ongoingWord){
      fillSentenceList(oald7[ongoingWord] ? oald7[ongoingWord] : []);
    } else {
      fillSentenceList([]);
    }
    return ongoingWord;
  }
}

function nextSentence(){
  if(SENTENCE_LIST.length){
    sentenceCursor++;
    sentenceCursor = sentenceCursor % (SENTENCE_LIST.length + 1);
    ongoingSentence = sentenceCursor ? SENTENCE_LIST[sentenceCursor-1]: undefined;
    return ongoingSentence;
  }
}

function cursorReset(){
  wordCursor = sentenceCursor = 0;
}

/* ***** "Controller" functions ***** */

function renderAll(){
  renderWordList(WORD_LIST);
  renderSentenceList(SENTENCE_LIST);
}

function next(){
  let text;
  if(!SENTENCE_LIST.length || sentenceCursor === SENTENCE_LIST.length){
    text = nextWord();
  } else {
    text = nextSentence();
  }

  renderAll();
  return text;
}

function vocabularyButtonOnClick(evt){
  toggleButtons();
  // ------
  let btn = evt.target;
  let words=[];
  if("All" === btn.value){
    btn.parentElement.querySelectorAll("input[words]").forEach(
      (wordsBtn) => words.push(...wordsBtn.getAttribute("words").split(','))
    );
  } else {
    words.push(...btn.getAttribute("words").split(','));
  }
  fillWordList(words);
  // ------
  renderAll();
  toggleButtons();
}

async function startTestOnClick(evt){
  toggleButtons();
  // ------
  cursorReset();
  for(let text = next();text;text = next()){
    speak(text);
    // console.debug(`sleep time:${5000 + 1000 * text.split(' ').length}ms`);
    await sleep(5000 + 1000 * text.split(' ').length);
    if(wordCursor == WORD_LIST.length && sentenceCursor == SENTENCE_LIST.length) {
      break;
    }
  }
  // ------
  toggleButtons();
}

async function oneByOneOnClick(evt){
  toggleButtons();
  // ------
  let text = next();
  if(text){
    speak(text);
    // await sleep(5000 + 1000 * text.split(' ').length);
  }
  // ------
  toggleButtons();
}

async function replayWordOnClick(evt){
  toggleButtons();
  // ------
  let text = ongoingWord;
  if(text){
    speak(text);
    // await sleep(5000 + 1000 * text.split(' ').length);
  }
  // ------
  toggleButtons();
}

async function replaySentenceOnClick(evt){
  toggleButtons();
  // ------
  let text = ongoingSentence;
  if(text){
    speak(text);
    // await sleep(5000 + 1000 * text.split(' ').length);
  }
  // ------
  toggleButtons();
}

/* ***** Init ***** */

window.onload = function (evt){
  // Init UI
  renderAll();

  // "onclick" event binding
  document.querySelectorAll(".tts-vocabulary").forEach(
    div => div.querySelectorAll("input[type=button]").forEach(
      btn => btn.onclick = vocabularyButtonOnClick
    )
  );

  document.querySelector("input[type=button][value='Start Test']").onclick = startTestOnClick;
  document.querySelector("input[type=button][value='One By One']").onclick = oneByOneOnClick;
  document.querySelector("input[type=button][value='Start Test']").onclick = startTestOnClick;
  document.querySelector("input[type=button][value='Start Test']").onclick = startTestOnClick;
};
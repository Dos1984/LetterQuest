(() => {
  const BANKS={
    "Junior Infants":{words:["cat","hat","dog","log","sun","run","pig","pin","map","mat"],sight:["I","a","the","is","in","it"],pairs:[["cat","hat"],["dog","log"],["sun","run"],["pig","wig"]]},
    "Senior Infants":{words:["ship","shop","fish","chat","ring","duck","frog","clap","moon","seed"],sight:["was","you","they","said","are","all"],pairs:[["ship","lip"],["ring","sing"],["rock","sock"],["chat","hat"]]},
    "First Class":{words:["rain","train","green","sleep","boat","snow","light","night","black","plant"],sight:["there","where","what","when","come","some"],pairs:[["rain","train"],["light","night"],["book","look"],["bell","shell"]]},
    "Second Class":{words:["cloud","round","chair","fair","jumping","helpful","raincoat","football","teacher","market"],sight:["because","before","after","could","would","should"],pairs:[["cloud","round"],["chair","fair"],["town","crown"],["play","day"]]}
  };
  const games=[
    ["🎈","Balloon Sounds","Find the missing sound"],
    ["🏴‍☠️","Real or Silly?","Decide if a word is real"],
    ["🧠","Memory Match","Match words that rhyme"],
    ["🚂","Word Ladder","Change one letter to make a new word"],
    ["🔎","Sight Word Hunt","Listen and find the word"],
    ["🧩","Word Scramble","Put the letters in order"],
    ["🚀","Sound Sort","Choose the word with the target pattern"],
    ["⚡","Quick Read","Read a word before it changes"]
  ];
  let arcadeGame=0,score=0,round=0,currentQ=null,timer=null;
  const $=id=>document.getElementById(id);
  const shuffle=a=>[...a].sort(()=>Math.random()-.5);
  const speak=t=>{if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-IE";u.rate=.72;speechSynthesis.speak(u);};
  function profile(){try{const s=JSON.parse(localStorage.getItem("letterquest-ireland-v1"));return s.profiles.find(p=>p.id===s.currentId)||s.profiles[0];}catch(e){return{cls:"Junior Infants"};}}
  function bank(){return BANKS[profile()?.cls]||BANKS["Junior Infants"];}
  function addUI(){
    const tabs=document.querySelector(".tabs"),main=document.querySelector("main");
    const tab=document.createElement("button");tab.className="tab";tab.dataset.page="arcade";tab.textContent="🧩 Puzzle Arcade";tabs.appendChild(tab);
    const sec=document.createElement("section");sec.id="page-arcade";sec.className="page hidden";sec.innerHTML=`<div class="hero-grid"><aside class="card side"><div class="eyebrow">Puzzle arcade</div><h2>Pick a challenge</h2><div id="arcadeList" class="game-list"></div><div class="callout"><strong>Score</strong><p id="arcadeScore">⭐ 0 · Round 0</p></div></aside><section class="card play-card"><div class="play-head"><div><div class="eyebrow">Extra literacy challenge</div><h2 id="arcadeTitle">Balloon Sounds</h2></div><button id="readArcade" class="secondary">🔊 Read question</button></div><div class="play-zone"><div id="arcadeMascot" class="mascot">🎈</div><h3 id="arcadeQuestion">Ready?</h3><p id="arcadeHint">Choose a puzzle to begin.</p><div id="arcadeAnswers" class="answer-area"></div><div class="controls"><button id="arcadeNext">Next puzzle</button></div><p id="arcadeFeedback" class="feedback" aria-live="polite"></p></div></section></div>`;main.appendChild(sec);
    games.forEach((g,i)=>{const b=document.createElement("button");b.className="game-button"+(i===0?" active":"");b.textContent=`${g[0]} ${g[1]}`;b.onclick=()=>{arcadeGame=i;document.querySelectorAll("#arcadeList .game-button").forEach((x,j)=>x.classList.toggle("active",j===i));newPuzzle();};$("arcadeList").appendChild(b);});
    tab.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b===tab));document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));sec.classList.remove("hidden");newPuzzle();});
    $("readArcade").onclick=()=>speak(currentQ?.spoken||currentQ?.q||"");$("arcadeNext").onclick=newPuzzle;
  }
  function choices(answer,others){return shuffle([answer,...shuffle(others.filter(x=>x!==answer)).slice(0,3)]);}
  function makeQ(){const b=bank(),g=games[arcadeGame][1],w=b.words[round%b.words.length];
    if(g==="Balloon Sounds"){const pos=Math.min(1,w.length-1),ans=w[pos],shown=w.split("").map((c,i)=>i===pos?"_":c).join(" ");return{q:`Which letter completes ${shown}?`,spoken:`Which letter completes the word ${w}?`,answer:ans,opts:choices(ans,["a","e","i","o","s","t","n"]),skill:"Listen for the missing sound."};}
    if(g==="Real or Silly?"){const real=round%2===0,ans=real?"Real word":"Silly word",fake=w.slice(0,-1)+({a:"z",e:"v",i:"j",o:"x",u:"q"}[w.at(-1)]||"z"),show=real?w:fake;return{q:`Is “${show}” a real word or a silly word?`,spoken:`Is ${show} a real word or a silly word?`,answer:ans,opts:["Real word","Silly word"],skill:"Blend it first, then decide."};}
    if(g==="Memory Match"){const pair=b.pairs[round%b.pairs.length],ans=pair[1];return{q:`Find the rhyme for “${pair[0]}”.`,spoken:`Which word rhymes with ${pair[0]}?`,answer:ans,opts:choices(ans,b.words),skill:"Listen to the ending sound."};}
    if(g==="Word Ladder"){const target=b.words.find(x=>x.length===w.length&&x!==w)||b.words[1],ans=target;return{q:`Change the letters in “${w}” to make another ${w.length}-letter word.`,spoken:`Start with ${w}. Which choice is another ${w.length} letter word?`,answer:ans,opts:choices(ans,b.words),skill:"Compare letters and sounds."};}
    if(g==="Sight Word Hunt"){const ans=b.sight[round%b.sight.length];return{q:"Listen and tap the word you hear.",spoken:ans,answer:ans,opts:choices(ans,b.sight),skill:"Build fast word recognition.",auto:true};}
    if(g==="Word Scramble"){const letters=shuffle(w.split("")).join(" ");return{q:`Unscramble: ${letters.toUpperCase()}`,spoken:`Unscramble the letters to make ${w}`,answer:w,opts:choices(w,b.words),skill:"Hold the sounds in order."};}
    if(g==="Sound Sort"){const chunks=["sh","ch","th","ee","oo","ai","oa","igh","ou","air"],pat=chunks.find(c=>w.includes(c))||w[0],ans=w;return{q:`Which word contains “${pat}”?`,spoken:`Which word contains the sound pattern ${pat}?`,answer:ans,opts:choices(ans,b.words),skill:"Spot the spelling pattern."};}
    const ans=b.words[round%b.words.length];return{q:"Quick read! Tap the word you hear.",spoken:ans,answer:ans,opts:choices(ans,b.words),skill:"Read accurately and build fluency.",auto:true};
  }
  function newPuzzle(){clearTimeout(timer);round++;currentQ=makeQ();const g=games[arcadeGame];$("arcadeTitle").textContent=g[1];$("arcadeMascot").textContent=g[0];$("arcadeQuestion").textContent=currentQ.q;$("arcadeHint").textContent=currentQ.skill;$("arcadeFeedback").textContent="";$("arcadeAnswers").innerHTML="";currentQ.opts.forEach(x=>{const b=document.createElement("button");b.className="answer-btn";b.textContent=x.toUpperCase();b.onclick=()=>answer(b,x);$("arcadeAnswers").appendChild(b);});$("arcadeScore").textContent=`⭐ ${score} · Round ${round}`;if(currentQ.auto)setTimeout(()=>speak(currentQ.spoken),350);if(g[1]==="Quick Read")timer=setTimeout(()=>{$("arcadeFeedback").textContent="Time! Try the next one.";},6500);}
  function answer(btn,x){clearTimeout(timer);const ok=String(x).toLowerCase()===String(currentQ.answer).toLowerCase();btn.classList.add(ok?"correct":"wrong");if(ok){score++;$("arcadeFeedback").textContent="⭐ Great thinking!";}else{$("arcadeFeedback").textContent=`Good try — the answer is ${currentQ.answer}.`;speak(currentQ.answer);}$("arcadeScore").textContent=`⭐ ${score} · Round ${round}`;}
  function addReadQuestion(){const hear=$("hearBtn");if(!hear)return;hear.textContent="🔊 Hear word";const b=document.createElement("button");b.id="readQuestionBtn";b.className="secondary";b.textContent="🗣️ Read question";b.onclick=()=>speak($("question")?.textContent||"");hear.parentElement.insertBefore(b,hear.nextSibling);}
  addUI();addReadQuestion();
})();
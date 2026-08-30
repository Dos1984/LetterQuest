(() => {
  const $ = (id) => document.getElementById(id);

  const CONTENT = {
    "Junior Infants": {
      stage: "Stage 1",
      desc: "Playful listening, rhyme, syllables, phoneme awareness, first letter–sound links and oral blending.",
      skills: ["Listening & rhyme","Syllables","Initial sounds","Final sounds","Letter–sound links","Oral blending"],
      games: ["Sound-a-Saurus","Rhyme River","Syllable Safari","Feed the Fish","Robot Talk","Letter Hunt"],
      letters: ["s","a","t","i","p","n","c","k","e","h","r","m","d","g","o","u","l","f","b"],
      words: ["sat","sit","tap","pin","pan","cat","cap","kit","kid","hen","hat","red","run","map","mat","dog","dig","got","gum","log","lip","fan","fin","bat","bed","sun","cup","pig","rat"],
      rhymeSets: [["cat","hat","sun","dog"],["log","dog","pig","fan"],["sun","run","cap","hen"],["pin","fin","red","map"],["bed","red","cup","dog"]],
      syllables: [{word:"fish",count:1},{word:"rabbit",count:2},{word:"dinosaur",count:3},{word:"apple",count:2},{word:"banana",count:3},{word:"dragon",count:2},{word:"tiger",count:2},{word:"cat",count:1},{word:"octopus",count:3}],
      highFrequency: ["I","a","the","is","in","it","to","and"],
      units: [
        {name:"Hear & play",focus:"rhyme",words:["cat","hat","sun","run","dog","log"]},
        {name:"First sounds",focus:"initial",words:["sun","sat","map","mat","dog","dig"]},
        {name:"Build CVC words",focus:"blend",words:["sat","sit","tap","pin","cat","kit"]}
      ]
    },
    "Senior Infants": {
      stage: "Stage 1",
      desc: "Secure letter–sound knowledge with CVC blending and segmenting, digraphs, consonant blends and common words.",
      skills: ["Phoneme isolation","CVC blending","CVC segmenting","Digraphs","Consonant blends","High-frequency words"],
      games: ["Dragon Word Forge","Digraph Dive","Missing Letter","Rhyme River","Sound Boxes","Tricky Word Treasure"],
      letters: ["sh","ch","th","ng","ck","qu","ee","oo"],
      words: ["ship","shop","fish","chat","chin","thin","this","ring","song","duck","rock","queen","quick","feet","seed","moon","book","frog","flag","stop","clap","drum","nest","milk","hand","jump","best","sand"],
      rhymeSets: [["ship","lip","shop","ring"],["chat","hat","fish","moon"],["ring","sing","duck","feet"],["rock","sock","seed","flag"]],
      syllables: [{word:"rabbit",count:2},{word:"sunset",count:2},{word:"dragon",count:2},{word:"rocket",count:2},{word:"fish",count:1},{word:"picnic",count:2}],
      highFrequency: ["was","you","they","said","are","all","we","he","she","my","me","be"],
      units: [
        {name:"CVC confidence",focus:"blend",words:["fish","chat","duck","rock","ring"]},
        {name:"Digraph detectives",focus:"digraph",words:["ship","shop","chin","thin","song"]},
        {name:"Blend builders",focus:"blend",words:["frog","flag","stop","clap","drum"]}
      ]
    },
    "First Class": {
      stage: "Stage 2",
      desc: "Broader phonics patterns, consonant blends, vowel teams, word families, high-frequency words and spelling strategies.",
      skills: ["Blends & digraphs","Vowel teams","Word families","High-frequency words","Sentence reading","Spelling"],
      games: ["Word Forge","Word Family Rapids","Vowel Team Voyage","Animal Rescue","Tricky Word Treasure","Spelling Sprint"],
      letters: ["ai","ay","ee","ea","oa","ow","igh","ie","oo","ar","or","er"],
      words: ["rain","train","paint","play","day","green","sleep","team","beach","boat","coat","snow","grow","light","night","pie","tie","moon","food","book","look","farm","star","fork","storm","her","term","black","crab","step","brush","plant","clock"],
      families: [{chunk:"-at",words:["cat","hat","mat","flat"]},{chunk:"-ain",words:["rain","train","pain","brain"]},{chunk:"-ight",words:["light","night","right","bright"]},{chunk:"-ook",words:["book","look","cook","hook"]},{chunk:"-ell",words:["bell","sell","shell","smell"]}],
      highFrequency: ["there","where","what","when","come","some","one","were","have","like","little","do"],
      syllables: [{word:"sunset",count:2},{word:"market",count:2},{word:"robot",count:2},{word:"animal",count:3},{word:"dinosaur",count:3}],
      units: [
        {name:"Vowel teams",focus:"pattern",words:["rain","play","green","team","boat","snow"]},
        {name:"Word families",focus:"family",words:["light","night","book","look","bell","shell"]},
        {name:"Blend & spell",focus:"spell",words:["black","crab","brush","plant","clock"]}
      ]
    },
    "Second Class": {
      stage: "Stage 2",
      desc: "Consolidate spelling patterns and syllables, use suffixes and meaningful word parts, and build fluent word recognition.",
      skills: ["Complex vowel patterns","Syllables","Suffixes","Compound words","Word parts","Fluency & spelling"],
      games: ["Dragon Spelling","Dinosaur Word Lab","Suffix Factory","Compound Castle","Ocean Word Quest","Pattern Detective"],
      letters: ["oi","oy","ou","ow","au","aw","ir","ur","ear","air","tion"],
      words: ["coin","boil","toy","enjoy","cloud","round","cow","town","autumn","draw","bird","girl","turn","church","hear","near","chair","fair","station","action","jumping","helpful","played","runner","boxes","wishes","sunset","football","raincoat","bedroom","market","teacher","playing","careful","quickly"],
      suffixes: [{base:"jump",suffix:"ing",answer:"jumping"},{base:"help",suffix:"ful",answer:"helpful"},{base:"play",suffix:"ed",answer:"played"},{base:"quick",suffix:"ly",answer:"quickly"},{base:"box",suffix:"es",answer:"boxes"},{base:"wish",suffix:"es",answer:"wishes"}],
      compounds: [["sun","set","sunset"],["rain","coat","raincoat"],["foot","ball","football"],["bed","room","bedroom"],["play","ground","playground"]],
      highFrequency: ["because","before","after","could","would","should","again","people","their","about","many","very"],
      syllables: [{word:"market",count:2},{word:"teacher",count:2},{word:"playing",count:2},{word:"careful",count:2},{word:"dinosaur",count:3},{word:"adventure",count:3}],
      units: [
        {name:"Pattern power",focus:"pattern",words:["coin","toy","cloud","town","bird","turn"]},
        {name:"Word parts",focus:"morphology",words:["jumping","helpful","played","quickly"]},
        {name:"Longer words",focus:"syllable",words:["market","teacher","raincoat","football"]}
      ]
    }
  };

  const WORLDS = {
    Dinosaurs:["🦖","Dinosaur Valley"], Dragons:["🐉","Dragon Mountain"],
    Animals:["🐯","Animal Island"], Ocean:["🐠","Ocean Kingdom"], Fruit:["🍓","Fruit Forest"]
  };
  const DEFAULT_PROFILE = {id:"learner-1",name:"Learner 1",age:5,cls:"Junior Infants",gender:"",mode:"Beginner",interest:"Dinosaurs",stars:0,attempts:0,correct:0,schoolWords:[],mastery:{"Sound awareness":60,"Letter sounds":45,"Blending":35,"Word patterns":25,"Spelling":20}};
  let state=load(), currentGame=0, qIndex=0, sessionDone=0, answered=false, helpStep=0;

  function load(){
    try{
      const s=JSON.parse(localStorage.getItem("letterquest-ireland-v1"));
      if(s&&Array.isArray(s.profiles)&&s.profiles.length){
        s.profiles.forEach(p=>{p.mastery=Object.assign({"Sound awareness":45,"Letter sounds":40,"Blending":35,"Word patterns":30,"Spelling":25},p.mastery||{});});
        return s;
      }
    }catch(e){}
    return {profiles:[DEFAULT_PROFILE],currentId:DEFAULT_PROFILE.id};
  }
  function save(){localStorage.setItem("letterquest-ireland-v1",JSON.stringify(state));}
  function current(){return state.profiles.find(p=>p.id===state.currentId)||state.profiles[0];}
  function clamp(n,a,b){return Math.max(a,Math.min(b,n));}
  function shuffle(a){return [...a].sort(()=>Math.random()-.5);}
  function sample(a){return a[Math.floor(Math.random()*a.length)];}
  function speak(text){if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=.72;u.pitch=1.02;u.lang="en-IE";speechSynthesis.speak(u);}
  function phonemes(word){
    const out=[], chunks=["tion","igh","air","ear","sh","ch","th","ng","ck","qu","ee","ea","ai","ay","oa","ow","oo","oi","oy","ou","au","aw","ir","ur","er","or","ar"];
    let i=0;
    while(i<word.length){let hit=null;for(const c of chunks){if(word.slice(i,i+c.length)===c){hit=c;break;}}if(hit){out.push("/"+hit+"/");i+=hit.length;}else{out.push("/"+word[i]+"/");i++;}}
    return out;
  }
  function classData(){return CONTENT[current().cls];}
  function adaptivePool(){
    const p=current(), d=classData(), m=p.mastery||{}, weakest=Object.entries(m).sort((a,b)=>a[1]-b[1])[0]?.[0]||"Blending";
    let pool=[...(p.schoolWords.length?p.schoolWords:d.words)];
    if(weakest==="Letter sounds" && d.words.length) pool=d.words.filter(w=>w.length<=5);
    if(weakest==="Blending") pool=d.words.filter(w=>phonemes(w).length<=5);
    if(weakest==="Spelling" && p.schoolWords.length) pool=[...p.schoolWords,...d.words.slice(0,8)];
    return pool.length?pool:d.words;
  }

  function renderProfiles(){const box=$("profileSelect");box.innerHTML="";state.profiles.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=`${p.name} · ${p.cls}`;box.appendChild(o);});box.value=state.currentId;}
  function renderGames(){const p=current(),d=classData(),box=$("gameList");box.innerHTML="";d.games.forEach((g,i)=>{const b=document.createElement("button");b.className="game-button"+(i===currentGame?" active":"");b.type="button";b.textContent=(["🦖","🐉","🐠","🍎","🦊","✨"][i%6])+" "+g;b.addEventListener("click",()=>{currentGame=i;qIndex=0;sessionDone=0;renderGames();newQuestion();});box.appendChild(b);});$("difficulty").value=p.mode;$("theme").value=p.interest;}
  function gameName(){const d=classData();return d.games[currentGame%d.games.length];}

  function letterQuestion(word, advanced){
    const pos=advanced && word.length>2 ? word.length-1 : 0, answer=word[pos];
    const distract=["m","s","t","p","f","a","e","i","o","n"].filter(x=>x!==answer);
    return {type:"choice",word,answer,opts:shuffle([answer,...shuffle(distract).slice(0,3)]),question:pos===0?`Which letter begins “${word}”?`:`Which letter ends “${word}”?`,say:word,skill:"Phoneme isolation · letter–sound link"};
  }
  function rhymeQuestion(d){
    const set=d.rhymeSets?.[qIndex%(d.rhymeSets.length||1)]||["cat","hat","sun","dog"], target=set[0], answer=set[1];
    return {type:"choice",word:target,answer,opts:shuffle(set.slice(1)),question:`Which word rhymes with “${target}”?`,say:target,skill:"Rhyme · sound awareness"};
  }
  function syllableQuestion(d){
    const item=d.syllables[qIndex%d.syllables.length];
    return {type:"choice",word:item.word,answer:String(item.count),opts:shuffle(["1","2","3","4"]),question:`How many syllables are in “${item.word}”?`,say:item.word,skill:"Syllable awareness"};
  }
  function patternQuestion(word,d){
    const patterns=d.letters.filter(x=>word.includes(x)); const answer=patterns[0]||word.slice(0,2); const distract=d.letters.filter(x=>x!==answer);
    return {type:"choice",word,answer,opts:shuffle([answer,...shuffle(distract).slice(0,3)]),question:`Which sound pattern can you see in “${word}”?`,say:word,skill:"Phonics · word patterns"};
  }
  function highFrequencyQuestion(d){
    const answer=d.highFrequency[qIndex%d.highFrequency.length]; const others=shuffle(d.highFrequency.filter(x=>x!==answer)).slice(0,3);
    return {type:"choice",word:answer.toLowerCase(),answer:answer.toLowerCase(),opts:shuffle([answer,...others]).map(x=>x.toLowerCase()),question:"Listen, then choose the word you heard.",say:answer,skill:"High-frequency word recognition"};
  }
  function missingQuestion(word,advanced){
    let pos=advanced?Math.max(1,Math.floor(word.length/2)):0; if(pos>=word.length)pos=word.length-1; const answer=word[pos];
    const shown=word.split("").map((c,i)=>i===pos?"_":c.toUpperCase()).join(" ");
    const opts=shuffle([...new Set([answer,"a","e","i","o","s","t"])]).slice(0,4);
    return {type:"choice",word,answer,opts,question:`Complete the word: ${shown}`,say:word,skill:"Segmenting · spelling"};
  }
  function wordFamilyQuestion(d){
    const fam=d.families?.[qIndex%d.families.length]; if(!fam)return null;
    const answer=sample(fam.words); const others=shuffle(d.words.filter(w=>!fam.words.includes(w))).slice(0,3);
    return {type:"choice",word:answer,answer,opts:shuffle([answer,...others]),question:`Which word belongs to the ${fam.chunk} family?`,say:answer,skill:"Word families · pattern recognition"};
  }
  function suffixQuestion(d){
    const item=d.suffixes?.[qIndex%d.suffixes.length]; if(!item)return null;
    const others=shuffle(d.words.filter(w=>w!==item.answer)).slice(0,3);
    return {type:"choice",word:item.answer,answer:item.answer,opts:shuffle([item.answer,...others]),question:`Add “${item.suffix}” to “${item.base}”. Which word do you make?`,say:item.answer,skill:"Word parts · spelling"};
  }
  function compoundQuestion(d){
    const item=d.compounds?.[qIndex%d.compounds.length]; if(!item)return null;
    const others=shuffle(d.words.filter(w=>w!==item[2])).slice(0,3);
    return {type:"choice",word:item[2],answer:item[2],opts:shuffle([item[2],...others]),question:`Join “${item[0]}” + “${item[1]}”.`,say:item[2],skill:"Compound words · word study"};
  }
  function buildWordQuestion(word,advanced){
    return {type:"build",word,answer:word,opts:shuffle(word.split("")),question:advanced?`Spell “${word}” from memory.`:`Build the word “${word}”.`,say:word,skill:"Blending · segmenting · spelling"};
  }

  function buildQuestion(){
    const p=current(),d=classData(),advanced=$("difficulty").value==="Advanced",pool=adaptivePool(),word=(pool[qIndex%pool.length]||"cat").toLowerCase().replace(/[^a-z]/g,"")||"cat",game=gameName();
    if(game.includes("Rhyme")) return rhymeQuestion(d);
    if(game.includes("Syllable")) return syllableQuestion(d);
    if(game.includes("Tricky Word")) return highFrequencyQuestion(d);
    if(game.includes("Word Family")) return wordFamilyQuestion(d)||buildWordQuestion(word,advanced);
    if(game.includes("Suffix")) return suffixQuestion(d)||buildWordQuestion(word,advanced);
    if(game.includes("Compound")) return compoundQuestion(d)||buildWordQuestion(word,advanced);
    if(game.includes("Digraph")||game.includes("Vowel Team")||game.includes("Pattern")) return patternQuestion(word,d);
    if(game.includes("Missing")||game.includes("Rescue")) return missingQuestion(word,advanced);
    if(game.includes("Sound-a")||game.includes("Feed the Fish")||game.includes("Letter Hunt")) return letterQuestion(word,advanced);
    return buildWordQuestion(word,advanced);
  }

  function newQuestion(){
    answered=false;helpStep=0;$("nextBtn").disabled=true;$("feedback").textContent="";
    const p=current(),q=buildQuestion(),world=WORLDS[p.interest]||WORLDS.Dinosaurs;
    $("worldLabel").textContent=world[1];$("mascot").textContent=world[0];$("gameTitle").textContent=gameName();$("question").textContent=q.question;$("skillLabel").textContent=q.skill;
    $("instruction").textContent=q.type==="build"?"Tap letters in order to build the word.":"Tap the best answer.";$("sessionCount").textContent=`${sessionDone} / 5`;$("sessionBar").style.width=(sessionDone*20)+"%";
    const area=$("answerArea");area.innerHTML="";
    if(q.type==="choice"){
      q.opts.forEach(x=>{const b=document.createElement("button");b.type="button";b.className="answer-btn";b.textContent=String(x).toUpperCase();b.addEventListener("click",()=>checkChoice(b,String(x).toLowerCase(),q));area.appendChild(b);});
    }else{
      let built="";const readout=document.createElement("div");readout.className="built";readout.setAttribute("aria-live","polite");area.appendChild(readout);
      q.opts.forEach(x=>{const b=document.createElement("button");b.type="button";b.className="answer-btn";b.textContent=x.toUpperCase();b.addEventListener("click",()=>{if(answered)return;built+=x;readout.textContent=built.toUpperCase();b.disabled=true;if(built.length===q.answer.length)checkBuild(built,q);});area.appendChild(b);});
      const reset=document.createElement("button");reset.type="button";reset.className="secondary";reset.textContent="↺ Start again";reset.addEventListener("click",newQuestion);area.appendChild(reset);
    }
  }

  function record(ok,skill){
    const p=current();p.attempts++;if(ok){p.correct++;p.stars++;}
    let key="Sound awareness",s=skill.toLowerCase();
    if(s.includes("spelling"))key="Spelling";else if(s.includes("blend")||s.includes("segment"))key="Blending";else if(s.includes("pattern")||s.includes("family")||s.includes("word part")||s.includes("compound"))key="Word patterns";else if(s.includes("letter")||s.includes("phonics"))key="Letter sounds";
    p.mastery[key]=clamp((p.mastery[key]||45)+(ok?4:-2),10,100);save();$("stars").textContent="⭐ "+p.stars;renderParent();
  }
  function finish(ok,q){sessionDone=clamp(sessionDone+1,0,5);$("sessionCount").textContent=`${sessionDone} / 5`;$("sessionBar").style.width=(sessionDone*20)+"%";$("feedback").textContent=ok?`⭐ Brilliant! ${q.word.toUpperCase()}.`:`Good try. ${phonemes(q.word).join(" · ")} → ${q.word.toUpperCase()}`;if(!ok)speak(q.word);$("nextBtn").disabled=false;}
  function checkChoice(btn,x,q){if(answered)return;answered=true;const ok=x===String(q.answer).toLowerCase();btn.classList.add(ok?"correct":"wrong");record(ok,q.skill);finish(ok,q);}
  function checkBuild(str,q){if(answered)return;answered=true;const ok=str===q.answer;record(ok,q.skill);finish(ok,q);}

  function renderJourney(){
    const box=$("journeyGrid");box.innerHTML="";
    Object.entries(CONTENT).forEach(([cls,d])=>{const el=document.createElement("article");el.className="journey-card"+(current().cls===cls?" current":"");el.innerHTML=`<strong>${cls}</strong> <span class="chip">${d.stage}</span><p class="muted">${d.desc}</p><div class="chips">${d.skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div><p><strong>Learning path:</strong> ${d.units.map(u=>u.name).join(" → ")}</p>`;box.appendChild(el);});
  }
  function renderSpellings(){const box=$("spellingList");box.innerHTML="";const words=current().schoolWords;if(!words.length){box.innerHTML='<span class="muted">No school words added yet.</span>';return;}words.forEach(w=>{const s=document.createElement("span");s.className="chip";s.textContent=w;box.appendChild(s);});}
  function renderParent(){
    const p=current();$("parentTitle").textContent=`${p.name} · ${p.cls}`;const box=$("mastery");box.innerHTML="";
    Object.entries(p.mastery).forEach(([k,v])=>{const row=document.createElement("div");row.className="mastery-row";row.innerHTML=`<div class="mastery-head"><span>${k}</span><span>${Math.round(v)}%</span></div><div class="progress"><span style="width:${clamp(v,0,100)}%"></span></div>`;box.appendChild(row);});
    const weakest=Object.entries(p.mastery).sort((a,b)=>a[1]-b[1])[0],accuracy=p.attempts?Math.round(100*p.correct/p.attempts):0,d=classData();
    $("nextPlan").innerHTML=`<p><strong>Priority:</strong> ${weakest[0]}</p><p>The adaptive pool will give extra practice here while keeping ${d.skills.slice(0,3).join(", ").toLowerCase()} in rotation.</p><p><strong>Current learning path:</strong> ${d.units.map(u=>u.name).join(" → ")}</p><p><strong>Accuracy:</strong> ${accuracy}% across ${p.attempts} attempts.</p>`;renderSpellings();
  }
  function generateWorksheet(){
    const p=current(),d=classData(),theme=$("sheetTheme").value||p.interest,focus=$("sheetFocus").value,length=$("sheetLength").value,icon=(WORLDS[theme]||WORLDS.Dinosaurs)[0],words=shuffle(p.schoolWords.length?p.schoolWords:d.words).slice(0,8),weak=Object.entries(p.mastery).sort((a,b)=>a[1]-b[1])[0][0];
    const hf=shuffle(d.highFrequency).slice(0,4);
    $("worksheet").innerHTML=`<header><h2>${icon} LetterQuest Practice</h2><p>${p.name} · ${p.cls} · ${length}</p><p><strong>Focus:</strong> ${focus} &nbsp; <strong>Priority:</strong> ${weak}</p></header>
      <section class="worksheet-section"><h3>1. Say and blend</h3><p>${words.slice(0,4).map(w=>phonemes(w).join(" &nbsp; ")).join("<br><br>")}</p></section>
      <section class="worksheet-section"><h3>2. Sound boxes</h3>${words.slice(0,4).map(w=>`<p>${w.toUpperCase()} &nbsp; ${phonemes(w).map(()=>'<span class="soundbox"></span>').join("")}</p>`).join("")}</section>
      <section class="worksheet-section"><h3>3. Missing letters</h3>${words.slice(0,5).map(w=>{const pos=Math.min(1,w.length-1);return `<p>${w.split("").map((c,i)=>i===pos?"_":c.toUpperCase()).join(" ")}</p>`;}).join("")}</section>
      <section class="worksheet-section"><h3>4. Quick words</h3><p>Read, cover, write, check: ${hf.join(" &nbsp; · &nbsp; ")}</p><div style="height:70px;border-bottom:1px solid #111"></div></section>
      <section class="worksheet-section"><h3>5. Spelling challenge</h3><p>${words.slice(0,6).join(" &nbsp; · &nbsp; ")}</p><div style="height:70px;border-bottom:1px solid #111"></div></section>
      <section class="worksheet-section"><h3>6. Draw & write</h3><p>Draw something from ${theme} and write one sentence using one practice word.</p><div class="drawbox"></div></section>`;
  }

  $("hearBtn").addEventListener("click",()=>speak(buildQuestion().say));
  $("helpBtn").addEventListener("click",()=>{const q=buildQuestion(),ph=phonemes(q.word);helpStep++;if(helpStep===1){$("feedback").textContent="First sound: "+ph[0];speak(ph[0].replaceAll("/",""));}else if(helpStep===2){$("feedback").textContent=ph.join(" · ");speak(ph.map(x=>x.replaceAll("/","")).join(" "));}else{$("feedback").textContent=ph.join(" → ")+" → "+q.word.toUpperCase();speak(q.word);}});
  $("nextBtn").addEventListener("click",()=>{qIndex++;if(sessionDone>=5)sessionDone=0;newQuestion();});
  $("difficulty").addEventListener("change",()=>{current().mode=$("difficulty").value;save();qIndex=0;newQuestion();});
  $("theme").addEventListener("change",()=>{current().interest=$("theme").value;save();newQuestion();});
  $("profileSelect").addEventListener("change",e=>{state.currentId=e.target.value;save();currentGame=0;qIndex=0;sessionDone=0;renderAll();});
  $("addProfileBtn").addEventListener("click",()=>$("profileDialog").showModal());$("cancelProfileBtn").addEventListener("click",()=>$("profileDialog").close());
  $("profileForm").addEventListener("submit",e=>{e.preventDefault();const name=$("profileName").value.trim(),age=clamp(Number($("profileAge").value)||5,4,9);if(!name)return;const p={id:"p-"+Date.now(),name,age,cls:$("profileClass").value,gender:$("profileGender").value,mode:$("profileMode").value,interest:$("profileInterest").value,stars:0,attempts:0,correct:0,schoolWords:[],mastery:{"Sound awareness":45,"Letter sounds":40,"Blending":35,"Word patterns":30,"Spelling":25}};state.profiles.push(p);state.currentId=p.id;save();$("profileDialog").close();$("profileForm").reset();renderAll();});
  $("spellingForm").addEventListener("submit",e=>{e.preventDefault();current().schoolWords=$("spellingInput").value.split(",").map(x=>x.trim().toLowerCase()).filter(x=>/^[a-z]{2,14}$/.test(x)).slice(0,8);$("spellingInput").value="";save();renderSpellings();newQuestion();});
  document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b===btn));document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));$("page-"+btn.dataset.page).classList.remove("hidden");if(btn.dataset.page==="worksheets")generateWorksheet();}));
  $("generateSheetBtn").addEventListener("click",generateWorksheet);$("printBtn").addEventListener("click",()=>{generateWorksheet();window.print();});
  function renderAll(){const p=current();renderProfiles();renderGames();renderJourney();renderParent();$("stars").textContent="⭐ "+p.stars;$("theme").value=p.interest;newQuestion();}
  renderAll();
})();
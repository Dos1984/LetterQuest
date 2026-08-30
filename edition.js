(() => {
  const params = new URLSearchParams(location.search);
  const edition = params.get('edition');
  const allowed = ['Senior Infants','Second Class'];
  if (!allowed.includes(edition)) return;

  const STORE = 'letterquest-ireland-v1';
  try {
    const state = JSON.parse(localStorage.getItem(STORE)) || {profiles:[]};
    if (!Array.isArray(state.profiles)) state.profiles = [];
    let current = state.profiles.find(p => p.id === state.currentId) || state.profiles[0];
    if (!current) {
      current = {
        id:'edition-'+Date.now(),
        name:'Learner 1',
        age: edition === 'Senior Infants' ? 5 : 7,
        cls:edition,
        gender:'',
        mode:'Beginner',
        interest: edition === 'Senior Infants' ? 'Unicorns' : 'Dinosaurs',
        stars:0,attempts:0,correct:0,schoolWords:[],
        mastery:{'Sound awareness':45,'Letter sounds':40,'Blending':35,'Word patterns':30,'Spelling':25}
      };
      state.profiles.push(current);
      state.currentId = current.id;
    }
    current.cls = edition;
    if (edition === 'Senior Infants' && (!current.age || current.age < 5 || current.age > 7)) current.age = 5;
    if (edition === 'Second Class' && (!current.age || current.age < 7 || current.age > 9)) current.age = 7;
    localStorage.setItem(STORE, JSON.stringify(state));
  } catch(e) {}

  window.LETTERQUEST_EDITION = edition;
  document.title = `LetterQuest Ireland — ${edition}`;

  const lockSelect = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = `<option>${edition}</option>`;
    el.value = edition;
    el.disabled = true;
  };

  const apply = () => {
    const h1 = document.querySelector('.topbar h1');
    const sub = document.querySelector('.topbar p');
    if (h1) h1.textContent = `LetterQuest Ireland · ${edition}`;
    if (sub) sub.textContent = edition === 'Senior Infants'
      ? 'Blend it. Segment it. Spot digraphs. Read common words.'
      : 'Spot patterns. Build words. Use suffixes. Spell with confidence.';
    lockSelect('profileClass');
    lockSelect('editClass');
    const journey = document.querySelector('#page-journey h2');
    if (journey) journey.textContent = `${edition} learning journey`;
    const note = document.createElement('div');
    note.className='callout edition-note';
    note.innerHTML = `<strong>${edition} Edition</strong><p>This version keeps activities and profiles at ${edition} level.</p>`;
    const side = document.querySelector('.side');
    if (side && !document.querySelector('.edition-note')) side.prepend(note);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();

  document.addEventListener('submit', (e) => {
    if (e.target?.id === 'profileForm' || e.target?.id === 'editProfileForm') {
      const sel = e.target.querySelector('#profileClass, #editClass');
      if (sel) { sel.disabled = false; sel.value = edition; }
      setTimeout(() => { if (sel) sel.disabled = true; }, 0);
    }
  }, true);
})();
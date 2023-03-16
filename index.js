//  Project Data for projects in Work Section
const ProjectsMobile = [{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
}];

//  Project Section Card creator

const cardContainer = document.querySelector('#section-02');
for (let i = 0; i < ProjectsMobile.length; i++) {
  const projectM = `<div class="card-2">
  <h2 class="prof-art">${ProjectsMobile[i].Name}</h2>
  <p class="p22">${ProjectsMobile[i].Description}</p>
  <ul class="skils">
    <li class="button">${ProjectsMobile[i].Tecnologies[0]}</li>
    <li class="skil button">${ProjectsMobile[i].Tecnologies[1]}</li>
    <li class="skil button">${ProjectsMobile[i].Tecnologies[2]}</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject${[i]}">${ProjectsMobile[i].Link}</button>
  `;
  cardContainer.innerHTML += projectM;
}

// Get the popup mobile
const modal = document.getElementById('myModal');
modal.innerHTML = `<div class="modal-content">
<div class="modalHead-close">
<h2 class = "modalHeader" id="modalHeader">Multi Post Stories</h2>
 <span class="close">&times;</span>
 </div>
 <div>
  <ul id="modalTech">
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby on rails</li>
  </ul>
  <img src="/Portfolio.png" alt="popup image">
  <p class = "modal-pm" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  <div class = "live-source">
  <a href="https://www.google.com/">see live <img src="/Icon.png" alt="google"></a>
  <a href="https://github.com/">see source <img src="/Vector.png" alt=""></a>
  </div>
</div>
</div>`;
// Get the button that opens the modal
const btn0 = document.getElementById('seeproject0');
const btn1 = document.getElementById('seeproject1');
const btn2 = document.getElementById('seeproject2');
const btn3 = document.getElementById('seeproject3');
const btn4 = document.getElementById('seeproject4');
const btn5 = document.getElementById('seeproject5');
const btn6 = document.getElementById('seeprojectt');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn0.onclick = function () {
  modal.style.display = 'block';
};
btn1.onclick = function () {
  modal.style.display = 'block';
};
btn2.onclick = function () {
  modal.style.display = 'block';
};
btn3.onclick = function () {
  modal.style.display = 'block';
};
btn4.onclick = function () {
  modal.style.display = 'block';
};
btn5.onclick = function () {
  modal.style.display = 'block';
};
btn6.onclick = function () {
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
// DESK
//  Project Data for projects in Work Section desk
const cardDesk = document.querySelector('#card123');
const card1 = `<div class="desk-card-pro1">
<button class="desk-see-project-1" id="seeprojectyy">See Project</button>
</div>`;
cardDesk.innerHTML += card1;
const card2 = `<div class="desk-card-d1">
<h2 class="desk-prof-art-dash">Data Dashboard Healthcare</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk.innerHTML += card2;
const card3 = `<div class="desk-card-w1">
<h2 class="desk-prof-art-w">Website Protfolio </h2>
<p class="desk-w">A daily selection of privately personalized reads; no accounts or sign-ups required. has been
the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk.innerHTML += card3;
const cardDesk2 = document.getElementById('card456');
const card4 = `<div class="desk-card-d1">
<h2 class="desk-prof-art-dash">Profesional Art Printing Data More</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk2.innerHTML += card4;
const card5 = ` <div class="desk-card-d2">
<h2 class="desk-prof-art-dash">Data Dashboard Healthcare</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>

</div>`;
cardDesk2.innerHTML += card5;
const card6 = ` <div class="desk-card-w1">
<h2 class="desk-prof-art-w">Website Protfolio </h2>
<p class="desk-w">A daily selection of privately personalized reads; no accounts or sign-ups required. has been
the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk2.innerHTML += card6;

// Get the popup mobile
const modalD = document.getElementById('myModalD');
modalD.innerHTML = `<div class="modal-contentD">
<div class="modalHead-closeD">
<h2 class = "modalHeaderD" id="modalHeader">Keeping track of hundreds  of components website</h2>
 <span class="closeD">&times;</span>
 </div>
 <div class = "desk0">
  <ul id="modalTech">
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby on rails</li>
  </ul>
  <div class ="desk1">
  <img src="/Portfolio.png" alt="popup image">
  <div class ="desk2">
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  </p>
  <div class = "live-sourceD">
  <a href="https://www.google.com/">see live <img src="/Icon.png" alt="google"></a>
  <a href="https://github.com/">see source <img src="/Vector.png" alt=""></a>
  </div>
  </div>
  </div>
</div>
</div>`;
// Get the button that opens the modal
const btn0d = document.getElementById('seeprojecty');
const btn1d = document.getElementById('seeprojectyy');

// Get the <span> element that closes the modal
const spand = document.getElementsByClassName('closeD')[0];

// When the user clicks the button, open the modal
btn0d.onclick = function () {
  modalD.style.display = 'block';
};
btn1d.onclick = function () {
  modalD.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
spand.onclick = function () {
  modalD.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modalD) {
    modalD.style.display = 'none';
  }
};
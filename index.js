//  Project Data for projects in Work Section

//  Project Section Card creator

const cardContainer = document.querySelector('#section-02');
// const arr = [0, 1, 2, 3, 4, 5];
const projectM = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject0">see my project</button>
  `;
cardContainer.innerHTML += projectM;
const projectM2 = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject1">see my project</button>
  `;
cardContainer.innerHTML += projectM2;
const projectM3 = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject2">see my project</button>
  `;
cardContainer.innerHTML += projectM3;
const projectM4 = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject3">see my project</button>
  `;
cardContainer.innerHTML += projectM4;
const projectM5 = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject4">see my project</button>
  `;
cardContainer.innerHTML += projectM5;
const projectM6 = `<div class="card-2">
  <h2 class="prof-art">Profesional Art Printing Data</h2>
  <p class="p22">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard</p>
  <ul class="skils">
    <li class="button">HTML}</li>
    <li class="skil button">bootstrap</li>
    <li class="skil button">Ruby</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject5">see my project</button>
  `;
cardContainer.innerHTML += projectM6;

// Get the popup mobile
const modal = document.getElementById('myModal');
modal.innerHTML = `<div class="modal-content">
<div class="modalHead-close">
<h2 class = "modalHeader" id="modalHeader">Multi Post Stories</h2>
 <span class="close">&times;</span>
 </div>
 <div>
  <ul id="modalTech" class ="modalTech">
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
function popupp() {
  modal.style.display = 'block';
}
btn0.onclick = function () {
  popupp();
};
btn1.onclick = function () {
  popupp();
};
btn2.onclick = function () {
  popupp();
};
btn3.onclick = function () {
  popupp();
};
btn4.onclick = function () {
  popupp();
};
btn5.onclick = function () {
  popupp();
};
btn6.onclick = function () {
  popupp();
};
// When the user clicks on <span> (x), close the modal
function closee() {
  modal.style.display = 'none';
}
span.onclick = function () {
  closee();
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
function popupd() {
  modalD.style.display = 'block';
}
btn0d.onclick = function () {
  popupd();
};
btn1d.onclick = function () {
  popupd();
};

// When the user clicks on <span> (x), close the modal
function closseed() {
  modalD.style.display = 'none';
}
spand.onclick = function () {
  closseed();
};
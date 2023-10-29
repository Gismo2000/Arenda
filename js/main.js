const navBtn = document.querySelector('.nav-icon-btn'); 
const navIcon = document.querySelector('.nav-icon'); 
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active'); 
  nav.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle("no-scroll");
}

// Phone Mask
mask("[data-tel-input]");

// удаляеи + если ничего не введено
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input)=>{
  input.addEventListener("input", ()=>{
if (input.value == "+") input.value = "";
  } )
  input.addEventListener("blur",()=>{
    if (input.value == "+") input.value = "";
      } )
});

/* 2Gis Map */
let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [43.231592,76.834741 ],
            zoom: 13
        });

        let myIcon = DG.icon({
          iconUrl: 'https://logos.flamingtext.com/Name-Logos/Vadim-design-china-name.png',
          iconSize: [100, 30],
        });
      

        DG.marker([43.243221,76.884367], {icon: myIcon}).addTo(map).bindPopup('Тут Живет Вадосик');
        DG.marker([43.240476,76.880762], {icon: myIcon}).addTo(map).bindPopup('Тут Живет Вадосик');
        DG.marker([43.211653,76.794219], {icon: myIcon}).addTo(map).bindPopup('Тут Живет Вадосик');
    });




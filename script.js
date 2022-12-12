let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

let downloadBtn = document.getElementById('downloadBrochure')
let formInput1 = document.querySelector('.form-input1')
let formInput2 = document.querySelector('.form-input2')
let formInput3 = document.querySelector('.form-input3')


function download(){
  axios({
      url:'/assets/document/MonteCarlo.pdf',
      method:'GET',
      responseType: 'blob'
})
.then((response) => {
     const url = window.URL
     .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'MonteCarlo.pdf');
            document.body.appendChild(link);
            link.click();
})
}

downloadBtn.addEventListener('click', function(e){ 
  if(formInput1.value==='' || formInput2.value==='' || formInput3.value===''){
    alert(`please fill all the fields in the download form`)
    return
  }
  download()
  formInput1.value =''
  formInput2.value =''
  formInput3.value =''
})


// footer js
let year = document.querySelector('.year')
let date = new Date().getFullYear()
year.textContent = date


const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");


function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    console.log("navvvvv")
  if (!navbar.classList.contains("open")) {
    console.log("nav");
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

$(document).ready(function () {
	$('.testiSlide').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [{
			breakpoint: 850,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
});
$(document).ready(function () {
	$('.testiSlide_service').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [{
			breakpoint: 850,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
});

 // Function to handle form submission
function handleFormSubmit(event) {
	event.preventDefault();
	// You can perform any additional form validation or data processing here before submitting the form
	const formData = new FormData(event.target);
	// For demonstration purposes, log the form data to the console
	for (const [key, value] of formData.entries()) {
	  console.log(`${key}: ${value}`);
	}
  const msg = document.querySelector(".msg0");
  console.log(msg.value);
  var submit_div = document.querySelector(".overview-contact-form0");
  submit_div.classList.add("overview-contact-form-translated")
	// Replace the log with code to submit the form data to your server using AJAX or other methods
  }
  
  function handleFormSubmit2(event) {
	event.preventDefault();
	// You can perform any additional form validation or data processing here before submitting the form
	const formData = new FormData(event.target);
	// For demonstration purposes, log the form data to the console
	for (const [key, value] of formData.entries()) {
	  console.log(`${key}: ${value}`);
	}
	const date = document.querySelector(".date");
  console.log(date.value);
  const msg = document.querySelector(".msg");
  console.log(msg.value);
  var submit_div = document.querySelector(".overview-contact-form");
  submit_div.classList.add("overview-contact-form-translated");
	// Replace the log with code to submit the form data to your server using AJAX or other methods
  }
  
  
  // Add a listener to the form submit event
  const consultationForm = document.getElementById('consultationForm');
  consultationForm.addEventListener('submit', handleFormSubmit);

  const consultationForm2 = document.getElementById('consultationForm2');
  consultationForm2.addEventListener('submit', handleFormSubmit2);
  
  const submitAgain = document.querySelector(".submit-again");
  submitAgain.addEventListener('click',function(){
	const submit_div = document.querySelector(".overview-contact-form");
	submit_div.classList.remove("overview-contact-form-translated");
  })

  const submitAgain0 = document.querySelector(".submit-again0");
  submitAgain0.addEventListener('click',function(){

	const submit_div = document.querySelector(".overview-contact-form0");
	submit_div.classList.remove("overview-contact-form-translated");
  })

  const backBtnFromConsultationForm = document.querySelector(".back-btn-form");
  backBtnFromConsultationForm.addEventListener('click',function(){
	const formparent = document.querySelector(".services-appoint");
	const form = formparent.querySelector(".contact-form-translated");
	const testiSlide = formparent.querySelector(".testiSlide_service");

	testiSlide.classList.remove("testiSlide-opacity")

	form.classList.remove("form-appear-contact")
  })

  function appearForm (flg){

	
	const formparent = document.querySelector(".services-appoint");
	const form = formparent.querySelector(".contact-form-translated");
	const testiSlide = formparent.querySelector(".testiSlide_service");
	const formTitle = form.querySelector(".form-title");

	testiSlide.classList.add("testiSlide-opacity");

	form.classList.add("form-appear-contact");
	
	



	if(flg==1){
		
		formTitle.innerHTML = "Dental"
	}
	if(flg==2){
		
		formTitle.innerHTML = "Hair"
	}
	if(flg==3){
		
		formTitle.innerHTML = "Face"
	}
	if(flg==4){
		
		formTitle.innerHTML = "Cosmetic"
	}
  }
  window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal_absolute);
window.addEventListener('scroll', reveal_right);
window.addEventListener('scroll', reveal_left);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var  i=0; i<reveals.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }

    }
}
function reveal_absolute(){
    var reveals1 = document.querySelectorAll('.reveal_absolute');

    for (var  i=0; i<reveals1.length; i++){
        var windowheight1= window.innerHeight;
        var revealtop1 = reveals1[i].getBoundingClientRect().top;
        var revealpoint1 = 25;

        if(revealtop1 < windowheight1 - revealpoint1){
            reveals1[i].classList.add('active_absolute_div');

        }
        else{
            reveals1[i].classList.remove('active_absolute_div');
        }

    }
}
function reveal_right(){
    var reveals2 = document.querySelectorAll('.reveal-from-right');

    for (var  i=0; i<reveals2.length; i++){
        var windowheight2= window.innerHeight;
        var revealtop2 = reveals2[i].getBoundingClientRect().top;
        var revealpoint2 = 10;

        if(revealtop2 < windowheight2 - revealpoint2){
            reveals2[i].classList.add('active-right');

        }
        else{
            reveals2[i].classList.remove('active-right');
        }

    }
}
function reveal_left(){
    var reveals3 = document.querySelectorAll('.reveal-from-left');

    for (var  i=0; i<reveals3.length; i++){
        var windowheight3= window.innerHeight;
        var revealtop3 = reveals3[i].getBoundingClientRect().top;
        var revealpoint3 = 10;

        if(revealtop3 < windowheight3 - revealpoint3){
            reveals3[i].classList.add('active-left');

        }
        else{
            reveals3[i].classList.remove('active-left');
        }

    }
}


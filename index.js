
/*=============== SHOW NAVBAR  MENU ===============*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    
}
const navLink = document.querySelectorAll(".navbar a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
   

}



const skills = ["Web Development", "Python Development", "Artificial Intelligence", "Database Management"];
let skillIndex = 0;
let charIndex = 0;
let currentSkill = "";
let typingDelay = 100;
let erasingDelay = 50;
let newSkillDelay = 2000; // Delay between current and next skill

function type() {
    if (charIndex < skills[skillIndex].length) {
        currentSkill += skills[skillIndex].charAt(charIndex);
        document.getElementById("typewriter").textContent = currentSkill;
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newSkillDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        currentSkill = currentSkill.slice(0, -1);
        document.getElementById("typewriter").textContent = currentSkill;
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (skills.length) setTimeout(type, newSkillDelay + 250);
});



document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
});

// Experience section horizontal scroll
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById('timeline');
  const progress = document.getElementById('progress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.querySelectorAll('.timeline-item');
  let currentIndex = 0;

  function updateTimeline() {
      const width = timeline.offsetWidth;
      timeline.style.transform = `translateX(-${currentIndex * width}px)`;
      progress.style.width = `${((currentIndex + 1) / items.length) * 100}%`;
  }

  nextBtn.addEventListener('click', function () {
      if (currentIndex < items.length - 1) {
          currentIndex++;
          updateTimeline();
      }
  });

  prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
          currentIndex--;
          updateTimeline();
      }
  });

  updateTimeline();
});






// Popup

// Function to open the popup for a specific project
function openPopup(projectName) {
  var popup = document.getElementById('popup-' + projectName);
  popup.style.display = 'block';
}

// Function to close the popup for a specific project
function closePopup(projectName) {
  var popup = document.getElementById('popup-' + projectName);
  popup.style.display = 'none';
}

//Emailjs 
const btn = document.getElementById('form-submit');
const sender_email= document.getElementById('sender-email');

const sender_name= document.getElementById('sender-name');
const subject=document.getElementById('subject');
const message=document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_dxk31zd';
   const templateID = 'template_b0a9o89';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.getElementById('form').reset();
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

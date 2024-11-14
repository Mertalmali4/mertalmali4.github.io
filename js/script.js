
const messages = [
    "Computer Engineer",
    "Robotics Engineer",
    "Computer Vision Developer",
    "Robotics Technician"
];

document.addEventListener("DOMContentLoaded", function() {
    const currentHeader = document.getElementById("header");
    let characterindex = 0;
    let messageindex = 0;
    let wordDelete = false;
    let timeout = 0

    function add_and_delete() {
        const message = messages[messageindex];
        const messageLen = message.length;
        

        if (wordDelete) {
            currentHeader.textContent = message.slice(0, characterindex--);
            if (characterindex < 0) {
                wordDelete = false; 
                messageindex = (messageindex + 1) % messages.length; 
                characterindex = 0; 
            }
        } else {
           
            currentHeader.textContent = message.slice(0, characterindex++);
            if (characterindex === messageLen) {
                wordDelete = true; 
            }
        }

        if (wordDelete){
            timeout=100;} 
        else {
            timeout=150;}

       
        setTimeout(add_and_delete,timeout);
    }

    add_and_delete(); 
});



    document.addEventListener("DOMContentLoaded", function() {
        const dayElement = document.getElementById("day");
        const dateElement = document.getElementById("date");
    
        const today = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
    
        const day = days[today.getDay()];
        const date = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        dateElement.textContent = date;
        dayElement.textContent = day;
        
    });
    


    
    function toggleMenu() {
        const navbarUl = document.querySelector('.navbar ul');
        navbarUl.classList.toggle('open');
    };





    let currentSlide = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.gallery-slide');
        const slideCount = slides.length;
    
        
        currentSlide += direction;
    
        
        if (currentSlide < 0) {
            currentSlide = slideCount - 1;
        } else if (currentSlide >= slideCount) {
            currentSlide = 0; 
        }
    
        const offset = -currentSlide * 100;
        document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
    }
    
    document.getElementById('toggleButton').addEventListener('click', function() {
        var moreContent = document.getElementById('moreContent');
        var toggleButton = document.getElementById('toggleButton');
        
        moreContent.classList.toggle("open");

        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
          moreContent.style.display = 'block';
          toggleButton.textContent = 'Show Less';
        } else {
          moreContent.style.display = 'none';
          toggleButton.textContent = 'Show More';
        }
      });


      
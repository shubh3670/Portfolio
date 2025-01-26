  // Array of texts to type out
  const texts = ["Data Scientist ", "Machine Learning Engineer ", "Data Analyst "];
  
  const textElement = document.getElementById("dynamicText");
  let textIndex = 0; // Index of the current text
  let charIndex = 0; // Index of the current character
  let isDeleting = false; // To track if we're deleting characters
  const typingSpeed = 100; // Typing speed in milliseconds
  const erasingSpeed = 50; // Erasing speed in milliseconds
  const delayBetweenTexts = 2000; // Delay before switching texts

  // Typing and deleting function
  function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Remove a character
      textElement.textContent = currentText.substring(0, charIndex--);
    } else {
      // Add a character
      textElement.textContent = currentText.substring(0, charIndex++);
    }

    // Determine if typing or deleting is done
    if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      setTimeout(() => {
        isDeleting = true;
        typeText();
      }, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next text and reset
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeText();
    } else {
      // Continue typing or deleting
      setTimeout(typeText, isDeleting ? erasingSpeed : typingSpeed);
    }
  }

  // Start typing
  typeText();

function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")


}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
      closeModal();
  }
}
  
function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}
function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal1");
  if (event.target === modal) {
      closeModal1();
  }
}



function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal2");
  if (event.target === modal) {
      closeModal2();
  }
}

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal3");
  if (event.target === modal) {
      closeModal3();
  }
}

function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal4");
  if (event.target === modal) {
      closeModal4();
  }
}


function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}
function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal5");
  if (event.target === modal) {
      closeModal5();
  }
}

function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}
function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal6");
  if (event.target === modal) {
      closeModal6();
  }
}

function openModal7() {
  document.getElementById("myModal7").style.display = "block";
}
function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal7");
  if (event.target === modal) {
      closeModal7();
  }
}

function openModal8() {
  document.getElementById("myModal8").style.display = "block";
}
function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal8");
  if (event.target === modal) {
      closeModal8();
  }
}


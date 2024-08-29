fetch("http://bclassserver.free.nf/connect.php", {
  mode: 'no-cors',
}).then(response => {return response.text()}).then(data => {alert(data)}).catch(console.log(onerror))



console.log('Hello World!');
let menuIcon = document.getElementById("menuIcon");
let mobileMenu = document.querySelector(".mobileMenu");

const textSurp = document.getElementById("textSurp");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("top-[40px]","scale-y-100");
  
  console.log("click");
})

exitBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("top-[40px]","scale-y-100");
});

let out = document.getElementById("desc");
const str = "Welcome to our memories site! Time flies by, and it seems like just yesterday we were sitting at school desks";

  
  
  
  let position = 0;



const typeText = () => {
    if (position === str.length) return;

    const v = getRandomInt(0, 100);

    if (v > 90 && position !== 0) {
        out.textContent += str[getRandomInt(0, str.length - 2)];
        setTimeout(removeLastChar, 1000);
    }
    else {
        out.textContent += str[position];
        position++;
        setTimeout(typeText, getRandomInt());
    }
}

const removeLastChar = () => {
    out.textContent = str.substring(0, position);
    setTimeout(typeText, getRandomInt());
}

function getRandomInt(min = 50, max = 55) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

typeText();



const animate = document.getElementById("animate");

let animate2s = document.querySelectorAll("#animate2");

const animate3 = document.getElementById("animate3");

window.addEventListener("scroll", () => {
  const triger = (window.innerHeight / 5)*4;
  console.log(triger);
  const animateTop = animate.getBoundingClientRect().top;
  const animate3Top = animate3.getBoundingClientRect().top;
  
  
  if(animateTop < triger){
    animate.classList.remove("translate-x-[-300px]", "opacity-0");
    animate.classList.add("translate-x-0", "opacity-1");
  };
  for(const animate2 of animate2s){
    const animate2Top = animate2.getBoundingClientRect().top;
    
    if (animate2Top < triger) {
      animate2.classList.remove("translate-x-[300%]", "translate-x-[-300%]", "translate-y-[-150%]", "opacity-0");
    }
  };
  
  if (animate3Top < triger) {
    
    startRem();
    
  }
});

//end Event scroll

function startRem() {
  let i = 99;
  
  setInterval(function(){
          if(i <= 100){
            animate3.innerText = i + "%";
          i++;
          
            if(i == 100){
            animate3.style.display = "none";
            textSurp.style.display = "block";
          }
        }
    } , 100)
}
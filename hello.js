let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let para = document.querySelector("#code");

let color1="#051937", color2="#a8eb12"; 

const updateGradient = () => {
        document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
        para.innerText = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
}

const generateColor1 = () => {
    let series = "0123456789abcdef";
    color1 = "#";
    for (let i = 0; i < 6; i++) {
        color1 = color1 + series[Math.floor(Math.random() * 16)];
    }
    console.log(color1); 
    btn1.innerText = color1; 
    updateGradient(); 
};

const generateColor2 = () => {
    let series = "0123456789abcdef";
    color2 = "#";
    for (let i = 0; i < 6; i++) {
        color2 = color2 + series[Math.floor(Math.random() * 16)];
    }
    console.log(color2); 
    btn2.innerText = color2; 
    updateGradient(); 
};

btn1.addEventListener("click", generateColor1);
btn2.addEventListener("click", generateColor2);

para.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerText);
    alert("Your color is Copied");
})





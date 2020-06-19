const hexNumbers = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const bodybkg = document.querySelector('body');
const btnColor = document.querySelector('#clr-btn');
const hexCode = document.querySelector('.hex-code');

btnColor.addEventListener('click',generateCode);

function generateCode() {
    let hex = "#";

    for(let i=0; i<6; i++)
    {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hex += hexNumbers[random];
        console.log(hex);
    }
    bodybkg.style.backgroundColor = hex;
    hexCode.innerHTML = hex;
}
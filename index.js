const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777275);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode,randomNumber);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;
}


//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//init call
getColor();
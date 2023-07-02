
let form=document.querySelector("form");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let text=document.querySelector("#text");
    let inp=document.querySelector("input");
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=f960bcba87999b57e43f2a3354fc3584`)
    let result=await res.json()
    console.log(result)
    console.log(result["main"]["temp"]);
    text.innerHTML=result.main.temp;
})






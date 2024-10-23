


let apiKey='9f6290d6cda9a36a63755fadee71f83d'
 let h1=  document.querySelector('h1')
let city='goa'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data,"daaaa");
    h1.innerText=data.main.temp
    

})
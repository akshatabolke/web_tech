let  input=document.querySelector("input");
let btn=document.querySelector("button");
let cont=document.querySelector("#cont");

// console.log(input, btn, cont);
btn.addEventListener("click",async (e) => {
    cont.innerHTML="";// used for previous data remove
    let key=`2b639ad8ba73fa64a05e970330bc0ca0`;
    let dataFromServer= await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`);
    let data= await dataFromServer.json();
    //it is used to fetch the data and here await is used to handle the promises

     if(dataFromServer.status==200){
          
     let cityName=document.createElement("h2");
     let Temp=document.createElement("h2");
     let climate=document.createElement("h2");
     let windSpeed=document.createElement("h2");
     let Humidity=document.createElement("h2");

    cityName.innerHTML=`city name:${data.name}`;
    Temp.innerHTML=`Temperature:${(data.main.temp-273).toFixed(2)}℃`;//here toFixed ids used to adjust the decimal like
    //29.10000000000 to 29.10
    climate.innerHTML=`Climate:${data.weather[0].main}`;
    windSpeed.innerHTML=`wind speed:${data.wind.speed}km/hr`;
    Humidity.innerHTML=`humidity:${data.main.humidity}%`;

    cont.append(cityName,Temp,climate, windSpeed,Humidity);
     }
     else{
        cont.innerHTML="enter the valid city name"
     }
     
    //console.log(dataFromServer);
    //console.log(data)
});
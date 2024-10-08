let form=document.querySelector("form");
let yoursName=document.querySelectorAll("input")[0];
let partnerName=document.querySelectorAll("input")[1];

let para=document.querySelector("p");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(yoursName.value && partnerName.value){
        let random = Math.floor(Math.random() * 101);
        para.innerHTML = `${yoursName.value} and ${partnerName.value} love percentage is ${random}%`;
    } else {
        para.innerHTML = "Please enter both names.";
    }
}
);
let h1=document.querySelector("h1");
let addBtn=document.querySelectorAll("button")[0];
let submitBtn=document.querySelectorAll("button")[1];
let para=document.querySelector("p");

console.log(h1,addBtn,submitBtn,para);

let count=0;
addBtn.addEventListener("click",(e)=>{
    count=count+1;
    h1.innerHTML=count;
    //console.log(count);
});

submitBtn.addEventListener("click",(e)=>{
    para.innerHTML=para.innerHTML+`${count}-`;
    count=0;
    h1.innerHTML=count;
});
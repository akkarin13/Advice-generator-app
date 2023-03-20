const de =document.querySelector('.de');
const url ="https://api.adviceslip.com/advice";
const random=document.querySelector('.advice_random')
const h=document.querySelector("h1");
de.addEventListener('click',()=>{
let requete = new XMLHttpRequest();
requete.open('GET',url);
requete.responseType='json';
requete.send();
requete.onload=function(){
    if(requete.readyState===XMLHttpRequest.DONE){
        if(requete.status ===200){
            let reponse =requete.response;
            let advice=reponse.slip.advice;
            let ide =reponse.slip.id;
            random.innerText=advice;
            h.innerText="Advice #"+ide;
        }
        else{
            alert("Le serveur n'a pas etre atteinds");
        }
    }
}})
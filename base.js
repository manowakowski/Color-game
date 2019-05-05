const tab = ["rgb(255,0,0)","rgb(0,0,255)","rgb(0,255,0)"];
let randomTab = [];
let counter = "";
let karty = document.querySelectorAll('[data-summary = "karta"]');






// 1. Tworzy tablice 8io elementowa
function threeRandom() {
    do {
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber === 1){
            randomTab.push(tab[0])
        } else if (randomNumber === 2 ){
            randomTab.push(tab[1])
        } else {
            randomTab.push(tab[2])
        }
        randomNumber = "";
    } while (randomTab.length < 8);
} 
threeRandom()

// 2. Z tablicy 8io elementowej podstawia kolory
function tlo() {
    for (let i=0; i < randomTab.length; i++){
        $('#c'+i).css("background",randomTab[i]);
        if (randomTab[i] === "rgb(255,0,0)"){
            document.getElementById("c"+i).classList.add("czerwony");
        } else if (randomTab[i] === "rgb(0,255,0)") {
            document.getElementById("c"+i).classList.add("zielony");
        } else {
            document.getElementById("c"+i).classList.add("niebieski");
        }
    }
}
tlo()

// 3. Losuje kolor do klikania
function kliknijW() {
    let randomColor = Math.ceil(Math.random() * 3)
    if (randomColor === 1){
        document.querySelector('[data-summary="kolor"]').textContent = "czerwony";
        document.querySelector('[data-summary="kolor"]').style.color = "red";
    } else if (randomColor === 2){
        document.querySelector('[data-summary="kolor"]').textContent = "niebieski"
        document.querySelector('[data-summary="kolor"]').style.color = "blue";
    } else {
        document.querySelector('[data-summary="kolor"]').textContent = "zielony"
        document.querySelector('[data-summary="kolor"]').style.color = "green";
    }
}
kliknijW()


function kaka(){
    let zmiennaKoloru = document.querySelector('p span').textContent;
    if (this.classList.contains("zielony") === true && zmiennaKoloru === "zielony" && this.style.boxShadow === ""){
        console.log("zzielony");
        counter++;
        this.style.boxShadow = '0 0 0 4px black';
        document.querySelector(`[data-summary="punkty"]`).textContent = `${counter}`;   
    } else if (this.classList.contains("czerwony") === true && zmiennaKoloru === "czerwony" && this.style.boxShadow === ""){
        console.log("cczerwony");
        counter++;
        this.style.boxShadow = '0 0 0 4px black';
        document.querySelector(`[data-summary="punkty"]`).textContent = `${counter}`;   
    } else if (this.classList.contains("niebieski") === true && zmiennaKoloru === "niebieski" && this.style.boxShadow === ""){
        console.log("nniebieski")
        counter++;
        this.style.boxShadow = '0 0 0 4px black';
        document.querySelector(`[data-summary="punkty"]`).textContent = `${counter}`;   
    } else {
        console.log("niccc")
    }
}

function renderNewTab(){
    randomTab = [];
    threeRandom();
    tlo();
    kliknijW();
    karty.forEach(item =>item.style.boxShadow = "");

}





document.querySelector("button").addEventListener('click', renderNewTab);
karty.forEach(item => item.addEventListener('click', kaka));





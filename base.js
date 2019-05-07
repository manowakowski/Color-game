const tab = ["rgb(255,0,0)","rgb(0,0,255)","rgb(0,255,0)"];

let counter = "";
let karty = document.querySelectorAll('[data-summary = "karta"]');


// 1. Tworzy tablice 8io elementowa
function threeRandom() {
    let rt = [];
    do {
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber === 1){
            rt.push(tab[0])
        } else if (randomNumber === 2 ){
            rt.push(tab[1])
        } else {
            rt.push(tab[2])
        }
    } while (rt.length < 8);
    return rt;
}


// 2. Z tablicy 8io elementowej podstawia kolory
function tlo(randTab) {
    for (let i=0; i < randTab.length; i++){
        $('#c'+i).css("background",randTab[i]);
        let selectedColor;
        if (randTab[i] === "rgb(255,0,0)"){
            selectedColor = "czerwony";
        } else if (randTab[i] === "rgb(0,255,0)") {
            selectedColor = " zielony";
        } else {
            selectedColor = "niebieski";
        }
        $('#c' + i).addClass(selectedColor);
    }
}

let randomTab = threeRandom();
tlo(randomTab);

// 3. Losuje kolor do klikania
function kliknijW() {
    let randomColor = Math.ceil(Math.random() * 3)
    if (randomColor === 1){
        $(".kolorek").html("czerwony");
        // document.querySelector('[data-summary="kolor"]').textContent = "czerwony";
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


function renderNewTab(){
    randomTab = threeRandom();
    threeRandom();
    tlo(randomTab);
    kliknijW();
    karty.forEach(item =>item.style.boxShadow = "");

}





document.querySelector("button").addEventListener('click', renderNewTab);

$(".karta").each(function (index, el) {
    $(el).click(function (event) {
        let zmiennaKoloru = document.querySelector('p span').textContent;

        if($(this).hasClass(zmiennaKoloru) && $(this).css('box-shadow') === "none") {
            console.log(zmiennaKoloru);
            counter++;
            $(this).css('box-shadow', '0 0 0 4px black');
            document.querySelector(`[data-summary="punkty"]`).textContent = `${counter}`;
        }
    });
});

// karty.forEach(
//     item => item.addEventListener('click', kaka)
// );





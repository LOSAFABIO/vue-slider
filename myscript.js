// Partendo dal markup della versione svolta in js plain, 
// rifare lo slider ma questa volta usando Vue.

// Bonus:

// 1- al click su una thumb, visualizzare in grande 
// l’immagine corrispondente

// 2- applicare l’autoplay allo slider: ogni 3 secondi, 
// cambia immagine automaticamente

// 3- quando il mouse va in hover sullo slider, 
// bloccare l’autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d’oro: riciclare ovunque possibile! 
// Questo significa che per la parte di markup possiamo 
// recuperare html e css dell’esercizio svolto qualche 
// giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! 
// Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)
// - oltre a Vue, ora abbiamo diversi strumenti in più 
// nelle nostre tasche, che possono tornarci utili per svolgere 
// l’esercizio in una versione più evoluta ed efficace, 
// soprattutto per quando riguarda la struttura dei dati. 
// Forse questa volta possiamo fare qualcosa di meglio 
// di 3 array separati... sì, ma cosa? :faccia_pensosa:
// Buon lavoro e buon divertimento!

let app = new Vue({
    el    : "#myApp",
    data  : {
        corrente  : 0,
        items     : {
            image :[
                'img/01.jpg',
                'img/02.jpg',
                'img/03.jpg',
                'img/04.jpg',
                'img/05.jpg'        
            ],
            title :[
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'       
            ],
            text  :[
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ]
        }
    },
    methods:{
        imgCorrente: function(indiceImg){
            if(indiceImg == this.corrente){
                return "active";
            }
            return "d-none";
        }    
    },
    prev: function(){
        this.corrente ++;
        if(this.corrente == this.items.image.length){
            this.corrente = 0
        }
    },
    down: function(){
        this.corrente --;
        if(this.corrente < 0 ){
            this.corrente = this.items.image.length - 1 
        }
    }

});

/*
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

*/


// const immagineDx = document.querySelector(`.immagini-destra`);

// for (let i = 0; i < items.length; i++){
//     immagineDx.innerHTML += `<div class="immagine-dx">
//     <img src="${items[i]}">
//     </div>`;
// }


// const immaginiSx = document.querySelector(`.immagini-sinistra`);

// for (let i = 0; i < items.length; i++){
//     immaginiSx.innerHTML += `<div class="immagine-sx img-sx-${i}">
//         <img src="${items[i]}">
//         <div class="img-text">
//             <h1>${title[i]}</h1>
//             <p>${text[i]}</p>
//         </div>
//     </div>`;
// }


// const next = document.querySelector(`.next`);

// next.addEventListener(`click`, function(){
    
//     const previousImg = document.querySelector(`.img-sx-` + contatore);
//     previousImg.classList.remove(`active`);


//     if(contatore == (items.length - 1)){
//         contatore = 0
//     }else {
//     contatore++;
//     }

//     const currentImg = document.querySelector(`.img-sx-` + contatore);
//     currentImg.classList.add(`active`);

//     console.log(contatore);
    
// })


// const prev = document.querySelector(`.prev`);

// prev.addEventListener(`click`, function(){

//     const previousImg = document.querySelector(`.img-sx-` + contatore);
//     previousImg.classList.remove(`active`);

//     if(contatore == 0){
//         contatore = (items.length - 1)
//     }else {
//     contatore--;
//     }

//     const currentImg = document.querySelector(`.img-sx-` + contatore);
//     currentImg.classList.add(`active`);


//     console.log(contatore);
    
// })

// const firstImage = document.querySelector(`.img-sx-` + contatore);
// firstImage.classList.add(`active`);



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

let myApp = new Vue({
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
    methods : {
        imgCorrente : function(indiceImg){
            if(indiceImg == this.corrente){
                return "active";
            }
            return "d-none";
        },    
        down : function(){
            this.corrente ++;
            if(this.corrente == this.items.image.length){
                this.corrente = 0
            }
        },
        prev: function(){
            this.corrente --;
            if(this.corrente < 0 ){
                this.corrente = this.items.image.length - 1 
            }   
        },
        grande : function(elemento){
            if(this.items.image == this.corrente){
                return "active";
            }
            return "d-none";
        },    

    }
})

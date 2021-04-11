function initVue(){

    new Vue ({
        
        el: '#app',

        data: {

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            currentUserArray: [],
            arrayTest: [],
            newText: ''
        },
        

        methods: {
            
            // findUserTexts: function(userIndex){

            //     this.currentUserArray = this.contacts[userIndex].messages;
                
            // },

            functionTest: function(index){
                
                this.arrayTest = this.contacts[index];
            },

            sentBack: function(){

                this.arrayTest.messages.push({
                    
                    text: 'ok',
                    status: 'received'
                });
            },

            printText: function(){

                if (this.newText.length > 0){

                    this.arrayTest.messages.push({
                        
                        text: this.newText,
                        status: 'sent'
                    })
                    
                    setTimeout(this.sentBack, 1000)
                };

                this.newText = '';
            },
            
        },
    })
}


document.addEventListener('DOMContentLoaded', initVue);


// this.currentUserArray = [],

// currentUser = this.contacts[userIndex].name;                 

// for (var i = 0; i < this.contacts[userIndex].messages.length; i++){

//     const currentUserTexts = this.contacts[userIndex].messages[i].text;
    
//     this.currentUserArray.push(currentUserTexts)
// }

// console.log(this.currentUserArray);

//////////////////////////////////////////////////////
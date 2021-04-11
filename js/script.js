function initVue(){

    new Vue ({
        
        el: '#app',

        data: {

            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/_1.jpeg',
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
                    avatar: 'img/_2.jpeg',
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
                    avatar: 'img/_3.jpeg',
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
                    avatar: 'img/_4.jpg',
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
            activeChat: '',
            activeAvatar: '',
            newText: ''
        },
        
        methods: {
            
            printUser: function(index){
                
                this.currentUserArray = this.contacts[index];
                this.activeChat = this.contacts[index].name;
                this.activeAvatar = this.contacts[index].avatar;
            },

            printReply: function(){

                this.currentUserArray.messages.push({
                    
                    date: '11/04/2021 20:30:00',
                    text: 'ok',
                    status: 'received'
                });
            },
            
            printText: function(){
                
                if (this.newText.length > 0){
                    
                    this.currentUserArray.messages.push({
                        
                        date: '11/04/2021 20:30:00',
                        text: this.newText,
                        status: 'sent'
                    })
                    
                    setTimeout(this.printReply, 1000)
                };

                this.newText = '';
            }

        }
    })
}


document.addEventListener('DOMContentLoaded', initVue);


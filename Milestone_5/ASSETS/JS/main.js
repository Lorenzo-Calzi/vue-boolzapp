const app = new Vue({
    el: "#app",

    data: {

        search: '',
        
        newMessage: '',

        contatto_corrente: 0, 

        contacts: [
            {
                name: 'Michele',
                avatar: './ASSETS/IMG/avatar_1.jpg',
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
                avatar: './ASSETS/IMG/avatar_2.jpg',
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
                avatar: './ASSETS/IMG/avatar_3.jpg',
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
                name: 'Luigi',
                avatar: './ASSETS/IMG/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '03/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '03/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessio',
                avatar: './ASSETS/IMG/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '15/02/2020 15:30:55',
                        text: 'Come stai?',
                        status: 'sent'
                    },
                    {
                        date: '15/02/2020 15:50:00',
                        text: 'Tutto bene, te?',
                        status: 'received'
                    },
                    {
                        date: '15/02/2020 15:30:55',
                        text: 'Bene, che fai?',
                        status: 'sent'
                    },
                    {
                        date: '15/02/2020 15:30:55',
                        text: 'Sono occupato, ci sentiamo dopo!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Chiara',
                avatar: './ASSETS/IMG/avatar_io.jpg',
                visible: true,
                messages: [
                    {
                        date: '04/05/2020 15:30:55',
                        text: 'Eii Chiara',
                        status: 'sent'
                    },
                    {
                        date: '04/05/2020 15:50:00',
                        text: 'Ciaoo, Dimmi tutto',
                        status: 'received'
                    },
                    {
                        date: '04/05/2020 15:52:25',
                        text: 'A che ora passo?',
                        status: 'sent'
                    },
                    {
                        date: '04/05/2020 15:58:10',
                        text: 'Facciamo alle 9',
                        status: 'received'
                    },
                    {
                        date: '04/05/2020 15:52:25',
                        text: '👍',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Martina',
                avatar: './ASSETS/IMG/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '19/11/2020 15:30:55',
                        text: 'Ei marti, sei arrivata?',
                        status: 'sent'
                    },
                    {
                        date: '19/11/2020 15:50:00',
                        text: 'Sisi, tutto bene',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Edoardo',
                avatar: './ASSETS/IMG/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '23/06/2020 15:30:55',
                        text: 'Ricordati di portare il pallone!',
                        status: 'sent'
                    },
                    {
                        date: '23/06/2020 15:50:00',
                        text: 'Vai tranquillo 😎',
                        status: 'received'
                    },
                    {
                        date: '23/06/2020 15:30:55',
                        text: 'Mi fido eh hahah',
                        status: 'sent'
                    }
                ],
            },
        ]
    },

    methods: {

        /**
         * Funzione per selezionare il contatto attivo
         * @param {number} index 
         * @returns 
         */
        selectContact(index) {
            return this.contatto_corrente = index;    
        },


        /**
         * Funzione per aggiungere un messaggio nell'thread
         */
        addMessage() { 

            if(this.newMessage.length > 0) {

                let contattoAttivo = this.contacts[this.contatto_corrente];
                contattoAttivo.messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status:'sent'
                })
                this.newMessage = ''

                setTimeout(() => 
                contattoAttivo.messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'OK! 😄',
                    status:'received'
                }) ,1000)  
            } 
        },


        /**
         * Funzione per cercare un contatto per nome
         */
        cercaContatto(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                } 
            });
        }, 

    
        /**
         * Funzione per elimiare un messaggio
         * @param {number} contatto_corrente 
         * @param {number} index 
         */
        removeMessage(contatto_corrente, index){
            let contattoAttivo = this.contacts[this.contatto_corrente];
            contattoAttivo.messages.splice(index, 1)
        },


        /**
         * Funzione per elimiare un contatto 
         * @param {number} contatto_corrente 
         */
        removeContact(contatto_corrente){
            this.contacts.splice(contatto_corrente, 1) 
        }
    }
});


/* Calcolo Data e Ora */
var x = dayjs().format('DD/MM/YYYY');
var y = dayjs().format('HH:mm:ss');

document.getElementById('hour').innerHTML = y;
document.getElementById('date').innerHTML = x;







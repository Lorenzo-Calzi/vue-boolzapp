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
                name: 'Luisa',
                avatar: './ASSETS/IMG/avatar_4.jpg',
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
        ]
    },

    methods: {

        selectContact(index) {
            return this.contatto_corrente = index;
            
        },

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

        cercaContatto(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
                
            });
        }, 
        
        dayjs(){
            console.log(dayjs().format('DD/MM/YYYY'));
            console.log(dayjs().format('HH:mm:ss'));
        },
    
        removeMessage(contatto_corrente, index){
            let contattoAttivo = this.contacts[this.contatto_corrente];
            contattoAttivo.messages.splice(index, 1)
        },

        /* removeContact(contatto_corrente){
            console.log('Si' + contatto_corrente);
            this.contacts.splice(contatto_corrente, 1)

        } */
    }
});


/* Calcolo Data e Ora */
var x = dayjs().format('DD/MM/YYYY');
console.log(x);

var y = dayjs().format('HH:mm:ss');
console.log(y);

document.getElementById('hour').innerHTML = y;
document.getElementById('date').innerHTML = x;






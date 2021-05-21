const app = new Vue({
    el: "#app",

    data: {

        me: {
            name: 'Me',
            avatar: '_Me',
            visible: true, 
        }, 
        
        newMessage: '',

        contatto_corrente: 0, 
        prova: 0,

        contacts: [
            {
                name: 'Michele',
                avatar: './IMG/avatar_1.jpg',
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
                avatar: './IMG/avatar_2.jpg',
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
                avatar: './IMG/avatar_3.jpg',
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
                avatar: './IMG/avatar_4.jpg',
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
            console.log(this.newMessage);
            let contattoAttivo = this.contacts[this.contatto_corrente];
            contattoAttivo.messages.push({
                date: '10/01/2020 15:50:00',
                text: this.newMessage,
                status:'sent'
            })
            this.newMessage = ''

            setTimeout(() => 
            contattoAttivo.messages.push({
                date: '10/01/2020 15:50:00',
                text: 'Ok',
                status:'received'
            }) ,1000)   
        },




        getDate() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            this.timestamp = date;

            document.getElementById('date').innerHTML = this.timestamp;
            console.log(this.timestamp);
        },

        getHour() {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            this.timestamp = time;
            console.log(this.timeStamp);
            document.getElementById('hour').innerHTML = this.timestamp;
            console.log(this.timestamp);
        }


    }
});


/* var data = new Date();
var Hh, Mm, Ss;
Hh = data.getHours() + ":";
Mm = data.getMinutes() + ":";
Ss = data.getSeconds() + ":";
document.write("Sono le ore " + Hh + Mm + Ss);

document.querySelector("date").innerHTML = ("Sono le ore " + data)
console.log(data); */

/* var data = new Date().toLocaleString()
console.log(data); */






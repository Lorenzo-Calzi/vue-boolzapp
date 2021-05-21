const app = new Vue({
    el: "#app",

    data: {

        currentContact: 0, 

        me: {
            name: 'Me',
            avatar: '_Me',
            visible: true, 
        }, 
        
        newMessage: [

        ],

        utenteAttivo: [

        ],



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

        selectImage(index){
            console.log('si');
            return this.counter = index;
            
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


/* activeContact(index, contact) {
    this.utenteAttivo.push(this.contact.name);
    console.log(this.contacts.name);
    console.log(this.utenteAttivo);
} */






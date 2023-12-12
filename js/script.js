/*

Stai creando la parte front-end di uno shop online. In particolare sarai responsabile 
della creazione di un back-office, dove gli amministratori possono aggiungere e modificare i prodotti.
 endpoint principale:  https://striveschool-api.herokuapp.com/api/product/

Obiettivi generali:
    - Avere una pagina back-office, in cui si potranno inserire i prodotti specificando i parametri obbligatori e facoltativi.

    - Una homepage, dove l’utente possa vedere i prodotti disponibili

    - Una pagina di dettaglio in cui visualizzare tutti i dettagli del prodotto.

Task:
    - Nella pagina di back-office: usa POST su /product con un payload per creare una nuova risorsa.

    - Aggiungi un bottone per la funzionalità di modifica di un prodotto già creato in precedenza (usa una PUT su /product/[PRODUCT_ID]).
    
    - Aggiungi un bottone per la cancellazione di uno specifico prodotto già esistente (usa DELETE su /product/[PRODUCT_ID]).
   
    - I tasti “modifica” e “cancella”  dovranno essere visibili SOLO se si è in modalità di modifica della risorsa.
   
    - Aggiungi una validazione di base per la creazione/modifica del prodotto nel form.
   
    - Aggiungi un bottone “Reset” per resettare il form.
   
    - Nella Homepage: premendo un bottone “modifica” su un prodotto si dovrà poterlo modificare.
   
    - Nella pagina Dettaglio: A questa pagina ci si arriverà cliccando un bottone “Scopri di più” sulla card in homepage.

EXTRAS:
    - In back-office: I bottoni “reset” e “delete” dovranno chiedere conferma prima di procedere con l’operazione.

    - In homepage: aggiungi un indicatore di caricamento affianco al titolo principale della pagina durante il caricamento delle risorse.

    - Crea un sistema di gestione degli errori. Mostra all’utente un messaggio di errore specifico per le varie tipologie di problema, quando qualcosa va storto, attraverso l’utilizzo di componenti di Bootstrap appropriati.




Token:   
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2JmMGMwNTgzNTAwMTg1MjMwZGIiLCJpYXQiOjE3MDIzNzkyNTIsImV4cCI6MTcwMzU4ODg1Mn0.nBv46BYfnbnbo3D3p3xcYE9TlZZ64_LlTqStqhdcRWk

*/

let url = 'https://striveschool-api.herokuapp.com/api/product/';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2JmMGMwNTgzNTAwMTg1MjMwZGIiLCJpYXQiOjE3MDIzNzkyNTIsImV4cCI6MTcwMzU4ODg1Mn0.nBv46BYfnbnbo3D3p3xcYE9TlZZ64_LlTqStqhdcRWk';


class product{
    constructor(nome, description, brand, imageUrl, price){
        this.nome = nome;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

function createProduct(){

}

let promise = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+token
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
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

let count = 1;
let array = [];

fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+token,
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))





document.addEventListener('DOMContentLoaded', () => {
    createCards()
    createList()
    let btnCreate = document.querySelector('#btnCreate');
    btnCreate.addEventListener('click', createProduct)
})

class Product{
    constructor(name, description, brand, imageUrl, price){
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

// Creazione prodotto
function createProduct(){
    let name = document.querySelector('#nome').value;
    let description = document.querySelector('#description').value;
    let brand = document.querySelector('#brand').value;
    let imageUrl = document.querySelector('#img').value;
    let price = document.querySelector('#price').value;
    let input = document.querySelectorAll('form input');
    if(!array.includes(name)){
        input.forEach((el)=>{
            if(!el == ''){
                array.push(name);
                let obj = new Product(name, description, brand, imageUrl, price)
                fetch(url, {          // Chiamata POST - Crea elemento
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer '+token,
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(error => console.log(error))
            }else{
                alert('Compila tutti i campi')
            }
        })
        
    }else{
        alert('Questo prodotto esiste già')
    }

   console.log(array)
}

// Creazione cards home page
function createCards(){
    let row = document.querySelector('#cards')
    
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+token,
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
        for(const element of json){  // crea card a ogni elemento di json
            let col = document.createElement('div');
            col.className = 'col-12';
            col.innerHTML = `
                    <div class="card shadow h-100">
                        <img src="${element.imageUrl}" class="card-img-top" style="height: 10em; object-fit: cover;" alt="Immagine di : ${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">${element.price}€</p>
                            
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-outline-danger">Vedi dettagli</a>
                        </div>
                    </div>`
            row.appendChild(col);
            console.log(element.imageUrl)        
        }

    })
    .catch(error => console.log(error))
}

// Creazione lista prodotti
function createList(){
    let ul = document.querySelector('article ul');
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+token,
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
        for(const element of json){
            let li = document.createElement('li');
            li.innerHTML = `
            
                <div class="col-3 bg-light"> 
                    
                    <div class="col-12 bg-light d-flex justify-content-center my-4"><button class="btn w-75 btn-primary">Update</button></div>
                    <div class="col-12 bg-light d-flex justify-content-center"><button class="btn w-75 btn-danger">Delete</button></div>
                    
                </div>
                <div class="col-9 my-auto overflow-auto"> 
                    <p class="m-0"><strong>ID: </strong>${element._id} </p>
                    <p class="m-0"><strong>Name: </strong>${element.name} </p>
                    <p class="m-0"><strong>Description: </strong>${element.description} </p>
                    <p class="m-0"><strong>Brand: </strong>${element.brand} </p>
                    <p class="m-0"><strong>Image: </strong>${element.imageUrl} </p>
                    <p class="m-0"><strong>Price: </strong>${element.price}€ </p>
                </div>
                `

            count++
            ul.appendChild(li);    
        }
    })
}

// Chiamata PUT - Modifica singolo elemento
function updateElement(){

}

// Chiamata DELETE - Elimina singolo elemento
function deleteElement(){
    fetch(url +'657995677c0dd90018c938b2', {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer '+token,
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}
deleteElement()
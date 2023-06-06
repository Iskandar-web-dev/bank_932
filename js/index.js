import { cardArr } from './db.js';
let main = document.querySelector('main')
//header 
let header = document.createElement('header')
let headerLeft = document.createElement('div')
let headerRight = document.createElement('div')
let headerLeftA1 = document.createElement('a')
let headerLeftA2 = document.createElement('a')
let headerLeftA3 = document.createElement('a')
let headerRightEmail = document.createElement('a')
let headerRightExite = document.createElement('img')

headerLeft.classList.add('left')
headerRight.classList.add('right')

headerLeftA1.innerHTML = 'Главная'
headerLeftA2.innerHTML = 'Мои кошельки'
headerLeftA3.innerHTML = 'Мои транзакции'
headerRightEmail.innerHTML = 'alexadams@gmail.com'

headerRightExite.src = './assets/exite.png'

headerRight.append(headerRightEmail, headerRightExite)
headerLeft.append(headerLeftA1, headerLeftA2, headerLeftA3)
header.append(headerLeft, headerRight)
main.append(header)

//welcome
let welcome = document.createElement('div')
let welcometxt = document.createElement('h1')
let welcomeEmail = document.createElement('p')

welcometxt.innerHTML = 'Добро пожаловать, Alex Adams!'
welcomeEmail.innerHTML = 'alexadams@google.com'
welcome.classList.add('welcome')
welcometxt.classList.add('welcomeH3')
welcomeEmail.classList.add('welcomeEmail')
welcome.append(welcometxt, welcomeEmail)
main.append(welcome)

//wallet
let wallets = document.createElement('div')
let myWallets = document.createElement('h3')
let cards = document.createElement('div')
myWallets.innerHTML = 'Мои кошельки'

cards.classList.add('cards')
wallets.classList.add('wallets')
wallets.append(myWallets, cards)
main.append(wallets)
let showAllcard = document.createElement('p')
showAllcard.classList.add('showAllcard')
showAllcard.innerHTML = 'Смотреть все кошельки'
wallets.append(showAllcard)

let transactions = document.createElement('div')
let lastTransaction = document.createElement('h3')
let transaction = document.createElement('div')
lastTransaction.innerHTML = 'Последние Транзакции'
lastTransaction.classList.add('lastTransaction')
transaction.classList.add('transaction')
transactions.classList.add('transactions')
let table = document.createElement('table')
let t_head = document.createElement('thead')
let t_body = document.createElement('tbody')
let trHead = document.createElement('tr')
let th1Head = document.createElement('th')
let th2Head = document.createElement('th')
let th3Head = document.createElement('th')
let th4Head = document.createElement('th')
let th5Head = document.createElement('th')
th1Head.innerHTML = 'ID'
th2Head.innerHTML = 'Отправлено с кошелька'
th3Head.innerHTML = 'Категория '
th4Head.innerHTML = 'Сумма транзации'    
th5Head.innerHTML = 'Когда'  
transaction.append(lastTransaction, transactions)
main.append(lastTransaction, transaction)

function reload(arr) {
    for (let i of arr) {
        let card = document.createElement('div')
        let cardName = document.createElement('p')
        let cardCurrency = document.createElement('p')

        card.classList.add('card')
        cardName.classList.add('cardName')
        cardCurrency.classList.add('cardCurrency')
        cardName.innerHTML = i.name
        cardCurrency.innerHTML = i.currency
        card.style.background = `linear-gradient(${i.background})`
        card.append(cardName, cardCurrency)
        cards.append(card)
        console.log(i.background);

        let trTbody = document.createElement('tr')
        let th1body = document.createElement('th')
        let th2body = document.createElement('th')
        let th3body = document.createElement('th')
        let th4body = document.createElement('th')
        let th5body = document.createElement('th')


        th1body.innerHTML = i.id
        th2body.innerHTML =  i.name
        th3body.innerHTML = i.category
        th4body.innerHTML = i.price
        th5body.innerHTML = i.data

        trTbody.append(th1body,th2body,th3body,th4body,th5body)
        t_body.append(trTbody)
        trHead.append(th1Head,th2Head,th3Head,th4Head,th5Head)
        transactions.append(table)
        table.append(t_body)
    }
}
t_head.append(trHead)
table.append(t_head)
reload(cardArr)
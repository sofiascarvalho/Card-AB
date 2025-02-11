'use strict'

const disciplinas=[
    {nome: 'PWDE', cor: 'red', icon: 'pwde.png.png'},
    {nome: 'PWFE', cor: 'blue', icon: 'pwfe.png.png'},
    {nome: 'PPDM', cor: 'orange', icon: 'ppdm.png.png'},
    {nome: 'PRO', cor: 'purple', icon: 'pro.png.png'},
    {nome: 'SOP', cor: 'grey', icon: 'sop.png.png'},
    {nome: 'IOT', cor: 'green', icon: 'iot.png.png'}
]

function criarItemMenu(disciplinas){
    const listaMenu=document.getElementById('menu')
    const novoItem=document.createElement('li')
    const novoLink=document.createElement('a')
    const novoImagem=document.createElement('img')

    novoLink.href='#'
    novoLink.textContent=disciplinas.nome
    novoLink.style=`--cor-hover: ${disciplinas.cor}`
    //document.documentElement.style.setProperty('--cor-hover', disciplinas.cor)

    
    novoImagem.src=`./icon/${disciplinas.icon}`
    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
}


/*const card=[
    {img: 'friends.webp', title: 'Friends', desc: 'Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.' , streaming: 'MAX', likes: '5989' },
    {img: 'i274416.jpeg', title: 'Legends Of Tomorrow', desc: '' , streaming: 'Netflix', likes: '' },
    {img: 'julie-and-the-phantoms (1).jpg', title: 'Julie and The Phantoms', desc: '' , streaming: 'Netflix', likes: '' },
    {img: '.', title: '', desc: '' , streaming: '', likes: '' },
    {img: '.', title: '', desc: '' , streaming: '', likes: '' },
]

function criarCards(filmes){
    const card=document.createElement('div')
    const imagemFilme=document.createElement('img')
    const titulo=document.createElement('h2')
    const descricao=document.createElement('p')

    card.appendChild(imagemFilme)
    card.appendChild(titulo)
    card.appendChild(descricao)

    document.body.appendChild(novoFilme)  
}*/

const filmes = [
    {img: './img/friends.webp', title: 'Friends', desc: 'Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.', streaming: 'MAX', likes: '5989' },
    {img: './img/i274416.jpeg', title: 'Legends Of Tomorrow', desc: 'Descrição da série Legends Of Tomorrow.', streaming: 'Netflix', likes: '4000' },
    {img: './img/julie-and-the-phantoms (1).jpg', title: 'Julie and The Phantoms', desc: 'Uma série musical sobre uma jovem que encontra uma banda fantasma.', streaming: 'Netflix', likes: '3000' },
    {img: './img/GettyImages-176560285-1.webp', title: 'That 70`s Show', desc: 'Eric Forman, Donna Pinciotti, Fez, Michael Kelso, Jackie Burkhart e Steven Hyde formam um grupo de jovens que vivem em Wisconsin, nos anos 70.', streaming: 'Prime Video', likes: '1500' },
    {img: './img/Design-sem-nome-16-1-scaled.jpg', title: 'Game Of Thrones', desc: 'A história gira em torno de uma batalha entre os Sete Reinos, onde duas famílias dominantes estão lutando pelo controle do Trono de Ferro, cuja posse possivelmente assegurará a sobrevivência durante o inverno que está por vir.', streaming: 'MAX', likes: '2200' },
];

function criarCards(filmes){
    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('card') // Adiciona a classe 'card' para estilização

        const imagemFilme = document.createElement('img')
        imagemFilme.src = filme.img;

        const titulo = document.createElement('h2')
        titulo.textContent = filme.title;

        const descricao = document.createElement('p')
        descricao.textContent = filme.desc;

        const streaming = document.createElement('p')
        streaming.textContent = `Streaming: ${filme.streaming}`

        const likes = document.createElement('p');
        likes.textContent = `Likes: ${filme.likes}`

        // Adicionando os elementos ao card
        card.appendChild(imagemFilme)
        card.appendChild(titulo)
        card.appendChild(descricao)
        card.appendChild(streaming)
        card.appendChild(likes)

        // Adicionando o card à página
        document.body.appendChild(card)
    })
}

// Chamando a função para criar os cards
criarCards(filmes);


disciplinas.forEach(criarItemMenu)
criarItemMenu()
criarCards()
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


const card=[
    {img: 'friends.webp', title: 'Friends', desc: 'Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.' , streaming: 'MAX', likes: '5989' },
    {img: 'i274416.jpeg', title: 'Legends Of Tomorrow', desc: '' , streaming: 'Netflix', likes: '' },
    {img: 'julie-and-the-phantoms (1).jpg', title: 'Julie and The Phantoms', desc: '' , streaming: 'Netflix', likes: '' },
    {img: '.', title: '', desc: '' , streaming: '', likes: '' },
    {img: '.', title: '', desc: '' , streaming: '', likes: '' },
]

function criarCards(filmes){
    const cardsFilmes=document.getElementById('card')
    const novoFilme=document.createElement('div')
    const imagemFilme=document.createElement('img')
    const titulo=document.createElement('h2')
    const descricao=document.createElement('p')

    imagemFilme.src=`./img/${filmes.img}`
    novoFilme.textContent=filmes.titulo
    novoFilme.textContent=filmes.descricao

    novo

}

disciplinas.forEach(criarItemMenu)
card.forEach(criarCards)
criarItemMenu()
criarCards()
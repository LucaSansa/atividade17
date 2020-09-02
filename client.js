const axios = require('axios').default;

axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

// Adicionando um novo livro

axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'Um Novo Livro',
    author: 'Lucas'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

// Adicionado um livro com ID existente

axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'Um Novo Livro com ID existente',
    author: 'Lucas'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });


axios.get('http://localhost:3000/books')
    .then((response) => {
        console.log(response.data);
    });



//Fazen requisições um-a-um para cada livro
axios.get('http://localhost:3000/books/1')
    .then((response) => {
        console.log(response.data);
    }) 

axios.get('http://localhost:3000/books/2')
    .then((response) => {
        console.log(response.data);
    })

axios.get('http://localhost:3000/books/3')
    .then((response) => {
        console.log(response.data);
    })

axios.get('http://localhost:3000/books/4')
    .then((response) => {
        console.log(response.data);
    })

//Retorna o numero de GET e Post
axios.get('http://localhost:3000/log')     
    .then((response) => {
        console.log(response.data)
    })

//-------------------------------------------------------




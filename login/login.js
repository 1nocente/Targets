async function validarLogin(){
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const email = document.getElementById('email').value


    

    if(nome === '' || senha === ''){
        alert('Preencha os campos corretamente !!!')
    }

    try {
        const responseApi = await fetch('http://localhost:5080/usuario')
    const listUSers = responseApi.json()

    listUSers.forEach((user) => {
        if(nome === user.nome && senha === user.senha){
            alert('Usuario Logado com Sucesso !!')
            window.location.href = '../tarefas/tarefas.html'
        }
    })

    } catch (error){
        console.error(error)
    }

    
}
await fetch('http://127.0.0.1:8080/cadastrarContato', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',

    },
    body: JSON.stringify(user),
})
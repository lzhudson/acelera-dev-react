function api(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(password === 123456) {
                resolve(`O usuario ${email} esta logado`);
            } 
            else {
                reject('Senha inválida');
            }
            
        }, 5000)
    })
}

let response = api('hudsonholanda55@gmail.com', 12346).then((value)=>{
    return value;
}).catch((erro) =>{
    return `Digite novamente ${erro}`;
})

async function main() {
    console.log('Inicio');
    await api('hudsonholanda55@gmail.com', 12346).then((value)=>{
        console.log(value);
    }).catch((erro) =>{
        console.log(`Digite novamente ${erro}`);
    })
    await console.log('fim');
}
main();


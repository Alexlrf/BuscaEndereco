let cep = document.querySelector('#cepInput')
let recebeCep = document.querySelector('#cep')

const showData = (result) => {
    
    for (const campo in result) {
        if (document.querySelector("#"+campo)) {            
            document.querySelector("#"+campo).value = result[campo]            
        }
    }    
}

function buscar(){
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
        
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then((response) => {
                return response.json();
            })
            .then ((data) => {
                showData(data);
                recebeCep = cep;
                cep.value="";
                cep.focus();               
            })
            .catch ((e)=> window.alert(`Erro! Verifique o número digitado: ( ${cep.value} )`))
            cep.focus();                                 
        }

function seleciona(){
    let a = document.querySelector('#button')
    a.style.backgroundColor="black";
    a.style.color="white";    
}

function sai(){
    let a = document.querySelector('#button')
    a.style.backgroundColor="white";
    a.style.color="black";    
}

let numeros = []
cacheNumero = 0

function adicionarNumero(){
    let novoNumero = document.getElementById("novoNumero").value
    if(novoNumero == "")
    {
        alert("Insira um número!")
    }
    else if(novoNumero <= 0)
    {
        alert("Digite um número maior ou igual a zero")
        document.getElementById("novoNumero").value = ""
    }
    else
    {
        numeros.push(novoNumero)
        for(let i = 0; i < numeros.length; i++)
        {
            cacheNumero += parseFloat(numeros[i])
        }
        document.getElementById("novoNumero").value = ""
        document.getElementById("numAdicionado").innerText = numeros.join(" , ")
    }
}

function ordenarNumero(){
    for(let i = 0; i < numeros.length; i++)
    {
        for(let j = 0; j < numeros.length; j++)
        {
            if(numeros[i] < numeros[j])
            {
                let aux = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = parseFloat(aux)
                document.getElementById("numOrdenado").innerText = numeros.join(" , ")
            }
        }
    }
}
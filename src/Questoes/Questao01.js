const Questao01A = () => {
    
    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    return(
        <>
            <Questao01B lista={lista}>
            </Questao01B>
        </>
    )
}

function Questao01B ({lista}) {
    
    // console.log(lista)

    const maior = (obj) => {
        const valores = Object.values(obj);
        return valores.reduce((max, valor) => valor > max ? valor : max, -Infinity);
    };

    return(
        <>
            <h2>QUESTÃO 01:</h2>
            <h3>Maiores Números:</h3>
            <h4>1) {JSON.stringify(lista[0])} = {maior(lista[0])}</h4>
            <h4>2) {JSON.stringify(lista[1])} = {maior(lista[1])}</h4>
            <h4>3) {JSON.stringify(lista[2])} = {maior(lista[2])}</h4>
        </>
    )
}

export default Questao01A
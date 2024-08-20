import { useEffect, useState } from "react";

const Questao04 = () => {
    const [maiorCapital, setMaiorCapital] = useState("");
    const [menorCapital, setMenorCapital] = useState("");

    const promessa = new Promise((resolve, reject) => {
        resolve([
            { "capital": ["Dublin"], "population": 4994724 },
            { "capital": ["Nicosia"], "population": 1207361 },
            { "capital": ["Madrid"], "population": 47351567 }
        ]);
    });

    const maiorEMenor = async (data) => {
        if (data.length === 0) return;

        let menor = data[0].population;
        let maior = menor;
        let menorCapital = data[0].capital[0];
        let maiorCapital = menorCapital;

        data.forEach(element => {
            if (element.population > maior) {
                maior = element.population;
                maiorCapital = element.capital[0];
            }
            if (element.population < menor) {
                menor = element.population;
                menorCapital = element.capital[0];
            }
        });

        setMaiorCapital(maiorCapital);
        setMenorCapital(menorCapital);
    }

    useEffect(() => {
        promessa
            .then(data => {
                maiorEMenor(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h2>QUESTÃO 04:</h2>
            <h3>Maior: {maiorCapital}</h3>
            <h3>Menor: {menorCapital}</h3>
        </>
    );
}

export default Questao04;

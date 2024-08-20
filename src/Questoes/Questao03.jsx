import axios from "axios" 
import { useEffect, useState } from "react"

const Questao03 = () => {

    const [maiorCapital, setMaiorCapital] = useState()
    const [menorCapital, setMenorCapital] = useState()
    
    const maiorEMenor = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        const data = response.data
        
        let menor = data[0].population;
        let maior = menor;
        let menorCapital = data[0].capital;
        let maiorCapital = menorCapital;

        data.forEach(element => {
            if(element.population > maior){
                maior = element.population 
                maiorCapital = element.capital 
            } 
            if(element.population < menor){
                menor = element.population
                menorCapital = element.capital 
            }
        });
        console.log(maior)
        console.log(menor)

        setMaiorCapital(maiorCapital);
        setMenorCapital(menorCapital);
    }
   
    useEffect(() => {
        maiorEMenor();
    }, []);

    return(
        <>
        <h2>QUESTÃO 03:</h2>
        <h3>Maior: {maiorCapital}</h3>
        <h3>Menor: {menorCapital}</h3>
        </>
    )
}

export default Questao03
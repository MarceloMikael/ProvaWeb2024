import { useState } from "react"

const Questao02 = () => {
    
    const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
    let boolean = true

    const alterarIMG = () => {
        if(boolean){
            setUrl(url => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
            boolean = false
        }else{
            setUrl(url => "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
            boolean = true
        }
    }
    
    return(
        <>
            <h2>QUESTÃO 02:</h2>
            <img src={url}>
            </img>
            <button onClick={() => alterarIMG()}>
                Mudar Imagem!
            </button>
        </>
    )
}

export default Questao02
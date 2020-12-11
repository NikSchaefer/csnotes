import Axios from 'axios'
import * as React from 'react'

export default function Dict() {
    const [word, setWord] = React.useState<string>("")

    const [definition, setDefinition] = React.useState<string>("")
    const [example, setExample] = React.useState<string>("")
    const [synonymns, setSynonymns] = React.useState<any>()


    function getWordData() {
        Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => {
            console.log(res.data[0])
            setDefinition(res.data[0].meanings[0].definitions[0].definition)
            setExample(res.data[0].meanings[0].definitions[0].example)
            setSynonymns(res.data[0].meanings[0].definitions[0].synonyms.join(", "))
        })
    }
    return (
        <div className='tool-div'>
            <h1>Dictionary</h1>
            <input value={word} placeholder="Type your word Here"
                onChange={function (e) { setWord(e.target.value) }} />
            <p onClick={getWordData} className='button'>Search English Dictionary</p>
            <div className='dict-div'>
                <h2>Definition</h2>
                <p>{definition}</p>
                <h2>Example</h2>
                <p>{example}</p>
                <h2>Synonymns</h2>
                <p>{synonymns}</p>
            </div>
        </div>
    )
}
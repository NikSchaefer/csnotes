import Axios from 'axios'
import * as React from 'react'

export default function Calc() {
    const [value, setValue] = React.useState<string>("")
    const [out, setOut] = React.useState<string>("")


    function getWordData() {
        console.log(encodeURIComponent(value))
        Axios.get(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(value)}`).then(res => {
            setOut(res.data)
        })
    }

    return (
        <div className='page-div'>
            <h1>Calculator</h1>
            <p>Example: <br /> 4+8-sqrt(4)</p>
            <input value={value} placeholder="Enter Equation"
                onChange={function (e) { setValue(e.target.value) }} />
            <p onClick={getWordData} className='button'>Compute Expression</p>

            <div className='dict-div'>
                <h2>Equation</h2>
                <p>{value}</p>
                <h2>Computed</h2>
                <p>{out}</p>
            </div>
        </div>
    )
}
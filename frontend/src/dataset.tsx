import * as React from "react";
import Axios from "axios";

let maximum = 1000
let index: number = Math.floor(Math.random() * (maximum + 1));
let pastIndexes: number[] = []
export default function Dataset() {
    let url = window.location.href.replace(/\/$/, '')
    let lastSeg = url.substr(url.lastIndexOf('/') + 1)

    const [data, setData] = React.useState<any>()
    const [cardText, setCardText] = React.useState<any>('Reload the Page')
    function getData(index: number) {
        Axios.get(`/api/${lastSeg}/${index}?format=json`).then(res => {
            pastIndexes.push(index)
            setData(res.data)
            setCardText(res.data.front)
        })
    }
    function handleFlip() {
        if (data.front == cardText) {
            setCardText(data.back)
        }
        else {
            setCardText(data.front)
        }
    }

    function handleNext() {
        index = Math.floor(Math.random() * (maximum))
        getData(index)
        if (pastIndexes.length > 20) {
            pastIndexes.shift()
        }
    }

    function handelPrev() {
        index = pastIndexes[pastIndexes.length - 2]
        getData(index)
        if (pastIndexes.length >= 20) {
            pastIndexes.shift()
        }
    }

    window.onload = function () {
        getData(index)
    }

    return (
        <div className="view-dataset-div">
            <h1>{lastSeg} dataset</h1>
            <div className='card-div' onClick={handleFlip}>
                <p>{cardText}</p>
            </div>
            <p>Click to Flip</p>
            <div className='button-div'>
                <p className='button' onClick={handelPrev}>Previous</p>
                <p className='button' onClick={handleNext}>Next</p>
            </div>
        </div>
    )
}
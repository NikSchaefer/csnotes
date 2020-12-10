import * as React from "react";
import Axios from "axios";

let index: number;
let edge: number;
export default function Dataset() {
    const url = window.location.href.replace(/\/$/, '').split('/')
    const dataset = url[url.length - 2]

    const [data, setData] = React.useState<any>()
    const [cardText, setCardText] = React.useState<string>('Reload the Page')
    function getData(fetchIndex: number) {
        Axios.get(`/api/dataset/${dataset}/${fetchIndex}?format=json`)
            .then(res => {
                console.log(res.status)
                setData(res.data)
                setCardText(res.data.front)
            })
            .catch(err => {
                index += 1
                getData(index)
            })
    }
    function handleFlip() {
        if (data.front == cardText) {
            setCardText(data.back)
            return;
        }
        setCardText(data.front)
    }
    function handleNext() {
        if (index < edge + 50) {
            index++;
            getData(index);
            return;
        }
        setCardText('Dataset Completed')
    }
    function handelPrev() {
        if (index > edge) {
            index--
            getData(index)
        }
    }
    window.onload = function () {
        index = parseInt(url[url.length - 1], 10)
        edge = index
        getData(index)
    }
    return (
        <div className="view-dataset-div">
            <h1>{dataset} dataset</h1>
            <div className='card-div' onClick={handleFlip}>
                <p>{cardText}</p>
            </div>
            <p>Click to Flip {index}</p>
            <div className='button-div'>
                <p className='button' onClick={handelPrev}>Previous</p>
                <p className='button' onClick={handleNext}>Next</p>
            </div>
        </div>
    )
}
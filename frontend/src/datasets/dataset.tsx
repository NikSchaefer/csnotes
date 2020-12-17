import * as React from "react";
import Axios from "axios";

let index: number;
let edge: number;
let edgeHasRun = false
export default function Dataset() {
    const url = window.location.href.replace(/\/$/, '').split('/')
    const dataset = url[url.length - 2]

    const [data, setData] = React.useState<any>()
    const [cardText, setCardText] = React.useState<string>('Reload the Page')
    function getData(up: number) {
        index += up
        Axios.get(`/api/dataset/${dataset}/${index}?format=json`)
            .then(res => {
                if (!edgeHasRun) {
                    edge = index;
                    edgeHasRun = true
                }
                setData(res.data)
                setCardText(res.data.front)
            })
            .catch(err => {
                index += up
                getData(up)
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
            getData(1);
            return;
        }
        setCardText('Dataset Completed')
    }
    function handelPrev() {
        if (index > edge) {
            getData(-1)
        }
    }
    window.onload = function () {
        index = parseInt(url[url.length - 1], 10)
        getData(1)
    }
    return (
        <div className="view-dataset-div">
            <h1>{dataset} dataset</h1>
            <div className='card-div' onClick={handleFlip}>
                <p>{cardText}</p>
                <p className='card-bottom'>Click To Flip</p>
            </div>
            <div className='button-div'>
                <p className='button' onClick={handelPrev}>Previous</p>
                <p className='button' onClick={handleNext}>Next</p>
            </div>
        </div>
    )
}
import * as React from 'react'

export default function AddDataset() {
    return (
        <div className="about-div">
            <h1>Contributing</h1>
            <p className='text'>
                This site is unfinished currently, if you are looking to contribute on support this site
                 contact me at <a href="mailto:nikkschaefer@gmail.com">nikkschaefer@gmail.com</a> or
                  learn more on <a href="https://github.com/NikSchaefer">github</a>
                <br /><br />
            </p>
            <div className="contribute-div">
                <h2>How you can contribute</h2>
                <a href='/add/api'>List of APIs</a>

                <a href='/add/devtools'>Developer Tools</a>

                <a href='/add/tools'>Frameworks and Providers</a>

                <a href='/add/student'>Student Resources</a>

                <a href='/add/more'>More</a>

            </div>
        </div>
    )
}
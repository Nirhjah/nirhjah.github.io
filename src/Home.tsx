import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import stickman from './images/stickman.png';

function Home() {

    const navigate = useNavigate()
    return (
        <div className="App">
            <img  style={{float: 'left', width: '40%', height: '40%'}} src={stickman} className="App-logo" alt="logo" />
            <header className="App-header">

                <p>
                    hi I am nirhjah
                </p>
                <p>
                    a final year software engineering student @ the university of canterbury
                </p>
                <p>
                    with a passion to develop software to help people and make people's lives easier!
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button style={{ marginRight: '10px', backgroundColor: '#C2CDFF', color: 'black' }} variant="contained"  onClick={() => {
                        navigate('/projects');}}>Projects</Button>

                    <Button style={{ marginRight: '10px', backgroundColor: '#C2CDFF', color: 'black' }} variant="contained" component="a" href="https://www.linkedin.com/in/nirhjah-selvarajah/" target="_blank">
                        LinkedIn</Button>

                    <Button style={{ marginRight: '10px', backgroundColor: '#C2CDFF', color: 'black' }} variant="contained" component="a" href="https://github.com/nirhjah" target="_blank">
                        Github</Button>
                </div>

            </header>
        </div>
    );
}

export default Home;

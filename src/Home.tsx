import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate()
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    hi I am nirhjah
                </p>
                <p>
                    a 3rd year software engineering student @ the university of canterbury
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button style={{ marginRight: '10px' }} variant="contained"  onClick={() => {
                        navigate('/projects');
                    }}>Projects</Button>

                    <Button style={{ marginRight: '10px' }} variant="contained" component="a" href="https://www.linkedin.com/in/nirhjah-selvarajah/" target="_blank">
                        LinkedIn
                    </Button>

                    <Button style={{ marginRight: '10px' }} variant="contained" component="a" href="https://github.com/nirhjah" target="_blank">
                        Github
                    </Button>
                </div>


            </header>
        </div>
    );
}

export default Home;

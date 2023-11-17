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

                    <Button style={{ marginRight: '10px' }} variant="contained"  onClick={() => {
                        navigate('/projects');
                    }}>LinkedIn</Button>

                    <Button variant="contained"  onClick={() => {
                        navigate('/projects');
                    }}>Github</Button>
                </div>


            </header>
        </div>
    );
}

export default Home;

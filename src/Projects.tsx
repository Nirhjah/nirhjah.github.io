import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, Divider, Typography} from "@mui/material";
import './App.css';

function Projects() {



        return (



        <div className="App">
            <header className="App-header">

                    <Typography variant="h1" component="h1" color="common.black">
                            Projects
                    </Typography>


                            <div className="project">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                                    Playbook
                                            </Typography>

                                            <div style={{ marginLeft: '70%' }}>
                                                    <Button variant="contained" component="a" href="https://github.com/nirhjah/seng302-project" target="_blank">
                                                            code
                                                    </Button>
                                            </div>
                                    </div>

                                    <Divider />
                                    <Typography className="projectText" variant="body1" color="common.black">
                                            A web application developed in a group of 7 throughout the course of the year, for SENG302.
                                    </Typography>

                                    <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                            Technologies Used:
                                    </Typography>

                                    <Typography className="projectText" variant="body1" color="common.black">
                                            SpringBoot, Thymeleaf, Java, Html, CSS, JavaScript
                                    </Typography>
                            </div>



                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                            WiTSoc App
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah/seng440-assignment-1" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    An app developed for assignment 1 of SENG440. Its purpose is to inform users of the upcoming events the Women in Tech Society at UC is holding, and has different ways for the user to contact them.
                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    Kotlin, Android Studio
                            </Typography>
                    </div>

                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                            UCanScan App
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah/seng440-assignment-2" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    An android app developed in a group of 3 for SENG440. UCanScan is an orienteering app aimed at first-year university students or high school leavers who want to explore the UC’s campus. Students can find and collect landmarks at UC in a certain order in a personal amazing race, aiming for the shortest time to complete the course. Students can scan codes physically posted at each landmark to mark its discovery in-app.

                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    Kotlin, Android Studio
                            </Typography>
                    </div>

                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                            Supermarket Aisle Finder
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    An Android app that allows the user to add items to their shopping list, and the corresponding aisle will show
                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    React Native, Typescript, MySQL
                            </Typography>
                    </div>

                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                            Auction App
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah/SENG365-Assignment-2" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    Client side Auction App developed for SENG365. Allows users to create an account to create and bid on auctions
                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    React, Typescript, HTML, CSS, MySQL
                            </Typography>
                    </div>

                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black">
                                            Follow the Direction
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    Pair project for ENCE260 where we developed a follow the direction game to be played ona UC Fun Kit.
                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    C
                            </Typography>
                    </div>

                    <div className="project">

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography className="projectTitle" variant="h4" component="h4" color="common.black"  style={{ width: '150px' }}>
                                            CAMS
                                    </Typography>

                                    <div style={{ marginLeft: '70%' }}>
                                            <Button variant="contained" component="a" href="https://github.com/nirhjah/seng202-project" target="_blank">
                                                    code
                                            </Button>
                                    </div>
                            </div>
                            <Divider />

                            <Typography className="projectText" variant="body1" color="common.black">
                                    CAMS (Crime Advertisement Management System) is an application developed with a group of 6 for SENG202.
                            </Typography>

                            <Typography className="projectText" variant="h6" component="h6" color="common.black">
                                    Technologies Used:
                            </Typography>

                            <Typography className="projectText" variant="body1" color="common.black">
                                    Java, Maven
                            </Typography>
                    </div>





            </header>
        </div>


    )
}

export default Projects
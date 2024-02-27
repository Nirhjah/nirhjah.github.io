import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import logo from './images/witsoc1.jpg'

import {
        Button,
        CardActions,
        Dialog, DialogActions, DialogContent,
        DialogTitle,
        Grid,
        IconButton,
        styled,
        Typography
} from "@mui/material";
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {ProjectType} from './ProjectType';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CloseIcon from '@mui/icons-material/Close';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import {useNavigate} from "react-router-dom";
function Projects() {
        const navigate = useNavigate()

        const projects: ProjectType[] = [
                {
                        type: "WEB APPLICATION",
                        title: "Playbook",
                        blurb: "A web application developed in a group of 7 throughout the course of the year, for SENG302.",
                        description: "",
                        learning: "I learnt how to work in a fast paced agile environment with a team of 7 who all have different strengths, and how to respond to product owner's feedback",
                        technologies: "Java, SpringBoot",
                        githubLink: "https://github.com/nirhjah/seng302-project"
                },
                {
                        type: "MOBILE APPLICATION",
                        title: "WiTSoc App",
                        blurb: "An app to inform members of display all upcoming events for WiTSoc at UC.",
                        description: "An app developed for assignment 1 of SENG440. Its purpose is to inform users of the upcoming events the Women in Tech Society at UC is holding, and has different ways for the user to contact them.\n",
                        learning: "I learnt how to develop my first mobile app with Kotlin",
                        technologies: "Kotlin",
                        githubLink: "https://github.com/nirhjah/seng440-assignment-1"
                },
                {
                        type: "MOBILE APPLICATION",
                        title: "UCanScan",
                        blurb: "UCanScan is an orienteering app aimed new students to help them explore UC's campus.",
                        description: "An android app developed in a group of 3 for SENG440. UCanScan is an orienteering app aimed at first-year university students or high school leavers who want to explore the UC’s campus. Students can find and collect landmarks at UC in a certain order in a personal amazing race, aiming for the shortest time to complete the course. Students can scan codes physically posted at each landmark to mark its discovery in-app.",
                        learning: "I learnt how to implement the CameraX feature within the mobile app",
                        technologies: "Kotlin",
                        githubLink: "https://github.com/nirhjah/seng440-assignment-2"
                },
                {
                        type: "WEB APPLICATION",
                        title: "Auction App",
                        blurb: "A web app that allows users to create an account to create and bid on auctions.",
                        description: "",
                        learning: "I learnt how to develop my first web application using React, and connect it up with an API",
                        technologies: "React, Typescript",
                        githubLink: "https://github.com/nirhjah/SENG365-Assignment-2"
                },
                {
                        type: "MOBILE APPLICATION",
                        title: "Supermarket Aisle Finder",
                        blurb: "App that acts as a shopping list while also showing users which aisle each item is in.",
                        description: "An Android app that allows the user to add items to their shopping list, and the corresponding aisle will show. After learning React in SENG365 I decided to build upon my knowledge and develop this app using React Native. ",
                        learning: "I learnt how to develop a mobile application using React Native.",
                        technologies: "React Native",
                        githubLink: "https://www.github.com"
                },
                {
                        type: "DISCORD BOT",
                        title: "spongey bot",
                        blurb: "A discord bot that allows users to connect their last fm account to it to see cool listening stats!",
                        description: "This discord bot allows users to connect their last fm account to the bot, allowing the bot to display different stats such as listening time for periods, scrobbles for periods, time listened to artists etc.",
                        learning: "I learnt how to develop my first discord bot using Java and Discord4J library, as well as using the Spotify API and last fm API. I also learnt how to integrate MongoDB to store data.",
                        technologies: "Java, MongoDB",
                        githubLink: "https://github.com/nirhjah/spongey-bot"
                },
                {
                        type: "WEB APPLICATION",
                        title: "This website!",
                        blurb: "My very own website hosted on github pages, created using React.",
                        description: "As an ongoing project I've been working on, this website has been developed using React to display my projects.",
                        learning: "Learnt how to deploy a website through github pages",
                        technologies: "React, Typescript",
                        githubLink: "https://github.com/nirhjah/nirhjah.github.io"
                }

        ];



        const BootstrapDialog = styled(Dialog)(({ theme }) => ({
                '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent', // Set the backdrop to transparent
                },
                '& .MuiDialogContent-root': {
                        padding: theme.spacing(2),
                },
                '& .MuiDialogActions-root': {
                        padding: theme.spacing(1),
                },
        }));

        const [open, setOpen] = React.useState(false);
        const [selectedProject, setSelectedProject] = React.useState<ProjectType | null>(null);

        const handleClickOpen = (project: ProjectType) => {
                setSelectedProject(project);
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };


        return (

        <div className="Project">

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Button style={{ marginRight: '10px', backgroundColor: '#C2CDFF', color: 'black' }} variant="contained"  onClick={() => {
                                navigate('/');}}>Home</Button>

                </div>

                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <Typography variant="h1" component="h1" color="common.black">
                                    Projects
                            </Typography>
                    </div>


                 <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '60%' }}>

                         {projects.map((card, index) => (
                             <Grid item key={index} xs={"auto"} sm={6} md={"auto"}>
                                        <Card sx={{
                                                backgroundColor: '#C2CDFF',
                                                maxWidth: 250,
                                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                                                        '&:hover': {
                                                                cursor: 'pointer', boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
                                        }  }}>
                                                <CardContent>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                {card.type}
                                                        </Typography>
                                                        <Typography variant="h5" component="div">
                                                                {card.title}
                                                        </Typography>
                                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                                {card.technologies}
                                                        </Typography>
                                                        <Typography   sx={{
                                                                display: '-webkit-box',
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                WebkitLineClamp: 3,
                                                                whiteSpace: 'normal',
                                                        }} variant="body2">{card.blurb}</Typography>


                                                </CardContent>
                                                <CardActions>
                                                        <IconButton component="a" href={card.githubLink} target="_blank" rel="noopener noreferrer">
                                                                <GitHubIcon />
                                                        </IconButton>
{/*
                                                        <Button size="small">More info</Button>
*/}
                                                        <IconButton onClick={() => handleClickOpen(card)} component="a"  target="_blank" rel="noopener noreferrer">
                                                                <ReadMoreIcon />
                                                        </IconButton>






                                                        <BootstrapDialog
                                                            onClose={handleClose}
                                                            aria-labelledby="customized-dialog-title"
                                                            open={open}
                                                        >
                                                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                                                        {selectedProject?.title}
                                                                </DialogTitle>
                                                                <IconButton
                                                                    aria-label="close"
                                                                    onClick={handleClose}
                                                                    sx={{
                                                                            position: 'absolute',
                                                                            right: 8,
                                                                            top: 8,
                                                                            color: (theme) => theme.palette.grey[500],
                                                                    }}
                                                                >
                                                                        <CloseIcon />
                                                                </IconButton>
                                                                <DialogContent dividers>

                                                                     {/*   <img  style={{float: 'left', width: '25%',
                                                                                height: '25%'}} src={logo} className="App-logo" alt="logo" />
*/}
                                                                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }}> <InfoIcon sx={{ marginRight: '2%' }} />   {selectedProject?.description} </Typography>
                                                                        <Typography/>

                                                                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>  <LightbulbIcon sx={{ marginRight: '2%' }}/> {selectedProject?.learning}</Typography>
                                                                        <Typography/>

                                                                        <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>  <CodeIcon sx={{ marginRight: '2%' }} /> {selectedProject?.technologies}</Typography>

                                                                </DialogContent>

                                                        </BootstrapDialog>







                                                </CardActions>
                                        </Card>
                                </Grid>
                            ))}

                    </Grid>
        </div>


    )
}

export default Projects


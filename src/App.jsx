import './App.css'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'

function App() {

  function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className="ripple-background">
        <div className="circle xlarge"></div>
        <div className="circle large"></div>
        <div className="circle medium"></div>
      </div>
      <Container className="container-content" maxWidth={false} disableGutters>
        <AppBar>
          <Toolbar className="navbar">
            <Box>
              <Button color="inherit" href="#home" onClick={(event) => smoothScroll(event, '#back-to-top-anchor')}>
                <img src="src\assets\WormsLogo.png" alt="logo" className="navlogo" />
              </Button>
            </Box>
            <Box>
              <Button color="inherit" href="#video" onClick={(event) => smoothScroll(event, '#video')}>Video</Button>
              <Button color="inherit" href="#repository" onClick={(event) => smoothScroll(event, '#repository')}>Repositorio</Button>
              <Button color="inherit" href="#manual" onClick={(event) => smoothScroll(event, '#manual')}>Manual</Button>
              <Button color="inherit" href="#footer" onClick={(event) => smoothScroll(event, '#footer')}>Créditos</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Box className="section" id="home">
          <img src="src\assets\WormsLogo.png" alt="logo" className="logo" />
          <Typography variant="h4">Taller de Programación I - FIUBA</Typography>
          <Typography variant="h5">Grupo "Los Socketes"</Typography>
          <Typography variant="body1">Recreación del reconocido juego de estrategia Worms utilizando C++. </Typography>
          <Typography variant="body1">Proyecto realizado entre octubre y diciembre de 2023. </Typography>
        </Box>
        <Box className="section" id="video">
          <Typography variant="h3">Video de demostración</Typography>
          <br />
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/7ZwQH9GwN6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
        <Box className="section" id="repository">
          <Typography variant="h2">Repositorio</Typography>
          <br />
          <a href="https://github.com/Los-Socketes/Worms" target="_blank" rel="noreferrer">
            <img src="src\assets\github-mark.svg" alt="GitHub logo" />
          </a>
        </Box>
        <Box className="section" id="manual">
          <Typography variant="h3">Manual de usuario</Typography>
          <br />
          <embed src="src\assets\ManualDeUsuario-Worms-Los-Socketes.pdf" type="application/pdf" width="100%" height="800px" />
        </Box>
        <Box className="section" id="footer">
          <Typography variant="h3">Créditos</Typography>
          <br />
          <Typography variant="h6">Integrantes del grupo:</Typography>
          <br />
          <ul>
            <li>Orsi, Tomás Fabrizio</li>
            <li>Pellegrini, Antonella</li>
            <li>Fresia, Juan Pablo</li>
          </ul>
          <br />
          <Typography variant="body1">Juego original, imágenes, sonidos y música por Team17 Digital Ltd.</Typography>
        </Box>
      </Container>  
    </>
  )
}

export default App

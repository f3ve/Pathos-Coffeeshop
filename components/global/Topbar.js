import {AppBar, Button, Slide, Toolbar, useScrollTrigger} from "@material-ui/core";

function HideOnScroll({children}) {
  const trigger = useScrollTrigger({disableHysteresis: true, threshold: 1000})
  return (
    <Slide appear={false} direction={"down"} in={trigger}>
      {children}
    </Slide>
  )
}

export default function Topbar(props) {
  return (
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
              <Button href="#home">Home</Button>
              <Button href="#about">About us</Button>
              <Button href="#menu">Menu</Button>
              <Button href="#contact">Contact us</Button>
              <Button href="https://www.google.com/maps/dir//New+York,+NY/@40.6974034,-74.1197632,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2m2!1d-74.0059728!2d40.7127753" target="_blank" rel="noopener">Get directions</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
  )
}

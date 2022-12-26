import React from 'react'
import {Link} from 'react-router-dom'
import {Button , Container , MainHeading} from '../../GlobalStyles'
import {HeroVideo , HeroSection , HeroText , ButtonWrapper , HeroButton} from './HeroStyles'

const Hero = () => {
  return (
    <div>
        <HeroSection>
            {/* <HeroVideo></HeroVideo> */}
        <Container>
            <MainHeading>PROGRAMMING IS EVERYWHERE</MainHeading>
            <HeroText style={{color:'#0F1853'}}>
            Programming is a collaboration between humans and computers.
            </HeroText>
            <ButtonWrapper>
                <Link to="registration">
                    <Button>Get Started</Button>
                </Link>
               <Link to='about'>
               <HeroButton>Find More...</HeroButton>
               </Link>
            </ButtonWrapper>
        </Container>
        </HeroSection>
    </div>
  )
}

export default Hero
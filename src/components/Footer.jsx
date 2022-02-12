import React from 'react';
import { Box, Container, Row, Column, Heading, FooterLink } from '../styled-components/FooterStyle'

function Footer() {


  return (
    <Box> 
       <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-25px" }}>
        SPA by Ariel, German y Lautaro
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Ariel</Heading>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
            </FooterLink>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>German</Heading>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
            </FooterLink>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
            </FooterLink>
          </Column>          
          <Column>
            <Heading>Lautaro</Heading>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
            </FooterLink>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Footer;

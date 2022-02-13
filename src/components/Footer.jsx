import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  FooterLink,
} from "../styled-components/FooterStyle";

function Footer() {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-25px" }}>
        SPA by Ariel, German y Lautaro
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Ariel</Heading>
            <FooterLink
              href="https://www.linkedin.com/in/linke-ariel-lopez/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span style={{ marginLeft: "10px" }}>Linkedin</span>
            </FooterLink>
            <FooterLink href="#">
              <span style={{ marginLeft: "10px" }}>Github</span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>German</Heading>
            <FooterLink
              href="https://www.linkedin.com/in/german-daniel-torres-174ba1205/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span style={{ marginLeft: "10px" }}>Linkedin</span>
            </FooterLink>
            <FooterLink
              href="https://github.com/Versashe2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span style={{ marginLeft: "10px" }}>Github</span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Lautaro</Heading>
            <FooterLink
              href="https://www.linkedin.com/in/lautaro-gonzalez-b9b20b206/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span style={{ marginLeft: "10px" }}>Linkedin</span>
            </FooterLink>
            <FooterLink
              href="https://github.com/ltrzalez"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span style={{ marginLeft: "10px" }}>Github</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;

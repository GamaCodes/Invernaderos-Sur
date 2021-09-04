import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "./misc/Layouts";
import logo from "../images/inerna_white.svg";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent text-primary-500 hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4 no-underline`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`;

export default function Footer() {
  return (
    <div>
      <Container>
        <Content>
          <Row>
            <LogoContainer>
              <LogoImg src={logo} />
            </LogoContainer>
            <LinksContainer>
              <Link href="#acerca">- Acerca de -</Link>
              <Link href="#servicio">- Servicios -</Link>
              <Link href="#politica">- Política -</Link>
            </LinksContainer>

            <CopyrightText>&copy; 2021. Derechos Reservados</CopyrightText>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

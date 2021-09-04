import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "./misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(
  SectionHeading
)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-primary-800 mt-4`;

const List = tw.ul`flex flex-wrap list-none list-inside p-0 mb-8`;
const Item = tw.li`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center text-primary-700`;

const Target = ({ textOnLeft = false }) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Nuestros Objetivos</Heading>
            <Description>
              Hoy logramos situarnos dentro de las empresas que mantienen el
              liderazgo en la calidad del servicio, con objetivos claros que
              constantemente evaluamos, entre los que se encuentran:
            </Description>
            <List>
              <Item>Control de calidad y seguridad</Item>
              <Item>Mejora continua de resultados</Item>
              <Item>Mejora continua de productividad</Item>
              <Item>Satisfacción total del cliente</Item>
            </List>
            <Description>
              Para el cumplimiento de estos objetivos contamos con una
              organización con firme cimiento de calidad, seriedad e integridad,
              sumado a un equipo multidisciplinario de profesionales, asesores,
              técnicos, ingenieros y gestores de servicio, con experiencia en
              Buenas Prácticas de Manufactura, Nutrición e Inocuidad
              Alimentaria.
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default Target;

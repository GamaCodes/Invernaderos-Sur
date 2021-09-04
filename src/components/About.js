import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { SectionDescription } from "./misc/Typography.js";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";

import SupportIconImage from "../images/Experience.svg";
import CustomizeIconImage from "../images/shield-icon.svg";
import ShieldIconImage from "../images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-300`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl text-primary-500 leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-primary-700`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default function About({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Fundada",
      description:
        "En 2013, nace como una empresa familiar, con el fiel compromiso y objetivo de entregar el mejor servicio de alimentación y soluciones nutricionales como soluciones en su desarrollo de invernaderos, su producción y comercialización a empresas de diversos rubros.",
    },
    {
      imageSrc: SupportIconImage,
      title: "Primeros Pasos",
      description:
        "Los primeros pasos de Invernaderos del Sur, fueron encaminados a entregar servicios a empresas del sector agrícola, atendiendo sus necesidades en terreno.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Experiencia",
      description:
        "Con una participación en el mercado de 6 años, ha mantenido un crecimiento sostenido, incorporando importantes clientes a su cartera habitual, transformándose en una real alternativa de calidad y atención en la séptima región.",
    },
  ],
  linkText = "Learn More",
  heading = "Acerca de",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null,
}) {
  return (
    <div id="acerca">
      <Container>
        <ContentWithPaddingXl>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
          <ThreeColumnContainer>
            {cards.map((card, i) => (
              <Column key={i}>
                <Card>
                  <span className="imageContainer" css={imageContainerCss}>
                    <img src={card.imageSrc} alt="" css={imageCss} />
                  </span>
                  <span className="title">{card.title}</span>
                  <p className="description">{card.description}</p>
                </Card>
              </Column>
            ))}
          </ThreeColumnContainer>
        </ContentWithPaddingXl>
        <DecoratorBlob />
      </Container>
    </div>
  );
}

import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { PrimaryButton } from "./misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-primary-700 text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4`;

const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl text-primary-700`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 opacity-75 text-primary-500 inline-block ml-1`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const Service = ({
  subheading = "",
  heading = "Servicios",
  description = "Contamos con diversos servicios para un mejor servicio:",
  testimonials = null,
  textOnLeft = false,
}) => {
  const defaultTestimonials = [
    {
      imageSrc:
        "https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Este servicio tiene por finalidad entregar proyectos y propuestas desarrolladas para lograr una mejor producción almacenamiento y servicios logísticos en el ramo alimentario incluyendo el desarrollo, estudios de ingeniería para el debido proceso en producción y comercialización en los productos alimenticios requerido por el cliente final.",
      customerName: "Alimentación en Terreno",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Para la entrega de este servicio implementamos sus instalaciones con tecnología de punta, que permita a nuestros profesionales y técnicos, administrar y entregar un servicio instalaciones de producción acorde a las necesidades de su empresa.",
      customerName: "Concesión de Casinos",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Contamos con una vasta experiencia en la realización de cualquier tipo de evento que las empresas requieran como: Celebración de aniversarios, lanzamientos y todo tipo de actividades que requieran de una atención y preparación especial.",
      customerName: "Servicios Especiales",
    },
  ];

  if (!testimonials || testimonials.length === 0)
    testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container id="servicios">
      <Content>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <CustomerName>{testimonial.customerName}</CustomerName>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);

export default Service;

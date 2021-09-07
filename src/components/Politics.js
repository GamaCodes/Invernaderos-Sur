import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`,
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-primary-700`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none text-primary-500`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold `;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed text-primary-700`
);

export default function Politics({
  subheading = "",
  heading = "Política",
  description = "Para el fiel cumplimiento de estos compromisos establece su Política Integrada, y manifiesta que ésta debe servir de guía y orientación a toda la organización, siendo considerada como una declaración de principios corporativos, procurando realizar las siguientes acciones:",
  imageSrc = "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  imageContain = false,
  imageShadow = true,
  faqs = null,
}) {
  const defaultFaqs = [
    {
      question: "Normas y Legislaciónes",
      answer:
        "Cumplir con todas las normas y legislación vigentes en La República Mexicana, así como los requerimientos exigidos por nuestros clientes, con el fin de conseguir su fidelidad y formar parte de una sociedad estratégica que garantice resultados comprometidos, orientando nuestros esfuerzos a la mejora continua, considerando todos los recursos disponibles en el logro de la satisfacción de nuestros clientes y el cumplimiento de sus requisitos.",
    },
    {
      question: "Valores",
      answer:
        "Mantener en todo momento una conducta ética y moral, incorporando constantemente el concepto de Responsabilidad Social Empresarial en todos los ámbitos del servicio y la gestión, respetando ante todo la persona, asumiendo Ia sensibilización del personal en temas de Prevención de Riesgos; Calidad y Medio Ambiente. Fomentando Ia Capacitación a todos los niveles de la organización.",
    },
    {
      question: "Formación",
      answer:
        "Llevar a cabo una formación continua del personal como base para la gestión del talento y el desarrollo constante de la especialización del rubro, garantizando la participación activa de nuestros colaboradores y sus representantes en el desarrollo de las actividades en el sistema de gestión y su proyección.",
    },
    {
      question: "Nuestra gestión",
      answer:
        "Con la finalidad de asegurar el éxito de nuestra gestión, la política integrada es implementada, comunicada y difundida a todas las partes interesadas en el desempeño de la organización, comprometiendo a la Alta Gerencia de la organización a revisarla periódicamente y mantenerla como principio básico y representativo de la Empresa",
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <div id="politica">
      <Container>
        <Content>
          <TwoColumn>
            <Column tw="hidden lg:block w-5/12 flex-shrink-0">
              <Image
                imageContain={imageContain}
                imageShadow={imageShadow}
                imageSrc={imageSrc}
              />
            </Column>
            <Column>
              <FAQContent>
                {subheading ? <Subheading>{subheading}</Subheading> : null}
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <FAQSContainer>
                  {faqs.map((faq, index) => (
                    <FAQ
                      key={index}
                      onClick={() => {
                        toggleQuestion(index);
                      }}
                      className="group"
                    >
                      <Question>
                        <QuestionText>{faq.question}</QuestionText>
                        <QuestionToggleIcon>
                          {activeQuestionIndex === index ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon />
                          )}
                        </QuestionToggleIcon>
                      </Question>
                      <Answer
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            marginTop: "0px",
                          },
                        }}
                        initial="collapsed"
                        animate={
                          activeQuestionIndex === index ? "open" : "collapsed"
                        }
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        {faq.answer}
                      </Answer>
                    </FAQ>
                  ))}
                </FAQSContainer>
              </FAQContent>
            </Column>
          </TwoColumn>
        </Content>
      </Container>
    </div>
  );
}

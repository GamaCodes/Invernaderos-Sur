import React from "react";
import tw from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../images/email-newsletter-icon.svg";
import { Container as ContainerBase } from "./misc/Layouts";
import { SectionHeading } from "./misc/Headings.js";
import { PrimaryButton } from "./misc/Buttons.js";

const Container = tw(ContainerBase)`bg-primary-700 -mx-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`;
const TextColumn = tw.div`flex items-center flex-col sm:flex-row `;
const MailBox = tw.div`flex items-center flex-col sm:flex-row w-full md:w-auto`;
const Paragraph = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto bg-white py-4 px-0 lg:px-4 text-center text-base text-primary-700 font-bold`;

const EmailNewsletterIcon = tw(
  EmailNewsletterIconBase
)`w-16 h-16 text-green-500`;
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`;
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`;
const Description = tw.p`text-primary-100 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`;

const Button = tw(
  PrimaryButton
)`w-full border-0 text-base sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700 border-0`;

const Link = tw.a` w-full text-gray-100 no-underline`;

export default function Email() {
  return (
    <div>
      <Container>
        <Content>
          <Row>
            <TextColumn>
              <EmailNewsletterIcon />
              <HeadingInfoContainer>
                <Heading>Contáctanos</Heading>
                <Description>
                  Estamos para brindarte la atención necesaria
                </Description>
              </HeadingInfoContainer>
            </TextColumn>
            <MailBox>
              <Paragraph>gestion@invernaderosdelsur.com</Paragraph>
              <Link href="mailto:gestion@invernaderosdelsur.com">
                <Button>Escríbenos</Button>
              </Link>
            </MailBox>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

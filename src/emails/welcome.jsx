/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import labwox from "../assets/Logo.png"
import profile from "../assets/profileBg.png"
import bg from "../assets/email-template-questions.png"

export const TemplateEmail = ({user, emailType, cta, userfirstname, btnText, btnCta}) => {

  return (
    <Html>
      <Head />
      <Preview>Hello, { user }</Preview>
      <Tailwind>
        <Body className="bg-[#F5F5F5] m-auto max-w-[500px] font-sans border border-black px-6 py-8">
          <Container className="">
            <Section className="">
              <Img
                src={labwox}
                width="119"
                height="42"
                alt="Labwox"
                className="object-contain"
              />
            </Section>

            <Heading className="bg-[#212529] text-white w-full mt-6 relative py-8 pl-6 text-2xl font-bold leading-[28.80px]">
               <Img
                src={profile}
                alt="Labwox"
                className="object-contain w-full h-full absolute top-0 -right-10"
              />
              <p className='w-[70%]'>Powering <span className='text-[#FE423D]'>Research</span> Capabilities in Africa</p>  
            </Heading>

            <Section className="text-neutral-500 text-base font-normal leading-tight text-left ">
              <div className='w-full bg-white py-7 px-6'>
                 <h2 className='mb-2'>{emailType}</h2>
              <p className='my-2'>Hello, {userfirstname},</p>
              <p className='my-2'>{cta}</p>
              <Button href={btnCta} className='w-40 p-2.5 rounded bg-[#FE432D] text-center my-2'>
                {btnText}
              </Button>
              <p className='flex flex-col'>
                <span>Regards,</span>
                <span>Soji from Labwox</span>
              </p>
              </div>
            </Section>
            <Section className='w-full relative my-6 py-8 text-center bg-[#EDEDED] h-full'>
              <Img
                src={bg}
                className='absolute top-0 left-0 w-full h-full'
              />
              <Text className='w-full h-full'>
                <p className='text-[#121A26] text-base font-normal leading-tight'>Have Questions?</p>
                <Link href='' className='mt-1 text-[#FE423D] underline underline-offset-4 cursor-pointer'>We’re here, ready to talk</Link>
              </Text>
            </Section>
            <Text className='w-[375px] text-[#767778] text-base font-normal leading-normal'>
              <p className='text-[#767778]'>Labworks Limited, all rights reserved.</p>
              <p className='text-[#767778]'>Phone number: (+234)8090870364</p>
              <p className='text-[#767778]'>Registered office: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos</p>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TemplateEmail;
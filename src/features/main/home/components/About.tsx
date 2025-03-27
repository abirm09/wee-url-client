"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
} from "@/components";

import { SectionSubTitle, SectionTitle } from "@/components/Shared/Title/Title";
import BannerCTA from "./BannerCTA";

type TCardData = {
  id: number;
  title: string;
  desc: string;
};

const cardData: TCardData[] = [
  {
    id: 1,
    title: "Custom Short Links",
    desc: "Tailor your shortened links to reflect your brand, making them easy to remember and share.",
  },
  {
    id: 2,
    title: "Advanced Analytics",
    desc: "Gain insights into your link performance with real-time click tracking and audience demographics.",
  },
  {
    id: 3,
    title: "Seamless Integration",
    desc: "Easily integrate with your favorite tools like social media, CRM platforms, and more.",
  },
];

const About = () => {
  return (
    <section>
      <Container className="pt-10 md:pt-20">
        <SectionTitle text="ABOUT" />
        <p
          className="text-gray-600 text-center text-xs md:text-base"
          data-aos="fade-up"
        >
          We simplify your digital experience, one link at a time.
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-5">
          {cardData.map((item, index) => (
            <Card
              key={item.id}
              className="w-96"
              data-aos-delay={`${index * 300}`}
              data-aos="fade-up"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-10 text-center space-y-2">
          <h2 className="text-center" data-aos="fade-up">
            Ready to simplify your URLs?
          </h2>
          <SectionSubTitle
            data-aos="fade-up"
            text="Start creating short, effective links that drive engagement today."
          />
          <div data-aos="fade-up">
            <BannerCTA />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

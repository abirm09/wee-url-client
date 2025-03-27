"use client";
import DocumentAnalytics from "@/assets/images/banner/document-analysis.svg";
import URLShorter from "@/assets/images/banner/link-shortener.svg";
import URLTrend from "@/assets/images/banner/url-trends.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
} from "@/components";
import Autoplay from "embla-carousel-autoplay";
import BannerCTA from "./BannerCTA";

const Banner = () => {
  return (
    <section className="bg-secondary">
      <Container className="py-10 md:py-20 space-y-3 px-16">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="w-full">
            <CarouselItem className="grid grid-cols-2 w-full items-center">
              <div className="col-span-2 lg:col-span-1 text-center lg:text-left space-y-2">
                <h4 className="font-semibold text-2xl md:text-3xl lg:text-6xl">
                  Shorten your long <span className="text-primary">URL</span>
                </h4>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <BannerCTA />
              </div>
              <div className="hidden lg:flex justify-center">
                <URLShorter className="w-96 h-96" />
              </div>
            </CarouselItem>
            <CarouselItem className="grid grid-cols-2 w-full items-center">
              <div className="col-span-2 lg:col-span-1 text-center lg:text-left space-y-2">
                <h4 className="font-semibold text-2xl md:text-3xl lg:text-6xl">
                  Track your <span className="text-primary">URL trends</span>
                </h4>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <BannerCTA />
              </div>
              <div className="hidden lg:flex justify-center">
                <URLTrend className="w-96 h-96" />
              </div>
            </CarouselItem>
            <CarouselItem className="grid grid-cols-2 w-full items-center">
              <div className="col-span-2 lg:col-span-1 text-center lg:text-left space-y-2">
                <h4 className="font-semibold text-2xl md:text-3xl lg:text-6xl">
                  Get advanced{" "}
                  <span className="text-primary">URL Analytics</span>
                </h4>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <BannerCTA />
              </div>
              <div className="hidden lg:flex justify-center">
                <DocumentAnalytics className="w-96 h-96" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;

{
  /* <h1
className="text-2xl md:text-6xl font-bold text-center"
data-aos="fade-up"
>
Your go-to app for quick and
<span className="block">
  reliable <span className="text-primary">URL shortening.</span>
</span>
</h1>
<p
className="text-gray-600 text-center text-xs md:text-base"
data-aos="fade-up"
>
Welcome to WeeUrl. Shorten, share, and track links effortlessly with
our easy-to-use platform.
</p>
<div className="text-center" data-aos="fade-up">
<BannerCTA />
</div> */
}

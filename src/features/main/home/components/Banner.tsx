import { Container } from "@/components";
import BannerCTA from "./BannerCTA";

const Banner = () => {
  return (
    <section>
      <Container className="py-10 md:py-20 space-y-3">
        <h1 className="text-2xl md:text-6xl font-bold text-center">
          Your go-to app for quick and
          <span className="block">
            reliable <span className="text-primary">URL shortening.</span>
          </span>
        </h1>
        <p className="text-gray-600 text-center text-xs md:text-base">
          Welcome to WeeUrl. Shorten, share, and track links effortlessly with
          our easy-to-use platform.
        </p>
        <div className="text-center">
          <BannerCTA />
        </div>
      </Container>
    </section>
  );
};

export default Banner;

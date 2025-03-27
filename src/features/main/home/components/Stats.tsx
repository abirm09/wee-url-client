import CardIco from "@/assets/images/others/card.svg";
import LinkIco from "@/assets/images/others/link.svg";
import UsersIco from "@/assets/images/others/users.svg";
import WorldIco from "@/assets/images/others/world.svg";
import { Container } from "@/components";
import CounterAnim from "@/components/CounterAnim/CounterAnim";

const Stats = () => {
  return (
    <section className="py-10 md:py-20 bg-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Helping a local
              <span className="text-primary"> business reinvent itself </span>
            </h2>
            <p className="text-gray-600 text-xs md:text-base">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 justify-center">
            <div className="flex gap-2 items-center">
              <UsersIco className="w-8 h-8 lg:w-12 lg:h-12" />
              <div>
                <CounterAnim
                  to={6000}
                  className="text-xl lg:text-3xl font-semibold"
                />
                <span className="text-sm md:text-base">Users</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <LinkIco className="w-8 h-8 lg:w-12 lg:h-12" />
              <div>
                <CounterAnim
                  to={500000}
                  className="text-xl lg:text-3xl font-semibold"
                />
                <span className="text-sm md:text-base">Shortens</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <WorldIco className="w-8 h-8 lg:w-12 lg:h-12" />
              <div>
                <CounterAnim
                  to={50}
                  className="text-xl lg:text-3xl font-semibold"
                />
                <span className="text-sm md:text-base">Countries</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <CardIco className="w-8 h-8 lg:w-12 lg:h-12" />
              <div>
                <CounterAnim
                  to={5000}
                  className="text-xl lg:text-3xl font-semibold"
                />
                <span className="text-sm md:text-base">Payments</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;

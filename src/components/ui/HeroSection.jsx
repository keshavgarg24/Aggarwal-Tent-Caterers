import {Button} from "./Button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-[var(--primary)] text-[var(--primary-foreground)] py-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text on the left */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <img
            className="shehnai-img mb-4"
            src="/shehnai.png"
            alt="Tent and Catering"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-4 leading-tight">
            Welcome to Aggarwal Tent & Caterers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--foreground)]">
            आपके हर इवेंट को खास बनाएं। हमारे साथ पाएं बेहतरीन टेंट और कैटरिंग
            सेवाएं।
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-[var(--foreground)] mb-6">
            "Customer satisfaction is our top priority"
          </p>
          <a
            href="https://wa.me/+91-8851151548"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Get a Quote</Button>
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              src="/hero.png"
              alt="Tent and Catering"
              className="w-full h-auto"
            />
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes moveShehnai {
          0% {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(-20px);
          }
        }

        @keyframes shehnaiSound {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .shehnai-img {
          width: 150px;
          height: auto;
          display: block;
          margin: 0 auto;
          animation: moveShehnai 4s infinite ease-in-out,
            shehnaiSound 3s infinite ease-in-out;
        }

        @media (min-width: 768px) {
          .shehnai-img {
            width: 200px;
            margin-left: -10px;
          }
        }

        @media (min-width: 1024px) {
          .shehnai-img {
            width: 250px;
            margin-left: -20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

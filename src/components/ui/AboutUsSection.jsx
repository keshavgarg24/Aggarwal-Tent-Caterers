"use client"; // Ensure this is marked as a client component if it uses client-side features

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[var(--background)] text-[var(--foreground)] py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center border-b-4 border-[var(--accent)] inline-block pb-2">
            About Us
          </h2>
        </div>
        <div className="text-center mb-8">
          <p className="text-base md:text-lg lg:text-xl font-medium">
            Aggarwal Tent & Caterers is a pioneering business, dedicated to
            providing top-notch tent and catering services for any event for
            over 30 years. Our journey began with a simple vision: to make every
            event special by offering unparalleled service. Our commitment to
            customer satisfaction and quality has always been the cornerstone
            of our success. We take pride in having a loyal customer base who
            trust us to make their events memorable time and again.
          </p>
        </div>
        <div className="text-center mb-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="/images/own.png"
                alt="Owner"
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full brightness-110"
                style={{ border: "4px solid var(--accent)" }}
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,69,0,0.4)] shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>
            </div>
            <p className="text-base md:text-lg lg:text-xl font-medium mt-4">
              Our owner, Mr. Shyam Lal Garg , brings years of experience and a
              personal touch to every event. With a deep belief in customer
              satisfaction and an uncompromising stance on quality, He has led Aggarwal Tent & Caterers to become a trusted name in
              the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

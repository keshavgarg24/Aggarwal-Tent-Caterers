"use client";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--card)] text-[var(--card-foreground)] py-8 mt-8 border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Address and Contact Info */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-semibold">Aggarwal Tent & Caterers</p>
            <p>U-1, Bindapur Matiala Rd, Subhash Park, Uttam Nagar,</p>
            <p>New Delhi, Delhi, 110059</p>
            <p className="mt-4">
              Contact us:{" "}
              <a href="tel:+918851151548" className="text-[var(--accent)] hover:underline">
                8851151548
              </a>,{" "}
              <a href="tel:+919250866911" className="text-[var(--accent)] hover:underline">
                9250866911
              </a>
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116838.41811384699!2d76.97079300359393!3d28.615799669524247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05299597e8cf%3A0x2799bf7dda7f2868!2sAggarwal%20tent%20house!5e0!3m2!1sen!2sin!4v1723305558071!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-[var(--border)] pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aggarwal Tent & Caterers. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with ❤️ by{" "}
            <a href="https://github.com/keshavgarg24" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              Keshav
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

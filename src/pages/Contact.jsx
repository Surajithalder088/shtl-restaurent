import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactButton from '../components/ContactButton'

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="text-center pt-[80px] mb-stack-lg px-3">
        <h1 className="font-display-lg text-display-lg text-primary mb-6">
          Connect With Us
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Whether you wish to make a reservation, inquire about private dining, or simply share your experience, we look forward to hearing from you.
        </p>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg p-6">

        {/* Left Column: Info Grid & Contact Form */}
        <div className="lg:col-span-5 space-y-stack-md">

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-outline-variant/30 pb-8">

            <div>
              <h3 className="font-label-sm text-label-sm text-secondary uppercase mb-2">
                Location
              </h3>

              <p className="font-body-md text-body-md text-on-surface">
                123 Culinary Ave, Suite 100
                <br />
                Metropolis, NY 10012
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-label-sm text-secondary uppercase mb-2">
                Hours
              </h3>

              <p className="font-body-md text-body-md text-on-surface">
                Tue - Sun: 5:00 PM - 11:00 PM
                <br />
                Mon: Closed
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-label-sm text-secondary uppercase mb-2">
                Contact
              </h3>

              <p className="font-body-md text-body-md text-on-surface">
                +1 (555) 123-4567
                <br />
                reservations@emberandplate.com
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-label-sm text-secondary uppercase mb-2">
                Private Events
              </h3>

              <p className="font-body-md text-body-md text-on-surface">
                events@emberandplate.com
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                    Name
                  </label>

                  <input
                    className="input-underline w-full"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                    Email
                  </label>

                  <input
                    className="input-underline w-full"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                    Phone
                  </label>

                  <input
                    className="input-underline w-full"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                    Subject
                  </label>

                  <select className="input-underline w-full text-on-surface">
                    <option>General Inquiry</option>
                    <option>Reservation Question</option>
                    <option>Private Event</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  Message
                </label>

                <textarea
                  className="input-underline w-full resize-none h-24"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
                type="button"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>

        {/* Right Column: Location Visuals & Action Bar */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-8">

          {/* Map / Location Image */}
          <div className="relative h-[400px] w-full bg-surface-variant overflow-hidden group">

            <img
              alt="Restaurant Exterior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A high-end, sophisticated architectural photograph of a luxury restaurant facade named EMBER & PLATE at twilight. The lighting is warm and inviting, spilling onto a dark, wet cobblestone street. The aesthetic is modern minimal with tactile organic materials like dark wood and brushed gold accents. High contrast, cinematic lighting, editorial style."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmrBQVJM10FrKPat74BiV1lm-z0sFpHSwX0YC3u-QXnzKbm68k0AUA7gDmbt3kcpi4GaDvdJa1VsIy_spNOyCDcosJmK6fWnLeDtX3kw3DxOs43JMoOaZ4Y7qTT144Rp-eAj2ZAkdboHsyhsSlX-t3ASjBaW69KdM4v3UJ3keE3DcNe3zRlnl5jbiBTyPOg8dB-zrIIA3Oti0SrqsjW2d1QwLrC-zPlZY59SI1bFZDpBzb5dlC-X1r"
            />

            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>

            <div className="absolute bottom-6 left-6 bg-surface p-4 shadow-sm border border-secondary/20">
              <span className="font-label-sm text-label-sm text-primary uppercase flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="location_on"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>

                Get Directions
              </span>
            </div>

          </div>

          {/* Interior Sneak Peek Grid */}
          <div className="grid grid-cols-2 gap-4 h-[250px]">

            <div className="bg-surface-variant overflow-hidden">
              <img
                alt="Dish Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                data-alt="Close-up editorial food photography of a meticulously plated fine-dining dish on a matte black ceramic plate. A perfectly seared scallop with vibrant green herb oil and gold leaf flakes. Dramatic, directional lighting highlighting the textures. Minimalist dark background, luxury dining aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiqF4YmPIUX-WDK3xpT7UfiMEP9FY7YxM6AbKMvfOBPAN7_3CksDORkofkxXntaEaOLl4lABF0E9vMIkslCiILwkm-UCRNGdWeXzsaYKozkA9jxRClT96VT0oXYwowAVimZC6m0AZNV3_5ty8wm2T8he6I9MtpxLnjwHOSg_zBrvRp9msnykzMSmO9miZcq-6HIlfl9Q-bFI4ItW78bqAiwMuphLLbCIDxqCWVb513XmKcoWR3oeOD"
              />
            </div>

            <div className="bg-surface-variant overflow-hidden">
              <img
                alt="Dining Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                data-alt="Interior shot of a dimly lit, high-end restaurant dining room. Focus on a table set for two with crisp white linens, gleaming crystal wine glasses, and a small flickering candle. The background is softly blurred showing dark textured walls and ambient warm lighting. Intimate, intentional, and curated atmosphere."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATzrRFcwcb4RgewZBa3-Z19gNmWKHCLLtXlaJDFliPOxsrmBjSsc65WG_lUaI3PqTEMcJLbSy6H7Jty64B8HLpkWrnFqBx-H498SIc6aGbbLhOJ9qtQoi-whydHC4mdJtWcX1_OMX5ZXRsvsxX-7Nh8phNd3URy1_gwu8nQoyXybt2J8pIrzhg_D-q2Q3K2lj6i-MB0z4gp1zliZMi9AJIwrZ8b9ItrpV7KFiqM6iB-LRqz0tWKFjy"
              />
            </div>

          </div>

          {/* Action Bar */}
          <div className="bg-primary-container text-on-primary-container p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-secondary">

            <div className="flex-1">
              <h4 className="font-headline-md text-headline-md text-on-primary mb-2">
                Immediate Assistance
              </h4>

              <p className="font-body-md text-body-md opacity-80">
                Our concierge team is available to assist you via phone or message.
              </p>
            </div>

            <div className="flex gap-4 w-full sm:w-auto">

              <button className="flex-1 sm:flex-none border border-on-primary text-on-primary font-label-sm text-label-sm px-6 py-3 hover:bg-on-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                <span
                  className="material-symbols-outlined"
                  data-icon="call"
                >
                  call
                </span>
                Call
              </button>

              <button className="flex-1 sm:flex-none bg-on-primary text-primary font-label-sm text-label-sm px-6 py-3 hover:bg-secondary hover:text-on-primary transition-colors flex items-center justify-center gap-2">
                <span
                  className="material-symbols-outlined"
                  data-icon="chat"
                >
                  chat
                </span>
                WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Quick Actions Floating (Desktop: side, Mobile: bottom) */}

           <ContactButton/>

      <Footer />
    </div>
  )
}

export default Contact
import React from 'react'

const ContactButton = () => {
  return (
    <div>
        
      <div className="fixed bottom-6 right-6 md:bottom-1/2 md:right-8 md:translate-y-1/2 flex flex-col gap-4 z-40">

        <a
          className="w-14 h-14 bg-primary-container text-on-primary rounded-full shadow-lg flex items-center justify-center hover:bg-secondary transition-colors group relative"
          href="tel:#"
          title="Call Restaurant"
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 1",
            }}
          >
            call
          </span>

          <span className="absolute right-full mr-4 bg-primary-container text-on-primary font-label-sm text-label-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            Call Restaurant
          </span>
        </a>

        <a
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors group relative"
          href="#"
          title="WhatsApp Restaurant"
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 1",
            }}
          >
            chat
          </span>

          <span className="absolute right-full mr-4 bg-[#25D366] text-white font-label-sm text-label-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            WhatsApp Us
          </span>
        </a>

      </div>
    </div>
  )
}

export default ContactButton
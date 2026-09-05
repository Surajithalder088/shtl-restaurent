import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactButton from '../components/ContactButton'
import { motion } from "motion/react";
import { useSelector } from 'react-redux';

const About = () => {
     const appName = useSelector((state) => state.app["app-name"]);

    const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // 0.3 second gap between children
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 60, // Bottom → Top
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
  return (
    <div>
        <Header/>
          <section className="relative pt-[50px] h-[90vh] min-h-[600px] flex items-center justify-center w-full bg-[#1A1A1A] overflow-hidden">
        
                <div
                  className="absolute inset-0 bg-cover bg-center w-full h-full opacity-60"
                  data-alt="A cinematic, high-end food photograph of a beautifully plated contemporary dish in a dimly lit, luxury restaurant setting. The lighting is dramatic, highlighting the textures of the food against a dark, moody background. Rich warm tones contrast with crisp, pristine details, embodying a sophisticated 'New Editorial' aesthetic. Perfect high-contrast luxury dining atmosphere."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqGleIPj-JndIMtijcoccaq5vUHf3LyQlvfCkJ3FwrcSe6zT-PmDyyaniRQPzzSckU5I2mWG3XoDg4Rd5ccjeO6e7xebKmmWI1A6Z_vm5O7wvnb7gEoARspt8J1-iCVZOjQFigHnzN1pkwuWVo83h7p4jzq3ZmtNlFpFcyURGwUc0zX9iiNH-Owi4JZ-obShhRkbZHTJZQc_Zbqp5i58oB3ClSQZuBIeQu1lFRQxo-HmJfNDOIo3uG')",
                  }}
                ></div>
        
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
        
                <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center gap-8">
        
                  <motion.h1
                    initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
                  className="font-display-lg text-display-lg text-[#FCFAFA] font-bold tracking-tight">
                    More Than a Meal. 
                    <br />
                    A Story Worth Sharing.
                  </motion.h1>
        
                  <p className="font-body-lg text-body-lg text-[#FCFAFA]/80 max-w-2xl">
                    We believe great dining is about more than what’s on the plate. It’s the harmony of exceptional ingredients, thoughtful craftsmanship, warm hospitality, and an atmosphere that invites you to slow down and stay awhile. Every detail is carefully considered to create moments worth remembering.
                  </p>
        
                 
        
                </div>
        
              </section>

           <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
         
                 <div className="text-center max-w-2xl mx-auto mb-stack-md">
         
                   <h2 className="font-headline-md text-headline-md text-primary mb-4">
                     Sourced with Intention
                   </h2>
         
                   <p className="text-on-surface-variant">
                     We partner with local purveyors who share our uncompromising standards for quality and sustainability.
                   </p>
         
                 </div>
         
         
                 <motion.div  variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
         
                   {/* Bento Item 1 */}
         
                   <motion.div variants={childVariants} className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">
         
                     <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
         
                       <span
                         className="material-symbols-outlined text-3xl"
                         style={{
                           fontVariationSettings: "'FILL' 1",
                         }}
                       >
                         eco
                       </span>
         
                     </div>
         
                     <h3 className="font-headline-md text-headline-md text-primary">
                       Farm Fresh Produce
                     </h3>
         
                     <p className="text-on-surface-variant font-body-sm">
                       Harvested daily from organic partners within a 50-mile radius, ensuring peak vitality and flavor.
                     </p>
         
                   </motion.div>
         
         
                   {/* Bento Item 2 */}
         
                   <motion.div  variants={childVariants} className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">
         
                     <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
         
                       <span
                         className="material-symbols-outlined text-3xl"
                         style={{
                           fontVariationSettings: "'FILL' 1",
                         }}
                       >
                         sailing
                       </span>
         
                     </div>
         
                     <h3 className="font-headline-md text-headline-md text-primary">
                       Wild Caught Seafood
                     </h3>
         
                     <p className="text-on-surface-variant font-body-sm">
                       Responsibly line-caught and delivered within hours to guarantee unparalleled freshness.
                     </p>
         
                   </motion.div>
         
         
                   {/* Bento Item 3 */}
         
                   <motion.div variants={childVariants} className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">
         
                     <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
         
                       <span
                         className="material-symbols-outlined text-3xl"
                         style={{
                           fontVariationSettings: "'FILL' 1",
                         }}
                       >
                         set_meal
                       </span>
         
                     </div>
         
                     <h3 className="font-headline-md text-headline-md text-primary">
                       Heritage Meats
                     </h3>
         
                     <p className="text-on-surface-variant font-body-sm">
                       Ethically pasture-raised and dry-aged in-house to develop deep, complex characteristics.
                     </p>
         
                   </motion.div>
         
                 </motion.div>
         
               </section>

               <section className="min-h-fit  px-margin-mobile md:px-margin-desktop py-stack-lg overflow-hidden">
  <div className="max-w-container-max mx-auto h-full flex flex-col md:flex-row gap-10 lg:gap-16">

    {/* LEFT — JOURNEY */}
    <div className="w-full md:w-[55%] h-full flex flex-col justify-center">

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8"
      >
        <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary">
          Our Journey
        </span>

        <h2 className="font-headline-md text-headline-md text-primary mt-2">
          From a Single Table
          <br />
          to a Growing Story
        </h2>

        <p className="text-on-surface-variant mt-3 max-w-xl">
          What began with a simple passion for exceptional food has grown into
          a journey shaped by people, places, and countless memorable moments.
        </p>
      </motion.div>


      {/* TIMELINE */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-outline-variant/40" />

        <div className="space-y-5">

          {/* STEP 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                restaurant
              </span>
            </div>

            <div className="pb-1">
              <span className="font-label-sm text-label-sm tracking-widest text-secondary">
                01
              </span>

              <h3 className="font-headline-md text-headline-md text-primary mt-1">
                Where It Began
              </h3>

              <p className="text-on-surface-variant font-body-sm mt-1 max-w-lg">
                Our story began with a simple belief — that exceptional food,
                thoughtful hospitality, and the right atmosphere could turn
                an ordinary evening into something unforgettable.
              </p>
            </div>
          </motion.div>


          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>

            <div className="pb-1">
              <span className="font-label-sm text-label-sm tracking-widest text-secondary">
                02
              </span>

              <h3 className="font-headline-md text-headline-md text-primary mt-1">
                A New Place to Gather
              </h3>

              <p className="text-on-surface-variant font-body-sm mt-1 max-w-lg">
                As our guests became part of our story, we opened new spaces
                designed to bring our philosophy of dining to more tables and
                more communities.
              </p>
            </div>
          </motion.div>


          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
            </div>

            <div className="pb-1">
              <span className="font-label-sm text-label-sm tracking-widest text-secondary">
                03
              </span>

              <h3 className="font-headline-md text-headline-md text-primary mt-1">
                Growing Together
              </h3>

              <p className="text-on-surface-variant font-body-sm mt-1 max-w-lg">
                Behind every plate is a team of passionate people. Our chefs,
                servers, and hospitality teams grew alongside the restaurant,
                sharing one commitment to making every guest feel welcome.
              </p>
            </div>
          </motion.div>


          {/* STEP 4 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>
            </div>

            <div className="pb-1">
              <span className="font-label-sm text-label-sm tracking-widest text-secondary">
                04
              </span>

              <h3 className="font-headline-md text-headline-md text-primary mt-1">
                Recognition Along the Way
              </h3>

              <p className="text-on-surface-variant font-body-sm mt-1 max-w-lg">
                Years of dedication brought recognition from our guests,
                community, and industry — milestones that remind us why the
                pursuit of excellence is always worth it.
              </p>
            </div>
          </motion.div>


          {/* STEP 5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
            </div>

            <div>
              <span className="font-label-sm text-label-sm tracking-widest text-secondary">
                TODAY
              </span>

              <h3 className="font-headline-md text-headline-md text-primary mt-1">
                And the Journey Continues
              </h3>

              <p className="text-on-surface-variant font-body-sm mt-1 max-w-lg">
                Today, we continue to evolve — discovering new flavors,
                welcoming new faces, and creating experiences that give every
                guest a reason to return.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>


    {/* RIGHT — IMAGE */}
    <div className='w-full md:w-[45%] h-[45vh] md:h-full flex flex-col gap-4'>
      <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full  h-[45vh] md:h-full relative overflow-hidden"
    >
      <img
        src="https://eu.chat-img.sintra.ai/2ab6bd40-0f53-4199-8653-c4f51461ef79/88876356-64b2-44e0-9a46-f7fc1e230c99/image.png"
        alt="Artfully plated fine dining dish"
        className="w-full h-full object-cover"
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Image caption */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white text-xs uppercase tracking-[0.25em]">
          A journey shaped by passion
        </p>
      </div>
    </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full  h-[45vh] md:h-full relative overflow-hidden"
    >
      <img
        src='https://images.openai.com/static-rsc-4/57qhKrdZUoQ_jAfu-sNVKGGnaXybfFktjnIKqgnP4D7dDCZAOey8Q0t1vlWRfOZLm2z_YRGezMuqgPRiUwleI44F-VOltLtKl2uqCqSl0UmxVHU9RMOa1aMqCK27VGICWe798YFMHyd-i4YaxjzGjTcvWbm96P7K1tsTDDxLScc?purpose=inline'
        alt="Artfully plated fine dining dish"
        className="w-full h-full object-cover"
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Image caption */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white text-xs uppercase tracking-[0.25em]">
          A journey shaped by passion
        </p>
      </div>
    </motion.div>
    </div>
    

  </div>
</section>

        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop text-center border-t border-outline-variant/20 max-w-3xl mx-auto">

        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
          Experience {appName}
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          Join us for an evening of exceptional culinary storytelling.
        </p>

        <a
          className="btn-primary font-label-sm text-label-sm uppercase px-8 py-4 tracking-widest inline-block"
          href="/book"
        >
          Book a Table
        </a>

      </section>

      {/* Gallery Header */}

      <section className="w-full pt-stack-lg pb-stack-md px-margin-mobile md:px-margin-desktop text-center max-w-container-max mx-auto">

        <h1 className="font-display-lg text-display-lg text-primary mb-6">
          The Gallery
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          A visual exploration of our culinary philosophy, intimate spaces, and the art of dining at {appName}.
        </p>

        <div className="w-16 h-px bg-[#C5A059] mx-auto mt-8"></div>

      </section>

        <section className="w-full pb-stack-md px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-outline-variant/20 mb-stack-md">

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-1">
            All
          </button>

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-outline-variant pb-1">
            Food
          </button>

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-outline-variant pb-1">
            Interior
          </button>

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-outline-variant pb-1">
            Chef &amp; Kitchen
          </button>

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-outline-variant pb-1">
            Events
          </button>

          <button className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-outline-variant pb-1">
            Drinks
          </button>

        </div>

      </section>

      
            <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
      
              <motion.div 
              variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} className="masonry-grid">
      
                {/* Gallery Item 1 */}
      
                <motion.div  variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Plated Dish"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A high-resolution, close-up shot of a beautifully plated gourmet dish. A perfectly seared scallop rests on a bed of vibrant green pea purée, garnished with delicate microgreens and a drizzle of golden infused oil. The lighting is moody and dramatic, highlighting the textures of the food against a dark, matte ceramic plate. The aesthetic is high-end, tactile minimalism."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnJnmVgoAYRccD6iuesyx3rxERLhtBPHk16UuV5I-xNUtLMOb9b4bfhjTHGdK5L78QzmVMuO8JI7noYdal-eBNueL1ihy10BGy5RAIqoDzcf5TYSqc0rMBw2iDJecFsc8etHEJiVWu8VcqASNMlJSyaWb3xJZHG2QK70ovZ2nYcaVIB4jcVNVNLovAlPvYd2ZtI8p-IY2cLfzVr1zJk0gHRw1vkj6-IhUKfAOt5y3kT2g9mlvoxaI_"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
      
                {/* Gallery Item 2 */}
      
                <motion.div  variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Restaurant Interior"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="An atmospheric wide shot of an elegant restaurant interior. The room features dark wood paneling, plush leather seating, and subtle ambient lighting from modern brass fixtures. A long marble bar sits in the background, fully stocked with premium spirits. The mood is intimate, exclusive, and sophisticated, perfectly capturing a modern editorial design style with a tactile edge."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoEP_J0GXDBKMYgrYYSGOFZqyaKvMFzyyKr6W3N3lUB08ixDvf8ab9egOIuz2P3iJhy09jlgmpZ2515ZBRKPb64kSEsP5MArcQTL4wOGICBuoImPTusF1aKU4sIGZ5xIeCVBDNr3cVY7-w4YEA0Qf9KApFW6cUd2nY0TCuFIJ_inUtDVqKQZE0KK3WMLVFU934HvIEFg_wkunh1Z7SjKfm_FDgZ-8tB8SbK94FuaXfmfYYz9z1FpOr"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
      
                {/* Gallery Item 3 */}
      
                <motion.div  variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Chef Plating"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A dynamic, action-oriented shot inside a professional kitchen. A chef in a crisp white uniform is meticulously plating a complex dessert using tweezers. The stainless steel surfaces gleam under focused, bright task lighting, contrasting with the slightly darker background of the busy kitchen. The image conveys precision, passion, and high culinary art."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOCA8mWeFtG5KqT_nKdt7m3Ho72iwes7R9aVmAY4KHAlNFQ0lLwsjomFYoVvKyxg6uEkB4Fnr8v6FdXbjhAxzASMcFcjRetT0-sL4cJ9t_R_9AaXJYc1tTfmBVWxhsfnP7M9LUHVV14fal_HZJwk2QeidFuDt55D0QTz_1PcD6tfdFVfim8ENInRy9_4nRBk5vj4fLbrviklP7al9rZm8y08ZzhhgXPdtwZCpDhCJzYISSLoAf-ZS"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
      
                {/* Gallery Item 4 */}
      
                <motion.div  variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Craft Cocktail"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A close-up of an expertly crafted cocktail resting on a dark marble counter. The drink is a deep amber color, served in a heavy crystal rocks glass over a single large, clear ice cube. A twist of orange peel sits elegantly on the rim. The lighting creates rich reflections in the glass and ice, emphasizing luxury and evening ambiance."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrBs5lH65L7jfUlxtN5Of6GMVa16iUJ7grr4boBDFw-KJJiTUbZIApYLTRz2EWinbq6JWFFnKn4vq4GRqN09txEWe0vPRkVVNKwTJeohidDMBBXQWfpGhrB-nHqxTHQRjTT5jWk8b3nliwGMAxvZvpTCGxVMjidr4BndpBvBVZiuix9to8vGe9EAZ8j9NT90zS5fnod6NfLeQsQVxIkNcPD2rToeO72HDa6PktXSP-tqzQ_0L6JXFc"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
      
                {/* Gallery Item 5 */}
      
                <motion.div variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Private Dining Setup"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A beautifully set table for a private dining event. Crisp white linen tablecloths, sparkling crystal wine glasses, and polished silver cutlery are arranged perfectly. In the center, a low, minimalist floral arrangement of white orchids and dark greenery adds a touch of organic texture. The setting is bright yet intimate, awaiting guests."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdCh95zBY7_sfraY748s4pttNNk0uCjPSnTFnkNz-46j5VZs9yvSYK1BXuZ2s3q8cjrdT_Q4EriCJhhOmzOUwxmN7cdxMWHty7b7z_HyrTVztF7LwyNWHvFIay39FhWiNNWoQ3hm-odpAJ9jHb1QaOpGCaWzj68i_AYBGhLKVxDQcB0z_qaTg-GcX9J06k89tehcW7lKoTHahQKr17ekKgNia3-YeLMmEdnwi9GOpd6_fTJxeZQ6H7"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
      
                {/* Gallery Item 6 */}
      
                <motion.div  variants={childVariants} className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">
      
                  <img
                    alt="Artisan Bread"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A top-down view of a rustic, artisan bread board. Thick slices of sourdough bread with dark, crusty edges are arranged alongside a small dish of whipped butter topped with flaky sea salt. The background is a dark, textured slate surface. The image is tactile, emphasizing simple ingredients presented with high-end care."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYAiV1WqenROPmq5oW3fachC1v_MA6fp9rMxVBiuh-0rxAoCxN5VJvfPeGAdpBquZv5YY4ei75EiQSOZUmoXheCGmk_IRiQKXlmQBnYVvFB_pe64eBHeayfoVc8IuBvD_184CubU1B2mpDXnBZDI6pq4PQs3_wON2iVa2YljPON58yqVX3RbJYoa1g8H6QDccGyI_3l_773PI131dPuiTNTKNmycsSXZzJ3giYSLBoQ8Rmk85J4V9"
                  />
      
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      
                    <span
                      className="material-symbols-outlined text-white text-3xl"
                      data-icon="zoom_in"
                    >
                      zoom_in
                    </span>
      
                  </div>
      
                </motion.div>
      
              </motion.div>
      
      
              <div className="mt-12 flex justify-center">
      
                <button className="bg-transparent text-primary font-label-sm text-label-sm uppercase tracking-widest px-8 py-3 border border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  Load More
                </button>
      
              </div>
      
            </section>

     

       <section className="py-stack-lg bg-surface border-t border-outline-variant/30">

        <div className="max-w-3xl mx-auto px-margin-mobile text-center">

          <h3 className="font-headline-md text-headline-md text-primary mb-4">
            Subscribe to The Journal
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Receive our latest stories and exclusive offers directly to your inbox.
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center items-center">

            <input
              className="bg-transparent border-0 border-b border-primary text-primary font-body-md px-0 py-2 w-full max-w-sm focus:ring-0 focus:border-secondary placeholder:text-on-surface-variant transition-colors"
              placeholder="Your email address"
              type="email"
            />

            <button
              className="bg-[#1A1A1A] text-[#FCFAFA] font-label-sm text-label-sm px-8 py-3 rounded-none hover:bg-[#C5A059] transition-colors whitespace-nowrap"
              type="button"
            >
              Subscribe
            </button>

          </form>

        </div>

      </section>

        <ContactButton/>
        <Footer/>
    </div>
  )
}

export default About
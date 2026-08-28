import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactButton from '../components/ContactButton'

const Home = () => {
  return (
    <div>
      <Header />

      {/* 1. Hero Section */}

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

          <h1 className="font-display-lg text-display-lg text-[#FCFAFA] font-bold tracking-tight">
            Exceptional Food.
            <br />
            Memorable Moments.
          </h1>

          <p className="font-body-lg text-body-lg text-[#FCFAFA]/80 max-w-2xl">
            Discover thoughtfully crafted dishes, warm hospitality and an atmosphere designed for unforgettable dining.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">

            <button className="btn-primary">
              Book a Table
            </button>

            <button className="btn-secondary !text-[#FCFAFA] !border-[#FCFAFA] hover:!bg-[#FCFAFA] hover:!text-[#1A1A1A]">
              Explore Our Menu
            </button>

          </div>

          <div className="mt-8 font-label-sm text-label-sm text-[#FCFAFA]/60 tracking-[0.2em] uppercase">
            Open Daily • 10:00 AM – 11:00 PM
          </div>

        </div>

      </section>


      {/* 2. Restaurant Highlights */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto border-b border-outline-variant/20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">

          <div className="flex flex-col items-center text-center p-8 hover-lift">

            <span
              className="material-symbols-outlined text-4xl mb-4 text-[#C5A059]"
              data-icon="nutrition"
            >
              nutrition
            </span>

            <h3
              className="font-headline-md text-headline-md text-primary mb-2"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Fresh Ingredients
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Sourced locally and prepared daily for maximum flavor.
            </p>

          </div>


          <div className="flex flex-col items-center text-center p-8 hover-lift">

            <span
              className="material-symbols-outlined text-4xl mb-4 text-[#C5A059]"
              data-icon="restaurant_menu"
            >
              restaurant_menu
            </span>

            <h3
              className="font-headline-md text-headline-md text-primary mb-2"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Crafted With Passion
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Every dish is an expression of our culinary dedication.
            </p>

          </div>


          <div className="flex flex-col items-center text-center p-8 hover-lift">

            <span
              className="material-symbols-outlined text-4xl mb-4 text-[#C5A059]"
              data-icon="favorite"
            >
              favorite
            </span>

            <h3
              className="font-headline-md text-headline-md text-primary mb-2"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Warm Hospitality
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Service that makes you feel right at home.
            </p>

          </div>


          <div className="flex flex-col items-center text-center p-8 hover-lift">

            <span
              className="material-symbols-outlined text-4xl mb-4 text-[#C5A059]"
              data-icon="wine_bar"
            >
              wine_bar
            </span>

            <h3
              className="font-headline-md text-headline-md text-primary mb-2"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Memorable Ambience
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant">
              An atmosphere designed for intimate and joyous gatherings.
            </p>

          </div>

        </div>

      </section>

      {/* 1. Our Story Hero */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <div className="text-center max-w-3xl mx-auto space-y-6">

          <h1 className="font-display-lg text-display-lg text-primary">
            Our Story
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A legacy of fire, flavor, and meticulous craftsmanship. Discover the roots of Ember &amp; Plate.
          </p>

        </div>

        <div className="mt-stack-md w-full h-[60vh] overflow-hidden image-zoom relative">

          <div
            className="w-full h-full bg-cover bg-center absolute inset-0"
            data-alt="A sweeping, cinematic wide shot of a high-end restaurant interior at twilight. The space features warm, ambient lighting from modern chandeliers and table candles, creating an intimate, exclusive atmosphere. Dark wood tones, charcoal walls, and subtle gold accents dominate the sophisticated palette. The aesthetic is luxurious, minimal, and welcoming."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbOcHgev_5MuETD9MtFKmq6lC5kr04zMrL7G0zOb1CBwkIQSFjmEzdnqL3Tx11zJu9u6LD16xV3ZIqiYtoB5auPf14PjP14YeoBjNCUTQqyn99GpgRspJeegeUp3fnrJloFzeQ8XS3IOtBK3HVbUH4ZVWPTKWOi405kMYIiHr6hJxrIniF7qD_WwPGuERa0OJvcRoFdfMLMVYN7jynqyhNcx5P-lA44RgAtjm_W83psuYlIWafhL')",
            }}
          ></div>

        </div>

      </section>


      {/* 2. Storytelling: History & Philosophy */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">

        <div className="order-2 md:order-1 h-[500px] overflow-hidden image-zoom relative border border-outline-variant/30">

          <img
            alt="Philosophy Plating"
            className="w-full h-full object-cover absolute inset-0"
            data-alt="A close-up, highly detailed shot of a chef's hands carefully arranging microgreens on a beautifully plated dish. The lighting is focused and dramatic, highlighting the textures of the food and the intense concentration of the chef. The surrounding environment is dark, emphasizing the bright, fresh colors of the ingredients. The mood is precise, artisanal, and culinary focused."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUONCOy1AJ7awR1ssdEwpS09XEsW5jth-ySUt1AnrET-wNvk_G_xudd1iCFKNXxQFW0mH_-RbIrHX2zUSZdliqU2cq3OxGNGcjG2aEoBYyNKHtIfLv9woA-wLmloJguGDhW79A3Tyg-BdXk1_j1XEOHLnPkftvdJWCzH7HxjPZ6saHh6y9xYqgl6H0Kdd_KCmWu0-eloUjfrKRetGotjbggu-kUGm90KV_y5F5JVpO-3i5aPLoTmDj"
          />

        </div>

        <div className="order-1 md:order-2 space-y-8 md:pl-margin-desktop">

          <h2 className="font-headline-lg text-headline-lg text-primary">
            A Philosophy of Fire
          </h2>

          <div className="space-y-4 text-on-surface-variant font-body-md text-body-md">

            <p>
              Born from a deep respect for the elemental forces of cooking, Ember &amp; Plate was founded on the belief that fire transforms not just food, but the entire dining experience. Our journey began in the rugged landscapes where open-flame cooking is a necessity, refined over decades into an art form.
            </p>

            <p>
              We source only the most exceptional, ethically raised ingredients, allowing their natural qualities to dictate our menu. Our commitment to quality is unwavering—every dish is a testament to our dedication to flavor, technique, and genuine hospitality.
            </p>

          </div>

          <a
            className="inline-block text-link font-label-sm text-label-sm uppercase text-primary tracking-widest mt-4"
            href="/menu"
          >
            Discover Our Menu
          </a>

        </div>

      </section>


      {/* 3. Meet the Chef */}

      <section className="bg-primary-container text-on-primary py-stack-lg px-margin-mobile md:px-margin-desktop">

        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">

          <div className="space-y-6 md:pr-margin-desktop">

            <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">
              Head Chef
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-primary">
              Marcus Vance
            </h2>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              With over two decades of experience spanning the globe's culinary capitals, Chef Vance brings a relentless pursuit of perfection to Ember &amp; Plate. His signature approach marries classical French technique with the raw, untamed nature of live-fire cooking, resulting in bold, uncompromising flavors.
            </p>

          </div>

          <div className="h-[600px] overflow-hidden image-zoom relative border border-secondary/30">

            <img
              alt="Chef Marcus Vance"
              className="w-full h-full object-cover absolute inset-0 grayscale"
              data-alt="A professional, dramatic portrait of a male head chef in a crisp white chef's coat, standing confidently in a dimly lit, high-end kitchen. The lighting is moody, casting strong shadows that highlight his experienced, focused expression. Subtle reflections of fire or warm kitchen lights are visible in the background. The aesthetic is powerful, authentic, and culinary-focused."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIWHJpFK4fsvg9ZW5OaJFLdZa62_b347ZzOMd2SbU0Piq_0tqBwCmshB6GGu2hIH8Gdy0gW4W2GXFdXVpgCxKoDp9guB2o5iZxgtd71T2iKxmHFRgZ15RlHRg0IbCJXC5f8aLHXISr8s1xCPA_t34sLgYhiymJFOLTBS-rHQo4rGaF4vEwEZriJkANlPWaawE64myou5x75ygUzf47sGoBfuEZLuNibAvxdU1Ee4MoB0IIuX0IQUKf"
            />

          </div>

        </div>

      </section>


      {/* 4. Ingredients Showcase */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-stack-md">

          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Sourced with Intention
          </h2>

          <p className="text-on-surface-variant">
            We partner with local purveyors who share our uncompromising standards for quality and sustainability.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

          {/* Bento Item 1 */}

          <div className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">

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

          </div>


          {/* Bento Item 2 */}

          <div className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">

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

          </div>


          {/* Bento Item 3 */}

          <div className="hover-lift bg-surface-container-low p-8 border border-outline-variant/20 flex flex-col items-center text-center space-y-4">

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

          </div>

        </div>

      </section>


      {/* 8. Closing CTA */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop text-center border-t border-outline-variant/20 max-w-3xl mx-auto">

        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
          Experience EMBER &amp; PLATE
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
          A visual exploration of our culinary philosophy, intimate spaces, and the art of dining at Ember &amp; Plate.
        </p>

        <div className="w-16 h-px bg-[#C5A059] mx-auto mt-8"></div>

      </section>


      {/* Filter Section */}

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


      {/* Masonry Gallery Grid */}

      <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">

        <div className="masonry-grid">

          {/* Gallery Item 1 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>


          {/* Gallery Item 2 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>


          {/* Gallery Item 3 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>


          {/* Gallery Item 4 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>


          {/* Gallery Item 5 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>


          {/* Gallery Item 6 */}

          <div className="masonry-item relative group cursor-pointer bg-surface overflow-hidden">

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

          </div>

        </div>


        <div className="mt-12 flex justify-center">

          <button className="bg-transparent text-primary font-label-sm text-label-sm uppercase tracking-widest px-8 py-3 border border-primary hover:bg-primary hover:text-white transition-colors duration-300">
            Load More
          </button>

        </div>

      </section>

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant/30">

        <h1 className="font-display-lg text-display-lg text-primary mb-6">
          The Journal
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Stories from the kitchen, insights from our purveyors, and musings on the art of dining.
        </p>

      </section>

      {/* Article Grid */}

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

          {/* Article Card 1 */}

          <article className="group cursor-pointer card-lift bg-[#FCFAFA] p-6 lg:p-10 flex flex-col h-full border border-outline-variant/30">

            <div className="relative overflow-hidden mb-6 h-64 w-full bg-surface-container">

              <img
              alt="Signature Dish"
                className="object-cover w-full h-full zoom-img"
                data-alt="A close-up, high-end culinary photograph of a beautifully plated signature dish. The dish features seared scallops with an intricate drizzle of vibrant green herb oil, resting on a stark white ceramic plate. The lighting is moody and directional, typical of a high-end restaurant menu, emphasizing the textures of the food. The overall aesthetic is minimalist, elegant, and sophisticated."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5VyVNLgdBoxdraePLBhEief_bn46Gwv6Cu5BeDHvauRBObkjQ5gUb66JcpGxgm4mcI5hlsL2c-TLIeheDDWzIZe2Pcgpyk_hjXWy8tpmOUIoMHKegwzpgskyqI_jsgzxvQC-uyybLNBadlGuibi7tMcvlz8fOCgyP1xl-Znmpa53AY7Jabh-OdT82mZ8QWbS7wZTvo7daYz4otZYeVuB-z0a9NghI9zx8DkBLymQwyS5b_pmDWSQw"
              />

            </div>

            <div className="flex-grow flex flex-col">

              <div className="flex items-center space-x-4 mb-4">

                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Culinary Arts
                </span>

                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  OCT 12, 2024
                </span>

              </div>

              <h2 className="font-headline-md text-headline-md text-primary mb-4 group-hover:text-secondary transition-colors">
                Behind Our Signature Dishes
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                Discover the inspiration and meticulous technique behind the dishes that have defined Ember &amp; Plate&apos;s renowned tasting menu.
              </p>

              <a
                className="font-label-sm text-label-sm text-primary uppercase text-link self-start pb-1"
                href="/"
              >
                Read Article
              </a>

            </div>

          </article>

          {/* Article Card 2 */}

          <article className="group cursor-pointer card-lift bg-[#1A1A1A] p-6 lg:p-10 flex flex-col h-full">

            <div className="relative overflow-hidden mb-6 h-64 w-full bg-tertiary">

              <img
              alt="Head Chef Portrait"
                className="object-cover w-full h-full zoom-img opacity-90"
                data-alt="A striking, moody portrait of a head chef in a dimly lit, professional kitchen. The chef is wearing a pristine white uniform, their arms crossed, looking intensely at the camera. The background is softly blurred, showing glimpses of stainless steel equipment and warm, golden lighting from the heat lamps. The style is high-contrast, professional, and editorial."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaCLrrnLToPyHO9B7PxKA_Ko08rfTgBVBHkBxL31OMujRvqZpkIG3AiB91ZWBA6Lh6Fkg44ZixaQdwUodNFCpjwEYtbKCHRSP9xA4y2wTRzt5dmfI94glYmTG2Vm2Ef88J1ioUwp7Y5z-scc9IR8QE9NCtWQwRVkkuoqbYT-qYCl9vxOP5f_hi7Er14PQW6H-sACpJA92UlSXMyy8JMVevCWG3MvbAC_nhc9y0s14ru6Core68vZyH"
              />

            </div>

            <div className="flex-grow flex flex-col">

              <div className="flex items-center space-x-4 mb-4">

                <span className="font-label-sm text-label-sm text-[#C5A059] uppercase tracking-widest">
                  Interviews
                </span>

                <span className="font-label-sm text-label-sm text-outline-variant">
                  OCT 05, 2024
                </span>

              </div>

              <h2 className="font-headline-md text-headline-md text-[#FCFAFA] mb-4 group-hover:text-[#C5A059] transition-colors">
                Meet Our Head Chef
              </h2>

              <p className="font-body-md text-body-md text-outline-variant mb-6 flex-grow">
                An intimate conversation with the visionary leading our kitchen, discussing philosophy, flavor profiles, and the future of fine dining.
              </p>

              <a
                className="font-label-sm text-label-sm text-[#FCFAFA] uppercase border-b border-[#FCFAFA] hover:border-b-2 self-start pb-1 transition-all"
                href="/"
              >
                Read Article
              </a>

            </div>

          </article>

          {/* Article Card 3 */}

          <article className="group cursor-pointer card-lift bg-[#FCFAFA] p-6 lg:p-10 flex flex-col h-full border border-outline-variant/30">

            <div className="relative overflow-hidden mb-6 h-64 w-full bg-surface-container">

              <img
              alt="Seasonal Ingredients"
                className="object-cover w-full h-full zoom-img"
                data-alt="A beautiful, rustic still life composition of seasonal ingredients resting on a dark wooden table. The image features vibrant heirloom tomatoes, freshly foraged mushrooms, and sprigs of green herbs. The lighting is natural and soft, evoking a sense of organic purity and farm-to-table freshness. The composition is elegant and carefully arranged, fitting a high-end food magazine aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmTNxtGe2V0NrfqBzOCQAu8jFrMBMO4FGUuWFSjKgNYdt4E-zC-bMidLNborOD2C6ZAs25zt5hLHbrqHDT3bHlPmV6iPK20AHScUyKUXxvUnXLZwO7-GeE64xJYPhLSvRz6WZlvCUXlrvNl9TmHlKIevJla9R-FDCGtQJJSJ3kmGWyDJit9TayDxg1lRzZ4NHg9dpW3aJYTCravW_op377tycslFeMve5-6pJswur6A__XuDK_Eq5w"
              />

            </div>

            <div className="flex-grow flex flex-col">

              <div className="flex items-center space-x-4 mb-4">

                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Sourcing
                </span>

                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  SEP 28, 2024
                </span>

              </div>

              <h2 className="font-headline-md text-headline-md text-primary mb-4 group-hover:text-secondary transition-colors">
                Seasonal Ingredients We Love
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                A look at the local purveyors and the incredibly fresh, seasonal produce that drives our autumn menu creations.
              </p>

              <a
                className="font-label-sm text-label-sm text-primary uppercase text-link self-start pb-1"
                href="/"
              >
                Read Article
              </a>

            </div>

          </article>

        </div>

      </section>

      {/* Newsletter Sub (Bonus Component matching style) */}

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


      {/* Quick Actions Floating (Desktop: side, Mobile: bottom) */}
     <ContactButton/>



      <Footer />

    </div>
  )
}

export default Home
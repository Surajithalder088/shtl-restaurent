import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactButton from '../components/ContactButton'

const Menu = () => {
  return (
    <div>
      <Header />
      <header className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mt-16">

        <h1 className="font-display-lg text-display-lg mb-6 text-primary">
          Our Menu
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore dishes crafted with fresh ingredients and thoughtful flavours.
        </p>

      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-lg">

        {/* Category Filter */}

        <div className="flex flex-wrap justify-center gap-4 mb-stack-md">

          <button className="font-label-sm text-label-sm uppercase bg-primary text-on-primary px-6 py-2 rounded-full tactile-hover">
            All
          </button>

          <button className="font-label-sm text-label-sm uppercase bg-transparent text-primary border border-outline-variant px-6 py-2 rounded-full hover:border-primary tactile-hover transition-colors">
            Starters
          </button>

          <button className="font-label-sm text-label-sm uppercase bg-transparent text-primary border border-outline-variant px-6 py-2 rounded-full hover:border-primary tactile-hover transition-colors">
            Soups &amp; Salads
          </button>

          <button className="font-label-sm text-label-sm uppercase bg-transparent text-primary border border-outline-variant px-6 py-2 rounded-full hover:border-primary tactile-hover transition-colors">
            Main Course
          </button>

          <button className="font-label-sm text-label-sm uppercase bg-transparent text-primary border border-outline-variant px-6 py-2 rounded-full hover:border-primary tactile-hover transition-colors">
            Desserts
          </button>

        </div>


        {/* Menu Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg">

          {/* Food Card 1 */}

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest light-border organic-edge tactile-hover transition-all duration-300 group">

            <div className="w-full md:w-1/3 aspect-square overflow-hidden organic-edge relative">

              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                data-alt="A high-end, close-up photograph of a beautifully plated scallop dish on a dark, textured ceramic plate. The lighting is moody and directional, highlighting the golden-brown crust of the scallops against the creamy puree underneath. A drizzle of vibrant green herb oil adds a striking color contrast, establishing a sophisticated New Editorial culinary aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmYlh786oYHeSpSwIb3NTRmfTH4uQ8koBh4HW0E_MxhjOXC1S-quXHUbmchsGFMODrjDsSC5kXKt-xAKGDd3-9nAombYj70jRI_ALBNntqmD9vW8EjdYIRycU03h-OMIhPLCAbNPy55PcZgGk3j8WgHsA3GOedk5FFdIkPunQresdXwNacYuoueZn0LgJZ7fVypSGRCxxTtluDguV7WgFr_JRTlkOIz5RQZyEcxPDdzcdWIZYu_vk"
                alt="Seared Hokkaido Scallops"
              />

              <div className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider">
                Bestseller
              </div>

            </div>

            <div className="flex flex-col justify-center flex-1">

              <div className="flex justify-between items-start mb-2">

                <h3 className="font-headline-md text-headline-md text-primary">
                  Seared Hokkaido Scallops
                </h3>

                <span className="font-headline-md text-[24px] text-secondary">
                  ₹1,250
                </span>

              </div>

              <div className="flex items-center gap-2 mb-3">

                <div className="w-3 h-3 border border-red-700 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full"></div>
                </div>

                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Non-Veg
                </span>

              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Cauliflower textures, brown butter caper emulsion, crispy pancetta dust.
              </p>

            </div>

          </div>


          {/* Food Card 2 */}

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest light-border organic-edge tactile-hover transition-all duration-300 group">

            <div className="w-full md:w-1/3 aspect-square overflow-hidden organic-edge relative">

              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                data-alt="A top-down, minimalist shot of a vibrant burrata salad arranged asymmetrically on a large, pristine white plate. Plump red and yellow heirloom tomatoes contrast beautifully with the creamy white cheese. Fresh basil leaves and a glossy balsamic reduction complete the composition, reflecting a clean, high-contrast, modern culinary style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYmCaarTGinejDodX9-DEQpdEBbHgHilcvbWKo-ec3opQARFFHKQfkKjWMRY_80NeHHwSIxNxWKdSi6S_R5tVDV2hd0ohpPriVAY68GOIs0Zj5JKk6iyoE-9cugNGtwHB_E1mbNsJBEDPlI-g4GvGndafgDLX4rUV9IPCqRHHWYkivRqSQPJRBsxKrtep01F4xmUy95546LmiqHwjpKL5uzhNTn-jHQJs-pDtyfLqqKyJfeZuEoqQA"
                alt="Heirloom Tomato Burrata"
              />

            </div>

            <div className="flex flex-col justify-center flex-1">

              <div className="flex justify-between items-start mb-2">

                <h3 className="font-headline-md text-headline-md text-primary">
                  Heirloom Tomato Burrata
                </h3>

                <span className="font-headline-md text-[24px] text-secondary">
                  ₹850
                </span>

              </div>

              <div className="flex items-center gap-2 mb-3">

                <div className="w-3 h-3 border border-green-700 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                </div>

                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Veg
                </span>

              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Fresh local burrata, basil pesto, balsamic pearls, toasted pine nuts.
              </p>

            </div>

          </div>


          {/* Food Card 3 */}

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest light-border organic-edge tactile-hover transition-all duration-300 group">

            <div className="w-full md:w-1/3 aspect-square overflow-hidden organic-edge relative">

              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                data-alt="A rich, atmospheric image of a slow-braised lamb shank resting on a bed of creamy polenta in a rustic cast-iron pan. Warm, low-key lighting emphasizes the deep, glossy glaze on the meat and the steam rising gently, evoking a sense of hearty luxury and classical publishing aesthetics."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdYmiOFZl42j7G2BoZgHpvz7atopngrSYBuhDrOz_iqU17dBjPDbFzGuf5JDcpZA64X4UGpjDqWqvSVCJVK3r3AdFbMyl76wY5H61pcuyUmxtOYmtoSemjdsh_IDv7wfsAUFCvT5kkdrO-ONj_qGRxGpMlhHrzwwgM-D7WGx2ke-H3kFlVDL-w3Z1zIME229OKbnxkgOlFHaUg_jrBlYOcqgVCIhIyRuAJBBDjUykZ6I2LeXSqmQmX"
                alt="Braised Lamb Shank"
              />

            </div>

            <div className="flex flex-col justify-center flex-1">

              <div className="flex justify-between items-start mb-2">

                <h3 className="font-headline-md text-headline-md text-primary">
                  Braised Lamb Shank
                </h3>

                <span className="font-headline-md text-[24px] text-secondary">
                  ₹1,800
                </span>

              </div>

              <div className="flex items-center gap-2 mb-3">

                <div className="w-3 h-3 border border-red-700 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full"></div>
                </div>

                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Non-Veg
                </span>

              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Slow-cooked for 12 hours, truffled pomme puree, root vegetables, red wine jus.
              </p>

            </div>

          </div>


          {/* Food Card 4 */}

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest light-border organic-edge tactile-hover transition-all duration-300 group">

            <div className="w-full md:w-1/3 aspect-square overflow-hidden organic-edge relative">

              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                data-alt="An elegant, minimalist dessert presentation featuring a sleek dark chocolate dome adorned with a single delicate gold leaf, resting on a matte black slate. A swipe of vivid raspberry coulis adds a dash of color. The lighting is sharp and dramatic, embodying a high-end, tactile dining experience."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABr6V_h4NEtoMcUK0KVLVo-CTLPPm5OYxHQUdYOIkRLGoERAQE6r6XojY6FAHgIb8dbTN5tRO0CEVSizih6Y0prHBvMTP-v_4I2veb30RM9yriaX9VuLZLQoQQ-xW_DtEy_GnWfw1cDVxnuSow_QuJEy3DpoYR3CKq5hWxEhHdowcnO63EA6I1zqEJiGlKmH92JSCMx_H7ZVMVMMFrKCmuTVr_-qFQbGl-wZF8Yz2InAxFxjUXysW2"
                alt="Valrhona Chocolate Dome"
              />

              <div className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider">
                Signature
              </div>

            </div>

            <div className="flex flex-col justify-center flex-1">

              <div className="flex justify-between items-start mb-2">

                <h3 className="font-headline-md text-headline-md text-primary">
                  Valrhona Chocolate Dome
                </h3>

                <span className="font-headline-md text-[24px] text-secondary">
                  ₹950
                </span>

              </div>

              <div className="flex items-center gap-2 mb-3">

                <div className="w-3 h-3 border border-green-700 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                </div>

                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Veg
                </span>

              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                70% dark chocolate mousse, raspberry center, hazelnut praline base.
              </p>

            </div>

          </div>

        </div>


        {/* The "Signature" Component - Chef's Specials */}

        <div className="mb-stack-lg flex flex-col md:flex-row organic-edge overflow-hidden">

          <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative">

            <img
              className="object-cover w-full h-full"
              data-alt="A wide-angle, high-end editorial shot of a chef's hands carefully plating a delicate, abstract culinary creation using tweezers. The setting is a dimly lit, professional kitchen with stainless steel surfaces reflecting warm ambient light. The aesthetic is intimate, precise, and sophisticated."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsS5AZhsFafxjBSLD5-pwCehZC3g-Rq5CUu99xQv_qEHPDyzlAc_MbKBinvGmGsAEdsTxNdFxsvhM4qxBFx3JhL8mgS6h3Q2NIkZzo-wPARS-GAFxpRBB9gHk8lQ3q3sRQGTysoukKaUhNHMdUZf1batCz2y9z9ou_i6m5bSuRWRAUBdcaAMZyVUofQL7Oe62uQmkhWP_Flg7vVCdZpqV9K36Eet-fcf6hzvPZrlnyaArXp6BHkEWl"
              alt="Chef's Special"
            />

          </div>

          <div className="w-full md:w-1/2 bg-primary-container p-12 md:p-16 flex flex-col justify-center items-start">

            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4">
              Chef's Specials
            </span>

            <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg text-secondary mb-6 leading-tight">
              Curated
              <br />
              Experiences
            </h2>

            <p className="font-body-lg text-body-lg text-outline-variant mb-8 max-w-md">
              Discover seasonal masterpieces designed to provoke the palate. A symphony of textures and flavours, exclusive to Ember &amp; Plate.
            </p>

            <button className="font-label-sm text-label-sm uppercase bg-transparent text-secondary border border-secondary px-8 py-4 rounded-none hover:bg-secondary hover:text-on-secondary transition-colors duration-300">
              View Tasting Menu
            </button>

          </div>

        </div>


        {/* Conversion CTA */}

        <div className="text-center py-stack-md border-t border-b light-border mb-stack-lg">

          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Want to reserve a table?
          </h2>

          <button className="font-label-sm text-label-sm uppercase bg-primary text-on-primary px-8 py-4 rounded-none hover:bg-secondary transition-colors duration-300 tactile-hover inline-flex items-center gap-2">
            Book a Table
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>

        </div>


        {/* Offers Header */}

        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant/20">

          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            Special Offers &amp; Experiences
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Curated dining experiences designed to elevate your moments, from intimate weekday lunches to grand anniversary celebrations.
          </p>

        </section>


        {/* Offers Grid */}

        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">


            {/* Offer 1: Weekday Lunch Special */}

            <article className="bg-surface-container-lowest border border-outline-variant/30 hover-lift group rounded-DEFAULT overflow-hidden flex flex-col">

              <div className="img-zoom-container h-64 md:h-80 w-full relative">

                <img
                  className="img-zoom-target w-full h-full object-cover absolute inset-0"
                  data-alt="A beautifully plated lunch dish featuring seared scallops on a bed of vibrant green pea puree, elegantly presented on a rustic ceramic plate. The setting is bright and inviting, with soft natural daylight streaming through a nearby window, highlighting the fresh ingredients. The tabletop is light-toned wood, adorned with minimalist cutlery and a crisp white napkin. The overall aesthetic is clean, modern, and high-end culinary."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjk3sLnIQ6r_sea_vM4IYgezwTKUrVsaRfInX_q0vqE7jsoDWsVEN-N5eXn6Am4DaG9iBdGf3RmX28r6W2siB1CyH-OKe84JDS4UvAOukkEUDkfzG7moRmTBTV9WuzIP6bdHrfigc8GwAbR29N26BobMIZZO9GC-C5achDzkX9g4M3_Etf3K9s7V2nDCfLW5Oh9Axn1a35AL0xywRhGj9Oa2oG_mJfi-R4qhTaOPLMqQ41Xcqfxdfv"
                  alt="Weekday Lunch Special"
                />

                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest z-10">
                  Lunch
                </div>

              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">

                <div>

                  <h2 className="font-headline-md text-headline-md text-primary mb-4">
                    Weekday Lunch Special
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Enjoy a carefully curated two-course set menu designed for a swift yet luxurious midday escape. Perfect for business meetings or a relaxed afternoon treat.
                  </p>

                  <div className="flex items-start gap-3 mb-4">

                    <span className="material-symbols-outlined text-secondary">
                      calendar_today
                    </span>

                    <div className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mt-1">
                      Monday - Friday | 12:00 PM - 3:00 PM
                    </div>

                  </div>

                  <div className="flex items-start gap-3 mb-8">

                    <span className="material-symbols-outlined text-secondary">
                      info
                    </span>

                    <div className="text-sm text-on-surface-variant leading-relaxed">
                      Terms: Available for parties up to 6. Excludes public holidays.
                    </div>

                  </div>

                </div>

                <button className="w-full bg-transparent border border-primary text-primary font-label-sm text-label-sm px-6 py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  Reserve Now
                </button>

              </div>

            </article>


            {/* Offer 2: Family Dining Offer */}

            <article className="bg-surface-container-lowest border border-outline-variant/30 hover-lift group rounded-DEFAULT overflow-hidden flex flex-col">

              <div className="img-zoom-container h-64 md:h-80 w-full relative">

                <img
                  className="img-zoom-target w-full h-full object-cover absolute inset-0"
                  data-alt="A large, rustic wooden dining table abundantly laden with high-end, family-style sharing platters. A spectacular roasted centerpiece, vibrant seasonal vegetable sides, and freshly baked artisanal bread are arranged elegantly. The lighting is warm and ambient, creating a convivial, intimate atmosphere typical of a luxury dining establishment. Soft focus on the background where elegant glassware catches the subtle golden lighting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7GAEu1DUR56aDebd9aI8rt6ZhUxxEGiP6XkdraCO7RESnPJ7BKqndIkXJJJ6BovXxaFemtmZtnLqWegtQrUC4NBXj069wno4a3Dv7Of2fsHznSZYIfHaKBAcgngZqMrudrKoMibmx73M52o-267VKdIxjekDU7iym-vd1_CnCiAvcJeppzCgk9VfojxSJ4vEe9NxbBv-fJYRCmTPnX_-6dvGY2qV6F118rzFFUZ2CnMIZLvOLj0aQ"
                  alt="Family Dining Offer"
                />

                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest z-10">
                  Family
                </div>

              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">

                <div>

                  <h2 className="font-headline-md text-headline-md text-primary mb-4">
                    Family Dining Offer
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Gather your loved ones for a generous, sharing-style feast. Experience our signature dishes presented in large formats intended to be enjoyed together.
                  </p>

                  <div className="flex items-start gap-3 mb-4">

                    <span className="material-symbols-outlined text-secondary">
                      calendar_today
                    </span>

                    <div className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mt-1">
                      Sundays | All Day
                    </div>

                  </div>

                  <div className="flex items-start gap-3 mb-8">

                    <span className="material-symbols-outlined text-secondary">
                      info
                    </span>

                    <div className="text-sm text-on-surface-variant leading-relaxed">
                      Terms: Minimum 4 guests. Advanced booking required.
                    </div>

                  </div>

                </div>

                <button className="w-full bg-transparent border border-primary text-primary font-label-sm text-label-sm px-6 py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  Reserve Now
                </button>

              </div>

            </article>


            {/* Offer 3: Chef's Weekend Special */}

            <article className="bg-surface-container-lowest border border-outline-variant/30 hover-lift group rounded-DEFAULT overflow-hidden flex flex-col">

              <div className="img-zoom-container h-64 md:h-80 w-full relative">

                <img
                  className="img-zoom-target w-full h-full object-cover absolute inset-0"
                  data-alt="An exquisite, avant-garde dessert featuring a delicate dark chocolate dome resting on a dusting of gold powder and crimson berry coulis. The presentation is theatrical and moody, set against a dark slate background. A single beam of dramatic, high-contrast spotlighting illuminates the textures of the dish, emphasizing its premium, exclusive nature. The style is reminiscent of high-end editorial food photography."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRGE_1aBT7jTEy6eNjIX9fmqxyqzL8QRf2QbehQBuQ3LRs4YhWcEX3n5C2Xi6KJoDtksuRuk20YcuVaaivL23Qn_5azYMKbbRR_3acS3VKJHXSnyC3zOlR3gpOTW-AJLWR7zipSdH8ZITT82it6ccXDvE1qSsXX0062_0mpJhIT_qwyj4dmOrr5MIbz7mcr8028sNHy9TL8N6lZ1OLUdMuBn8v7c1wwKunhIOVqjqqwD24Bn3r4jM9"
                  alt="Chef's Weekend Special"
                />

                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest z-10">
                  Exclusive
                </div>

              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">

                <div>

                  <h2 className="font-headline-md text-headline-md text-primary mb-4">
                    Chef's Weekend Special
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    An exclusive, off-menu creation by our Executive Chef, changing weekly based on the finest seasonal ingredients available at the local markets.
                  </p>

                  <div className="flex items-start gap-3 mb-4">

                    <span className="material-symbols-outlined text-secondary">
                      calendar_today
                    </span>

                    <div className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mt-1">
                      Friday &amp; Saturday | Dinner Only
                    </div>

                  </div>

                  <div className="flex items-start gap-3 mb-8">

                    <span className="material-symbols-outlined text-secondary">
                      info
                    </span>

                    <div className="text-sm text-on-surface-variant leading-relaxed">
                      Terms: Limited availability. Ask your server for details.
                    </div>

                  </div>

                </div>

                <button className="w-full bg-transparent border border-primary text-primary font-label-sm text-label-sm px-6 py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  Reserve Now
                </button>

              </div>

            </article>


            {/* Offer 4: Anniversary Dining Package */}

            <article className="bg-surface-container-lowest border border-outline-variant/30 hover-lift group rounded-DEFAULT overflow-hidden flex flex-col">

              <div className="img-zoom-container h-64 md:h-80 w-full relative">

                <img
                  className="img-zoom-target w-full h-full object-cover absolute inset-0"
                  data-alt="An intimate table setting for two, featuring two elegant crystal flutes filled with effervescent champagne, catching the warm glow of candlelight. A subtle bouquet of deep red roses lies gently on the crisp white linen tablecloth. The background is softly blurred, showing the sophisticated, dimly lit interior of a luxury restaurant with warm amber accents. The scene evokes romance, exclusivity, and celebration."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQ0D2600taV4l0ag35bhraIRfRLdH2gohmoWLJLScbpbE2aKNdh-1zgIAznfipnFQd5aUc9CLpJguYMa-cnZIYWIr-tVGmdZcHciihCr62yV_N2wZKBug8lzl_6SPQQTOMzW37dsPAPPTvISYXMyDN-k8chu4aYI7VGG6RZPRLHpMu-oHNtUSNCgzdxYFXp1xuUkvULqbZmH9QZpLW-UuEz9yZ9ArsR9PaOcff-x_aER2vQRD2g3K"
                  alt="Anniversary Dining Package"
                />

                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest z-10">
                  Romance
                </div>

              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">

                <div>

                  <h2 className="font-headline-md text-headline-md text-primary mb-4">
                    Anniversary Dining Package
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Celebrate your milestone with a bespoke five-course tasting menu, complimentary champagne toast, and a secluded table for maximum intimacy.
                  </p>

                  <div className="flex items-start gap-3 mb-4">

                    <span className="material-symbols-outlined text-secondary">
                      calendar_today
                    </span>

                    <div className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mt-1">
                      Available Daily
                    </div>

                  </div>

                  <div className="flex items-start gap-3 mb-8">

                    <span className="material-symbols-outlined text-secondary">
                      info
                    </span>

                    <div className="text-sm text-on-surface-variant leading-relaxed">
                      Terms: 48 hours notice required. Dietary requirements accommodated upon request.
                    </div>

                  </div>

                </div>

                <button className="w-full bg-primary text-on-primary font-label-sm text-label-sm px-6 py-4 uppercase tracking-widest hover:bg-secondary transition-colors duration-300">
                  Call to Enquire
                </button>

              </div>

            </article>

          </div>

        </section>




        {/* Quick Actions Floating (Desktop: side, Mobile: bottom) */}

            <ContactButton/>



      </main>

      <Footer />
    </div>
  )
}

export default Menu
import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer className="w-full pt-stack-lg pb-margin-desktop bg-primary-container dark:bg-surface-container-lowest border-t border-outline-variant/20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          <div className="col-span-1 md:col-span-1">

            <div className="font-headline-md text-headline-md text-on-primary dark:text-primary mb-6">
              EMBER &amp; PLATE
            </div>

            <p className="font-body-md text-body-md text-on-primary-container dark:text-on-surface-variant mb-4">
              © 2024 EMBER &amp; PLATE. All rights reserved.
            </p>

          </div>


          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">

            <div className="flex flex-col gap-4">

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/menu"
              >
                Menu
              </a>

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/book"
              >
                Reservations
              </a>

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/book"
              >
                Private Dining
              </a>

            </div>


            <div className="flex flex-col gap-4">

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/"
              >
                Careers
              </a>

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/"
              >
                Privacy Policy
              </a>

              <a
                className="font-label-sm text-label-sm text-on-primary-container dark:text-on-surface-variant hover:text-secondary transition-colors hover:border-b border-secondary hover:opacity-80 transition-opacity"
                href="/"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </footer>


    </div>
  )
}

export default Footer
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactButton from '../components/ContactButton'

const BookTable = () => {
    return (
        <div>
            <Header />

            <section className="hero-bg py-[80px] pb-24 px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
                <div className="max-w-container-max mx-auto relative z-10">
                    <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
                        Reserve Your Table
                    </h1>

                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Tell us when you'd like to dine with us and our team will confirm your
                        reservation. We look forward to hosting you for an unforgettable evening.
                    </p>
                </div>

                {/* Abstract background shape */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-surface opacity-50 blur-3xl transform translate-x-1/4 -translate-y-1/4 rounded-full pointer-events-none"></div>
            </section>

            {/* Form Section */}
            <section className="px-margin-mobile md:px-margin-desktop -mt-16 relative z-20 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="form-card hover-elevate">

                        {/* Form Container (Default State) */}
                        <div id="reservation-form-container">
                            <form
                                className="space-y-8"
                                id="reservation-form"

                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8">

                                    {/* Personal Details */}

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Full Name
                                        </label>

                                        <input
                                            className="input-minimal w-full"
                                            placeholder="e.g. Eleanor Vance"
                                            required
                                            type="text"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Email Address
                                        </label>

                                        <input
                                            className="input-minimal w-full"
                                            placeholder="eleanor@example.com"
                                            required
                                            type="email"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Phone Number
                                        </label>

                                        <input
                                            className="input-minimal w-full"
                                            placeholder="+1 (555) 000-0000"
                                            required
                                            type="tel"
                                        />
                                    </div>

                                    {/* Reservation Details */}

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Number of Guests
                                        </label>

                                        <select
                                            className="input-minimal w-full bg-transparent appearance-none"
                                            required
                                            defaultValue=""
                                        >
                                            <option disabled value="">
                                                Select party size
                                            </option>

                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                            <option value="6+">6+ Guests (Contact Us)</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Date
                                        </label>

                                        <input
                                            className="input-minimal w-full"
                                            required
                                            type="date"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Time
                                        </label>

                                        <input
                                            className="input-minimal w-full"
                                            required
                                            type="time"
                                        />
                                    </div>

                                    {/* Occasion & Requests */}

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Occasion (Optional)
                                        </label>

                                        <select
                                            className="input-minimal w-full bg-transparent appearance-none"
                                            defaultValue=""
                                        >
                                            <option disabled value="">
                                                Select an occasion
                                            </option>

                                            <option value="birthday">Birthday</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="business">Business Meeting</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="font-label-sm text-label-sm text-on-surface block uppercase tracking-widest">
                                            Special Requests (Optional)
                                        </label>

                                        <textarea
                                            className="input-minimal w-full resize-none h-24"
                                            placeholder="Dietary requirements, preferred seating, etc."
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-outline-variant/30 flex justify-end">
                                    <button
                                        className="btn-primary w-full md:w-auto"
                                        type="submit"
                                    >
                                        Request Reservation
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Confirmation State (Hidden by default) */}

                        <div
                            className="hidden flex flex-col items-center justify-center text-center py-16"
                            id="confirmation-state"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                                <span
                                    className="material-symbols-outlined text-on-secondary-container"
                                    style={{
                                        fontSize: "32px",
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    check_circle
                                </span>
                            </div>

                            <h2 className="font-headline-md text-headline-md text-primary mb-4">
                                Request Received
                            </h2>

                            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
                                We've received your request. Our team will contact you shortly via
                                email or phone to confirm your table.
                            </p>

                            <button
                                className="btn-secondary"

                                type="button"
                            >
                                Make Another Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>

                 <ContactButton/>

            <Footer />
        </div>
    )
}

export default BookTable
export default function Services() {
    return (
        <main>
            {/* ANOTHER SERVICES */}
            <section>
                <div className="px-8 lg:px-0 lg:max-w-screen-xl mx-auto h-screen">
                    <div className="flex flex-col gap-y-4">
                    <h2 className="h2">Our Professional Cleaning Services</h2>
                    <p className="p">Complete solutions for a clean, healthy, and impeccable environment.</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="grid lg:grid-cols-3 px-8 lg:px-0 gap-y-6 lg:gap-y-0">
                            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm ">
                                <h3 className="h4">Residential Cleaning Tailored to Your Home</h3>
                                <p className="p">Transform your living space with our thorough residential cleaning services.</p>
                            </div>
                            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm">
                                <h3 className="h4">Professional Office Cleaning for a Productive Workplace</h3>
                                <p className="p">Keep your office pristine and welcoming with our expert cleaning solutions.</p>
                            </div>
                            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm">
                                <h3 className="h4">Why Choose Our Cleaning Services?</h3>
                                <p className="p">We prioritize quality, reliability, and customer satisfaction in every job.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        </main>
    )
}
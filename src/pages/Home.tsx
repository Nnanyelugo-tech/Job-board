import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO / LANDING SECTION */}
      <section className="relative w-full overflow-hidden bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-emerald-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
            {/* Company Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base font-medium text-white">
                HireCore Company Limited
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Building the Future of Medical & Industrial Gas Production
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-10 max-w-xl sm:max-w-3xl mx-auto">
              HireCore Company Limited is a medical and industrial gas production company located in Emene, Enugu State. Recently reengineered and rehabilitated by the Enugu State Government, we are expanding our workforce and welcoming qualified professionals.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/jobs"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30"
              >
                View Open Positions
              </Link>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                How Hiring Works
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10 sm:mt-16 max-w-2xl mx-auto">
              <div className="p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Enugu</p>
                <p className="text-sm sm:text-base text-white/70">Location</p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">7+</p>
                <p className="text-sm sm:text-base text-white/70">Departments</p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Growing</p>
                <p className="text-sm sm:text-base text-white/70">Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl sm:max-w-5xl mx-auto text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-slate-900">
              Our Hiring Process
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We follow a transparent and merit-based recruitment process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-200 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl sm:text-2xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">Explore Opportunities</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Browse available roles based on your skills, experience, and department of interest.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-200 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl sm:text-2xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">Submit Application</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Apply online by submitting your CV and application letter through our official recruitment channel.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-200 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl sm:text-2xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">Review & Selection</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Shortlisted candidates will be contacted for assessment and further evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl sm:max-w-3xl md:max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center border border-gray-100">
            <div className="inline-block p-3 sm:p-4 rounded-full bg-emerald-100 mb-4 sm:mb-6">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
               
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
              Ready to Take the Next Step?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto">
              Join a growing organization committed to excellence, safety, and sustainable industrial development.
            </p>

            <Link
              to="/jobs"
              className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-600/30"
            >
              Apply for a Position
            </Link>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-1 sm:mb-2">Application Deadline</p>
              <p className="text-base sm:text-lg font-semibold text-slate-900">
                May 12, 2025 at 12:00 midnight
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

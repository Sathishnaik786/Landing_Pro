import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight, LayoutGrid, Rocket, Sparkles, Zap, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Create Stunning Landing Pages
            <span className="text-blue-600"> in Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build beautiful, high-converting landing pages without writing a single line of code. 
            Perfect for startups, marketers, and businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/dashboard">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-4 font-semibold text-lg shadow-lg transition duration-150 hover:scale-105 flex items-center gap-2">
                Get Started Free
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/templates">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 rounded-xl px-8 py-4 font-semibold text-lg shadow-lg transition duration-150 hover:scale-105 flex items-center gap-2">
                <LayoutGrid size={20} />
                Template Gallery
              </button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            No credit card required • 14-day free trial
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose LandingPagePro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, launch, and optimize your landing pages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <Rocket className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Create and launch landing pages in minutes, not days</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
              <p className="text-gray-600">Choose from 50+ professionally designed templates</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50">
              <Clock className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">No coding required, focus on your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">Perfect for small businesses and startups</p>
                <Link to="/dashboard">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold transition duration-150 hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 Landing Pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email Support</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-4">$79<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                <Link to="/dashboard">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold transition duration-150 hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited Landing Pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Domain</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-4">$199<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <Link to="/dashboard">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold transition duration-150 hover:scale-105">
                    Contact Sales
                  </button>
                </Link>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SLA Guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using LandingPagePro to create stunning landing pages
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-600 rounded-xl px-8 py-4 font-semibold text-lg shadow-lg transition duration-150 hover:scale-105">
                Start Free Trial
              </button>
            </Link>
            <Link to="/templates">
              <button className="w-full sm:w-auto bg-transparent hover:bg-blue-700 text-white border-2 border-white rounded-xl px-8 py-4 font-semibold text-lg transition duration-150 hover:scale-105">
                View Templates
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} LandingPagePro. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

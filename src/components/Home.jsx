import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaTruck, FaClock, FaShieldAlt, FaMoneyBillWave, FaStar, FaArrowRight } from 'react-icons/fa';
import Footer from './Footer.jsx';

const Home = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      // Use absolute URL for debugging
      const url = 'https://quickdeliverlite-backend-1.onrender.com/api/feedback/recent-feedbacks';
      console.log('Fetching from:', url);
      
      const response = await fetch(url);
      
      // Check what type of response we got
      const contentType = response.headers.get('content-type');
      console.log('Content-Type:', contentType);
      
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text.substring(0, 100));
        throw new Error('Received HTML instead of JSON');
      }
      
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Full error:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchTestimonials();
}, []);

 
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-12 bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fast, Reliable Delivery <span className="text-yellow-300">Right to Your Doorstep</span></h1>
            <p className="text-xl mb-8 text-blue-100">QuickDeliver Lite connects you with trusted delivery partners for all your shipping needs. Fast, secure, and affordable.</p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-blue-100 transition duration-300">
                Get Started
              </button>
              <Link 
                to="/signup"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-yellow-300 transition duration-300"
              >
                Sign Up <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 transform rotate-3">
              <div className="bg-white rounded-xl shadow-2xl p-6 transform -rotate-3">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-800">Package Delivery</h3>
                      <p className="text-gray-600 text-sm">From Office to Home</p>
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                    In Transit
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">From</p>
                    <p className="font-bold text-gray-800">Business Center, Floor 12</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">To</p>
                    <p className="font-bold text-gray-800">Home Address, Apt 5B</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-3/4"></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-600">Picked Up</span>
                    <span className="text-sm text-gray-600">On the Way</span>
                    <span className="text-sm text-gray-600">Delivered</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Estimated Delivery</p>
                    <p className="font-bold text-gray-800">25 min</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                    <div className="ml-3">
                      <p className="font-bold text-gray-800">David M.</p>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="text-gray-600 ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with ID */}
      <section id="features" className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose QuickDeliver Lite?</h2>
          <p className="text-gray-600 text-lg">We make delivery simple, fast, and reliable for everyone</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Average delivery time under 45 minutes in urban areas</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Handling</h3>
            <p className="text-gray-600">All packages handled with care and tracked in real-time</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaMoneyBillWave className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Pricing</h3>
            <p className="text-gray-600">Transparent pricing with no hidden fees</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
            <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaTruck className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Service</h3>
            <p className="text-gray-600">Delivery available anytime, day or night</p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section with ID */}
      <section id="how-it-works" className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How QuickDeliver Lite Works</h2>
          <p className="text-gray-600 text-lg">Simple steps to get your items delivered fast</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => setActiveTab('customer')}
              className={`px-8 py-3 rounded-t-lg font-medium ${activeTab === 'customer' ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-700'}`}
            >
              For Customers
            </button>
            <button 
              onClick={() => setActiveTab('driver')}
              className={`px-8 py-3 rounded-t-lg font-medium ${activeTab === 'driver' ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-700'}`}
            >
              For Drivers
            </button>
          </div>
          
          {activeTab === 'customer' ? (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Request a Delivery</h3>
                  <p className="text-gray-600">Enter pickup and drop-off locations in our app or website</p>
                </div>
                
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Get Matched</h3>
                  <p className="text-gray-600">Our system matches you with the nearest available driver</p>
                </div>
                
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Track & Receive</h3>
                  <p className="text-gray-600">Track your delivery in real-time and receive your items</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Sign Up</h3>
                  <p className="text-gray-600">Complete a simple application and background check</p>
                </div>
                
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Get Requests</h3>
                  <p className="text-gray-600">Receive delivery requests in your area through our app</p>
                </div>
                
                <div className="text-center p-6 hover:bg-blue-50 rounded-lg transition duration-300">
                  <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Deliver & Earn</h3>
                  <p className="text-gray-600">Pick up and deliver items while earning competitive rates</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials Section with ID */}
      <section id="testimonials" className="py-16 px-4 md:px-12 bg-gradient-to-r from-blue-400 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-blue-100 text-lg">Real experiences from people who use QuickDeliver Lite</p>
        </div>
        
        {loading ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 animate-pulse"
                style={{
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
              >
                <div className="h-6 bg-gray-300 rounded mb-4 w-4/5 mx-auto"></div>
                <div className="h-24 bg-gray-300 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-xl w-12 h-12"></div>
                  <div className="ml-4">
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mb-6 text-black italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-black font-bold">{testimonial.customerName}</p>
                    <p className="text-blue-500 capitalize">{testimonial.customerRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto text-center py-8">
            <p className="text-xl">No testimonials available yet. Be the first to review!</p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' })
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    // Web3Forms API (100% Free - Get your access key from https://web3forms.com)
    const accessKey = '9adecab8-7944-419d-9392-2ad7795a93c8' // Replace with your free access key

    const formData = {
      access_key: accessKey,
      name: form.name,
      email: form.email,
      phone: form.phone,
      role: form.role,
      message: form.message,
      subject: `New Contact Form Submission from ${form.name}`,
      from_name: 'YOU&GLOBE Website',
      to_email: 'shivangi@youandglobe.com'
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! We received your message and will contact you within 24 hours.' })
        setForm({ name: '', email: '', phone: '', role: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again or email us directly.' })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#008092] to-[#00356e] text-white pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help you start your international healthcare career
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#00356e] mb-3">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and our team will contact you within 24 hours.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={onChange} 
                  required 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#008092] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  name="email" 
                  type="email"
                  value={form.email} 
                  onChange={onChange} 
                  required 
                  placeholder="your.email@example.com" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#008092] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  name="phone" 
                  type="tel"
                  value={form.phone} 
                  onChange={onChange} 
                  required 
                  placeholder="+91 9876543210" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#008092] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  I am a... <span className="text-red-500">*</span>
                </label>
                <select 
                  name="role" 
                  value={form.role} 
                  onChange={onChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#008092] focus:outline-none transition-colors"
                >
                  <option value="">Select your role</option>
                  <option value="nurse">Nurse / Healthcare Professional</option>
                  <option value="hospital">Hospital / Healthcare Institution</option>
                  <option value="partner">Potential Partner</option>
                  <option value="student">Nursing Student</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={onChange} 
                  required
                  rows={5} 
                  placeholder="Tell us about your inquiry, preferred destination country, qualifications, etc..." 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#008092] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-8 py-4 bg-[#008092] text-white rounded-lg font-semibold hover:bg-[#00356e] transition-colors transform hover:scale-[1.02] duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                <button 
                  type="button" 
                  onClick={() => setForm({ name: '', email: '', phone: '', role: '', message: '' })} 
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#008092] hover:text-[#008092] transition-colors"
                >
                  Reset Form
                </button>
              </div>

              {status && (
                <div className={`${
                  status.type === 'success' 
                    ? 'bg-[#9eed00]/20 border-[#9eed00] text-[#00356e]' 
                    : 'bg-red-50 border-red-400 text-red-700'
                } border-2 px-6 py-4 rounded-lg font-medium`}>
                  {status.type === 'success' ? '✓' : '✗'} {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#008092] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-[#00356e] mb-2">Head Office</h3>
              <p className="text-gray-600 text-sm">Bangalore, India</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#008092] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-[#00356e] mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+919187312091" className="hover:text-[#008092]">+91 9187312091</a>
                <br/>Mon-Fri, 9AM-6PM IST
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#008092] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-[#00356e] mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:shivangi@youandglobe.com" className="hover:text-[#008092]">shivangi@youandglobe.com</a>
                <br/>Quick response guaranteed
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-[#008092] to-[#00356e] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Visit Our Website</h3>
            <a 
              href="https://www.youandglobe.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9eed00] font-semibold text-lg hover:underline"
            >
              www.youandglobe.com
            </a>
            <p className="mt-4 text-white/90">
              Connecting healthcare talent across borders and empowering institutions to deliver exceptional patient care.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
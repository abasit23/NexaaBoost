'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const SERVICES = [
  'Web Development',
  'AI Development',
  'SEO Optimization',
  'Google Ads',
  'Meta Ads',
  'Backlink Building',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form data:', data)
    setStatus('success')
    reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-white/5 border ${
      hasError ? 'border-red-500/60' : 'border-cyan-500/20'
    } rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all`

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8"
    >
      <h3 className="font-orbitron text-xl font-bold text-white mb-1">Send Us a Message</h3>
      <p className="text-gray-400 text-sm mb-7">We reply within 2 hours on business days.</p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="text-green-400" size={32} />
            </div>
            <h4 className="font-orbitron font-bold text-white text-lg">Message Sent!</h4>
            <p className="text-gray-400 text-sm max-w-xs">
              Thank you! We&apos;ll get back to you within 2 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Muhammad Ali"
                  className={inputClass(!!errors.name)}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ali@example.com"
                  className={inputClass(!!errors.email)}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone + Service */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+92 300 0000000"
                  className={inputClass(false)}
                  {...register('phone')}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Service Interested In <span className="text-red-400">*</span>
                </label>
                <select
                  id="service"
                  className={`${inputClass(!!errors.service)} bg-[#0d0d1a]`}
                  {...register('service', { required: 'Please select a service' })}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs text-gray-400 mb-1.5 font-medium">
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project…"
                className={`${inputClass(!!errors.message)} resize-none`}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 20, message: 'Please write at least 20 characters' },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={11} /> {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="neon-button w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

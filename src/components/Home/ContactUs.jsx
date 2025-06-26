import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Step 1: Axios Import

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data); // Debugging: Log form data
      const response = await axios.post('https://preeticomputers.com/api/contact', data); // Step 2: Replace URL with your backend
      if (response.status === 200) {
        reset();
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-6">
          <a href="#" className="text-blue-600 small font-medium">
            Get In Touch
          </a>
        </div>
        <h2 className="text-center large font-extrabold mb-12">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info - Left Side */}
          <div className="md:w-1/3">
            <h3 className="font-semibold medium text-gray-900 mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold small text-gray-900 mb-1">Phone:</p>
                <p className="text-gray-600 verysmall text-sm leading-relaxed">+91 9829 179 799</p>
                <p className="text-gray-600 verysmall text-sm leading-relaxed">+91 9828 079 799</p>
              </div>
              <div>
                <p className="font-semibold small text-gray-900 mb-1">Email:</p>
                <p className="text-gray-600 verysmall text-sm leading-relaxed">support@preeticomputers.com</p>
                <p className="text-gray-600 verysmall text-sm leading-relaxed">preeticomputersjaipur@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold small text-gray-900 mb-1">Address:</p>
                <p className="text-gray-600 verysmall leading-relaxed">
                  WP6G+2CW Dussehra Ground, Maharana Pratap Rd, Shree Ram Nagar - A, 
                  Sunder Nagar, Panchyawala, Jaipur, Rajasthan 302034, India
                </p>
              </div>
            </div>
          </div>

          {/* Form - Right Side */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                    focus:border-blue-600 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-600"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                    focus:border-blue-600 focus:ring-0 focus:outline-none border-l-4  bg-[#f3f4f6] border-l-blue-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Subject"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                  focus:border-blue-600 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-600"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
                className="w-full border border-gray-500 rounded-sm py-3 px-4 text-sm text-gray-500 placeholder-gray-400 
                  focus:border-blue-600 focus:ring-0 focus:outline-none border-l-4 bg-[#f3f4f6] border-l-blue-600 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white small font-semibold rounded-full py-2.5 px-6 mt-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-500 text-sm mt-2">Message submitted successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-slate-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
//         <div className="max-w-3xl mx-auto bg-slate-700 rounded-lg p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center text-gray-300">
//                   <Mail className="h-5 w-5 mr-2" />
//                   <span>anugrahofficial261@gmail.com</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Phone className="h-5 w-5 mr-2" />
//                   <span>+91 8521070602</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <MapPin className="h-5 w-5 mr-2" />
//                   <span>Bangalore, Karnataka, India</span>
//                 </div>
//               </div>
//             </div>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows={4}
//                 className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               ></textarea>
//               <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/918521070602?text=Hello,%20I'm%20${encodeURIComponent(
      formData.name
    )}.%20${encodeURIComponent(formData.message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleEmail = () => {
    const subject = `Message from ${formData.name}`;
    const body = `Hello,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const mailtoLink = `mailto:anugrahofficial261@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      // Attempt to open mail client
      window.location.href = mailtoLink;
    } catch (error) {
      setStatus(
        'Could not open the email app. Please check your device settings or email client configuration.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    const choice = window.confirm(
      'Send via Email? Click "Cancel" for WhatsApp.'
    );
    if (choice) {
      handleEmail();
    } else {
      handleWhatsApp();
    }

    setStatus('Message sent! You may be redirected to the respective platform.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-slate-700 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>anugrahofficial261@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 8521070602</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
              {status && <p className="text-center text-white mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

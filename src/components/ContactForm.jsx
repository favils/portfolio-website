import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message');
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center mt-[4rem]">
        <a href='https://www.linkedin.com/in/fatimavillena/'><img src="/linkedin.png" width="40px" className="mx-6"/></a>
        <a href='https://github.com/favils'><img src="/github.png" width="40px" className="mx-6"/></a>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-1/2 p-8 rounded-lg">
          <h2 className="text-7xl text-center font-bold mb-4 text-black">contact me</h2>
          <div className="mb-1">
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="placeholder-white w-full rounded-full p-3 bg-transparent text-5xl focus:outline-none focus:ring focus:ring-pink-200 text-left border-b-2"
            />
          </div>

          <div className="mb-1">
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="placeholder-white w-full rounded-full p-3 bg-transparent text-5xl focus:outline-none focus:ring focus:ring-blue-200 text-left border-b-2"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              placeholder="your message!"
              value={formData.message}
              onChange={handleChange}
              required
              className="placeholder-white w-full rounded-full p-3 bg-transparent text-5xl h-20 resize-none focus:outline-none focus:ring focus:ring-black-600 text-left border-b-2"
            ></textarea>
          </div>

          <center><button type="submit" className="w-1/2 p-3 bg-black text-white text-2xl py-3 rounded hover:bg-gray-700">send your message</button></center>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

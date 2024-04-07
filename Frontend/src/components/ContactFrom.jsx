import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email)
    setIsSubmitted(true);
    // Reset form after submission (optional)
  };

  return (
    <div
      className="fixed inset-0 bg-white/75 backdrop-blur-sm flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <form className="container mx-auto px-4 py-8 shadow-sm rounded-md">
        <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            className="h-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-purple-800 text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-semibold"
          >
            Submit
          </button>
          {isSubmitted && (
            <p className="text-green-500">Your message has been sent!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

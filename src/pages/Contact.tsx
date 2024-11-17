const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex flex-col">
        <header className="py-6  text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </header>
  
        <main className="flex-1 py-12 px-4 md:px-20">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-6">
              We’re here to help! If you have any questions or need assistance, feel free to contact us using the form below or via the provided details.
            </p>
  
            <div className="space-y-4 mb-8">
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href="mailto:support@ibbank.com" className="underline text-blue-300">
                  ibbank011@gmail.com | mohdmubbashir71@gmail.com
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span>{' '}
                <h1 className="underline text-blue-300">
                  +91 7619562002
                </h1>
              </p>
              <p>
                <span className="font-bold">Address:</span>156 Attiguppe chord road Bengaluru 560040, Karnataka, India
              </p>
            </div>
  
            <form className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg w-full hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>
  
        <footer className="py-6 bg-gray-900 text-gray-200 text-center">
          <p>&copy; 2024 IB Bank. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Contact;
  
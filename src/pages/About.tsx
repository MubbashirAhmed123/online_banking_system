const About = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex flex-col">
        {/* Header */}
        <header className="py-6  text-center">
          <h1 className="text-4xl font-bold">About IB Bank</h1>
        </header>
  
        {/* Content */}
        <main className="flex-1 py-12 px-4 md:px-20">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="mb-6">
              At IB Bank, we are committed to providing reliable and innovative financial solutions to our customers. Our mission is to empower individuals and businesses by offering secure, efficient, and user-friendly banking services.
            </p>
  
            <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integrity: Building trust through transparency and ethical practices.</li>
              <li>Innovation: Embracing technology to enhance customer experiences.</li>
              <li>Customer-Centricity: Prioritizing the needs and satisfaction of our customers.</li>
              <li>Excellence: Striving for quality in every service we provide.</li>
            </ul>
          </section>
        </main>
  
        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-gray-200 text-center">
          <p>&copy; 2024 IB Bank. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default About;
  
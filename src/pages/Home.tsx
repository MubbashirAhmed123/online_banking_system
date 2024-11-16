import { Link } from "react-router-dom";

const HomePage = () => {
  const token=localStorage.getItem('token')
  return (
    <div>
     
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to IB Bank</h1>
          <p className="text-xl mb-6">
            Your trusted partner in secure and reliable banking solutions. Manage your finances effortlessly.
          </p>
          <Link to={token? 'internet-banking':'/login'} className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Personal Banking</h3>
              <p>Manage your accounts, transfer funds, and more with ease.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Business Banking</h3>
              <p>Efficient solutions to grow and manage your business.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Loan Services</h3>
              <p>Get loans tailored to your needs with flexible terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 IB Bank. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
    
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

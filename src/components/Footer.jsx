import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-2 text-gray-400 text-sm">
              We provide loans for your essential needs with flexible plans and quick approval.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="/adminPage" className="hover:underline">Admin</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Email: support@loansystem.com<br />
              Phone: +92 123 456 7890
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Loan System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            ODSR Digital
          </h2>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Web and App Development </li>
            <li>Marketing Andlysis with GA4 and Tag Manager</li>
            <li>Hosting and Infrastructure with Azure</li>
           
            <li>Automated Testing with Cypress</li>
            <li>AI- Powered Workflows</li>
            <li>Umbraco website development</li>
            <li>Customer Acqisation journeys</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Portfolio</li>
            <li>Insights</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Email</li>
            <li>Phone</li>
            <li>Location</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-semibold mb-4">Policy</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Information Security Policy</li>
            <li>Rqual Opportunity Policy</li>
            <li>IT DRP</li>
            <li>Modern Slavery and Homan Trafficking Statement</li>
            <li>Health and Safety Policy</li>
            <li>Anti-Bribery Policy</li>
            <li>Environmental Policy</li>
          </ul>
        </div>

      </div>


      {/* Bottom Section */}
        {/* Google Rating */}
        <div className="flex justify-end items-center gap-3 mb-4">

          <Image
            src="/images/google.webp"
            width={60}
            height={60}
            alt="Google"
          />

          <span className="text-gray-300">
            <p>Google Rating:</p>
            <p>5.0 ⭐⭐⭐⭐⭐ </p>
            <p>See all our reviews</p>
          </span>

      </div>
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-400 text-sm">
         © 2026 RD Digital is a trading name of Recognise Design Ltd. Registered in England & Wales. Reg 08633423. Address: unit 7, peerglow, marsh lane, ware sg12 9ql
        </p>
       
    
      </div>
    

    </footer>
  );
}
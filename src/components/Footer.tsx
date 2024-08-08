import React, { useState, useEffect } from "react";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';

function Footer() {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer className="bg-blue-600 text-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center md:justify-start space-y-5 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/4">
              <h5 className=" border-b-5 pb-2 border-blue-900 text-lg font-semibold mb-4">Explore</h5>
              <ul className="space-y-2">
                <li onClick={scrollTop}>
                  <Link href="/" className="hover:text-yellow-300">About the Academy</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/courses-training" className="hover:text-yellow-300">Courses & Training</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/certification" className="hover:text-yellow-300">Certification</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/accreditation" className="hover:text-yellow-300">Accreditation</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/case-review-calculator" className="hover:text-yellow-300">Case Review Calculator</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/navigator" className="hover:text-yellow-300">NAVIGATOR</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/code-of-conduct" className="hover:text-yellow-300">Code of Conduct</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/code-of-ethics" className="hover:text-yellow-300">Code of Ethics</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/science-research" className="hover:text-yellow-300">Science & Research</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/resource-library" className="hover:text-yellow-300">Resource Library</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/store" className="hover:text-yellow-300">Store</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h5 className=" border-b-5 pb-2 border-blue-900 text-lg font-semibold mb-4">Connect</h5>
              <ul className="space-y-2">
                <li onClick={scrollTop}>
                  <Link href="/contact-us" className="hover:text-yellow-300">Contact Us</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/newsroom" className="hover:text-yellow-300">Newsroom</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/proposal-for-change" className="hover:text-yellow-300">Proposal For Change</Link>
                </li>
                <li onClick={scrollTop}>
                  <Link href="/careers" className="hover:text-yellow-300">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h5 className=" border-b-5 pb-2 border-blue-900 text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-facebook text-xl"></i>
                </a>
                <a
                  href="https://www.vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-vimeo text-xl"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-twitter text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-linkedin text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-instagram text-xl"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <i className="border-2  rounded-3xl p-3 border-white bx bxl-youtube text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-4 border-t border-purple-800 mt-10">
          <h6 className="mb-0">© IAED {year} | Privacy Policy | Terms and Conditions</h6>
        </div>
      </footer>

      <ScrollButton />
    </>
  );
}

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 800);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <i
      className={`bx bxs-up-arrow-circle text-3xl fixed bottom-10 right-10 cursor-pointer ${visible ? "block" : "hidden"}`}
      onClick={scrollToTop}
    ></i>
  );
};

export default Footer;

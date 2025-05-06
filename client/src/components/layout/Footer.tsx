import React from "react";
import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-white text-2xl font-bold">Gennesys Tech</span>
              <span className="text-primary text-xs font-medium tracking-widest">LLC</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building innovative software solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Gennesys Tech LLC. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-primary transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-primary transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <a className="text-gray-400 hover:text-primary transition-colors">Our Work</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-primary transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mt-12 pt-6 border-t border-gray-800">
          <a 
            href="https://linkedin.com"
            className="text-gray-400 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://twitter.com"
            className="text-gray-400 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com"
            className="text-gray-400 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

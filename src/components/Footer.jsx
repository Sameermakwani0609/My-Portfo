import React   from "react";
const Footer = () => {
    return (
        <footer className="py-8 bg-slate-900">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-xl font-bold gradient-text mb-4">Samarth.dev</h3>
                <p className="text-gray-400 mb-6">Creating web experiences that inspire</p>
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:gradient-bg hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Samarth Bargale. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
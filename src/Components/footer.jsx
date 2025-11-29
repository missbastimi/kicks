import { useState } from "react";

const Footer = () => {
const [open, setOpen] = useState(false);

return (
    <footer className="w-full bg-gray-900 text-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">About</h3>
                    <p className="text-gray-400">We're the biggest hypestore in the universe. We got you all covered with our exclusive collection and latest drops</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <p className="text-gray-400">email@example.com</p>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
                <p>&copy; 2024 KICKS. All rights reserved.</p>
            </div>
        </div>
    </footer>
);}

    export default Footer;




import { motion } from "framer-motion";
import { facebook, linkedin, twitter, instagram } from "../../assets/icons/icon";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="border-t p-8 border-gray-300 flex flex-col justify-center items-center gap-6 w-full  pb-30"
    >
      {/* Social Media Links */}
      <div className='flex flex-row gap-4 '>
                <h1 className='text-md' >Get in touch:</h1>
                {[facebook, instagram, linkedin, twitter].map((item, index) => (
                        <img key={index} src={item} alt="Profile Picture"  className="cursor-pointer w-6 " />
                ))
                }
            </div>

      {/* Quick Links & Contact */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
        <div className="">
          <h1 className="text-md font-semibold">Quick Links</h1>
          <ul className="text-gray-600 text-sm mt-2 space-y-2 md:flex md:flex-row md:gap-5">
            <li className="cursor-pointer hover:text-gray-900">Home</li>
            <li className="cursor-pointer hover:text-gray-900">About</li>
            <li className="cursor-pointer hover:text-gray-900">Projects</li>
            <li className="cursor-pointer hover:text-gray-900">Contact</li>
          </ul>
        </div>

        <div className="fle flex-col gap-5">
          <h1 className="text-md font-semibold">Contact</h1>
          <p className="text-gray-600 text-sm mt-2">📧 kprahul1143@example.com</p>
          <p className="text-gray-600 text-sm">📍 Tamil Nadu, India</p>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="text-center text-gray-500 text-xs">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>© 2024 Rahul | All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

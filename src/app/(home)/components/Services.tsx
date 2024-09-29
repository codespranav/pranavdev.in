"use client"
import { Code, LayoutPanelLeft, Plug } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion"

const Services = () => {

// const container = (delay: number)=> ({
//     hidden: {x: -100, opacity: 0},
//     visible:{
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay}
//     }
// })
  const myService = [
    {
      serviceName: "Website Development",
      aboutService: "I build fast, responsive websites using the latest technologies, tailored to your needs. Whether it’s a simple site or a complex web app, I deliver high-quality solutions to enhance your online presence.",
      icon: <Code />,
    },
    {
      serviceName: "App Development",
      aboutService: "I create intuitive, high-performance apps tailored to your requirements. Using the latest technologies, I build custom solutions that provide seamless user experiences and enhance your business.",
      icon: <LayoutPanelLeft />,
    },
    {
      serviceName: "WordPress Integration",
      aboutService: "I offer seamless WordPress integration to help you manage your website easily. From custom themes to plugin setup, I ensure a fully functional, user-friendly site tailored to your business needs.",
      icon: <Plug />,
    },
  ];

  return (
    <motion.section     whileInView={{opacity: 1, x:0}}
    initial= {{opacity: 0, x: -100}}
    transition={{duration: 0.5}}  className="py-16 ">
      <div className="max-w-7xl mx-auto border-b border-neutral-800 pb-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">My Services</h2>
          <p className="text-neutral-400 mt-2">
            High-quality solutions for your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {myService.map((item, index) => (
             <div
             key={index}
             className="bg-[#1C1C1C] p-8 rounded-lg flex flex-col justify-center items-center transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-black/50 duration-300"
           >
              <div className="text-5xl text-white mb-6">{item.icon}</div>
              <h1 className="text-2xl font-bold text-heading mb-4">
                {item.serviceName}
              </h1>
              <p className="text-neutral-300 text-center leading-relaxed">
                {item.aboutService}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

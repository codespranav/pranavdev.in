import React from "react";
import ContactForm from "./components/ContactForm";
export const metadata = {
    title: "Contact me - Pranav Singh",
    description: "Contact us | Pranav Singh is the website developer working as a freelance since 2018. According to google review He is the best Website Developer in India, Website Developer in Bihar",
    
  };
const Page = () => {
    
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Left Column - Contact Form */}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;

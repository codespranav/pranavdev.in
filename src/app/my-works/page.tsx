"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function MyWorks() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await fetch("https://683bd5ea28a0b0f2fdc58719.mockapi.io/api/v1/projects");
            if (!resp.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await resp.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Portfolio Website",
    //         description: "I build fast, responsive websites using the latest technologies, tailored to your needs. Whether it’s a simple site or a complex web app, I deliver high-quality solutions to enhance your online presence.",
    //         image: portfolioImage,
    //         liveLink: "#", // Replace with actual URL when available
    //         techStack: ["Next.js", "Tailwind CSS", "React", "JavaScript"]
    //     },
    //     {
    //         id: 2,
    //         title: "Restaurant Website",
    //         description: "A modern, responsive restaurant website featuring a full menu, table booking system, and contact form to enhance customer engagement and online visibility.",
    //         image: "/assets/restaurant.png", // Replace with actual import if using static image
    //         liveLink: "#",
    //         techStack: ["HTML", "CSS", "JavaScript"]
    //     },
    //     // Add more projects as needed
    // ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h1 className="text-white text-4xl font-bold mb-4">My Works</h1>
                <p className="text-paraColour text-md">
                    Welcome to this page, where I showcase some of the projects I’ve built using modern web technologies.
                    Each project reflects my passion for clean code and great design.
                </p>
            </div>

            {/* Projects Section */}
            {
                data.length != 0 ?
                    data.map((item, index) => (
                        <div key={index} className="bg-[#1a1a1a] border border-slate-700 rounded-xl flex flex-col md:flex-row items-center gap-6 p-6 shadow-lg mb-2">
                            {/* Project Info */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.projectName}</h3>
                                <p className="text-paraColour mb-4 max-w-md">{item.projectDescription}</p>
                                <a
                                    href="#"
                                    className="inline-block mt-2 px-2 py-1 text-sm font-medium bg-white text-black rounded-full hover:bg-blue-700 transition"
                                >
                                    Full Project
                                </a>
                            </div>

                            {/* Project Image */}
                            <div className="flex-1">
                                <Image
                                    src={item.projectImageURL}
                                    alt="Portfolio Project Screenshot"
                                    className="rounded-lg w-full h-auto object-cover"
                                    width={800}
                                    height={500} // use a height that makes sense (100 might be too short)
                                    quality={100}
                                    priority
                                />
                            </div>

                        </div>
                    )) : <LoadingSpinner />
            }

        </div>
    );
}

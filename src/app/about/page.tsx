import Image from "next/image";
import profileImage from "@/app/assets/pranav_Dev.png";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 px-6 md:px-20 max-w-7xl m-auto">
            {/* Image First on Small Screens */}
            <div className="order-1 md:order-2 flex justify-center">
                <Image
                    src={profileImage}
                    alt="Pranav Singh - Full Stack Developer"
                    className="rounded-2xl shadow-lg"
                    width={400}
                    height={400}
                    quality={90}
                />
            </div>

            {/* Text Second on Small Screens */}
            <div className="order-2 md:order-1">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                    about<span className="text-yellow-400">.</span>
                </h1>
                <p className="text-lg text-gray-300 mb-4">
                    Hi, I’m <strong className="text-white">Pranav Singh</strong> — a passionate full-stack developer based in <strong>Bihar, India</strong> who turns ideas into digital realities.
                </p>
                <p className="text-md text-gray-400 mb-6">
                    With a strong grip on modern technologies like the <strong>MERN stack</strong>, I specialize in crafting high-performance websites, apps, and custom SaaS solutions that don’t just look good — they work flawlessly.
                </p>

                {/* Buttons and Social Icons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                        href="/contact"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Book Me
                    </a>
                    <div className="flex gap-4 text-white text-xl">
                        <a
                            href="https://linkedin.com/in/pranav"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="https://github.com/pranav"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github />
                        </a>
                        <a
                            href="https://twitter.com/pranav"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <Twitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

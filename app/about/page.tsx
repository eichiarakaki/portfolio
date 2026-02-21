"use client";
import { Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Glass } from "../components/glass";
import { Download } from "lucide-react";

// TODO: Make a downloadable resume link

const socials = [
    {
        icon: <X size={20} />,
        href: "https://www.x.com/eichi_arakaki",
        label: "X",
        handle: "@eichi_arakaki",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:justanunusualperson@gmail.com",
        label: "Email",
        handle: "justanunusualperson@gmail.com",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/eichiarakaki",
        label: "Github",
        handle: "eichiarakaki",
    },
    {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/eichi-arakaki-00380028b/",
        label: "LinkedIn",
        handle: "eichi-arakaki",
    }
];

const FullFirstLanguages = [
    "Spanish (Native)",
    "English (B2)",
    "Japanese (Native)",
];

const firstLanguages = [
    "Spanish",
    "English",
    "Japanese",
];


export default function AboutMe() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex pt-32 pb-20 min-h-screen mx-auto max-w-5xl justify-center px-5 sm:px-0">
                <Glass>
                    <section className="sm:p-10 p-5 text-white flex flex-col items-center justify-center gap-6">
                        <div className="">
                            <img
                                src="/profile.jpeg"
                                alt="Eichi Arakaki"
                                className="w-32 h-32 rounded-full md:w-48 md:h-48 border-2 border-zinc-600"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold md:text-4xl font-display">Eichi Arakaki</h2>
                        <section className="flex flex-col sm:gap-2 items-center gap-2">
                            <div className="sm:grid sm:gap-1 sm:grid-cols-3 sm:place-items-center hidden">
                                {FullFirstLanguages.map((s) => (
                                    <span className="px-2 py-1 text-[11px] sm:text-sm font-medium text-zinc-300  border-zinc-800 border-[1px] rounded-full duration-300 hover:text-white hover:bg-zinc-800 bg-zinc-900 select-none" key={s}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <div className="grid gap-1 grid-cols-3 place-items-center sm:hidden">
                                {firstLanguages.map((s) => (
                                    <span className="px-2 py-1 text-[13px] sm:text-sm font-medium text-zinc-300  border-zinc-800 border-[1px] rounded-full duration-300 hover:text-white hover:bg-zinc-800 bg-zinc-900 select-none" key={s}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </section>
                        <p className="text-center text-[14px] sm:text-[16px] text-zinc-200 max-w-md md:max-w-lg">
                            I'm a self-taught Software Developer based in Saitama, Japan.
                            <br />
                            I am a self-taught software developer who started exploring technology at the age of 14. Over the years, I have developed a strong interest in a wide range of areas, from artificial intelligence to operating system kernels, and from web development to automated trading algorithms. I am deeply passionate about learning and continuously expanding my knowledge.
                        </p>

                        <section className="flex flex-wrap justify-center">
                            {socials.map((s) => (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium
                                    text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md
                                    hover:bg-zinc-800 transition mr-2"
                                >
                                    {s.icon}
                                    {s.label}
                                </Link>
                            ))}
                        </section>
                        <a
                            // href="/resume.pdf"
                            download
                            className="cursor-pointer mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                            text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md
                            hover:bg-zinc-800 transition"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </section>
                </Glass>
            </div>
        </div>
    );
}

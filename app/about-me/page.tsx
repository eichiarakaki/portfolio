"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
    {
        icon: <Twitter size={20} />,
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
];

export default function AboutMe() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <h1 className="text-zinc-100 text-lg">Coming soon</h1>
            </div>
        </div>
    );
}

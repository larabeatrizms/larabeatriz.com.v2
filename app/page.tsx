import React from "react";
import Particles from "./components/particles";
import { FiTwitter, FiGithub, FiLinkedin, FiTwitch } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <a className="text-zinc-500 animate-fade-in hover:text-zinc-300" href="https://www.linkedin.com/in/larabeatrizms/"><FiLinkedin /></a>
          <a className="text-zinc-500 animate-fade-in hover:text-zinc-300" href="https://github.com/larabeatrizms"><FiGithub /></a>
          <a className="text-zinc-500 animate-fade-in hover:text-zinc-300" href="https://twitter.com/larabeatrizms"><FiTwitter /></a>
          <a className="text-zinc-500 animate-fade-in hover:text-zinc-300" href="https://www.twitch.tv/larabeatrizms"><FiTwitch /></a>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-purple-300 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Lara Beatriz
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 font-display">
          I build cool applications with JavaScript and Typescript.
        </h2>
      </div>
    </div>
  );

}

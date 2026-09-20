import '../App.css';

import Plane from "../assets/Plane.jpg"
import Frontend from "../assets/Ground Station Frontend.png"
import PCB from "../assets/Ground Station PCB.png"

import Headphones from "../assets/Headphones.jpg"
import HeadphonesAudioSchematic from "../assets/HeadphonesAudioSchematic.png"
import HeadphonesAudioPCB from "../assets/HeadphonesAudioPCB.png"
import HeadphonesDisplaySchematic from "../assets/HeadphonesDisplaySchematic.png"
import HeadphonesDisplayPCB from "../assets/HeadphonesDisplayPCB.png"

import Watch from "../assets/Epaperwatch.jpg"
import WatchSchematic from "../assets/WatchSchematic.png"
import WatchPCB from "../assets/WatchPCB.png"

import PiCamera from "../assets/Camera.jpg"
import ShotonCam1 from "../assets/Shotonpicam1.jpg"
import ShotonCam2 from "../assets/Shotonpicam2.jpg"
import ShotonCam3 from "../assets/Shotonpicam3.jpg"

import React, { useEffect, useRef } from 'react';

import Carousel from './Carousel';

import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Content() {

  return (

    <div>
      {/* <div class="p-8 lg:p-32 grid lg:grid-cols-2 pb-0 bg-gradient-to-b from-cyan-100 to-pink-100" data-scroll-section=""> */}
      <div class="p-8 lg:p-32 grid lg:grid-cols-2 pb-0" data-scroll-section>
        <div class="md:p-8 w-full text-center text-neutral-100">
          <div class="py-2">
            <h1 class="md:text-9xl text-6xl md:pb-4 pb-2 title lg:text-left drop-shadow-2xl one" data-scroll
              data-scroll-speed="1" data-scroll-position="top">
              Alex
            </h1>
            <h1 class="md:text-9xl text-6xl md:pb-8 pb-2 title lg:text-left drop-shadow-2xl one" data-scroll
              data-scroll-speed="2" data-scroll-position="left">
              Fernandes
            </h1>


          </div>

          <div class="py-4">
            <h1 class="md:text-7xl text-3xl font-extrabold py-1 leading-20 title lg:text-left drop-shadow-2xl one"
              data-scroll data-scroll-speed="3" data-scroll-position="top">
              Engineering
            </h1>
            <h1 class="md:text-7xl text-3xl font-extrabold py-1 leading-20 title lg:text-left drop-shadow-2xl one"
              data-scroll data-scroll-speed="4" data-scroll-position="left">
              Portfolio
            </h1>
          </div>
        </div>
      </div>
      <div class="p-8 lg:px-32 lg:p-8 pb-0" data-scroll-section="">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center text-neutral-100" data-scroll data-scroll-speed="1" id="about">
          About Me
        </h1>
        <div class="text-2xl text-slate-400 font-medium text-center pb-8">
          Hey, I'm Alex. I'm an engineering student at Western University, studying Electrical Engineering with a
          dual
          degree in Artificial Intelligence Systems Engineering. It's a unique degree that allows me to apply my skills to a diverse range of projects and explore
          my
          passions in:
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 text-4xl font-medium gap-4 text-slate-500 py-4">
          <Card className="flex flex-col justify-between hover:border-teal-bright/60 transition-colors">
            <div className="text-center">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-extrabold text-xl">Energy</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-muted leading-relaxed text-base">
                  I'm interested in the design and management of energy plants and power distribution systems. I'm particularly interested in nuclear energy and emerging nuclear reactor technology, such as Small Modular Reactors.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex flex-col justify-between hover:border-teal-bright/60 transition-colors">
            <div className="text-center">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-extrabold text-xl">Electronics</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-muted leading-relaxed text-base">
                  I'm passionate about electronic design and product manufacturing. I'm most excited in applying my PCB and chip design skills to work on embedded system projects, especially those that integrate IoT capabilities.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex flex-col justify-between hover:border-teal-bright/60 transition-colors">
            <div className="text-center">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-extrabold text-xl">Software</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-muted leading-relaxed text-base">
                  I enjoy software engineering, especially in the context of data-drive applications. I'm focused on the development and optimization of machine learning algorithms and their implementation in real-world solutions.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <div class="lg:px-32 lg:p-16 pb-0" data-scroll-section="">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center" data-scroll data-scroll-speed="1" id="projects">
          Personal Projects
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2" >
          <div class="p-8 md:py-16" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title text-neutral-100">Headphones</h1>
            <h4 class="text-sm p-2 pt-4 text-slate-300">July 2026</h4>
            <h4 class="text-lg p-2 pt-4 text-slate-100">This is a custom pair of wired headphones that display the album art of the song that is currently playing on an epaper display on each ear cup. The headphones contain two custom PCBs, one in either ear. One is an audio PCB which is responsible for decoding, filtering and amplifying the audio. The other is a custom ESP32-C6 PCB
              which is used to drive the two E-Paper displays over SPI.
            </h4>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>MultiLayer PCB Design</Badge>
              <Badge>Audio Filter Design</Badge>
            </div>
            <div className="my-2">
              <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/AlexFernandes04/headphones", "_blank")}>
                <span className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> Code
                </span>
              </Button>
            </div>
          </div>
          <div class="py-24">
            <div class="rounded-9xl overflow-hidden px-8 drop-shadow-xl">
              <Carousel items={[
                { src: Headphones, caption: "Headphones" },
                { src: HeadphonesAudioSchematic, caption: "DAC Schematic" },
                { src: HeadphonesAudioPCB, caption: "DAC PCB " },
                { src: HeadphonesDisplaySchematic, caption: "ESP32 Schematic" },
                { src: HeadphonesDisplayPCB, caption: "ESP32 PCB" },
              ]}></Carousel>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2" >
          <div class="py-24">
            <div class="rounded-9xl overflow-hidden px-8 drop-shadow-xl">
              <Carousel items={[
                { src: Watch, caption: " EPaper Watch" },
                { src: WatchSchematic, caption: "Schematic" },
                { src: WatchPCB, caption: "PCB" },
              ]}></Carousel>
            </div>
          </div>
          <div class="p-8 md:py-16" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title text-neutral-100">E-Paper Watch</h1>
            <h4 class="text-sm p-2 pt-4 text-slate-300">November 2025</h4>
            <h4 class="text-lg p-2 pt-4 text-slate-100">This is an EPaper Watch. It contains a custom ESP32-C3 PCB, designed in KiCad, to get the date and time along with the weather forecast using the OpenWeather API. The watch is powered by 150 mAh battery and uses
              optimized sleep cycles to last about a week on a single charge. 
            </h4>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>PCB Design</Badge>
              <Badge>Battery Management</Badge>
            </div>
            <div className="my-2">
              <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/AlexFernandes04/smart-watch", "_blank")}>
                <span className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> Code
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2" >
          <div class="p-8 pb-0 md:py-16" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title text-neutral-100">Raspberry Pi Camera</h1>
            <h4 class="text-sm p-2 pt-4 text-slate-300">May 2025</h4>
            <h4 class="text-lg p-2 pt-4 text-slate-100">This is a digital camera built around a Raspberry Pi Zero 2 with a Pi Cam Module 3. It can capture photos using the libcamera library and displays them in a gallery with a custom GUI. It is housed in a clear resin printed case designed in Fusion360. 
            </h4>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>CAD</Badge>
              <Badge>Image Processing</Badge>
            </div>
            <div className="my-2">
              <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/AlexFernandes04/pi-cam", "_blank")}>
                <span className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> Code
                </span>
              </Button>
            </div>
          </div>
          <div class="py-24">
            <div class="rounded-9xl overflow-hidden px-8 drop-shadow-xl">
              <Carousel items={[
                { src: PiCamera, caption: "Pi Camera" },
                { src: ShotonCam1, caption: "Shot on Pi Camera" },
                { src: ShotonCam2, caption: "Shot on Pi Camera" },
                { src: ShotonCam3, caption: "Shot on Pi Camera" },
              ]}></Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
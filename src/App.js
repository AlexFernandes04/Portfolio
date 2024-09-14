import './App.css';
import LocomotiveScroll from 'locomotive-scroll';
import Home from "./assets/Home.png"

import Plane from "./assets/Plane.jpg"
import Frontend from "./assets/Ground Station Frontend.png"
import PCB from "./assets/Ground Station PCB.png"

import BPaper from "./assets/BWRX Paper.png"
import Fuel from "./assets/Fuel Assemblies.png"
import ICS from "./assets/ICS Train.png"

import CPaper from "./assets/Comparison Paper.png"

import FinanceHome from "./assets/FinanceAppHome.png"
import FinanceLogin from "./assets/FinanceAppLogin.png"
import FinanceInvestments from "./assets/FinanceAppInvestments.png"

import ICSPaper from "./assets/BWRX_300_Isolation_Condenser_System.pdf"
import ComparisonPaper from "./assets/Comparison_Between_Nuclear_and_Solar_Energy_Land_Use_and_Costs.pdf"

import React, { useEffect, useRef } from 'react';


import Carousel from './Carousel';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (

    <div class="scroll-container bg-fuchsia-100" ref={scrollContainerRef}>
      <div class="p-8 lg:p-32 grid lg:grid-cols-2 pb-0 bg-gradient-to-b from-cyan-100 to-pink-100" data-scroll-section="">
        <div class="md:p-8 w-full text-center ">
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
        <div class="w-full float-righFt" data-scroll data-scroll-speed="6">
          <img src={Home} class="w-full" alt='home page image'/>
        </div>
      </div>
      <div class="p-8 lg:px-32 lg:p-16 pb-0 bg-gradient-to-b to-cyan-100 from-pink-100" data-scroll-section="">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center" data-scroll data-scroll-speed="1">
          About Me
        </h1>
        <div class="text-2xl text-slate-500 font-medium text-center pb-8">
          Hey, I'm Alex. I'm an engineering student at Western University, studying Electrical Engineering with a
          dual
          degree in Artificial Intelligence Systems Engineering. It's a unique degree that allows me to apply my skills to a diverse range of projects and explore
          my
          passions in:
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 text-4xl font-medium gap-4 text-slate-500 py-4">
          <div class="bg-slate-100/100 p-8 rounded-xl mx-4 text-center" data-scroll data-scroll-speed="2">
            <div className='border border-t-0 border-x-0 border-slate-300 pb-2'>
              Energy
            </div>
            <div className='text-lg pt-4 font-normal'>
              I'm interested in the design and management of energy plants and power distribution systems. I'm particularly interested in nuclear energy and emerging nuclear reactor technology, such as Small Modular Reactors.
            </div>
          </div>
          <div class="bg-slate-100/100 p-8 rounded-xl mx-4 text-center" data-scroll data-scroll-speed="2">
            <div className='border border-t-0 border-x-0 border-slate-300 pb-2'>
              Electronics
            </div>
            <div className='text-lg pt-4 font-normal'>
              I'm passionate about electronic design and product manufacturing. I'm most excited in applying my PCB and chip design skills to work on embedded system projects, especially those that integrate IoT capabilities.
            </div>
          </div>
          <div class="bg-slate-100/100 p-8 rounded-xl mx-4 text-center" data-scroll data-scroll-speed="2">
            <div className='border border-t-0 border-x-0 border-slate-300 pb-2'>

              Software
            </div>
            <div className='text-lg pt-4 font-normal'>
              I enjoy software engineering, especially in the context of data-drive applications. I'm focused on the development and optimization of machine learning algorithms and their implementation in real-world solutions.
            </div>
          </div>
        </div>
      </div>
      <div class="lg:px-32 lg:p-16 pb-0 bg-gradient-to-b from-cyan-100 to-fuchsia-100" data-scroll-section="">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center" data-scroll data-scroll-speed="1">
          My Projects
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2" >
          <div class="p-8 md:py-16" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title">Western Aero Design Ground Station</h1>
            <h4 class="text-lg p-2 pt-4 text-slate-400">The Western Aero Design Team is a completely student-run
              mega project in the department of Engineering at Western University. Our team designs, fabricates,
              and flies remote-controlled, heavy-lift aircraft for the SAE Aero Design East competition.
              As Ground Station Lead, I'm responsible for designing the system that communicates with the plane to
              send commands and receive and display telemetry.
            </h4>
            <h4 class="text-lg p-2 text-slate-400">The ground station includes a full-stack application with a React
              Frontend, Express backend, and MongoDB database, packaged using Docker. Data is received by the
              Ground Station PCB,
              which includes a LoRa Radio Module and Arduino Nano, and is sent to the Ground Station App via a USB
              tool over a websocket.
            </h4>

            <div class=" p-2 w-full text-slate-400">
              <a class="text-xl w-full duration-300" target="_blank"
                href="http://www.westernaerodesign.com/">View Site</a>
              {" "}|{" "}
              <a class="text-xl w-full duration-300" target="_blank"
                href="https://github.com/UWO-Aero-Design/gnd-station">View Repository</a>
            </div>
          </div>
          <div class="py-24">
            <div class="rounded-9xl overflow-hidden px-8 drop-shadow-xl">
              <Carousel Images={[Plane, Frontend, PCB]} Captions={["2024 Primary Aircraft", "Ground Station Frontend", "Ground Station PCB"]}></Carousel>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="md:order-first">
            <div class="rounded-9xl overflow-hidden px-8 py-16 drop-shadow-xl">
              <Carousel Images={[BPaper, ICS, Fuel]} Captions={["BWRX-300 ICS Paper", "ICS Train modeled in Simulink", "Fuel Assembly modeled in Simulink"]}></Carousel>
            </div>
          </div>
          <div class="p-8 md:py-16 order-first md:order-last" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title">BWRX-300 Isolation Condenser System</h1>
            <h4 class="text-lg p-2 pt-4 text-slate-400">As part of my research at Western University, I modeled the
              BWRX-300's passive cooling system: the Isolation Condenser System (ICS). The BWRX-300 is a Small
              Modular Reactor (SMR) that is currently being built at the Darlington Nuclear Site in Clarington,
              Ontario.
              One of the key features of the BWRX-300 is the ICS, which it uses to passively remove decay heat
              from the reactor core after shutdown
            </h4>
            <h4 class="text-lg p-2 text-slate-400">I modeled the ICS in Simulink to test how long it takes to cool
              the BWRX-300 to a stable cold shutdown immediately after a reactor shutdown. The ICS and BWRX-300
              fuel assemblies were modelled using Simescape Two-Phase Fluid and Thermal Libraries.
            </h4>
            <div class=" p-2 w-full text-slate-400">
              <a class="text-xl w-full duration-300"
                href={ICSPaper} download>Read Paper</a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-8 md:py-24" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title">Nuclear Power Cost Analysis</h1>
            <h4 class="text-lg p-2 pt-4 text-slate-400">One of the projects I worked on during my research at
              Western University was
              comparing the costs and space density of solar and nuclear energy. I did this by comparing the
              Bruce Nuclear Generating Station to a hypothetical PV farm that I designed. I analyzed the land they
              required to match each other's
              power output. I also calculated their construction, fuel, and decommisioning costs along with their
              annual power
              outputs over their lifetime to compare their Levelized Costs of Energy, along with their power outputs and associated costs.
            </h4>
            <div class=" p-2 w-full text-slate-400">
              <a class="text-xl w-full duration-300" target="_blank"
                href={ComparisonPaper} download>Read Paper</a>
            </div>
          </div>
          <div class="rounded-9xl overflow-hidden px-8 py-4 drop-shadow-xl">
            <img class="overflow-hidden w-full" src={CPaper} alt="Paper" />
            <p className='text-lg p-2 text-slate-400 text-center pb-8'>Nuclear and Solar Energy Comparison Paper</p>
          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="md:order-first">
            <div class="rounded-9xl overflow-hidden px-8 py-4 drop-shadow-xl">
              <img class="overflow-hidden w-full" src={CPaper} alt="Paper" />
              <p className='text-lg p-2 text-slate-400 text-center pb-8'>WeMars Rover</p>
            </div>
          </div>
          <div class="p-8 md:py-32 order-first md:order-last" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title">WeMars GPS System</h1>
            <h4 class="text-lg p-2 pt-4 text-slate-400">The WeMars Team is a student-led club driven towards
              the goal of building a rover that is capable of accomplishing various tasks in environments similar
              to ones found on the surface of Mars.
              As a member of the Software Team, I helped design the GPS system that allows us to track the rover's
              position to steer it. The GPS consists of an ESP32 wired to a GPS and IMU module. I set up webserver
              capabilities on the ESP32 to allow a laptop to access
              the rover's coordinates via an API call to the ESP32. I designed a frontend in React.js that uses
              the Google Maps' API to track the real-time position of the rover.
            </h4>
            <div class=" p-2 w-full text-slate-400">
              <a class="text-xl w-full duration-300" target="_blank"
                href="https://wemars.org/">View Site</a>
              {" "}|{" "}
              <a class="text-xl w-full duration-300" target="_blank"
                href="https://github.com/WEMARS2024">View Repository</a>
            </div>
          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-8 md:py-24" data-scroll data-scroll-speed="2">
            <h1 class="md:text-7xl text-5xl font-extrabold title">Investment Management App</h1>
            <h4 class="text-lg p-2 pt-4 text-slate-400">The Investment Management App is a project designed by
              myself and a couple of my fellow engineering students that gives the user all the information they need to make
              investment decisions.
              The app includes a React.js frontend and a Flask backend and is packaged using Docker. The app
              includes a real-time stock price visualizer and financial news. The app also uses the Plaid API to
              allow the user to login to their
              own personal bank account to view their account balances, recent transactions, and current investment
              holdings.
            </h4>
            <div class=" p-2 w-full text-slate-400">
              <a class="text-xl w-full duration-300" target="_blank"
                href="https://github.com/ShaimaaAliECE/groupproject-14">View Repository</a>
            </div>
          </div>
          <div>
            <div class="rounded-9xl overflow-hidden px-8 py-32 drop-shadow-xl">
              <Carousel Images={[FinanceHome, FinanceLogin, FinanceInvestments]} Captions={["Finance App Home Page", "Login Screen using Plaid API", "Investment Management Page"]}></Carousel>
            </div>
          </div>
        </div>
        <div class="w-full mt-4 bg-opacity-30 grid md:grid-cols-2 grid-cols-1 px-4 font-bold text-gray-600 text-xl pb-12" >
          <a href="https://www.linkedin.com/in/alex-fernandes-022a92257/">
            <h4 class="">LinkedIn</h4>
          </a>
          <a href="https://github.com/AlexFernandes04" target="_blank">
            <h4 class="md:text-right md:py-0 py-2">Github</h4>
          </a>
        </div>
      </div>
    </div>

  );
}

export default App;

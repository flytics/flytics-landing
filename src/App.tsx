import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  SignalHigh,
  Network,
  LayoutDashboard,
  Plane,
  Settings,
  Menu,
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-accent font-main selection:bg-accent selection:text-bg overflow-x-hidden flex flex-col md:border-[12px] md:border-border-heavy">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <LogoCloud />
        <Features />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shrink-0 w-full bg-bg border-b border-border-main z-50">
      <div className="h-20 flex items-center justify-between px-6 md:px-14">
        <div className="flex-shrink-0 flex items-center gap-2">
          <span className="font-extrabold text-[1.5rem] tracking-[-0.05em] uppercase text-accent">Flytics.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="flex list-none gap-10">
            <li><a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors">Platform</a></li>
            <li><a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors">Solutions</a></li>
            <li><a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors">Fleet</a></li>
            <li><a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors">
            Login
          </a>
          <a
            href="#"
            className="border border-accent px-6 py-2 font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-accent hover:bg-accent hover:text-bg transition-colors rounded-[2px]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="md:hidden bg-bg border-b border-border-main px-6 py-4 flex flex-col gap-4 relative z-40">
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-accent">Platform</a>
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted">Solutions</a>
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted">Fleet</a>
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted">Pricing</a>
          <hr className="border-border-main my-2" />
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-muted">Login</a>
          <a href="#" className="font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-bg bg-accent px-4 py-2 text-center rounded-[2px]">Get Started</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] shrink-0 w-full bg-bg">
      <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border-main flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[700px]"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted mb-6 flex items-center gap-3">
            <div className="w-10 h-px bg-[#333]"></div>
            v4.2 Operational Release
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] leading-[0.85] font-normal mb-8 tracking-[-0.02em] text-accent">
            Converting drone mission complexity into <span className="italic text-muted">decision-ready outcomes.</span>
          </h1>
          <p className="text-[1.2rem] text-[#888] max-w-[500px] leading-[1.6] mb-12">
            Flytics provides the auditable technical telemetry and autonomous flight orchestration required for enterprise-scale drone operations.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a
              href="#"
              className="bg-accent text-bg px-12 py-5 font-bold uppercase tracking-[0.1em] text-[0.9rem] flex items-center hover:opacity-90 transition-opacity rounded-[2px]"
            >
              Request Platform Access
            </a>
            <a
              href="#"
              className="text-[0.9rem] font-semibold underline underline-offset-8 text-accent hover:text-white transition-colors"
            >
              View Documentation
            </a>
          </div>
        </motion.div>
      </div>

      <div className="h-[400px] lg:h-auto w-full bg-surface relative overflow-hidden border-b lg:border-b-0 border-border-main">
        <img
          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop"
          alt="Drone on landing pad at sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 to-transparent"></div>
      </div>
    </div>
  );
}

function LogoCloud() {
  return (
    <div className="bg-bg border-b border-border-main py-10 shrink-0 w-full">
      <div className="px-10 md:px-14">
        <p className="font-main text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase mb-8 md:text-left text-center">
          Trusted by Enterprise Operators
        </p>
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 md:gap-12 opacity-80 mix-blend-plus-lighter">
          <span className="text-xl md:text-2xl font-bold tracking-widest text-[#444] uppercase">AEROSPACE</span>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#444] uppercase">ENVIRO-CO</span>
          <span className="text-[1.35rem] md:text-2xl font-display font-normal text-[#444] tracking-tight italic normal-case">Logic-drn</span>
          <span className="text-xl md:text-2xl font-black text-[#444] uppercase">G-MAPS</span>
          <span className="text-xl md:text-2xl font-semibold tracking-wider text-[#444] uppercase">CONSTRUX</span>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-muted" />,
      title: 'Auditable Compliance',
      description: 'Every flight second is logged with cryptographic hashes, ensuring data integrity for regulatory and legal standards.',
    },
    {
      icon: <SignalHigh className="h-6 w-6 text-muted" />,
      title: 'Live Telemetry',
      description: 'Real-time GPS, altitude, and battery health streaming with sub-200ms latency across global networks.',
    },
    {
      icon: <Network className="h-6 w-6 text-muted" />,
      title: 'Fleet Orchestration',
      description: 'Manage complex concurrent missions with automated deconfliction and centralized pilot command centers.',
    },
  ];

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] shrink-0 w-full bg-bg border-b border-border-main">
      <div className="hidden lg:flex p-10 md:p-14 border-r border-border-main flex-col justify-center max-w-[800px]">
        <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted mb-6 flex items-center gap-3">
          <div className="w-10 h-px bg-[#333]"></div>
          Core Capabilities
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.85] font-normal tracking-[-0.02em] text-accent">
          Technical precision.<br /><span className="italic text-muted">Operational proof.</span>
        </h2>
        <p className="mt-8 text-[1.1rem] text-[#888] max-w-[400px] leading-[1.6]">
          We eliminate the ambiguity of flight data through high-frequency telemetry and rigorous compliance logging.
        </p>
      </div>

      <div className="bg-surface p-10 md:p-14 flex flex-col justify-between">
        <div className="lg:hidden mb-12">
          <h2 className="font-display text-4xl leading-[0.9] font-normal text-accent mb-4">
            Technical precision.<br /><span className="italic text-muted">Operational proof.</span>
          </h2>
          <p className="text-[#888] leading-[1.5]">We eliminate the ambiguity of flight data through high-frequency telemetry and rigorous compliance logging.</p>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="border-t border-[#333] pt-6 mb-10 last:mb-0 max-w-[450px]">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-[2rem] text-[#333] leading-none">0{index + 1}</div>
              <div className="opacity-70">{feature.icon}</div>
            </div>
            <h3 className="text-[1.1rem] font-semibold text-accent mb-3">
              {feature.title}
            </h3>
            <p className="text-[0.9rem] text-[#666] leading-[1.5]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ecosystem() {
  const items = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      title: 'Client Portal',
      description: 'Transparent mission tracking and data delivery for enterprise stakeholders.',
      active: true,
    },
    {
      icon: <Plane className="h-5 w-5" />,
      title: 'Pilot Command',
      description: 'Tactical flight controls, airspace awareness, and real-time sensor feeds.',
      active: false,
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: 'Operations Hub',
      description: 'Fleet maintenance scheduling, pilot certification tracking, and incident logging.',
      active: false,
    },
  ];

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_1.2fr] shrink-0 w-full bg-bg border-b border-border-main">

      <div className="bg-surface p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-border-main flex items-center justify-center min-h-[400px] lg:h-auto overflow-hidden relative">
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#0c0c0c]/80 text-[0.6rem] font-mono tracking-wider font-semibold text-accent uppercase rounded-[2px] backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-none animate-pulse"></div>
          Drone_07: Active
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[800px] border border-[#222]"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            alt="Flytics Dashboard"
            className="w-full object-cover grayscale mix-blend-screen opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent mix-blend-multiply"></div>
        </motion.div>
      </div>

      <div className="p-10 md:p-14 flex flex-col justify-center">
        <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted mb-6 flex items-center gap-3">
          <div className="w-10 h-px bg-[#333]"></div>
          Platform Architecture
        </div>

        <h2 className="font-display text-5xl md:text-6xl leading-[0.9] font-normal mb-12 tracking-[-0.02em] text-accent">
          A Unified <span className="italic text-muted">Ecosystem.</span>
        </h2>

        <div className="max-w-[500px]">
          {items.map((item, index) => (
            <div key={index} className={`border-t border-[#333] pt-6 flex flex-col transition-opacity ${item.active ? 'opacity-100' : 'opacity-60'} mb-8 pb-2`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-muted">{item.icon}</span>
                <h4 className="font-semibold text-[1.1rem] text-accent">{item.title}</h4>
              </div>
              <p className="text-[0.9rem] text-[#888] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function CTA() {
  return (
    <div className="bg-bg p-10 py-24 md:p-24 flex flex-col items-center justify-center text-center border-b border-border-main shrink-0 w-full relative">
      <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted mb-4 flex items-center gap-3">
        <div className="w-4 h-px bg-[#333]"></div>
        Start Scaling
        <div className="w-4 h-px bg-[#333]"></div>
      </div>

      <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[0.9] font-normal mb-8 tracking-[-0.02em] text-accent max-w-4xl">
        Ready to scale your <span className="italic text-muted">operations?</span>
      </h2>
      <p className="text-[1.2rem] text-[#888] leading-[1.6] mb-12 max-w-2xl font-light">
        Join the league of enterprise operators who trust Flytics for technical precision and auditable outcomes.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <a href="#" className="bg-accent text-bg px-12 py-5 font-bold uppercase tracking-[0.1em] text-[0.9rem] rounded-[2px] transition-opacity hover:opacity-90">
          Get Started
        </a>
        <a href="#" className="text-[0.9rem] font-semibold underline underline-offset-8 text-accent cursor-pointer hover:text-white transition-colors">
          Schedule a Demo
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="h-auto md:h-[120px] bg-bg flex flex-col md:flex-row items-center px-10 py-10 md:py-0 md:px-14 justify-between w-full shrink-0">

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 w-full md:w-auto mb-10 md:mb-0">
        <div className="font-extrabold text-[1.5rem] tracking-[-0.05em] uppercase text-accent hidden md:block">
          Flytics.
        </div>

        <div className="flex items-center gap-10 md:gap-16 w-full justify-center md:justify-start">
          <div className="flex flex-col">
            <span className="text-[1.5rem] font-bold text-accent mb-1 leading-none tracking-tight">99.99%</span>
            <span className="text-[0.65rem] text-muted uppercase tracking-[0.1em] font-semibold">Uptime SLA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[1.5rem] font-bold text-accent mb-1 leading-none tracking-tight">40ms</span>
            <span className="text-[0.65rem] text-muted uppercase tracking-[0.1em] font-semibold">Avg Latency</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[1.5rem] font-bold text-accent mb-1 leading-none tracking-tight">1.2M+</span>
            <span className="text-[0.65rem] text-muted uppercase tracking-[0.1em] font-semibold">Active Nodes</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        <div className="md:hidden font-extrabold text-[1.2rem] tracking-[-0.05em] uppercase text-accent">
          Flytics.
        </div>

        Developed with &hearts; by <a target="_blank" href="https://github.com/elqabasy" className="underline underline-offset-4 text-[#4CAF50] hover:text-[#66bb6a] transition-colors">0xQ4B4S</a>
      </div>

    </footer>
  );
}

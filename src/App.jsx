

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, NavLink, Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want
    });
  }, [pathname]);

  return null;
}

/* --- UMC theme colors (tweak if you like) --- */
const COLORS = {
  green: "#1F6B4A",
  greenHover: "#245d45",
  panelBorder: "rgba(255,255,255,0.08)",
};

/* ===========================
   Layout: dark-green page bg,
   inner black/grey panel card
   with top navigation
=========================== */
const UMC_GREEN = "#1F6B4A";
const UMC_GREEN_HOVER = "#245d45";

/* Boxed tab link: always filled green, compact padding */
function TabLink({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          // base shape
          "relative inline-flex items-center justify-center",
          "h-10 px-4",
          "rounded-md",
          "text-[13px] font-semibold tracking-wide uppercase",
          "select-none whitespace-nowrap",

          // glass / panel look
          "bg-white/5 backdrop-blur-md",
          "border border-white/10",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",

          // text
          "text-white/90",

          // hover / press
          "transition-all duration-200",
          "hover:bg-white/8 hover:border-white/20 hover:text-white",
          "active:translate-y-[1px] active:bg-white/10",

          // active state (keeps color decision flexible)
          isActive
            ? "bg-white/10 border-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.10)]"
            : "",

          // subtle “scanline” highlight bar at top
          "before:absolute before:inset-x-1 before:top-1 before:h-px before:rounded",
          "before:bg-white/15 before:content-['']",
          isActive ? "before:bg-white/25" : "",

          // optional: thin bottom accent line for active
          isActive
            ? "after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:rounded after:bg-white/40 after:content-['']"
            : "after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:rounded after:bg-white/0 after:content-['']",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}


function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fix old legacy URL with spaces
    if (location.pathname.toLowerCase() === "/enlist today") {
      navigate("/enlist-today", { replace: true });
    }
  }, [location.pathname, navigate]);
  return (
    /* PAGE BACKGROUND (space image on left/right) */
    <div
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/UMCwebsitewallpaper.jpg')",
               backgroundSize: "clamp(1200px, 120vw, 2200px) auto",
            }}
    >
      {/* Optional overlay to keep the page dark */}
      <div className="min-h-screen bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* PANEL: full-height, square, with its own background image */}
          <div
            className="relative min-h-screen shadow-2xl border overflow-hidden rounded-none"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {/* ===== Panel background layers ===== */}
            {/* Panel image */}
            <div
  aria-hidden
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundColor: "#000000" }}
/>

            {/* Scrim to keep content readable */}
            <div aria-hidden className="absolute inset-0 bg-black/60" />
            <div aria-hidden className="absolute inset-0 pointer-events-none umc-atmos" />
            {/* Subtle vignette */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,0.0), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)",
              }}
            />

            {/* ===== Panel content (sits above the bg layers) ===== */}
            <div className="relative">
              {/* ===== TOP BANNER (ALWAYS VISIBLE) ===== */}
      
              <header className="fixed top-0 left-0 right-0 z-50">
  {/* Full-width glass bar */}
  <div
    className="border-b backdrop-blur-md"
    style={{
      backgroundColor: "rgba(0,0,0,0.55)",
      borderColor: "rgba(255,255,255,0.10)",
    }}
  >
    
    {/* IMPORTANT: this matches your panel symmetry */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-20 md:h-24 grid grid-cols-[auto_1fr_auto] items-center">
        {/* LEFT: logo (HOME button) */}
<NavLink
  to="/"
  aria-label="Go to Home"
  className="group inline-flex items-center"
>
  <img
    src="/screenshots/UMC_Logo_Transparency.webp"
    alt="UMC Home"
    className="h-30 md:h-24 w-auto object-contain flex-shrink-0 -ml-1
               transition-transform duration-300
               group-hover:scale-105
               group-hover:drop-shadow-[0_0_10px_rgba(140,180,90,0.6)]"
  />
</NavLink>


        {/* CENTER: title */}
        <div className="flex items-center gap-3 min-w-0 -ml-6 md:-ml-8">
          <div className="uppercase font-extrabold tracking-tight leading-none whitespace-nowrap
                          text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            
          </div>
        </div>

        {/* RIGHT: nav */}
        <nav className="justify-self-end">
          <ul className="flex flex-nowrap items-center gap-2 md:gap-3 lg:gap-4">
  <li><TabLink to="/our-mission" label="OUR MISSION" /></li>
          
  <li><TabLink to="/choose-your-path" label="CHOOSE YOUR PATH" /></li>

  {/* New tabs */}
  

  <li><TabLink to="/enlist-today" label="Enlist Today" /></li>
  <li><TabLink to="/umc-gallery" label="UMC GALLERY" /></li>
</ul>

        </nav>
      </div>
    </div>
  </div>
</header>

              {/* MAIN CONTENT (push down so it isn't hidden under the fixed banner) */}
              <main id="main" className="px-5 sm:px-8 pb-10 pt-24 md:pt-28">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



/* ===========================
   UMC Command Console (alive + interactive)
=========================== */
function CommandConsole({ className = "" }) {
  const navigate = useNavigate();

  const BOOT_LINES = useMemo(
    () => [
      "UMC COMMAND INTERFACE v2.7",
      "AUTHENTICATING USER...",
      "ACCESS GRANTED",
      "",
      "OPERATIONAL STATUS: ACTIVE",
      "SECTOR: PYRO / STANTON",
      "PRIMARY ROLE: SECURITY & LOGISTICS",
      "",
      "INITIALIZING TACTICAL OVERLAY...",
      "LINK: SATCOM // OK",
      "LINK: FLEETNET // OK",
      "LINK: IFF GRID // OK",
      "",
      "      _   _ __  __  ____",
      "     | | | |  \\/  |/ ___|",
      "     | | | | |\\/| | |",
      "     | |_| | |  | | |___",
      "      \\___/|_|  |_|\\____|",
      "",
      ">>> Awaiting Command Input_",
      "",
    ],
    []
  );

  const [bootText, setBootText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  const [history, setHistory] = useState([]); // lines after boot
  const [input, setInput] = useState("");
  const [hint, setHint] = useState("Type 'help' and press Enter.");

  const scrollRef = useRef(null);

  // Typing boot sequence (char-by-char)
  useEffect(() => {
    if (bootDone) return;

    if (lineIndex >= BOOT_LINES.length) {
      setBootDone(true);
      return;
    }

    const currentLine = BOOT_LINES[lineIndex];
    const isEmpty = currentLine.length === 0;

    const typingDelay = isEmpty ? 10 : 16;
    const linePause = isEmpty ? 70 : 110;

    const t = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setBootText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setBootText((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, charIndex < currentLine.length ? typingDelay : linePause);

    return () => clearTimeout(t);
  }, [BOOT_LINES, bootDone, charIndex, lineIndex]);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [bootText, history]);

  function pushLines(lines) {
    setHistory((prev) => [...prev, ...lines]);
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();

    if (!cmd) return;

    // Echo the command
    pushLines([`> ${raw}`]);

    const out = [];
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");

    if (cmd === "help") {
      out.push(
        "AVAILABLE COMMANDS:",
        "  help            - show command list",
        "  status          - operational readout",
        "  ops             - open Operations",
        "  lsco            - open LSCO",
        "  personnel       - open Personnel",
        "  archives        - open UMC Archives",
        "  time            - local time",
        "  clear           - clear console output"
      );
      setHint("Try: status  |  ops  |  clear");
    } else if (cmd === "status") {
      out.push(
        "STATUS: ACTIVE",
        "SECTOR: PYRO / STANTON",
        "THREAT LEVEL: ELEVATED",
        "UPLINK: STABLE",
        "ORDERS: HOLD PATROL / STANDBY INTERDICTION"
      );
    } else if (cmd === "time") {
      out.push(`LOCAL TIME: ${hh}:${mm}`);
    } else if (cmd === "ops") {
      out.push("Routing → /operations");
      navigate("/operations");
    } else if (cmd === "lsco") {
      out.push("Routing → /lsco");
      navigate("/lsco");
    } else if (cmd === "personnel") {
      out.push("Routing → /personnel");
      navigate("/personnel");
    } else if (cmd === "archives") {
      out.push("Routing → /history");
      navigate("/history");
    } else if (cmd === "clear") {
      setHistory([]);
      setHint("Console cleared. Type 'help'.");
      return;
    } else {
      out.push(`UNKNOWN COMMAND: ${cmd}`, "Type 'help' for available commands.");
      setHint("Try: help");
    }

    out.push(""); // blank line spacing
    pushLines(out);
  }

  return (
    <div
      className={[
        "relative border backdrop-blur-sm umc-flicker",
        "h-full flex",
        className,
      ].join(" ")}
      style={{
        borderColor: "rgba(0,255,120,0.25)",
        background: "rgba(0,0,0,0.65)",
        boxShadow: "0 0 0 1px rgba(0,255,120,0.08), 0 0 24px rgba(0,255,120,0.08)",
      }}
    >
      {/* Alive FX layers */}
      <div className="umc-noise" />
      <div className="umc-scanline" />

      <div className="w-full p-4 flex flex-col">
        {/* Scrollable output */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-auto pr-1"
          style={{ scrollbarGutter: "stable" }}
        >
          <pre
            className="text-sm leading-relaxed font-mono whitespace-pre-wrap"
            style={{
              color: "#00ff88",
              textShadow: "0 0 8px rgba(0,255,140,0.35)",
            }}
          >
            {bootText}
            {history.length ? history.join("\n") + "\n" : ""}
          </pre>
        </div>

        {/* Input line */}
        <div className="mt-3 border-t pt-3" style={{ borderColor: "rgba(0,255,120,0.18)" }}>
          <div className="flex items-center gap-2 font-mono text-sm">
            <span style={{ color: "#00ff88" }}>&gt;</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  runCommand(input);
                  setInput("");
                }
              }}
              disabled={!bootDone}
              placeholder={bootDone ? hint : "Booting..."}
              className="w-full bg-transparent outline-none"
              style={{
                color: "#00ff88",
                caretColor: "#00ff88",
              }}
            />
            <span className="animate-pulse" style={{ color: "#00ff88" }}>
              █
            </span>
          </div>

          <div className="mt-1 text-xs font-mono" style={{ color: "rgba(0,255,136,0.55)" }}>
            {bootDone ? hint : "Initializing..."}
          </div>
        </div>
      </div>
    </div>
  );
}




/* ===========================
   HOME: matches your mock
   Left: emblem image
   Right: headline + text + CTA
=========================== */
function PageHome() {
  return (
    <section className="pt-10 pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* BIG TITLE */}
        <h1
          className="
            uppercase font-extrabold tracking-tight leading-none text-center
            text-[clamp(34px,5.2vw,90px)]
            w-full
          "
        >
          UNITED MILITARY COALITION
        </h1>

        {/* IMAGE (replaces the small text line) */}
        <div
          className="mt-6 rounded-none overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Keep consistent sizing */}
          <div className="aspect-[24/14]">
            <img
              src="/home/homescreen.webp"  // 👈 put your image here (public/home/landing-banner.webp)
              alt="UMC Landing Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="mt-8 max-w-3xl mx-auto text-center text-white/85 leading-relaxed space-y-4">
          <p className="text-base sm:text-lg">
            The United Military Coalition is a disciplined anti-piracy and anti-xenothreat organization founded on teamwork, 
            integrity, and clear communication. Members must follow proper communication standards, maintain operational security, 
            match their Discord and in-game identities, and participate in at least one official UMC operation each month.
          </p>

          <p className="text-base sm:text-lg">
           In operations, UMC members place the safety of fellow coalition forces first and strictly uphold ethical engagement. 
           Piracy, griefing, and attacks on neutral players are forbidden. Engagement is only authorized against hostile forces, 
           players with active bounties, or those who initiate combat. Clear chain of command must be respected. Violations of conduct 
           or discipline may result in corrective action up to permanent removal, and members may not be affiliated with 
           pirate or griefing organizations.
          </p>
        </div>
      </div>
    </section>
  );
}





function PageOurMission() {
  return (
    <section className="pt-6 pb-6">
      {/* Match the same width as your banner/panel for symmetry */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Headline + text aligned to the right but spanning full panel width */}
          <div className="col-span-12">
            {/* ONE-LINE headline spanning the panel */}
            <h1 className="uppercase font-extrabold tracking-tight leading-tight
                text-[clamp(32px,4.5vw,80px)]
                max-w-[1400px] mx-auto px-6">
              UNITED IN MISSION, COURAGEOUS IN ACTION.
            </h1>

            {/* Move copy up with it */}
            
          </div>
        </div>
<p>

</p>
<p>
  
</p>
<p>
  
</p>
<p>
  
</p>
{/* 3 CAPABILITY BOXES (pulled up) */}
<div className="mt-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative z-10 items-stretch">

    {/* Card 1 */}
    <NavLink to="/providing-security" className="block h-full cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl border backdrop-blur-sm p-6 md:p-7
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:shadow-[0_0_35px_rgba(93,101,50,0.45)]
                   h-full flex flex-col"
        style={{
          backgroundColor: "rgba(93, 101, 50, 0.55)",
          borderColor: "rgba(93, 101, 50, 0.85)",
        }}
      >
        <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.10]">
          <ShieldMark />
        </div>

        <div className="relative flex flex-col h-full">
          <h3 className="text-lg font-bold uppercase tracking-wide text-black/80">
            Providing Security
          </h3>

          <p className="mt-2 text-black/80 text-sm leading-relaxed">
            Patrols, escorts, and rapid response to protect civilians, convoys,
            and strategic infrastructure.
          </p>

          <div className="mt-auto pt-4 text-sm uppercase tracking-wider text-black/60">
            Frontier Stability • Deterrence • Control
          </div>
        </div>
      </div>
    </NavLink>

    {/* Card 2 */}
    <NavLink to="/search-rescue" className="block h-full cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl border backdrop-blur-sm p-6 md:p-7
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:shadow-[0_0_35px_rgba(93,101,50,0.45)]
                   h-full flex flex-col"
        style={{
          backgroundColor: "rgba(93, 101, 50, 0.55)",
          borderColor: "rgba(93, 101, 50, 0.85)",
        }}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 opacity-[0.10]">
          <RadarMark />
        </div>

        <div className="relative flex flex-col h-full">
          <h3 className="text-lg font-bold uppercase tracking-wide text-black/80">
            Search &amp; Rescue
          </h3>

          <p className="mt-2 text-black/80 text-sm leading-relaxed">
            Medical evac, recovery operations, and emergency extraction
            in hostile or remote sectors.
          </p>

          <div className="mt-auto pt-4 text-xs uppercase tracking-wider text-black/80">
            Recovery • Evac • Emergency Response
          </div>
        </div>
      </div>
    </NavLink>

    {/* Card 3 */}
    <NavLink to="/neutralize-threats" className="block h-full cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl border backdrop-blur-sm p-6 md:p-7
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:shadow-[0_0_35px_rgba(93,101,50,0.45)]
                   h-full flex flex-col"
        style={{
          backgroundColor: "rgba(93, 101, 50, 0.55)",
          borderColor: "rgba(93, 101, 50, 0.85)",
        }}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 opacity-[0.10]">
          <AttackMark />
        </div>

        <div className="relative flex flex-col h-full">
          <h3 className="text-lg font-bold uppercase tracking-wide text-black/80">
            Neutralize Hostile Threats
          </h3>

          <p className="mt-2 text-black/80 text-sm leading-relaxed">
            Targeted interdiction and strike operations against pirates,
            xenothreat cells, and destabilizing forces.
          </p>

          <div className="mt-auto pt-4 text-xs uppercase tracking-wider text-black/80">
            Interdiction • Strike Ops • Suppression
          </div>
        </div>
      </div>
    </NavLink>

  </div>
</div>



            
            {/* Supporting mission text */}
{/* Mission description */}
<div className="mt-16 md:mt-20 col-span-full w-full">
  <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 text-center text-white/90 leading-relaxed space-y-8">
    <p className="text-base sm:text-lg leading-relaxed">
      Within the UMC, lies a foundation of coordination, communication,
      Integrity, Solidarity and Tactical Prowess. This led to the UMC to
      rise from the unknown and as such, has maintained that ideology
      inside the UMC Structure of ranking.
    </p>

    <p className="text-base sm:text-lg leading-relaxed">
      By joining the United Military Coalition, you become part of a disciplined
      force built on honor, purpose, and responsibility. Every member strengthens
      a collective dedicated to defense, resilience, and loyalty.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}

  


/* ===== Watermark Icons (simple inline SVGs) ===== */

function ShieldMark() {
  return (
    <svg width="170" height="170" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l7 4v6c0 5-3.1 9.4-7 10-3.9-.6-7-5-7-10V6l7-4z"
        stroke="white"
        strokeWidth="1.2"
      />
      <path
        d="M12 6v12"
        stroke="white"
        strokeWidth="1.1"
        opacity="0.7"
      />
      <path
        d="M8.5 10.5l3.5-2 3.5 2"
        stroke="white"
        strokeWidth="1.1"
        opacity="0.7"
      />
    </svg>
  );
}

function RadarMark() {
  return (
    <svg width="180" height="180" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.1" />
      <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.0" opacity="0.7" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.0" opacity="0.5" />
      <path
        d="M12 12l7-3"
        stroke="white"
        strokeWidth="1.1"
      />
      <path
        d="M12 3v18M3 12h18"
        stroke="white"
        strokeWidth="0.9"
        opacity="0.45"
      />
    </svg>
  );
}

function AttackMark() {
  return (
    <svg width="190" height="190" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z"
        stroke="white"
        strokeWidth="1.0"
      />
      <path
        d="M7 17l10-10"
        stroke="white"
        strokeWidth="1.0"
        opacity="0.6"
      />
      <path
        d="M9 19l6-6"
        stroke="white"
        strokeWidth="1.0"
        opacity="0.4"
      />
    </svg>
  );
}

function PageJoinUMC() {
  const [hovered, setHovered] = useState(null);

const cards = [
  {
    key: "ground",
    title: "Ground Wing",
    subtitle: "Infantry • Boarding • CQB",
    img: "/join/ground-wing.webp",
    bgPos: "top",
    info: [
      "Frontline infantry and boarding specialists.",
      "Close-quarters precision, discipline, and control.",
      "Deployable in hostile sectors and ship-to-ship actions.",
    ],
    cta: { label: "View Ground Wing", to: "/ground-wing" },
  },
  {
    key: "stratos",
    title: "Stratos Wing",
    subtitle: "Air & Space Superiority",
    img: "/join/stratos-wing.webp",
    bgPos: "50% -30px", // 👈 adjust this (top 5% / 10% / 20%) until it looks perfect
    info: [
      "Combat pilots enforcing air and space dominance.",
      "High-speed interception and close air support in active combat zones.",
      "Control the skies so Ground and LSCO forces can operate freely.",
    ],
    cta: { label: "View Stratos Wing", to: "/stratos-wing" },
  },
  {
    key: "lsco",
    title: "LSCO Wing",
    subtitle: "Logistics • Salvage • Mining",
    img: "/join/lsco-wing.webp",
    bgPos: "top",
    info: [
      "Logistics operators powering every UMC mission.",
      "Mining, salvage, transport, and supply chain execution.",
      "Without LSCO, fleets stall and operations fail.",
    ],
    cta: { label: "View LSCO Wing", to: "/lsco" },
  },
];


  return (
    <section className="py-10 md:py-14">
      

      {/* 3 vertical rectangles */}
      <div className="h-[560px] grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((c, i) => {
          const isHovered = hovered === i;
          const blurOthers = hovered !== null && hovered !== i;

          return (
            <div
              key={c.key}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={[
                "relative overflow-hidden rounded-xl border",
                "transition-all duration-300 ease-out",
                "cursor-pointer select-none",
                // expand hovered card
                isHovered ? "md:scale-[1.03] md:-translate-y-1" : "",
                // blur others
                blurOthers ? "blur-[2px] opacity-60" : "opacity-100",
              ].join(" ")}
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              {/* Background image */}
              <div
  className="absolute inset-0 bg-cover"
  style={{
    backgroundImage: `url('${c.img}')`,
    backgroundPosition: c.bgPos ?? "top",
  }}
/>


              {/* Dark gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

              {/* Content */}
              <div className="relative h-full p-6 md:p-7 flex flex-col justify-end">
                <div className="uppercase tracking-[0.18em] text-white/70 text-xs">
                  Career Path
                </div>

                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase">
                  {c.title}
                </h2>

                <div className="mt-2 text-white/80 text-sm uppercase tracking-wider">
                  {c.subtitle}
                </div>

                {/* Expand-reveal info on hover */}
                <div
                  className={[
                    "mt-5 space-y-3 text-white/85 text-sm leading-relaxed",
                    "transition-all duration-300",
                    isHovered ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
                  ].join(" ")}
                >
                  {c.info.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}

                  {/* CTA */}
                  <div className="pt-2">
                    {c.cta.to === "#" ? (
                      <span className="inline-flex items-center px-4 py-2 rounded-md border border-white/15 bg-white/5 text-white/70 text-sm">
                        {c.cta.label}
                      </span>
                    ) : (
                      <NavLink
                        to={c.cta.to}
                        className="inline-flex items-center px-4 py-2 rounded-md border border-white/15 bg-white/10 hover:bg-white/15 transition text-sm font-semibold"
                      >
                        {c.cta.label} →
                      </NavLink>
                    )}
                  </div>
                </div>

                {/* Small hint when not hovered */}
                {!isHovered && (
                  <div className="mt-4 text-white/60 text-sm">
                    Hover to expand
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      
    </section>
  );
}


function PageOperations() {
  return (
    <section className="py-12 md:py-16">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Operations</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Our organization is built on a foundation of Teamwork, Integrity, and Communication.
          We are a dedicated anti-piracy and anti-xenothreat organization..
        </p>
      </header>

      {/* ===== Block 1 – text LEFT, image RIGHT ===== */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Providing Security</h2>

          <p>
            In regions where the UEE&apos;s influence thins and law enforcement becomes inconsistent,
            the UMC stands as a stabilizing force. Our fleets operate on the frontier and outer trade
            lanes, projecting strength where it is needed most. Through contracted security operations,
            system-wide patrol rotations, and rapid-response deployments, we deter criminal activity
            before it escalates..
          </p>

          <p>
            Whether escorting high-value convoys, reinforcing vulnerable outposts, or establishing
            temporary security corridors during crises, UMC personnel bring discipline, professionalism,
            and military precision to every mission. Our independent status allows us to act quickly—
            unrestricted by bureaucratic delays—while still cooperating with UEE authorities when broader
            stability is at stake.
          </p>

          <p>
            Our presence alone has been known to shift the balance in contested sectors. Pirates avoid our
            patrol routes. Smugglers reconsider their plans. Civilians regain the confidence to travel,
            trade, and rebuild.
          </p>
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3]">
            <img
              src="/operations/UMCPatrol.webp"
              alt="Convoy security operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== Block 2 – image LEFT, text RIGHT (Search & Rescue) ===== */}
<div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
  {/* Image column (left) */}
  <div
    className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
    style={{ borderColor: "rgba(255,255,255,0.08)" }}
  >
    <div className="aspect-[16/12]">
      <img
        src="/operations/BoardandBreach.webp"
        alt="Search and Rescue operation"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

        {/* Text column (right) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Search &amp; Rescue</h2>

          <p>
            At the heart of every successful interdiction, seizure, or forced vessel capture is the UMC
            Ground Wing. Our dedicated infantry force trained for close quarters combat and precision
            ship-to-ship boarding. These operations demand more than aggression. They require discipline,
            coordination, and clarity. When a target refuses surrender, when a pirate command vessel ignores
            hails, or when xenothreat forces attempt to breach UEE-held space, it is the Ground Wing that
            crosses the gap and takes control.
          </p>

          <p>
            Boarding actions are built on layered execution. Troopers secure corridors and bulkheads with
            systematic sweep patterns, Lance Corporals direct segment to segment flow while coordinating
            breaching charges and detainment zones, and seasoned Gunnery Sergeants stabilize the entire
            engagement. In zero-visibility hull fractures, flickering gravity cycles, or decompression-compromised
            interiors, Ground Wing units move not with panic, but with practiced precision.
          </p>
        </div>
      </div>

      {/* ===== Block 3 – text LEFT, images RIGHT (stacked) ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column (left) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Neutralize Hostile Threats</h2>

          <p>
            The United Military Coalition was founded to do more than react; it was built to hunt.
            Neutralizing hostile threats is the sharp edge of that mandate. While our security and rescue
            operations protect trade lanes and civilians, our strike wings and Ground Wing elements are tasked
            with seeking out the pirate syndicates, xenothreat cells, and emerging warbands that destabilize
            entire regions of space. We do not simply wait for attacks to happen—we move into the dark spaces
            between systems and dismantle the forces that make them dangerous.
          </p>

          <p>
            UMC intelligence and reconnaissance assets map pirate traffic, identify staging points, and track
            high-value targets across the frontier. Once a cell is located, specialized task groups move in:
            carrier groups to lock down the battlespace, fast-attack elements to sever escape vectors, and
            Ground Wing boarding teams to seize command ships, data cores, and leadership personnel. Every
            operation is built around precision and control, minimizing collateral damage while ensuring that
            the hostile element cannot regroup or return under a new banner.
          </p>

          <p>
            Xenothreat incursions and Vanduul probes demand an even harsher standard. When these forces push
            into UMC-monitored space, response is immediate and decisive. Fleet elements coordinate with search
            and rescue and boarding units to contain the threat, secure survivors, and prevent contamination or
            escalation.
          </p>
        </div>

        {/* Images column (right) */}
        <div
          className="flex flex-col gap-6 rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/operations/UMCCapture.webp"
              alt="UMC hostile interdiction"
              className="w-full h-full object-cover"
            />
          </div>

          
        </div>
      </div>
      {/* Motto / Stamp */}
<div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-6
                rotate-[-8deg] select-none">
  <div className="uppercase text-white/20 border border-white/15 px-4 py-2 rounded-sm text-xs sm:text-sm tracking-[0.2em]"
       style={{ backgroundColor: "rgba(0,0,0,0.08)" }}>
    EST. 2952 — UNITED MILITARY COALITION
  </div>
</div>

    </section>
  );
}
function PageProvidingSecurity() {
  return (
    <section className="py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Providing Security</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Patrols, escorts, and rapid response to protect civilians, convoys, and strategic infrastructure.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <p>
            In regions where the UEE&apos;s influence thins and law enforcement becomes inconsistent,
            the UMC stands as a stabilizing force. Our fleets operate on the frontier and outer trade
            lanes, projecting strength where it is needed most. Through contracted security operations,
            system-wide patrol rotations, and rapid-response deployments, we deter criminal activity
            before it escalates..
          </p>

          <p>
            Whether escorting high-value convoys, reinforcing vulnerable outposts, or establishing
            temporary security corridors during crises, UMC personnel bring discipline, professionalism,
            and military precision to every mission. Our independent status allows us to act quickly—
            unrestricted by bureaucratic delays—while still cooperating with UEE authorities when broader
            stability is at stake.
          </p>

          <p>
            Our presence alone has been known to shift the balance in contested sectors. Pirates avoid our
            patrol routes. Smugglers reconsider their plans. Civilians regain the confidence to travel,
            trade, and rebuild.
          </p>
        </div>

        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3]">
            <img
              src="/operations/UMCPatrol.webp"
              alt="Convoy security operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PageSearchRescue() {
  return (
    <section className="py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Search &amp; Rescue</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Medical evac, recovery operations, and emergency extraction in hostile or remote sectors.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <p>
            At the heart of every successful rescue, recovery, or emergency extraction is the UMC Search & Rescue element.
            Our teams are trained to deploy fast into unstable conditions—hostile sectors, damaged vessels, and remote
            crash sites—where minutes matter and hesitation costs lives. These operations demand more than speed. They 
            require discipline, coordination, and clarity. When a distress beacon pings, when a ship goes dark, or 
            when civilians are trapped beyond UEE coverage, it is the UMC that pushes through and brings them home.
          </p>

          <p>
            Search & Rescue is built on layered execution. Recon units secure the approach and assess threats, medics 
            stabilize casualties under pressure, and recovery teams coordinate extraction routes and evac timing while 
            maintaining perimeter control. In zero-visibility storms, fractured hull interiors, failing life support, 
            or decompression-risk environments, UMC responders don’t move with panic—they move with practiced precision. 
            Every action is deliberate: locate, secure, extract, and evacuate.
          </p>
        </div>

        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3] bg-black/40 flex items-center justify-center text-white/60">
            <img
      src="/operations/BoardandBreach.webp"
      alt="UMC Search and Rescue operation"
      className="w-full h-full object-cover"
    />
          </div>
        </div>
      </div>
    </section>
  );
}

function PageNeutralizeThreats() {
  return (
    <section className="py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Neutralize Hostile Threats</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Targeted interdiction and strike operations against pirates, xenothreat cells, and destabilizing forces.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <p>
            The United Military Coalition was founded to do more than react; it was built to hunt.
            Neutralizing hostile threats is the sharp edge of that mandate. While our security and rescue
            operations protect trade lanes and civilians, our strike wings and Ground Wing elements are tasked
            with seeking out the pirate syndicates, xenothreat cells, and emerging warbands that destabilize
            entire regions of space.
          </p>

          <p>
            UMC intelligence and reconnaissance assets map pirate traffic, identify staging points, and track
            high-value targets across the frontier. Once a cell is located, specialized task groups move in:
            carrier groups to lock down the battlespace, fast-attack elements to sever escape vectors, and
            Ground Wing boarding teams to seize command ships, data cores, and leadership personnel.
          </p>

          <p>
            Xenothreat incursions and Vanduul probes demand an even harsher standard. When these forces push
            into UMC-monitored space, response is immediate and decisive.
          </p>
        </div>

        <div
          className="flex flex-col gap-6 rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/operations/UMCCapture.webp"
              alt="UMC hostile interdiction"
              className="w-full h-full object-cover"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
function PageGroundWing() {
  return (
    <section className="py-12 md:py-16">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Ground Wing</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          The Ground Wing is the United Military Coalition’s primary combat force—built to seize objectives,
          hold territory, and neutralize hostile threats wherever conflict erupts. From planetary surfaces and
          underground facilities to station corridors and ship-to-ship boarding actions, Ground Wing units deploy
          with discipline, precision, and decisive intent. When control must be taken and maintained, the Ground
          Wing is the coalition’s first and final answer.
        </p>
      </header>

      {/* ===== Block 1 — text LEFT, image RIGHT ===== */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Frontline Infantry</h2>

          <p>
            Frontline Infantry are the UMC’s main engagement force, deployed to secure objectives and neutralize
            hostile threats in active combat zones. These squads spearhead assaults, reinforce defensive lines, and
            execute rapid-response deployments when UMC interests are threatened or allied forces are pinned down.
          </p>

          <p>
            Trained for close-quarters combat, coordinated room-clearing, and high-risk boarding operations, infantry
            teams operate effectively in urban environments, derelict interiors, subterranean complexes, and
            zero-gravity corridors. Their role is simple: establish control, deny the enemy maneuver space, and create
            safe corridors for follow-on units and mission-critical assets.
          </p>
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3]">
            <img
              src="Groundwing/Groundwingengagement.webp" // <-- update to your file
              alt="Frontline infantry operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== Block 2 — image LEFT, text RIGHT ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image column (left) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[16/12]">
            <img
              src="/Groundwing/military.webp" // <-- update to your file
              alt="Armoured division ground vehicles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text column (right) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Armoured Division</h2>

          <p>
            The Armoured Division delivers heavy ground support through the deployment of armored vehicles and mobile
            combat platforms across contested terrain. Designed to break enemy defenses and protect advancing infantry,
            armored units provide battlefield control through superior durability, firepower, and shock-action presence.
          </p>

          <p>
            Operating tanks, troop transports, and mechanized assault vehicles, the Armoured Division spearheads
            large-scale engagements, secures open terrain, and escorts high-value convoys through hostile zones. Their
            role is to suppress enemy resistance, control lanes of movement, and provide a protected spearhead for UMC
            ground operations to advance under cover.
          </p>
        </div>
      </div>

      {/* ===== Block 3 — text LEFT, image RIGHT ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column (left) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Medical & Civilian Rescue</h2>

          <p>
            Medical and Civilian Rescue teams preserve life across combat zones and disaster-stricken regions. Embedded
            with frontline units or deployed as rapid response elements, these specialists provide immediate trauma care,
            stabilization, and evacuation support under active threat conditions.
          </p>

          <p>
            Beyond military support, rescue teams respond to civilian distress calls, infrastructure collapses, and
            hostile-area extractions—retrieving survivors and delivering aid where standard authorities cannot reach.
            Their presence reinforces UMC discipline and morale: the mission is not only to win battles, but to protect
            lives and restore stability in the wake of conflict.
          </p>
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[16/10]">
            <img
              src="/Groundwing/medrunners.webp" // <-- update to your file
              alt="Medical and civilian rescue operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add more blocks as needed… copy/paste the pattern above */}
    </section>
  );
}

function PageStratosWing() {
  return (
    <section className="py-12 md:py-16">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Stratos Wing</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          The Stratos Wing is the United Military Coalition’s flight wing—responsible for air and space superiority,
          rapid interception, and precision support across the frontier. We operate with discipline and restraint:
          Stratos units do not open fire unless fired upon first. When engagement is authorized or forced upon us,
          we execute coordinated, strategic strikes designed to end threats quickly and protect UMC personnel,
          convoys, and allied assets.
        </p>
      </header>

      {/* ===== Block 1 — image LEFT, text RIGHT (opposite of Ground Wing first block) ===== */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image column (left) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3]">
            <img
              src="/stratoswing/Light fighter.webp" // <-- add your top Stratos image here
              alt="Stratos Wing strategic flight operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text column (right) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Light Attack Squadrons</h2>
          <p>
            UMC Light Attack Squadrons form the Stratos Wing’s frontline fighter presence. Flying disciplined
            formations, these pilots specialize in high-speed interception, threat screening, and escort duty for
            UMC convoys and fleet movements through contested sectors.
          </p>
          <p>
            Standardized around the Aegis Gladius, squadrons operate as a cohesive unit—cross-cover, coordinated 
            target focus, and tight comms to prevent hostile breaks and protect friendly assets. Their mission is 
            simple: keep the skies clear so UMC operations can proceed.
          </p>
        </div>
      </div>

      {/* ===== Block 2 — text LEFT, image RIGHT ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column (left) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Scout & Recon Division</h2>
          <p>
            Referred to as the <span className="font-semibold text-white">UMC Ghosts</span>, the Scout & Recon
            Division consists of selected pilots trained for stealthy contact discovery and threat classification.
            These operators run ships suited to speed and discretion, including the{" "}
            <span className="font-semibold text-white">Anvil Arrow</span> and{" "}
            <span className="font-semibold text-white">Aegis Eclipse</span>.
          </p>
          <p>
            Ghosts locate, track, and report contacts to higher command, providing the intelligence needed to
            coordinate precise engagements. Their work prevents wasted conflict, enables ambush windows, and ensures
            that when Stratos Wing commits to action, it does so with superior awareness and timing.
          </p>
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[16/12]">
            <img
              src="/stratoswing/Scout team.webp" // <-- Gladius / formation image
              alt="UMC Light Attack Squadrons in formation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== Block 3 — image LEFT, text RIGHT ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image column (left) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[16/10]">
            <img
              src="/stratoswing/bomber.webp" // <-- Arrow / Eclipse / stealth image
              alt="UMC Ghosts conducting reconnaissance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text column (right) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Ordnance Strike Division</h2>
          <p>
            The Ordnance Strike Division is the UMC’s dedicated heavy-hitting element—tasked with high-ordnance
            delivery against spaceborne threats and ground targets. When an engagement escalates beyond fighter
            suppression, Ordnance Strike is deployed to disable key assets quickly and decisively.
          </p>
          <p>
            Specializing in bomber runs, torpedo strikes, and coordinated attack windows, these pilots focus on
            high-value targets such as command ships, fortified positions, and hardened objectives. Ordnance is never
            used casually: each strike is planned, confirmed, and executed to end threats efficiently once fired upon
            or once engagement is authorized by command.
          </p>
        </div>
      </div>

      {/* ===== Block 4 — text LEFT, image RIGHT ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column (left) */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Fleet Command Officers</h2>
          <p>
            Fleet Command Officers form the operational backbone of the United Military Coalition’s aerospace forces, 
            overseeing both capital-class vessels and all flight coordination within UMC-controlled space. These 
            officers command and pilot UMC’s largest and most powerful ships. From heavy combat corvettes to full-scale 
            capital warships. They lead fleet movements, directing engagements, and providing strategic firepower in 
            major operations. Their decisions shape the battlefield, ensuring UMC forces maintain superiority, 
            protect allied assets, and execute missions with precision and authority.
          </p>
          <p>
            In addition to capital ship command, Fleet Command Officers operate as advanced flight control specialists, 
            managing all launch, landing, and airspace coordination during UMC operations. Acting as the equivalent of 
            military air traffic controllers, they organize fighter deployments, control hangar operations, deconflict 
            combat zones, and maintain constant communication with Stratos Wing squadrons. Through clear command 
            structure and real-time coordination, Fleet Command Officers ensure every mission runs smoothly. 
            keeping UMC pilots safe, organized, and combat-ready at all times.
          </p>
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[4/3]">
            <img
              src="/stratoswing/captital ship pilot.webp" // <-- bomber/torpedo image
              alt="UMC Ordnance Strike Division delivering payloads"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}



function PageLSCO() { 
  return (
  <section className="py-12 md:py-16">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Logistic Supply Chain Operation</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          The strength of the United Military Coalition is not defined solely by firepower or 
          command. It is sustained by logistics. The Logistics & Supply Chain Operations division is 
          the unseen backbone of the UMC, ensuring that every ship is fueled, every weapon supplied, 
          and every operation supported. Without LSCO, patrols stall, rescue missions fail, and fleets fall silent.
        </p>
      </header>

      {/* ===== Block 1 — text LEFT, image RIGHT ===== */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Logistics & Resupplying</h2>
          <p>
            Logistics and Resupplying form the backbone of LSCO operations, ensuring UMC fleets, ground forces,
            and rescue elements remain fully operational across the frontier. From fuel, ammunition, and ship 
            components to medical supplies and provisions, this division guarantees that no UMC operation stalls
            due to lack of resources. Operating far beyond consistent UEE coverage, LSCO logistics teams establish
            and maintain supply routes into volatile and underserved systems where reliability is critical and 
            failure is not an option.
          </p>
          <p>
          Through adaptive sourcing, mobile supply nodes, and carefully planned transport routes, LSCO keeps assets
          flowing even under hostile conditions. Supplies are delivered to forward operating bases, patrol elements, 
          and active combat zones with speed and discretion. This constant logistical presence allows UMC forces to 
          stay deployed longer, respond faster, and operate independently without reliance on fragile external 
          supply chains.
          </p>
          
        </div>

        {/* Image column (right) */}
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Use aspect to keep a consistent box even while loading */}
          <div className="aspect-[4/3]">
            <img
              src="/LSCO/Logistics.webp"   // <-- update to your file name
              alt="Convoy security operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

   {/* ===== Block 2 – Boarding & Breach ===== */}
<div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
  {/* Image column (left) */}
  <div
    className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
    style={{ borderColor: "rgba(255,255,255,0.08)" }}
  >
    <div className="aspect-[16/12]">
      <img
        src="/LSCO/Salvage.webp"
        alt="Boarding operation"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Text column (right) */}
  <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
    <h2 className="text-2xl md:text-3xl font-semibold">Salvage & Repair</h2>

    <p>
      Salvage and Repair operations allow the UMC to reclaim value from conflict and reduce dependence on 
      regulated markets. LSCO salvage teams recover usable hull sections, ship components, weapons systems, 
      and sensitive materials from derelicts, abandoned stations, and battlefields. These recovered assets are 
      assessed, catalogued, and either reconditioned for reuse or broken down for refinement and fabrication.
    </p>

    <p>
      Repair crews operate from concealed yards, forward operating bases, and mobile platforms capable of rapid 
      field repairs. Whether restoring battle-damaged ships, reinforcing armor systems, or fabricating replacement 
      components, this division ensures UMC assets return to service quickly. Salvage and Repair is not simply 
      recovery—it is force sustainability, keeping ships flying and operations continuous even in prolonged engagements.
    </p>
  </div>
</div>
{/* ===== Block 3 – Neutralize Hostile Threats ===== */}
<div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
  {/* Text column (left) */}
  <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
    <h2 className="text-2xl md:text-3xl font-semibold">Mining & Refining</h2>

    <p>
      Mining and Refining provides the raw materials that fuel the UMC’s independence. LSCO mining operations extract 
      critical minerals and exotic resources from asteroid belts, planetary surfaces, and remote systems beyond heavy 
      regulation. These materials form the foundation of UMC ship construction, armor reinforcement, ammunition 
      production, and structural repairs.
    </p>

    <p>
      Once extracted, resources are processed through LSCO refinement facilities, converting raw ore into combat-ready
      alloys and specialized materials. By controlling this pipeline from extraction to refinement, LSCO minimizes 
      reliance on external suppliers and volatile markets. Mining and Refining ensures that the UMC is not just 
      supplied for today’s operations, but prepared for long-term sustainability across the frontier.
</p>  
  </div>

  {/* Image column (right) */}
  <div
    className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
    style={{ borderColor: "rgba(255,255,255,0.08)" }}
  >
    <div className="aspect-[16/10]">
      <img
        src="/LSCO/Mining.webp"  // update to your file
        alt="UMC strike group engaging hostiles"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

<div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
  {/* Image column (left) */}
  <div className="rounded-none overflow-hidden border">
    <div className="aspect-[4/3]">
      <img
        src="/LSCO/Engineering.webp"
        alt="Salvage operation"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Text column (right) */}
  <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
    <h2 className="text-2xl md:text-3xl font-semibold">UMC Engineer</h2>
    <p>
      UMC Engineers are responsible for the construction, maintenance, and operational readiness of Coalition ships 
      and infrastructure. From frontline vessels and logistics haulers to forward operating bases and concealed depots, 
      Engineers ensure that every UMC asset remains structurally sound, fully functional, and mission-capable. 
      They oversee ship maintenance cycles, system diagnostics, power management, and structural repairs, often working 
      under time pressure in hostile or remote environments.
    </p>

    <p>
      Beyond ship upkeep, UMC Engineers play a critical role in base construction and expansion. They design, build, and 
      reinforce forward operating bases, supply depots, and repair facilities across UMC-controlled space. Whether 
      establishing a temporary staging outpost on the frontier or fortifying a long-term installation, Engineers ensure 
      that UMC forces have safe, reliable infrastructure to operate from. Their expertise allows the Coalition to adapt 
      quickly, recover faster from damage, and maintain a permanent presence where others cannot.

    </p>
  </div>
</div>


      {/* Add more blocks as needed… just copy/paste the pattern above */}
    </section>
  );
}


function PageEnlistToday() {
  return (
    <section className="py-10 md:py-14 text-center">

      {/* BIG BANNER */}
      <div
        className="rounded-none border overflow-hidden"
        style={{
          borderColor: "rgba(255,255,255,0.10)",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0.35), rgba(0,0,0,0.75))",
        }}
      >
        <div className="px-6 sm:px-10 py-10 md:py-14">

          <h1 className="uppercase font-extrabold tracking-tight leading-none text-[clamp(34px,5.2vw,88px)]">
            Join The UMC Today!
          </h1>

          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Enlist with the United Military Coalition — a disciplined anti-piracy and anti-xenothreat force built on
            teamwork, integrity, and communication.
          </p>

        </div>
      </div>

      {/* CHARTER */}
      <div className="mt-10 space-y-8">

        <header className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            United Military Coalition (UMC) Charter
          </h2>

          <p className="text-white/80 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold">Mission:</span> To be a disciplined force built on Teamwork, Integrity, and
            Communication. We are an <span className="font-semibold">anti-piracy</span> and{" "}
            <span className="font-semibold">anti-xenothreat</span> organization ensuring operational success and member security.
          </p>
        </header>

        {/* SECTION BOX STYLE */}
        {[
          {
            title: "Section 1: Core Code of Conduct",
            subtitle: "This is how all members must conduct themselves.",
            items: [
              ["Use Common Sense", "If you have to think twice, it’s probably harmful to the community."],
              ["Respect & Maturity", "No harassment, hate speech, bullying, or discrimination."],
              ["Representation", "Your actions reflect on the UMC. Keep conduct and ship names on-brand."],
              ["Prohibited Content", "No illegal, pornographic, or graphically violent content."],
              ["No Spam or Poaching", "No promotion without High Command approval."],
              ["RL First", "Real life comes first. Notify command if absent."],
            ],
          },

          {
            title: "Section 2: Rules of Engagement (ROE)",
            subtitle: "This governs all in-game operations.",
            items: [
              ["UMC Members First", "Prioritize member safety and respond to aid calls."],
              ["No Piracy", "Do not attack neutral vessels for cargo."],
              ["No Griefing", "No pad ramming, repeated kills, or extortion."],
              ["Cleared to Engage", "CrimeStat 3+, hostile fire, or known enemies (Vanduul, XenoThreat)."],
              ["Neutral Engagement", "No firing on neutrals without provocation."],
            ],
          },

          {
            title: "Section 3: Communications & Operations",
            subtitle: "Clear communication is key to teamwork.",
            items: [
              ["ID Requirement", "Discord nickname must match RSI Handle."],
              ["Voice Comms", "Clear, no noise, respect active channels."],
              ["OPSEC", "No sensitive info in public channels."],
              ["Attendance", "Attend at least one UMC Operation per month."],
              ["Loot & Salvage", "Official Ops fund UMC. Casual play agreed beforehand."],
            ],
          },

          {
            title: "Section 4: Structure & Discipline",
            subtitle: "",
            items: [
              ["Chain of Command", "Respect leadership and raise issues properly."],
              ["Discipline", "Violations may lead to removal."],
              ["Morals", "No pirate or griefing org affiliations."],
            ],
          },
        ].map((section, i) => (
          <div
            key={i}
            className="rounded-xl border p-6 md:p-7 backdrop-blur-sm space-y-4"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
          >
            <h3 className="text-lg md:text-xl font-bold">{section.title}</h3>

            {section.subtitle && (
              <p className="text-white/75">{section.subtitle}</p>
            )}

            <div className="space-y-3 text-white/85 leading-relaxed max-w-3xl mx-auto">

              {section.items.map((item, idx) => (
                <p key={idx}>
                  <span className="font-semibold">{item[0]}:</span> {item[1]}
                </p>
              ))}

            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="mt-14 md:mt-20 space-y-5">

        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Enlist?
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
          If you agree with the UMC Charter and are ready to operate as part of a disciplined,
          coordinated force — join us below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">

          <a
            href="https://discord.gg/67h9QT22A5"
            target="_blank"
            rel="noreferrer"
            className="h-12 px-7 flex items-center justify-center rounded-md border border-white/15 bg-white/15 hover:bg-white/20 transition font-semibold"
          >
            Join UMC Discord
          </a>

          <a
            href="https://robertsspaceindustries.com/en/orgs/TUMC"
            target="_blank"
            rel="noreferrer"
            className="h-12 px-7 flex items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold text-white/90"
          >
            View UMC on RSI Spectrum
          </a>

        </div>
      </div>

    </section>
  );
}


function PageUMCGallery() {
  // ✅ 21 images (matches your Finder names)
  // Put these files in: /public/gallery/
  const items = useMemo(
    () => [
      {
        src: encodeURI("/gallery/Align and Mine - 04-09-25 - LSCO.webp"),
        title: "Align and Mine",
        tag: "LSCO",
        date: "2025-09-04",
      },
      {
        src: encodeURI("/gallery/ASD Engineering Facility - 31-08-25 - Ground wing.webp"),
        title: "ASD Engineering Facility",
        tag: "Ground",
        date: "2025-08-31",
      },
      {
        src: encodeURI("/gallery/Briefing room - 21-08-25 - Stratos wing.webp"),
        title: "Briefing room",
        tag: "Stratos",
        date: "2025-08-21",
      },
      {
        src: encodeURI("/gallery/Cracking the Quant - 01-10-25 - LSCO.png"),
        title: "Cracking the Quant",
        tag: "LSCO",
        date: "2025-10-01",
      },
      {
        src: encodeURI("/gallery/Fighters coming to land - 23-06-25 - Stratos.webp"),
        title: "Fighters coming to land",
        tag: "Stratos",
        date: "2025-06-23",
      },
      {
        src: encodeURI("/gallery/Fun on the Job - 22-09-25 - LSCO.webp"),
        title: "Fun on the Job",
        tag: "LSCO",
        date: "2025-09-22",
      },
      {
        src: encodeURI("/gallery/IKTIII - 27-07-25 - ground wing.webp"),
        title: "IKTIII",
        tag: "Ground",
        date: "2025-07-27",
      },
      {
        src: encodeURI("/gallery/LSCO Logistics keeping track of our munitions - 19-12-25 - LSCO.webp"),
        title: "LSCO Logistics keeping track of our munitions",
        tag: "LSCO",
        date: "2025-12-19",
      },
      {
        src: encodeURI("/gallery/Not where you dump the containers - 20-09-25 - LSCO.webp"),
        title: "Not where you dump the containers",
        tag: "LSCO",
        date: "2025-09-20",
      },
      {
        src: encodeURI("/gallery/Onyx Research Facility - 23-09-25 - Ground Wing.webp"),
        title: "Onyx Research Facility",
        tag: "Ground",
        date: "2025-09-23",
      },
      {
        src: encodeURI("/gallery/re-arming - 20-07-25 - LSCO.webp"),
        title: "re-arming",
        tag: "LSCO",
        date: "2025-07-20",
      },
      {
        src: encodeURI("/gallery/Stratos wing - 20-07-25 - Stratos.webp"),
        title: "Stratos wing",
        tag: "Stratos",
        date: "2025-07-20",
      },
      {
        src: encodeURI("/gallery/UMC Fighter with fleet behind - 20-07-25 - Stratos.webp"),
        title: "UMC Fighter with fleet behind",
        tag: "Stratos",
        date: "2025-07-20",
      },
      {
        src: encodeURI("/gallery/UMC posing before a mission - 04-09-25 - Ground Wing.webp"),
        title: "UMC posing before a mission",
        tag: "Ground",
        date: "2025-09-04",
      },
      {
        src: encodeURI("/gallery/UMC rolling out - 22-08-25 - Ground wing.webp"),
        title: "UMC rolling out",
        tag: "Ground",
        date: "2025-08-22",
      },
      {
        src: encodeURI("/gallery/UMC Strapped in on dropship - 21-10-25 - Ground Wing.webp"),
        title: "UMC Strapped in on dropship",
        tag: "Ground",
        date: "2025-10-21",
      },
      {
        src: encodeURI("/gallery/UMC with a view - 20-08-25 - Ground Wing.webp"),
        title: "UMC with a view",
        tag: "Ground",
        date: "2025-08-20",
      },
      {
        src: encodeURI("/gallery/Valakar fight happening while Anderson had a nap - 29-08-25 - Ground wing.webp"),
        title: "Valakar fight happening while Anderson had a nap",
        tag: "Ground",
        date: "2025-08-29",
      },
      {
        src: encodeURI("/gallery/Watching the sunset - 16-10-25 - Ground wing.webp"),
        title: "Watching the sunset",
        tag: "Ground",
        date: "2025-10-16",
      },
      {
        src: encodeURI("/gallery/When you cant take your hands off the console... - 13-09-25 - Stratos.webp"),
        title: "When you cant take your hands off the console...",
        tag: "Stratos",
        date: "2025-09-13",
      },
      {
        src: encodeURI("/gallery/Yomandi - 12-12-25 - Ground Wing.webp"),
        title: "Yomandi",
        tag: "Ground",
        date: "2025-12-12",
      },
    ],
    []
  

 
  );

  const tags = useMemo(() => {
    const set = new Set(items.map((i) => i.tag).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [items]);

  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      const matchesTag = activeTag === "All" || i.tag === activeTag;
      const matchesQuery =
        !q ||
        (i.title || "").toLowerCase().includes(q) ||
        (i.tag || "").toLowerCase().includes(q) ||
        (i.date || "").toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [items, activeTag, query]);

  const active = activeIndex != null ? filtered[activeIndex] : null;

  function openLightbox(idx) {
    setActiveIndex(idx);
  }
  function closeLightbox() {
    setActiveIndex(null);
  }
  function prev() {
    setActiveIndex((x) => (x === 0 ? filtered.length - 1 : x - 1));
  }
  function next() {
    setActiveIndex((x) => (x === filtered.length - 1 ? 0 : x + 1));
  }

  return (
    <section className="py-10 md:py-14">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
          UMC Gallery
        </h1>
        <p className="text-white/75 max-w-3xl mx-auto leading-relaxed">
          Moments from UMC operations across the verse — fleet actions, training
          drills, anti-piracy patrols, and xenothreat engagements.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={[
                "h-10 px-4 rounded-md border transition font-semibold text-sm",
                activeTag === t
                  ? "bg-white/15 border-white/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="w-full max-w-xl">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, tag, date..."
            className="w-full h-11 px-4 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, idx) => (
          <button
            key={img.src + idx}
            onClick={() => openLightbox(idx)}
            className="group text-left rounded-xl border border-white/10 bg-black/35 overflow-hidden hover:border-white/20 transition"
            title="Open"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={img.src}
                alt={img.title || "UMC Gallery"}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                loading="lazy"
              />
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-bold text-white/90 truncate">
                  {img.title || "UMC Screenshot"}
                </p>
                {img.tag && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/75">
                    {img.tag}
                  </span>
                )}
              </div>

              {img.date && (
                <p className="text-xs text-white/55">{img.date}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-12 text-center text-white/70">
          No images match your search.
        </div>
      )}

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="w-full max-w-5xl rounded-xl border border-white/10 bg-black/60 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="min-w-0">
                <p className="font-bold text-white/90 truncate">
                  {active.title || "UMC Screenshot"}
                </p>
                <p className="text-xs text-white/55">
                  {active.tag ? active.tag : ""}{active.tag && active.date ? " • " : ""}{active.date ? active.date : ""}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="h-9 px-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm font-semibold"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="h-9 px-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm font-semibold"
                >
                  Next
                </button>
                <button
                  onClick={closeLightbox}
                  className="h-9 px-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="bg-black">
              <img
                src={active.src}
                alt={active.title || "UMC Gallery"}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



/* ====== Placeholder pages for your nav ====== */
function PageServices()  { return <PageStub title="Services" />; }





function PageStub({ title }) {
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-white/80">Content coming soon.</p>
    </section>
  );
}

function PageNotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-white/70">
        Head back to the <a className="underline" href="/">home page</a>.
      </p>
    </section>
  );
}

/* ===========================
   Router
=========================== */

export default function App() {
  return (
    <>
    <ScrollToTop />   {/* 👈 THIS LINE */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="services"   element={<PageServices />} />
          <Route path="choose-your-path" element={<PageJoinUMC />} />
          <Route path="join" element={<Navigate to="/choose-your-path" replace />} />
          <Route path="/our-mission" element={<PageOurMission />} />
          <Route path="operations" element={<PageOperations />} />
          <Route path="providing-security" element={<PageProvidingSecurity />} />
          <Route path="search-rescue" element={<PageSearchRescue />} />
          <Route path="neutralize-threats" element={<PageNeutralizeThreats />} />
          <Route path="/ground-wing" element={<PageGroundWing />} />
          <Route path="/stratos-wing" element={<PageStratosWing />} />
          <Route path="lsco"       element={<PageLSCO />} />
          <Route path="enlist-Today"  element={<PageEnlistToday />} />
          <Route path="Enlist Today" element={<Navigate to="/enlist-today" replace />} />
          <Route path="umc-gallery"    element={<PageUMCGallery />} />
          <Route path="recruitment" element={<PageStub title="CHOOSE YOUR PATH" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>

  );
}

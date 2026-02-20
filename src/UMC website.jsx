import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

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
      className="px-3 py-1.5 rounded-md border text-sm font-medium text-white transition-colors whitespace-nowrap"
      style={{ backgroundColor: UMC_GREEN, borderColor: UMC_GREEN }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = UMC_GREEN_HOVER)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = UMC_GREEN)}
    >
      {label}
    </NavLink>
  );
}

function Layout() {
  return (
    /* PAGE BACKGROUND (space image on left/right) */
    <div
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/UMCwebsitewallpaper.jpg')" }}  // <- your space image
    >
      {/* Optional overlay to keep the page dark; adjust /60 to taste or remove */}
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
              style={{ backgroundImage: "url('/panel/panelUMC.png')" }}   // <- your panel image
            />
            {/* Scrim to keep content readable; tweak /55 or /70 */}
            <div aria-hidden className="absolute inset-0 bg-black/60" />
            {/* (Optional) subtle vignette to blend edges */}
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
              {/* Header: title left, tabs right (your current version) */}
              <header className="h-20 md:h-24 px-5 sm:px-8 flex items-center">
                <div className="uppercase font-extrabold tracking-tight leading-none whitespace-nowrap
                                text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  UNITED MILITARY COALITION
                </div>

                <nav className="ml-auto">
                  <ul className="flex flex-nowrap items-center gap-2 md:gap-3">
                    <li><TabLink to="/" end label="Home" /></li>
                    <li><TabLink to="/operations" label="Operations" /></li>
                    <li><TabLink to="/lsco" label="LSCO" /></li>
                    <li><TabLink to="/personnel" label="Personnel" /></li>
                    <li><TabLink to="/history" label="UMC Archives" /></li>
                  </ul>
                </nav>
              </header>

              <main id="main" className="px-5 sm:px-8 pb-10">
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
   HOME: matches your mock
   Left: emblem image
   Right: headline + text + CTA
=========================== */
function PageHome() {
  return (
    <section className="py-8">
  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
    {/* Left: emblem — nudge down to align with H1 top */}
    <div
      className="rounded-none overflow-hidden border self-start md:mt-3 lg:mt-5"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <img
        src="/screenshots/UMClogo4.png" // <- keep your actual filename/ext
        alt="UMC centerpiece emblem"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right: text */}
    <div className="max-w-2xl">
      <h1 className="uppercase font-extrabold leading-[0.95]
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight
                     mb-6 md:mb-8">
        United in <br />
        Mission, <br />
        Courageous <br />
        in Action.
      </h1>

      {/* Lead / Subhead / Dek — automatic gaps between paragraphs */}
      <div className="text-white/90 leading-relaxed space-y-4">
        <p>
          Within the UMC, lies a foundation of coordination, communication,
          Integrity, Solidarity and Tactical Prowess. This led to the UMC to
          rise from the unknown and as such, has maintained that ideology
          inside the UMC Structure of ranking.
        </p>
        <p>
          By joining the United Military Coalition, you become part of a disciplined
          force built on honor, purpose, and responsibility. Every member strengthens
          a collective dedicated to defense, resilience, and loyalty. Together, we
          achieve more than individual effort alone — not only in mission success,
          but in building a lasting foundation of strength, courage, and unity.
          Stand with us, and help shape a future defined by resolve and commitment.
        </p>
      </div>

      <a
        href="/recruitment"
        className="inline-flex items-center px-5 py-3 rounded-lg font-semibold mt-8"
        style={{ backgroundColor: "#1F6B4A" }}
      >
        JOIN THE FIGHT
      </a>
    </div>
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
          Doctrine, task org, and standard playbooks for UMC operations. Add or
          edit sections as you grow—this page is designed for long content and scrolling.
        </p>
      </header>

      {/* ===== Block 1 — text LEFT, image RIGHT ===== */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Text column */}
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Convoy Security</h2>
          <p>
            Protective escort for high-value cargo across contested routes.
            Roles include lead scout, close escort, QRF, and overwatch. Briefing
            covers ROE, comms brevity, formation, and divert points.
          </p>
          <p>
            Standard flow: staging → route brief → depart → phase lines →
            handover/delivery → debrief. Contingencies include route change, refuel,
            SAR pickup, or emergency RTB.
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
              src="/operations/UMClogo3.webp"   // <-- update to your file name
              alt="Convoy security operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== Block 2 — duplicate pattern as you add content ===== */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="max-w-2xl space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold">Boarding & Breach</h2>
          <p>
            Coordinated interdiction with clear sectors, stack order, and detainee
            procedures. Emphasis on comms discipline, friend/foe ID, and hard
            de-confliction inside tight spaces.
          </p>
          <p>
            Brief includes callsigns, breach points, flow, med evac, and evidence
            collection. Post-op debrief captures timeline, outcomes, and lessons learned.
          </p>
        </div>
        <div
          className="rounded-none overflow-hidden border md:mt-3 lg:mt-5"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="aspect-[16/24]">
            <img
              src="/operations/UMCfightingvalakar.png"  // <-- update to your file name
              alt="Boarding operation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add more blocks as needed… just copy/paste the pattern above */}
    </section>
  );
}
/* ====== Placeholder pages for your nav ====== */
function PageServices()  { return <PageStub title="Services" />; }

function PageLSCO()      { return <PageStub title="LSCO — Logistics & Supply Chain Operations" />; }
function PagePersonnel() { return <PageStub title="Personnel" />; }
function PageHistory()   { return <PageStub title="History of UMC" />; }

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
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="services"   element={<PageServices />} />
          <Route path="operations" element={<PageOperations />} />
          <Route path="lsco"       element={<PageLSCO />} />
          <Route path="personnel"  element={<PagePersonnel />} />
          <Route path="history"    element={<PageHistory />} />
          <Route path="recruitment" element={<PageStub title="Join UMC" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


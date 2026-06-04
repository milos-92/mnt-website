import { useState } from 'react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import { ArrowRight, Clock, Menu, X } from 'lucide-react'
import RollButton from './RollButton'
import { useLondonTime } from '../useLondonTime'

const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect']
const SHEET_EASE = 'ease-[cubic-bezier(0.32,0.72,0,1)]'

/** Starburst / compass mark used in the "Certified Partner" badge. */
function PartnerMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const time = useLondonTime()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#EFEFEF]">
      {/* Animated shader overlay */}
      <Shader
        className="pointer-events-none absolute inset-0 z-10"
        style={{ width: '100%', height: '100%' }}
      >
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#ffffff"
          downColor="#ff5f03"
          leftColor="#ff5f03"
          rightColor="#ff5f03"
          upColor="#ff5f03"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>

      {/* Foreground */}
      <div className="relative z-20 flex min-h-screen flex-col">
        {/* Navigation */}
        <header className="relative z-20 w-full">
          <div className="mx-auto max-w-[1440px] p-2 sm:p-3">
            <nav className="flex items-center justify-between rounded-full bg-white p-[5px]">
              {/* Left: logo + links */}
              <div className="flex items-center gap-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 sm:h-10 sm:w-10">
                  <span className="text-[10px] font-bold tracking-tight text-white sm:text-[11px]">
                    AX
                  </span>
                </div>
                <div className="hidden items-center gap-6 md:flex">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[14px] text-gray-900 transition-colors duration-300 hover:text-gray-500"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: status + clock + CTA */}
              <div className="hidden items-center gap-4 md:flex">
                <span className="hidden text-[13px] text-gray-600 lg:inline">
                  Taking on projects for Q1 2026
                </span>
                <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                  <Clock size={14} />
                  <span>{time} in London</span>
                </div>
                <RollButton
                  text="Book a strategy call"
                  className="rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white"
                  circleClassName="h-6 w-6 bg-white"
                  arrowClassName="h-3.5 w-3.5 text-gray-900"
                />
              </div>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white md:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? (
                  <>
                    Close <X size={16} />
                  </>
                ) : (
                  <>
                    Menu <Menu size={16} />
                  </>
                )}
              </button>
            </nav>
          </div>
        </header>

        {/* Spacer pushes content to the bottom of the viewport */}
        <div className="flex-1" />

        {/* Hero content */}
        <div className="relative z-20 w-full">
          <div className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
            <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
              Axion Studio
            </p>
            <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
              We craft digital experiences
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              for brands ready to dominate
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              their category online.
            </h1>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
              <RollButton
                text="Start a project"
                className="rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] text-white hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
                circleClassName="h-7 w-7 bg-white sm:h-8 sm:w-8"
                arrowClassName="h-4 w-4 text-[#F26522]"
              />

              {/* Certified Partner badge */}
              <div className="flex items-center gap-2 rounded-[4px] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:gap-3 sm:px-4 sm:py-2.5">
                <PartnerMark className="h-5 w-5 fill-current text-[#E8704E] sm:h-6 sm:w-6" />
                <span className="text-[13px] font-medium text-gray-900 sm:text-[14px]">
                  Certified Partner
                </span>
                <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
                  Featured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ${SHEET_EASE} ${
            menuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
            <Clock size={14} />
            <span>{time} in London</span>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="py-1 text-[28px] font-medium leading-[32px] text-gray-900"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <RollButton
              text="Start a project"
              className="rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[14px] text-white hover:bg-[#e05a1a]"
              circleClassName="h-8 w-8 bg-white"
              arrowClassName="h-4 w-4 text-[#F26522]"
              icon={ArrowRight}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

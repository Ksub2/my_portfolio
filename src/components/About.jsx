// import { useState } from 'react';
// import { Section } from './Section'
// import { Icon, icons, useCountUp } from './shared'
// import { PROFILE, SERVICES } from '../data/content'

// function Stat({ value, suffix, label }) {
//   const [val, ref] = useCountUp(value)
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setPosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     })
//   }

//   return (
//     <div
//       ref={ref}
//       className="relative rounded-2xl glass p-5 overflow-hidden cursor-pointer transition-all duration-300"
//       style={{
//         border: isHovering ? '1px solid rgba(96, 165, 250, 0.5)' : '1px solid rgba(59, 130, 246, 0.2)',
//         boxShadow: isHovering ? '0 0 30px rgba(100, 150, 255, 0.25)' : 'none',
//         '--mouse-x': isHovering ? `${position.x}px` : '50%',
//         '--mouse-y': isHovering ? `${position.y}px` : '50%',
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Glow effect */}
//       <div
//         className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${
//           isHovering ? 'opacity-100' : 'opacity-0'
//         }`}
//         style={{
//           background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(100, 200, 255, 0.15) 0%, rgba(100, 150, 255, 0.05) 35%, transparent 70%)`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         <div className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums">
//           {val}{suffix}
//         </div>
//         <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</div>
//       </div>
//     </div>
//   )
// }

// export default function About() {
//   return (
//     <Section id="about" eyebrow="About me" title="Engineering products people love">
//       <div className="grid md:grid-cols-5 gap-10">
//         <div className="md:col-span-3">
//           <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{PROFILE.about}</p>
//           <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {PROFILE.stats.map((s) => (
//               <Stat key={s.label} {...s} />
//             ))}
//           </div>
//         </div>

//         <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-1 gap-4">
//           {SERVICES.map((s) => (
//             <div key={s.title} className="glow-card rounded-2xl glass p-5 hover:-translate-y-1 transition-transform">
//               <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white">
//                 <Icon path={icons[s.icon]} />
//               </div>
//               <h3 className="mt-4 font-bold">{s.title}</h3>
//               <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   )
// }
import { useState } from 'react';
import { Section } from './Section'
import { Icon, icons, useCountUp } from './shared'
import { PROFILE, SERVICES } from '../data/content'

function Stat({ value, suffix, label }) {
  const [val, ref] = useCountUp(value)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className="relative rounded-2xl glass p-5 overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        border: isHovering ? '1px solid rgba(96, 165, 250, 0.5)' : '1px solid rgba(59, 130, 246, 0.2)',
        boxShadow: isHovering ? '0 0 30px rgba(100, 150, 255, 0.25)' : 'none',
        '--mouse-x': isHovering ? `${position.x}px` : '50%',
        '--mouse-y': isHovering ? `${position.y}px` : '50%',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(100, 200, 255, 0.15) 0%, rgba(100, 150, 255, 0.05) 35%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div 
          ref={ref}
          className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums h-10 md:h-12"
        >
          {val}{suffix}
        </div>
        <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering products people love">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{PROFILE.about}</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROFILE.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-1 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="glow-card rounded-2xl glass p-5 hover:-translate-y-1 transition-transform">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white">
                <Icon path={icons[s.icon]} />
              </div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

import { useState } from 'react'
import { Home, BriefcaseBusiness, Sparkles, Mail } from 'lucide-react'

const items = [
  { label: 'Home', href: '#hero', Icon: Home },
  { label: 'Projects', href: '#projects', Icon: BriefcaseBusiness },
  { label: 'Skills', href: '#skills', Icon: Sparkles },
  { label: 'Contact', href: '#contact', Icon: Mail },
]

export function MagneticDock() {
  const [pointer, setPointer] = useState<number | null>(null)

  return (
    <nav className="magnetic-dock" aria-label="Quick navigation" onMouseLeave={() => setPointer(null)}>
      {items.map(({ label, href, Icon }, index) => {
        const distance = pointer === null ? 4 : Math.abs(pointer - index)
        const scale = pointer === null ? 1 : distance === 0 ? 1.25 : distance === 1 ? 1.1 : 1
        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="magnetic-dock__item"
            style={{ transform: `scale(${scale}) translateY(${distance === 0 ? '-5px' : '0'})` }}
            onMouseEnter={() => setPointer(index)}
          >
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
          </a>
        )
      })}
    </nav>
  )
}

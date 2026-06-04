import { ArrowRight, type LucideIcon } from 'lucide-react'

type RollButtonProps = {
  /** Visible label, duplicated for the vertical text-roll on hover. */
  text: string
  onClick?: () => void
  /** Outer button styling: background, padding, text size, rounded, etc. */
  className?: string
  /** Arrow circle styling: size and background. */
  circleClassName?: string
  /** Arrow icon styling: size and color. */
  arrowClassName?: string
  icon?: LucideIcon
}

const EASE = 'ease-[cubic-bezier(0.25,0.1,0.25,1)]'

/**
 * Pill CTA with two signature hovers (group-driven):
 *  - the label rolls up to a duplicate copy (overflow-hidden, translate -50%)
 *  - the arrow circle rotates -45deg
 * Both run at duration-500 with the global cubic-bezier easing.
 */
export default function RollButton({
  text,
  onClick,
  className = '',
  circleClassName = '',
  arrowClassName = '',
  icon: Icon = ArrowRight,
}: RollButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative h-[20px] overflow-hidden">
        <span
          className={`flex flex-col transition-transform duration-500 ${EASE} group-hover:-translate-y-1/2`}
        >
          <span className="flex h-[20px] items-center whitespace-nowrap">{text}</span>
          <span className="flex h-[20px] items-center whitespace-nowrap">{text}</span>
        </span>
      </span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ${EASE} group-hover:-rotate-45 ${circleClassName}`}
      >
        <Icon className={arrowClassName} />
      </span>
    </button>
  )
}

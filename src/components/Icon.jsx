import { asset } from '../lib/asset.js'

/**
 * Renders one symbol from the public/icons.svg sprite.
 * Always decorative — pair it with real text, never use it as the only label.
 */
export default function Icon({ id, size = 20 }) {
  return (
    <svg className="icon" width={size} height={size} aria-hidden="true" focusable="false">
      <use href={`${asset('icons.svg')}#${id}`} />
    </svg>
  )
}

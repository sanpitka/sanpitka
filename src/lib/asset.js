/**
 * Resolve a path in public/ against Vite's base path.
 *
 * The site is served from /sanpitka/, so root-absolute paths like "/icons.svg"
 * would 404 in production. Always wrap public/ paths with this.
 *
 *   asset('projects/ledrama.svg')  ->  '/sanpitka/projects/ledrama.svg'
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

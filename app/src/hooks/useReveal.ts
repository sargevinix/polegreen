import { useEffect, useRef } from 'react'

/**
 * Adds `.is-visible` to elements with `.reveal` inside the returned ref
 * (or the element itself) when they enter the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets: HTMLElement[] = []
    if (root.classList.contains('reveal')) targets.push(root)
    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => targets.push(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}

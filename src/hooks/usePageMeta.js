import { useEffect } from 'react'

/** Sets document title + meta description for the current page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    if (description) tag.setAttribute('content', description)
  }, [title, description])
}

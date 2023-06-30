import DOMPurify from 'dompurify'

export function sanitize(content: string){
  if (typeof window !== 'undefined') {
    return DOMPurify.sanitize(content)
  }

  return content
}
import { Buffer } from 'buffer'

export interface HTMLImage {
  alt: string
  src: string
}

export interface HTMLSimpleLink {
  href: string
  text?: string
}

export interface Period {
  from: Date
  to?: Date
}

export function renderPeriodYearString (
  period: Period,
  fallback: string
): string | number {
  const fromYear = period.from.getFullYear()
  const toYear = (period.to != null) ? period.to.getFullYear() : fallback

  if (fromYear === toYear) {
    return fromYear
  }

  return [period.from.getFullYear(), toYear].filter((y) => y).join(' - ')
}

export function escapeHtml (input: string): string {
  const matchHtmlRegExp = /["'&<>]/
  const str = '' + input
  const match = matchHtmlRegExp.exec(str)

  if (match == null) {
    return str
  }

  let escape: string
  let html = ''
  let index: number
  let lastIndex = 0

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}

export function sendEmail (to: string, subject?: string): void {
  const buffer = Buffer.from(to, 'base64')
  window.location.href = `mailto:${buffer.toString()}` + (subject !== undefined
    ? `?subject=${escapeHtml(subject)}` : '')
}

export function shuffleArray<T> (original: T[]): T[] {
  if (!Array.isArray(original) || !original.length) {
    return []
  }

  const shuffled = original.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  // if one element is on different index we're good
  let equality = true
  for (let index = 0; index < shuffled.length; index++) {
    if (shuffled[index] !== original[index]) {
      equality = false
      break
    }
  }
  return equality ? shuffleArray(original) : shuffled
}

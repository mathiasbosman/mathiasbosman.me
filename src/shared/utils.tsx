import { Buffer } from 'buffer'
import { CONTACT_EMAIL } from '../constants.tsx'

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

export const renderPeriodYearString = (
  period: Period,
  fallback: string
): string | number => {
  const fromYear = period.from.getFullYear()
  const toYear = (period.to != null) ? period.to.getFullYear() : fallback

  if (fromYear === toYear) {
    return fromYear
  }

  return [period.from.getFullYear(), toYear].filter((y) => y).join(' - ')
}

export function sendEmail (subject?: string): void {
  const buffer = Buffer.from(CONTACT_EMAIL, 'base64')
  window.location.href = 'mailto:' + buffer.toString() + (subject !== undefined ? '?subject=' + subject : '')
}

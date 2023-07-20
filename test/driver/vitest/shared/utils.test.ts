import { describe, it, expect } from 'vitest'
import {
  escapeHtml,
  type Period,
  renderPeriodYearString
} from '../../../../src/shared/utils.tsx'

describe('renderPeriodYearString()', () => {
  it('Only renders the year if same year', () => {
    const period: Period = {
      from: new Date('2020-01-01'),
      to: new Date('2020-12-31')
    }
    expect(renderPeriodYearString(period, 'foo')).eq(2020)
  })

  it('Renders correct year span', () => {
    const period: Period = {
      from: new Date('2020-01-01'),
      to: new Date('2023-12-31')
    }
    expect(renderPeriodYearString(period, 'foo')).eq('2020 - 2023')
  })

  it('Renders fallback if to is empty', () => {
    const period: Period = {
      from: new Date('2020-01-01')
    }
    expect(renderPeriodYearString(period, 'foo')).eq('2020 - foo')
  })
})

describe('escapeHtml()', () => {
  it('Empty strings returns empty', () => {
    expect(escapeHtml('')).eq('')
  })

  it('Normal strings returs as-is', () => {
    expect(escapeHtml('foo bar')).eq('foo bar')
  })

  it('String with special character gets escaped', () => {
    expect(escapeHtml('foo "bar"')).eq('foo &quot;bar&quot;')
    expect(escapeHtml('foo & bar')).eq('foo &amp; bar')
    expect(escapeHtml("foo 'bar'")).eq('foo &#39;bar&#39;')
    expect(escapeHtml('foo < bar')).eq('foo &lt; bar')
    expect(escapeHtml('foo > bar')).eq('foo &gt; bar')
  })
})

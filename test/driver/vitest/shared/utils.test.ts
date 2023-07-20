import { describe, it, expect } from 'vitest'
import { type Period, renderPeriodYearString } from '../../../../src/shared/utils.tsx'

describe('renderPeriodYearString', () => {
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

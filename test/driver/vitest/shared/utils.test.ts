import { describe, expect, it } from 'vitest'
import {
  escapeHtml,
  type Period,
  renderPeriodYearString,
  shuffleArray
} from '@shared/utils.ts'

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
    expect(escapeHtml('foo \'bar\'')).eq('foo &#39;bar&#39;')
    expect(escapeHtml('foo < bar')).eq('foo &lt; bar')
    expect(escapeHtml('foo > bar')).eq('foo &gt; bar')
  })
})

describe('shuffleArray()', () => {
  it('Empty array returns empty array', () => {
    const emptyArray: number[] = []
    expect(shuffleArray(emptyArray)).to.be.an('array').that.is.empty
  })

  it('Returns shuffled array', () => {
    interface testObject {
      k: number
      v: string
    }

    const testArray: testObject[] = [
      { k: 1, v: 'one' },
      { k: 2, v: 'two' },
      { k: 3, v: 'three' }
    ]
    const shuffled = shuffleArray(testArray)
    expect(shuffled.length).eq(testArray.length)
    // Don't use stringify in anything else then a simple test!
    expect(JSON.stringify(testArray)).not.eq(JSON.stringify(shuffled))
  })

  it('Returns shuffled array even when it is short', () => {
    const shortArray = ['one', 'two']
    const shuffled = shuffleArray(shortArray)
    expect(JSON.stringify(shortArray)).not.eq(JSON.stringify(shuffled))
    expect(shuffled.length).eq(shortArray.length)
  })
})

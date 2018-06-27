import splitDomain, { SplittedDomain } from '../src/splitDomain'

describe('splitDomain', () => {
  it('is simple domain', () => {
    let domain: SplittedDomain = splitDomain('example.com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('com')

    domain = splitDomain('example.co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('co.jp')
  })

  it('has sub domain', () => {
    let domain: SplittedDomain = splitDomain('sub1.example.com')
    expect(domain.subDomain).toBe('sub1')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('com')

    domain = splitDomain('sub1.sub2.example.co.jp')
    expect(domain.subDomain).toBe('sub1.sub2')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('co.jp')

    domain = splitDomain('sub1.example.co.jp')
    expect(domain.subDomain).toBe('sub1')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('co.jp')

    domain = splitDomain('sub1.sub2.example.co.jp')
    expect(domain.subDomain).toBe('sub1.sub2')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('co.jp')
  })

  it('is only sld', () => {
    let domain: SplittedDomain = splitDomain('example.')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('')

    domain = splitDomain('example.')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('')

    domain = splitDomain('example..')
    expect(domain.subDomain).toBe('example')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')

    domain = splitDomain('example...')
    expect(domain.subDomain).toBe('example')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')
  })

  it('is only tld', () => {
    let domain: SplittedDomain = splitDomain('.com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('com')

    domain = splitDomain('.co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('co.jp')

    domain = splitDomain('..com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('com')

    domain = splitDomain('...com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('com')

    domain = splitDomain('..co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('co.jp')

    domain = splitDomain('...co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('co.jp')
  })

  it('is only dot domain', () => {
    let domain: SplittedDomain = splitDomain('.')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')

    domain = splitDomain('..')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')

    domain = splitDomain('...')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')
  })

  it('is blank', () => {
    const domain: SplittedDomain = splitDomain('')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')
  })
})

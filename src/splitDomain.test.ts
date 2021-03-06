import splitDomain, { SplitDomain } from '../src/splitDomain'

describe('splitDomain', () => {
  it('is simple domain', () => {
    let domain: SplitDomain = splitDomain('example.com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('com')

    domain = splitDomain('example.co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('example')
    expect(domain.tld).toBe('co.jp')
  })

  it('is Japan domain', () => {
    // JP domain
    let domain = splitDomain('日本語.com')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('日本語')
    expect(domain.tld).toBe('com')

    domain = splitDomain('日本語.co.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('日本語')
    expect(domain.tld).toBe('co.jp')

    domain = splitDomain('日本語.tokyo.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('日本語')
    expect(domain.tld).toBe('tokyo.jp')

    domain = splitDomain('日本語.東京.jp')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('日本語')
    expect(domain.tld).toBe('東京.jp')
  })

  it('has sub domain', () => {
    let domain: SplitDomain = splitDomain('sub1.example.com')
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
    let domain: SplitDomain = splitDomain('example.')
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
    let domain: SplitDomain = splitDomain('.com')
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
    let domain: SplitDomain = splitDomain('.')
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
    const domain: SplitDomain = splitDomain('')
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')
  })

  it('is undefined', () => {
    let domain: SplitDomain = splitDomain(undefined)
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')

    domain = splitDomain(null)
    expect(domain.subDomain).toBe('')
    expect(domain.sld).toBe('')
    expect(domain.tld).toBe('')
  })
})

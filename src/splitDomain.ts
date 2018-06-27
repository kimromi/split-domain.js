export interface SplittedDomain {
  subDomain: string
  sld: string
  tld: string
}

const ccTldWithSubDomains: string[] = [
  'jpn.com',
  'jp.net',
  'in.net',
  'co.uk',
  'org.uk',
  'com.co',
  'net.co',
  'nom.co',
  'com.cn',
  'net.cn',
  'org.cn',
  'co.jp',
  'or.jp'
]

export default function splitDomain(domainStr: string): SplittedDomain {
  const splitted = domainStr.split('.').reverse()
  const domain: SplittedDomain = { subDomain: '', sld: '', tld: '' }

  if (splitted.length === 0) {
    return domain
  }
  if (splitted.length === 1) {
    domain.sld = domainStr
    return domain
  }

  const firstAndSecontLevelDomain = splitted.slice(0, 2).reverse().filter((label) => label).join('.')
  if (ccTldWithSubDomains.includes(firstAndSecontLevelDomain)) {
    splitted[0] = firstAndSecontLevelDomain
    splitted.splice(1, 1)
  }

  domain.subDomain = splitted.slice(2).reverse().filter((label) => label).join('.')
  domain.sld = splitted[1]
  domain.tld = splitted[0]

  return domain
}

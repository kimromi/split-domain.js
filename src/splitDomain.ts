export interface SplitDomain {
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
  'or.jp',
  'hokkaido.jp',
  'miyagi.jp',
  'fukushima.jp',
  'aomori.jp',
  'iwate.jp',
  'yamagata.jp',
  'akita.jp',
  'tokyo.jp',
  'kanagawa.jp',
  'saitama.jp',
  'chiba.jp',
  'ibaraki.jp',
  'gunma.jp',
  'tochigi.jp',
  'niigata.jp',
  'nagano.jp',
  'yamanashi.jp',
  'aichi.jp',
  'shizuoka.jp',
  'gifu.jp',
  'ishikawa.jp',
  'toyama.jp',
  'fukui.jp',
  'osaka.jp',
  'hyogo.jp',
  'kyoto.jp',
  'nara.jp',
  'mie.jp',
  'shiga.jp',
  'wakayama.jp',
  'hiroshima.jp',
  'okayama.jp',
  'yamaguchi.jp',
  'shimane.jp',
  'tottori.jp',
  'ehime.jp',
  'kagawa.jp',
  'tokushima.jp',
  'kochi.jp',
  'fukuoka.jp',
  'kumamoto.jp',
  'kagoshima.jp',
  'nagasaki.jp',
  'oita.jp',
  'miyazaki.jp',
  'saga.jp',
  'okinawa.jp',
  '北海道.jp',
  '宮城.jp',
  '福島.jp',
  '青森.jp',
  '岩手.jp',
  '山形.jp',
  '秋田.jp',
  '東京.jp',
  '神奈川.jp',
  '埼玉.jp',
  '千葉.jp',
  '茨城.jp',
  '群馬.jp',
  '栃木.jp',
  '新潟.jp',
  '長野.jp',
  '山梨.jp',
  '愛知.jp',
  '静岡.jp',
  '岐阜.jp',
  '石川.jp',
  '富山.jp',
  '福井.jp',
  '大阪.jp',
  '兵庫.jp',
  '京都.jp',
  '奈良.jp',
  '三重.jp',
  '滋賀.jp',
  '和歌山.jp',
  '広島.jp',
  '岡山.jp',
  '山口.jp',
  '島根.jp',
  '鳥取.jp',
  '愛媛.jp',
  '香川.jp',
  '徳島.jp',
  '高知.jp',
  '福岡.jp',
  '熊本.jp',
  '鹿児島.jp',
  '長崎.jp',
  '大分.jp',
  '宮崎.jp',
  '佐賀.jp',
  '沖縄.jp'
]

export default function splitDomain(domainStr?: string | null): SplitDomain {
  const domain: SplitDomain = { subDomain: '', sld: '', tld: '' }

  if (domainStr === undefined || domainStr === null) {
    return domain
  }
  const split = domainStr.split('.').reverse()

  if (split.length === 0) {
    return domain
  }
  if (split.length === 1) {
    domain.sld = domainStr
    return domain
  }

  const firstAndSecontLevelDomain = split.slice(0, 2).reverse().filter((label) => label).join('.')
  if (ccTldWithSubDomains.includes(firstAndSecontLevelDomain)) {
    // ["uk", "co", "sld"] => ["co.uk", "sld"]
    split[0] = firstAndSecontLevelDomain
    split.splice(1, 1)
  }

  domain.subDomain = split.slice(2).reverse().filter((label) => label).join('.')
  domain.sld = split[1]
  domain.tld = split[0]

  return domain
}

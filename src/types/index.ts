interface Items {
  ID: number
  title: string
  url: string
}

interface SocialLink {
  iconName: string
  iconUrl: string
}

export interface IFooter {
  footerMenuItems: Items[]
  copyrightText: string
  sidebarOne: string
  sidebarTwo: string
  socialLinks: SocialLink[]
}

export interface IHeader {
  headerMenuItems: Items[]
  siteDescription: string
  favicon: string
  siteLogoUrl: string
  siteTitle: string
}

interface IImage {
  src: string
  id: number
  alt: string
}

export interface IProducts {
  id: number
  name: string
  slug: string
  description: string
  images: IImage[]
  permalink: string
  price_html: string
}
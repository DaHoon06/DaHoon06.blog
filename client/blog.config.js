const CONFIG = {
  // profile setting
  profile: {
    name: '전다훈',
    image: '/src/assets/img/profile.png',
    role: 'Full Stack Developer',
    description: 'I develop everything using node.',
    email: 'dahoon06.dev@gmail.com',
    github: 'dahoon06',
    linkedin: '',
    instagram: '',
    twitter: '@_getters',
  },
  projects: [
    {
      name: 'Dotto',
      href: 'https://www.dotto.site',
    },
  ],
  link: {
    github: 'https://github.com/DaHoon06',
    twitter: 'https://twitter.com/_getters',
  },
  homepage: 'https://dahoon06-dev.vercel.app/˚',
  // blog setting
  blog: {
    title: 'DaHoon06',
    description: '메모장',
    theme: 'auto', // ['light', 'dark', 'auto']
    copyright: 'Copy right 2023. dahoon06 All rights reserved'
  },

  // CONFIG configration
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '', // ex. G-9N3FE0117Q
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '', // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

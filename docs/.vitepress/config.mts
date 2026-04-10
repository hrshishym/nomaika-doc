import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nomaika マニュアル',
  description: 'フリーランス工数管理システム Nomaika の利用ガイド',
  lang: 'ja',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { href: 'https://fonts.bunny.net/css?family=dm-sans:400,500,600,700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/guide/getting-started' },
      { text: 'Nomaika', link: 'https://nomaika.com' },
    ],

    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'Nomaika とは', link: '/guide/getting-started' },
          { text: 'アカウント登録', link: '/guide/registration' },
        ],
      },
      {
        text: 'タスク管理',
        items: [
          { text: 'タスクの登録・編集', link: '/guide/tasks' },
          { text: '非稼働日の管理', link: '/guide/non-working-days' },
        ],
      },
      {
        text: '共有機能',
        items: [
          { text: '共有トークンの発行', link: '/guide/share-tokens' },
        ],
      },
      {
        text: 'ワークスペース',
        items: [
          { text: 'パートナーの登録', link: '/workspace/register' },
          { text: '稼働状況の閲覧', link: '/workspace/workload' },
          { text: 'グループ管理', link: '/workspace/groups' },
        ],
      },
    ],

    outline: {
      label: '目次',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '結果が見つかりませんでした',
            resetButtonTitle: 'リセット',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
          },
        },
      },
    },
  },
})

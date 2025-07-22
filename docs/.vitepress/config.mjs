import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yn's Blog",
  description: "歡迎來到我的地盤",
  base: "/Yn-Blog/", // 👈👈👈 這個非常需要設定喔！！
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: [ 
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 使用範例', link: '/markdown-examples' },
          { text: 'Runtime API 使用範例', link: '/api-examples' },
        ]
      }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisp-fhsh/Yn-Blog.git' },
      { icon: { svg: "<img src='https://www.google.com/imgres?q=stitch&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe1%2F1d%2Ffb%2Fe11dfbc63c8652f7d202ca31db374403.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F623185667181420597%2F&docid=dV1AWjIO-nr8cM&tbnid=2S8GIxhnR6iBwM&vet=12ahUKEwjNzKKF_8-OAxURnK8BHedICT8QM3oECCQQAA..i&w=720&h=988&hcb=2&ved=2ahUKEwjNzKKF_8-OAxURnK8BHedICT8QM3oECCQQAA' alt='Stitch' width='80%' height='80%' />" }, link: 'https://security-program.fhsh.taipei'}
    ]
  }
})

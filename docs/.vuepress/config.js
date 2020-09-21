module.exports = {
  base: "/monster-toolkit/",
  title: "Monster Toolkit",
  description: "基于element ui封装的组件库",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Readme", link: "README.md" },
      { text: "Github", link: "https://github.com/defuyu/monster-toolkit" }
    ],
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        children: [
          '/',
        ]
      },
      {
        title: '表单组件',
        collapsable: false,
        children: [
          './components/CommonSelect.md',
          'components/RegexpInput.md'
        ]
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [
          'components/Menu.md',
          'components/GroupTabs.md',
          'components/InputIconEdit.md',
          'components/Table.md'
        ]
      }
    ],
    // locales: {
    //   '/': {
    //     lang: "zh-CN",
    //     title: "Monster Toolkit",
    //     description: "基于element ui封装的组件库",
    //   }
    // }
  },
};

export default defineAppConfig({
  lazyCodeLoading: 'requiredComponents',
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'test',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    backgroundColor: '#eee',
    selectedColor: '#FF518F',
    color: '#999999',
    list: [
      // {
      //   pagePath: 'pages/index/index',
      //   text: '首页',
      // },
      // {
      //   pagePath: 'pages/test/index',
      //   text: 'test',
      // },
    ],
  },
})

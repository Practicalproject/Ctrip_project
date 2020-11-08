module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      'import',
      {
        libraryName: '@amap/amap-vue',
        libraryDirectory: 'lib',
      },
    ],
  ]

}

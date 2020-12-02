const plugins = [
  [
    'component',
    {
      'libraryName': 'element-plus',
      'styleLibraryName': 'theme-chalk'
    }
  ],
  '@vue/babel-plugin-jsx'
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { 
    'exclude': [
      'error',
      'warn',
    ] 
  }]);
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
};

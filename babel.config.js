module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
          '@components': './src/components',
          '@pages': './src/pages',
          '@router': './src/router',
          '@types': './src/types',
        },
      },
    ],
  ],
}

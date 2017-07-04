import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    main: path.resolve(__dirname, './index.js'),
    main2: path.resolve(__dirname, './index.js'),
  },
  output: {
    filename: './index.[name].compiled.js',
  },

  // This has no effect:
  profile: true,
};

export default config;

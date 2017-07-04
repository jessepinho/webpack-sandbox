import * as path from 'path';
import * as StatsPlugin from 'stats-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    main: path.resolve(__dirname, './index.js'),
    main2: path.resolve(__dirname, './index.js'),
  },

  output: {
    filename: './index.[name].compiled.js',
  },

  plugins: [
    new StatsPlugin('stats.json'),
  ],

  stats: {
    timings: true,
  },

  // This has no effect:
  profile: true,
};

export default config;

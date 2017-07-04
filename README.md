`webpack.config.ts` has `profile: true`, but no profiling data is output when building with Webpack:

```bash
$ webpack
Hash: 11edbad99c963dc573e0
Version: webpack 3.0.0
Time: 64ms
                    Asset     Size  Chunks             Chunk Names
 ./index.main.compiled.js  2.73 kB    0, 1  [emitted]  main
./index.main2.compiled.js  2.73 kB    1, 0  [emitted]  main2
   [0] ./index.js 30 bytes {0} {1} [built]
   [1] ./foo.js 39 bytes {0} {1} [built]
   [2] ./bar.js 20 bytes {0} {1} [built]
```

However, the `--profile` flag *is* respected:

```bash
$ webpack --profile
Hash: 11edbad99c963dc573e0
Version: webpack 3.0.0
Time: 93ms
                    Asset     Size  Chunks             Chunk Names
 ./index.main.compiled.js  2.73 kB    0, 1  [emitted]  main
./index.main2.compiled.js  2.73 kB    1, 0  [emitted]  main2
   [0] ./index.js 30 bytes {0} {1} [built]
        factory:28ms building:18ms = 46ms
   [1] ./foo.js 39 bytes {0} {1} [built]
       [] -> factory:2ms building:4ms = 6ms
   [2] ./bar.js 20 bytes {0} {1} [built]
       [] -> factory:1ms building:1ms = 2ms
```

Any ideas?

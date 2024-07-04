#!/usr/bin/env sh

fswatch -o ./live-demo.js | xargs -n1 -I{} node ./live-demo.js

#!/bin/bash

# removes type file for test
find ./packages -type f -name "*.test.d.ts" -exec rm -rf {} +

# removes node modules from rollup
find ./packages -type d -name "node_modules" -exec rm -rf {} +
find ./packages -type d -empty -print0 | xargs -0 -I {} /bin/rm -rf "{}"

#!/usr/bin/env zx

await $`node --experimental-json-modules src/main.js `;

await $`cat ./src/readmeTemplate.txt ./src/readmeContent.txt > ./README.md`;

await $`rm ./src/readmeContent.txt`;

$`echo '  💬 README 템플릿과, 새로 만든 내용을 성공적으로 합쳤어요 :) '`;

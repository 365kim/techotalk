import fs from 'fs';

import { totalData } from '../data/index.js';
import { SORTED_CATEGORIES, getCategory } from './category.js';
import { markupGenerator } from './markupGenerator.js';
import { dataParser } from './dataParser.js';

const classifyData = (totalData) => {
  const obj = SORTED_CATEGORIES.reduce((acc, cur) => ({ ...acc, [cur]: [] }), {});

  for (const rawData of totalData) {
    const { isValid, videoData } = dataParser(rawData);

    if (!isValid) {
      continue;
    }

    const category = getCategory(videoData.topic);

    obj[category].push(videoData);
  }

  return obj;
};

const dataByCategory = classifyData(totalData);
const readmeContent = SORTED_CATEGORIES.map((category) => markupGenerator(category, dataByCategory[category])).join('');

fs.writeFile('./src/readmeContent.txt', readmeContent, function (err) {
  if (err) {
    throw new Error('README 내용 파일을 만드는데 실패했어요 :(');
  }
  console.log('README 내용 파일을 만들었어요 :)');
});

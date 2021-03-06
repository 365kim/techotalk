import fs from 'fs';

import { totalData } from '../data/index.js';
import { SORTED_CATEGORIES, getCategory } from './services/category.js';
import { markupGenerator } from './services/markupGenerator.js';
import { dataParser } from './services/dataParser.js';

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
    throw new Error('  đŦ README ë´ėŠė ėëĄ ë§ëëë° ė¤í¨íė´ė :(');
  }
  console.log('  đŦ README ë´ėŠė ėëĄ ë§ë¤ėė´ė :)');
});

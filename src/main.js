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
const readme = SORTED_CATEGORIES.map((category) => markupGenerator(category, dataByCategory[category])).join('');

console.log(readme);

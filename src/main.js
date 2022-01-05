import { totalData } from '../data/index.js';
import { SORTED_CATEGORIES, getCategory } from './category.js';
import { markupGenerator } from './markupGenerator.js';
import { dataParser } from './dataParser.js';

const dataByCategory = SORTED_CATEGORIES.reduce((acc, cur) => ({ ...acc, [cur]: [] }), {});

classifyData(totalData);

const readme = SORTED_CATEGORIES.map((category) => markupGenerator(category, dataByCategory[category])).join('');

console.log(readme);

function classifyData(totalData) {
  for (const rawData of totalData) {
    const { isValid, videoData } = dataParser(rawData);

    if (!isValid) {
      continue;
    }

    const topicCategory = getCategory(videoData.topic);

    dataByCategory[topicCategory].push(videoData);
  }
}

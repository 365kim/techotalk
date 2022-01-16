const ROW_START = '|';
const ROW_END = '|';
const ROW_LENGTH = 5;
const THUMBNAIL_WIDTH = 138;

const topicWithLineBreak = (topic) => {
  const MAX_LENGTH_PER_LINE = 15;
  /* ['ㅇ','ㅢ'], ['의'] 둘 모두 포함해둠 */
  const symbolsBeforeLineBreak = [',', '&amp;', '-', 'vs', '의', '의', '와', '에서', '에서', '코스'];

  if (topic.length < MAX_LENGTH_PER_LINE) {
    return topic;
  }

  for (const breakpoint of symbolsBeforeLineBreak) {
    if (topic.includes(breakpoint)) {
      return topic.replaceAll(breakpoint, `${breakpoint} <br/>`);
    }
  }

  const symbolsAfterLineBreak = ['그리고'];

  for (const breakpoint of symbolsAfterLineBreak) {
    if (topic.includes(breakpoint)) {
      return topic.replaceAll(breakpoint, `${breakpoint} <br/>`);
    }
  }

  return topic;
};

const titleTemplate = ({ index, speaker, year, topic, videoURL }) =>
  `${ROW_START} ${index} <br> <sub>${speaker} - ${year}</sub> <br><br> [<sup>**${topicWithLineBreak(
    topic
  )}**</sup>](${videoURL}) `;
const tableDividerTemplate = `${ROW_START} :---:`;
const thumbnailTemplate = ({ topic, thumbnailURL, videoURL }) =>
  `${ROW_START} [<img width="${THUMBNAIL_WIDTH}" alt="${topic}" src="${thumbnailURL}">](${videoURL}) `;

const rowTemplate = (rowTitle, rowDivider, rowThumbnail) => {
  return `${rowTitle} ${ROW_END}
${rowDivider}  ${ROW_END}
${rowThumbnail} ${ROW_END}

<br/>

`;
};

const headerTemplate = (category) => {
  return `## [ ${category} ]

`;
};

export function markupGenerator(category, videos) {
  let content = '';
  let index = 0;
  let rowTitle = '';
  let rowDivider = '';
  let rowThumbnail = '';

  for (const video of videos) {
    const twoDigitIndex = String(1 + index).padStart(2, '0');

    rowTitle += titleTemplate({ index: twoDigitIndex, ...video });
    rowDivider += tableDividerTemplate;
    rowThumbnail += thumbnailTemplate(video);

    if (index % ROW_LENGTH === ROW_LENGTH - 1) {
      content += rowTemplate(rowTitle, rowDivider, rowThumbnail);
      rowTitle = '';
      rowDivider = '';
      rowThumbnail = '';
    }
    index++;
  }

  if (rowTitle !== '') {
    content += rowTemplate(rowTitle, rowDivider, rowThumbnail);
  }

  return headerTemplate(category) + content;
}

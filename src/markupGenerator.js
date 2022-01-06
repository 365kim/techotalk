const ROW_START = '|';
const ROW_END = '|';
const ROW_LENGTH = 5;
const THUMNAIL_WIDTH = 138;

const titleTemplate = ({ index, speaker, year, topic, videoURL }) =>
  `${ROW_START} ${index} <br> <sub>${speaker} - ${year}</sub> <br><br> [<sup>**${topic}**</sup>](${videoURL}) `;
const tableDividerTemplate = `${ROW_START} :---:`;
const thumnailTemplate = ({ topic, thumnailURL, videoURL }) =>
  `${ROW_START} [<img width="${THUMNAIL_WIDTH}" alt="${topic}" src="${thumnailURL}">](${videoURL}) `;

const rowTemplate = (rowTitle, rowDivider, rowThumnail) => {
  return `${rowTitle} ${ROW_END}
${rowDivider}  ${ROW_END}
${rowThumnail} ${ROW_END}

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
  let rowThumnail = '';

  for (const video of videos) {
    const twoDigitIndex = String(1 + index).padStart(2, '0');

    rowTitle += titleTemplate({ index: twoDigitIndex, ...video });
    rowDivider += tableDividerTemplate;
    rowThumnail += thumnailTemplate(video);

    if (index % ROW_LENGTH === ROW_LENGTH - 1) {
      content += rowTemplate(rowTitle, rowDivider, rowThumnail);
      rowTitle = '';
      rowDivider = '';
      rowThumnail = '';
    }
    index++;
  }

  if (rowTitle !== '') {
    content += rowTemplate(rowTitle, rowDivider, rowThumnail);
  }

  return headerTemplate(category) + content;
}

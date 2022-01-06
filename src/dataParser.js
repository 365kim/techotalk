const REGEXP_NOT_KOREAN_NOR_AMPERSAND = /[^\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF|\&amp\;]/g;

export function dataParser(video) {
  const { snippet, id } = video;
  const { title } = snippet;

  const PREFIX = '[10분 테코톡]';
  if (!title.startsWith(PREFIX)) {
    return { isValid: false };
  }

  const videoURL = `https://www.youtube.com/watch?v=${id.videoId}`;
  const fullTitle = snippet.title;
  const thumnailURL = snippet.thumbnails.medium.url;

  /* 예시: [10분 테코톡] 💙 하루의 실행 컨텍스트 */
  const DIVIDER = '의 ';

  const divisionIndex = fullTitle.indexOf(DIVIDER);
  const topic = fullTitle.slice(divisionIndex + DIVIDER.length);

  const speakerPossiblyWithEmoji = fullTitle.split(DIVIDER)[0].split(' ').slice(-1)[0];
  const speaker = speakerPossiblyWithEmoji.replaceAll(REGEXP_NOT_KOREAN_NOR_AMPERSAND, '');

  const videoData = { videoURL, thumnailURL, topic, speaker };

  return { isValid: true, videoData };
}

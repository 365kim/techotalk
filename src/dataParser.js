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
  const speaker = fullTitle.split(DIVIDER)[0].split(' ').slice(-1)[0];

  const videoData = { videoURL, thumnailURL, topic, speaker };

  return { isValid: true, videoData };
}

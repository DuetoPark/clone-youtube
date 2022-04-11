function getViewCount(video) {
  const { viewCount } = video.statistics;
  let result;

  if (viewCount > 100000) {
    const divided = Math.floor(viewCount / 10000);
    result = `${divided.toLocaleString()}만`;
  } else if (viewCount >= 10000) {
    const divided = (viewCount / 10000).toFixed(1);
    result = `${divided.toLocaleString()}만`;
  } else if (viewCount >= 1000) {
    const divided = (viewCount / 1000).toFixed(1);
    result = `${divided.toLocaleString()}천`;
  } else {
    result = Number(viewCount).toLocaleString();
  }

  return result;
}

function getLikeCount(video) {
  const { likeCount } = video.statistics;

  if (likeCount >= 100000000) {
    const result = Math.floor(likeCount / 100000000);
    return `${result}억`;
  } else if (likeCount >= 10000) {
    const result = Math.floor(likeCount / 10000);
    return `${result}만`;
  } else if (likeCount >= 1000) {
    const result = Math.floor(likeCount / 1000);
    return `${result.toFixed(1)}천`;
  } else {
    return likeCount;
  }
}

function getDate(video) {
  const [publishedDate, publishedTime] = video.snippet.publishedAt.split('T');

  const [year, month, date] = publishedDate.split('-');
  const [hour, min] = publishedTime.split(':');

  const now = new Date();
  const yearAmount = now.getFullYear() - year;
  const monthAmount = now.getMonth() - month;
  const dateAmount = now.getDate() - date;

  const hourAmount = now.getHours() - hour;
  const minAmount = now.getMinutes() - min;

  if (yearAmount > 0) {
    return `${yearAmount}년 `;
  } else if (monthAmount > 0) {
    return `${monthAmount}달 `;
  } else if (dateAmount > 0) {
    return `${dateAmount}일 `;
  } else if (hourAmount > 0) {
    return `${hourAmount}시간 `;
  } else {
    return `${minAmount}분 `;
  }
}

function getDuration(video) {
  let timeData = video.contentDetails.duration.replace('PT', '').split('');
  let stack = [];

  let duration = new Array(3).fill(0);
  const HOUR = 0;
  const MIN = 1;
  const SEC = 2;

  for (let item of timeData) {
    if (item === 'H') {
      duration[HOUR] = stack.join('');
      stack = [];
    } else if (item === 'M') {
      duration[MIN] = stack.join('');
      stack = [];
    } else if (item === 'S') {
      duration[SEC] = stack.join('');
    } else {
      stack.push(item);
    }
  }

  duration[MIN] = duration[MIN] ? duration[MIN].padStart(2, '0') : '00';
  duration[SEC] = duration[SEC] ? duration[SEC].padStart(2, '0') : '00';

  if (duration[HOUR] > 0) {
    return `${duration[HOUR]}:${duration[MIN]}:${duration[SEC]}`;
  } else {
    return `${duration[MIN]}:${duration[SEC]}`;
  }
}

export { getViewCount, getLikeCount, getDate, getDuration };

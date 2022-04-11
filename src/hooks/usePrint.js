import { getViewCount, getLikeCount, getDate, getDuration } from '../app/print';

export const usePrint = () => {
  const printView = (video) => {
    return getViewCount(video);
  };

  const printLike = (video) => {
    return getLikeCount(video);
  };

  const printDate = (video) => {
    return getDate(video);
  };

  const printDuration = (video) => {
    return getDuration(video);
  };

  return {
    printView,
    printLike,
    printDate,
    printDuration,
  };
};

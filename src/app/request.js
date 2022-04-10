import axios from 'axios';
import qs from 'qs';

class Request {
  constructor() {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {
        key: 'AIzaSyAIJ8l3hDl5ZM3fUiDISB0SX1mP_K7gFbg',
      },
    });
  }

  async mostPopular() {
    const videoResponse = await this.youtube.get('videos', {
      params: {
        chart: 'mostPopular',
        part: ['snippet', 'statistics', 'contentDetails'],
        maxResults: 25,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });

    const channelIdList = videoResponse.data.items.map(
      (item) => item.snippet.channelId
    );

    const channelResponse = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: channelIdList,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });

    const videoItems = videoResponse.data.items;
    const channelItems = channelResponse.data.items;

    const newVideoItems = videoItems.map((video) => {
      const { channelId } = video.snippet;

      const [matchedChannel] = channelItems.filter(
        (item) => item.id === channelId
      );

      return { ...video, channel: matchedChannel.snippet };
    });

    return newVideoItems;
  }

  async search(query) {
    const searchResponse = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
      },
    });

    const videoIdList = searchResponse.data.items.map(
      (item) => item.id.videoId
    );

    const videoResponse = await this.youtube.get('videos', {
      params: {
        id: videoIdList,
        part: ['snippet', 'statistics', 'contentDetails'],
        maxResults: 25,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });

    const channelIdList = videoResponse.data.items.map(
      (item) => item.snippet.channelId
    );

    const channelResponse = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: channelIdList,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });

    const videoItems = videoResponse.data.items;
    const channelItems = channelResponse.data.items;

    const newVideoItems = videoItems.map((video) => {
      const { channelId } = video.snippet;

      const [matchedChannel] = channelItems.filter(
        (item) => item.id === channelId
      );

      return { ...video, channel: matchedChannel.snippet };
    });

    console.log(newVideoItems);

    return newVideoItems;
  }
}

export default Request;

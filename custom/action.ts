import axios from 'axios';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const options = {
  url: base_url,
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const getDataFromAPI = async (url: string) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);
  return data;
};

interface VideoId {
  videoId: string | undefined;
  channelId: string | undefined;
}

interface Thumbnails {
  high: { url: string; width: number; height: number };
}

interface Statistics {
  subscriberCount?: string;
  videoCount?: string;
  viewCount?: string;
  commentCount?: string;
  favoriteCount?: string;
  likeCount?: string;
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  thumbnails: Thumbnails;
  title: string;
  publishedAt: string;
}

export interface SearchResult {
  id: VideoId;

  snippet: Snippet;
  statistics: Statistics;
}

export interface ChannelDataProperties {
  id: string;
  statistics: Statistics;
  snippet: Snippet;
}

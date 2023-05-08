const YOUTUBE_API_KEY = 'AIzaSyC0PfssYwX6OqNojBn7P65_QCDobcdWtDQ';
export const YOUTUBE_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${YOUTUBE_API_KEY}&maxResults=10`;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=`;
export const YOUTUBE_KEYWORD_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${YOUTUBE_API_KEY}&q=`;
export const LIVE_CHAT_COUNT = 25;


import axios from 'axios';

const KEY = 'AIzaSyC7W7f11R-UPg6uWP8raLBLvDqvOSozGnk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
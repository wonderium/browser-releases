import chrome from './data/chrome.json';
import chrome_android from './data/chrome_android.json';
import edge from './data/edge.json';
import firefox from './data/firefox.json';
import firefox_android from './data/firefox_android.json';
import safari from './data/safari.json';
import safari_ios from './data/safari_ios.json';

import type { Browser, ReleaseVersion, ReleaseDate, BrowserReleases } from './types/main';

export default {
	chrome: chrome.data,
	chrome_android: chrome_android.data,
	edge: edge.data,
	firefox: firefox.data,
	firefox_android: firefox_android.data,
	safari: safari.data,
	safari_ios: safari_ios.data,
} as BrowserReleases;

export type { Browser, ReleaseVersion, ReleaseDate, BrowserReleases } from './types/main';

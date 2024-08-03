import chromeJSON from './data/chrome.json';
import chrome_androidJSON from './data/chrome_android.json';
import edgeJSON from './data/edge.json';
import firefoxJSON from './data/firefox.json';
import firefox_androidJSON from './data/firefox_android.json';
import safariJSON from './data/safari.json';
import safari_iosJSON from './data/safari_ios.json';

import type {
	Browser,
	ReleaseVersion,
	ReleaseDate,
	BrowserVersions,
	BrowserReleases,
} from './types/main';

const chrome: BrowserVersions = chromeJSON.data;
const chrome_android: BrowserVersions = chrome_androidJSON.data;
const edge: BrowserVersions = edgeJSON.data;
const firefox: BrowserVersions = firefoxJSON.data;
const firefox_android: BrowserVersions = firefox_androidJSON.data;
const safari: BrowserVersions = safariJSON.data;
const safari_ios: BrowserVersions = safari_iosJSON.data;

export { chrome, chrome_android, edge, firefox, firefox_android, safari, safari_ios };

export default {
	chrome,
	chrome_android,
	edge,
	firefox,
	firefox_android,
	safari,
	safari_ios,
} as BrowserReleases;

export type {
	Browser,
	ReleaseVersion,
	ReleaseDate,
	BrowserVersions,
	BrowserReleases,
} from './types/main';

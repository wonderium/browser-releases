export type Browser =
	| 'chrome'
	| 'chrome_android'
	| 'edge'
	| 'firefox'
	| 'firefox_android'
	| 'safari'
	| 'safari_ios';

export type ReleaseVersion = string | number;

export type ReleaseDate = string;

export type BrowserVersions = Record<ReleaseVersion, ReleaseDate>;

export type BrowserReleases = Record<Browser, BrowserVersions>;

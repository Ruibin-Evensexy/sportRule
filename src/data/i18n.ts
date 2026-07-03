export type Locale = 'zh' | 'en' | 'de';
export const locales = ['zh', 'en', 'de'] as const;

export const localeLabels: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  de: 'Deutsch',
};

export const navLabels: Record<Locale, { home: string; sports: string; about: string }> = {
  zh: { home: '主页', sports: '运动规则', about: '关于' },
  en: { home: 'Home', sports: 'Sports', about: 'About' },
  de: { home: 'Start', sports: 'Sportregeln', about: 'Über' },
};

export const texts: Record<Locale, Record<string, string>> = {
  zh: {
    siteTitle: 'SportRule 运动规则说明',
    homeDescription: '提供游泳、篮球、足球、网球、羽毛球等官方规则说明，并支持持续添加新的运动项目。',
    homeIntro: '在这里你可以快速浏览运动规则、查看各项比赛的基础说明与官方要点。',
    sportsTitle: '运动规则导航',
    sportsDescription: '浏览官方运动规则说明，支持持续添加新的运动项目。',
    aboutTitle: '关于 SportRule',
    aboutIntro: 'SportRule 是一个运动规则说明平台，提供官方规则简介与实用要点。',
    aboutSupport: '当前支持以下运动：',
    aboutExtend: '你也可以通过新增 `src/data/sports.ts` 中的规则对象，快速扩展更多运动项目。',
    viewRules: '查看规则',
    returnHome: '返回运动导航',
    showDetail: '显示详细规则',
    showBrief: '显示简要规则',
    rulesLabel: '规则',
    notFoundTitle: '未找到该运动规则',
    notFoundMessage: '请返回运动导航并选择其他项目。',
  },
  en: {
    siteTitle: 'SportRule Official Rules',
    homeDescription: 'Official rules for swimming, basketball, soccer, tennis, badminton, and more, with support for multiple languages.',
    homeIntro: 'Browse sport rules quickly and see basic explanations with official highlights.',
    sportsTitle: 'Sport Rules Directory',
    sportsDescription: 'Browse official sport rules and continue adding more sport entries.',
    aboutTitle: 'About SportRule',
    aboutIntro: 'SportRule is a rules guide platform that provides official sport rule summaries and practical points.',
    aboutSupport: 'Currently supported sports:',
    aboutExtend: 'You can extend this site by adding new sport rule objects in `src/data/sports.ts`.',
    viewRules: 'View Rules',
    returnHome: 'Back to rules directory',
    showDetail: 'Show detailed rules',
    showBrief: 'Show brief rules',
    rulesLabel: 'Rules',
    notFoundTitle: 'Sport rules not found',
    notFoundMessage: 'Please return to the rules directory and select another sport.',
  },
  de: {
    siteTitle: 'SportRule Spielregeln',
    homeDescription: 'Offizielle Regeln für Schwimmen, Basketball, Fußball, Tennis, Badminton und mehr mit Mehrsprachigkeit.',
    homeIntro: 'Stöbere schnell durch Sportregeln und sieh dir grundlegende Erklärungen mit offiziellen Highlights an.',
    sportsTitle: 'Sportregel-Verzeichnis',
    sportsDescription: 'Durchsuche offizielle Sportregeln und füge weitere Sportarten hinzu.',
    aboutTitle: 'Über SportRule',
    aboutIntro: 'SportRule ist eine Plattform für Regelübersichten und praktische Hinweise zu Sportarten.',
    aboutSupport: 'Derzeit unterstützte Sportarten:',
    aboutExtend: 'Du kannst diese Seite erweitern, indem du neue Sportregel-Objekte in `src/data/sports.ts` hinzufügst.',
    viewRules: 'Regeln ansehen',
    returnHome: 'Zurück zum Regelverzeichnis',
    showDetail: 'Detaillierte Regeln anzeigen',
    showBrief: 'Kurze Regeln anzeigen',
    rulesLabel: 'Regeln',
    notFoundTitle: 'Sportregeln nicht gefunden',
    notFoundMessage: 'Bitte kehre zum Regelverzeichnis zurück und wähle eine andere Sportart.',
  },
};

export const getBasePath = (site?: string) => (site ? new URL(site).pathname.replace(/\/$/, '') : '');

export const normalizeLocale = (lang?: string) => (locales.includes(lang as Locale) ? (lang as Locale) : 'zh');

export const getRoute = (locale: Locale, page = '') => {
  const pagePart = page ? `/${page}` : '';
  return locale === 'zh' ? `${pagePart}` : `/${locale}${pagePart}`;
};

export const getPath = (locale: Locale, page = '', siteBasePath = '') => {
  const basePath = getBasePath(siteBasePath);
  const route = getRoute(locale, page);
  const resolved = `${basePath}${route}`.replace(/\/{2,}/g, '/');
  return resolved === '' ? '/' : resolved;
};

export const switchLocalePath = (pathname: string, targetLocale: Locale, siteBasePath = '') => {
  const basePath = getBasePath(siteBasePath);
  let path = pathname;

  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length);
  }
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  const segments = path.split('/').filter(Boolean);
  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  const route = segments.length ? segments.join('/') : '';
  const prefix = targetLocale === 'zh' ? '' : `/${targetLocale}`;
  return `${basePath}${prefix}/${route}`.replace(/\/\/{2,}/g, '/');
};

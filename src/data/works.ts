export type Work = {
  slug: string;
  title: string;
  description: { en: string; ja: string };
  tags: string[];
  year: string;
  link?: string; // 外部リンク(詳細ページに表示)
  image?: string; // public/ からの絶対パス。未指定ならプレースホルダー表示
  featured?: boolean;
};

// Public-facing only: things I can openly stand behind as made for others.
export const works: Work[] = [
  {
    slug: "dezamemo",
    title: "Dezamemo",
    description: {
      en: "A tool that digitizes 90 mythology-themed color palettes into a searchable, previewable color reference.",
      ja: "神話モチーフの配色事典90パターンをデータ化し、配色を検索・プレビューできるツール。",
    },
    tags: ["Go", "Design Tools"],
    year: "2026",
    link: "https://atelier-mano.booth.pm/items/8720039",
    image: "/works/dezamemo.png",
    featured: true,
  },
  {
    slug: "parts-zukan",
    title: "Electronics Encyclopedia",
    description: {
      en: "A visual reference for learning electronic components, microcontroller boards, and board symbols through real photos.",
      ja: "電子部品・マイコンボード・基板の記号を、実物の写真で見て覚えるための図鑑アプリ。",
    },
    tags: ["Web", "Reference"],
    year: "2026",
    link: "https://t-bfny.github.io/parts-zukan/",
    image: "/works/parts-zukan.png",
    featured: true,
  },
  {
    slug: "atelier-mano",
    title: "Atelier mano",
    description: {
      en: "A character-illustration brand — comics and essays published on note, plus a desktop mascot widget.",
      ja: "キャラクターイラストを中心としたブランド。noteでの漫画・エッセイ連載と、デスクトップマスコットウィジェットを展開。",
    },
    tags: ["Illustration", "Character Design"],
    year: "2026",
    link: "https://note.com/mano_prom",
    image: "/works/atelier-mano.png",
    featured: true,
  },
  {
    slug: "suno-prompt",
    title: "SUNO Prompt",
    description: {
      en: "An unofficial helper tool that auto-generates Suno.com music prompts from a word bank and applies them directly.",
      ja: "単語バンクからSuno.comの作曲プロンプトを自動生成し、そのまま反映する非公式の補助ツールです。",
    },
    tags: ["Chrome Extension", "AI"],
    year: "2026",
    link: "https://chromewebstore.google.com/detail/eemeimkhdjckcpehgkgpcnihlaedapkk?utm_source=item-share-cb",
    image: "/works/suno_prompt_ad.png",
    featured: true,
  },
  {
    slug: "yekipod",
    title: "Yekipod",
    description: {
      en: "A music player that works with Google Drive. Listen to your own tracks and YouTube playlists together in one unified interface.",
      ja: "Google Driveで使えるmusic playerです。お手持ちの音源とYouTube再生リストを統合されたUIで視聴できます。",
    },
    tags: ["Music", "Web"],
    year: "2026",
    link: "https://t-bfny.github.io/yekipod/",
    image: "/works/yekipod.png",
    featured: true,
  },
  {
    slug: "deadline-detector",
    title: "Deadline Detector",
    description: {
      en: "A gentle deadline management widget for Windows 11.",
      ja: "自罰感のない、優しい締切管理ウィジェット。Windows 11対応。",
    },
    tags: ["Windows", "Productivity"],
    year: "2026",
    link: "https://atelier-mano.booth.pm/items/8824996",
    image: "/works/deadline-detector.png",
    featured: true,
  },
  {
    slug: "hineco-studio",
    title: "hineco studio",
    description: {
      en: "A B-tier game commentary channel, covering not just Japanese titles but overseas Steam games as well.",
      ja: "B級ゲーム実況チャンネル。日本国内だけでなくSteamの海外ゲームも取り扱う。",
    },
    tags: ["Video Editing", "YouTube"],
    year: "2026",
    link: "https://www.youtube.com/channel/UCpBYJRyJ29FV-Ghc8qrfSXQ/videos",
    image: "/works/Part30.png",
    featured: true,
  },
];

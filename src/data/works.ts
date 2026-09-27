export type Work = {
  slug: string;
  title: string;
  description: string;
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
    description:
      "A tool that digitizes 90 mythology-themed color palettes into a searchable, previewable color reference.",
    tags: ["Go", "Design Tools"],
    year: "2026",
    link: "https://atelier-mano.booth.pm/items/8720039",
    image: "/works/dezamemo.png",
    featured: true,
  },
  {
    slug: "parts-zukan",
    title: "Electronics Encyclopedia",
    description:
      "A visual reference for learning electronic components, microcontroller boards, and board symbols through real photos.",
    tags: ["Web", "Reference"],
    year: "2026",
    link: "https://t-bfny.github.io/parts-zukan/",
    image: "/works/parts-zukan.png",
    featured: true,
  },
  {
    slug: "atelier-mano",
    title: "Atelier mano",
    description:
      "A character-illustration brand — comics and essays published on note, plus a desktop mascot widget.",
    tags: ["Illustration", "Character Design"],
    year: "2026",
    link: "https://note.com/mano_prom",
    image: "/works/atelier-mano.png",
    featured: true,
  },
  {
    slug: "suno-prompt",
    title: "SUNO Prompt",
    description:
      "An unofficial helper tool that auto-generates Suno.com music prompts from a word bank and applies them directly.",
    tags: ["Chrome Extension", "AI"],
    year: "2026",
    link: "https://chromewebstore.google.com/detail/eemeimkhdjckcpehgkgpcnihlaedapkk?utm_source=item-share-cb",
    image: "/works/suno_prompt_ad.png",
    featured: true,
  },
  {
    slug: "yekipod",
    title: "Yekipod",
    description:
      "A music player that works with Google Drive. Listen to your own tracks and YouTube playlists together in one unified interface.",
    tags: ["Music", "Web"],
    year: "2026",
    link: "https://t-bfny.github.io/yekipod/",
    image: "/works/yekipod.png",
    featured: true,
  },
  {
    slug: "deadline-detector",
    title: "Deadline Detector",
    description: "A gentle deadline management widget for Windows 11.",
    tags: ["Windows", "Productivity"],
    year: "2026",
    link: "https://atelier-mano.booth.pm/items/8824996",
    image: "/works/deadline-detector.png",
    featured: true,
  },
  {
    slug: "hineco-studio",
    title: "hineco studio",
    description:
      "A B-tier game commentary channel, covering not just Japanese titles but overseas Steam games as well.",
    tags: ["Video Editing", "YouTube"],
    year: "2026",
    link: "https://www.youtube.com/channel/UCpBYJRyJ29FV-Ghc8qrfSXQ/videos",
    featured: true,
  },
];

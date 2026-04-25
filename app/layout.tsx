import type { Metadata } from 'next';
import './globals.css';
import HomeInteractions from '@/components/HomeInteractions';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'KOMA｜让故事从灵感到上线一气呵成',
  description:
    'KOMA 是面向内容团队的创作平台，覆盖剧本、角色、分镜、生产协同与发布全流程。',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'KOMA｜让故事从灵感到上线一气呵成',
    description:
      'KOMA 是面向内容团队的创作平台，覆盖剧本、角色、分镜、生产协同与发布全流程。',
    images: ['/icon.svg'],
  },
  twitter: {
    card: 'summary',
    title: 'KOMA｜让故事从灵感到上线一气呵成',
    description:
      'KOMA 是面向内容团队的创作平台，覆盖剧本、角色、分镜、生产协同与发布全流程。',
    images: ['/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <HomeInteractions />
        {children}
      </body>
    </html>
  );
}

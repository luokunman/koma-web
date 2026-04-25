import type { Metadata } from 'next';
import './globals.css';
import HomeInteractions from '@/components/HomeInteractions';

export const metadata: Metadata = {
  title: 'AI漫剧｜让故事从灵感到上线一气呵成',
  description:
    'AI漫剧是面向内容团队的 AI 漫剧创作平台，覆盖剧本、角色、分镜、生产协同与发布全流程。',
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

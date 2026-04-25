'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const THEME_KEY = 'ai-manju-theme';

export default function HomeInteractions() {
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    const mobilePanel = document.querySelector<HTMLElement>('[data-mobile-panel]');
    const mobileToggle = document.querySelector<HTMLButtonElement>('[data-mobile-toggle]');
    const themeButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]'));
    const themeIcons = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-icon]'));
    const faqItems = Array.from(document.querySelectorAll<HTMLElement>('.faq-item'));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
    const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-mobile-panel] a'));
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;

    root.dataset.js = 'true';

    const updateThemeControls = (theme: Theme) => {
      const nextLabel = theme === 'dark' ? '切换为浅色模式' : '切换为深色模式';
      const nextIcon = theme === 'dark' ? '☀' : '☾';

      themeButtons.forEach((button) => {
        button.setAttribute('aria-label', nextLabel);
        button.setAttribute('title', nextLabel);
      });

      themeIcons.forEach((icon) => {
        icon.textContent = nextIcon;
      });
    };

    const applyTheme = (theme: Theme, persist = true) => {
      root.dataset.theme = theme;
      updateThemeControls(theme);
      if (persist) {
        window.localStorage.setItem(THEME_KEY, theme);
      }
    };

    const storedTheme = window.localStorage.getItem(THEME_KEY);
    const initialTheme: Theme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : prefersLight.matches
          ? 'light'
          : 'dark';

    applyTheme(initialTheme, storedTheme === 'light' || storedTheme === 'dark');

    const handleSystemThemeChange = () => {
      const currentStoredTheme = window.localStorage.getItem(THEME_KEY);
      if (!currentStoredTheme) {
        applyTheme(prefersLight.matches ? 'light' : 'dark', false);
      }
    };

    const handleThemeToggle = () => {
      const nextTheme: Theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
    };

    themeButtons.forEach((button) => {
      button.addEventListener('click', handleThemeToggle);
    });

    const setMobileMenu = (open: boolean) => {
      mobilePanel?.classList.toggle('is-open', open);
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', String(open));
        mobileToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
        mobileToggle.textContent = open ? '✕' : '☰';
      }
      body.style.overflow = open ? 'hidden' : '';
    };

    const handleMobileToggle = () => {
      const nextState = !mobilePanel?.classList.contains('is-open');
      setMobileMenu(Boolean(nextState));
    };

    mobileToggle?.addEventListener('click', handleMobileToggle);
    const mobileLinkCleanups: Array<() => void> = [];
    mobileLinks.forEach((link) => {
      const closeMobileMenu = () => setMobileMenu(false);
      link.addEventListener('click', closeMobileMenu);
      mobileLinkCleanups.push(() => {
        link.removeEventListener('click', closeMobileMenu);
      });
    });

    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const maxScroll = root.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
      setShowBackTop(scrollTop > 420);
      header?.classList.toggle('is-scrolled', scrollTop > 16);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    prefersLight.addEventListener('change', handleSystemThemeChange);

    const setFaqState = (item: HTMLElement, open: boolean) => {
      const trigger = item.querySelector<HTMLButtonElement>('[data-faq-trigger]');
      const answer = item.querySelector<HTMLElement>('[data-faq-answer]');

      item.classList.toggle('is-open', open);
      trigger?.setAttribute('aria-expanded', String(open));

      if (answer) {
        answer.classList.toggle('is-open', open);
        answer.style.maxHeight = open ? `${answer.scrollHeight}px` : '0px';
      }
    };

    faqItems.forEach((item) => {
      const trigger = item.querySelector<HTMLButtonElement>('[data-faq-trigger]');
      const answer = item.querySelector<HTMLElement>('[data-faq-answer]');
      const initiallyOpen = answer?.classList.contains('is-open') ?? false;

      if (answer) {
        answer.style.maxHeight = initiallyOpen ? `${answer.scrollHeight}px` : '0px';
      }

      if (initiallyOpen) {
        item.classList.add('is-open');
      }

      const handleFaqClick = () => {
        const willOpen = !item.classList.contains('is-open');

        faqItems.forEach((entry) => {
          setFaqState(entry, entry === item ? willOpen : false);
        });
      };

      trigger?.addEventListener('click', handleFaqClick);
      (item as HTMLElement & { __faqHandler?: () => void }).__faqHandler = handleFaqClick;
    });

    let observer: IntersectionObserver | null = null;
    if (prefersReducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -10% 0px',
        },
      );

      revealItems.forEach((item) => observer?.observe(item));
    }

    const tiltCleanups: Array<() => void> = [];

    if (!prefersReducedMotion.matches && supportsFinePointer) {
      tiltItems.forEach((item) => {
        const handlePointerMove = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 12;
          const rotateX = (0.5 - y / rect.height) * 12;

          item.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
        };

        const resetTilt = () => {
          item.style.transform = '';
        };

        item.addEventListener('pointermove', handlePointerMove);
        item.addEventListener('pointerleave', resetTilt);
        tiltCleanups.push(() => {
          item.removeEventListener('pointermove', handlePointerMove);
          item.removeEventListener('pointerleave', resetTilt);
          item.style.transform = '';
        });
      });
    } else {
      tiltItems.forEach((item) => {
        item.style.transform = 'none';
      });
    }

    return () => {
      body.style.overflow = '';
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      prefersLight.removeEventListener('change', handleSystemThemeChange);
      mobileToggle?.removeEventListener('click', handleMobileToggle);
      themeButtons.forEach((button) => {
        button.removeEventListener('click', handleThemeToggle);
      });
      mobileLinkCleanups.forEach((cleanup) => cleanup());
      faqItems.forEach((item) => {
        const trigger = item.querySelector<HTMLButtonElement>('[data-faq-trigger]');
        const handler = (item as HTMLElement & { __faqHandler?: () => void }).__faqHandler;
        if (handler) {
          trigger?.removeEventListener('click', handler);
        }
      });
      observer?.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <button
        className={`back-to-top ${showBackTop ? 'is-visible' : ''}`}
        type="button"
        aria-label="返回顶部"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}

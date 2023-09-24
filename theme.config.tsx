import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Mutasim</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <span className='text-1xl'>Algos</span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          Copyright © {new Date().getFullYear()} Mutasim
        </p>
        <p>All rights reserved.</p>
      </div>
    )
  },
  banner: {
    key: 'github',
    text: (
      <a href="https://github.com" target="_blank">
        Grant a Star ⭐ on Github  – It&apos;s for You ❤️
      </a>
    )
  },
  navbar: {
    extraContent: <></>
  },
  faviconGlyph: 'M',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
}

export default config;
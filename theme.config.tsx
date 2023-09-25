import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>AlgoUniverse</span>,
  project: {
    link: 'https://github.com/mutasim77/Algorithms-Universe',
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center">
        <a
          className="flex items-center gap-1 text-current"
          rel="noopener noreferrer"
          title="Algorithms Universe"
          href="/"
        >
          <span className='text-1xl'>Algorithms Universe</span>
        </a>
        <p className="mt-6 text-xs text-center">
          Copyright © 2023 - 2024 Mutasim
          <br />
          All rights reserved.
        </p>
      </div>
    )
  },
  banner: {
    key: 'github',
    text: (
      <a href="https://github.com/mutasim77/Algorithms-Universe" target="_blank">
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
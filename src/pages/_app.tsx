import { useEffect } from 'react'

import PlausibleProvider from 'next-plausible'
import 'nextra-theme-docs/style.css'

const darkBg = '#1c1c1c'

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  useEffect(() => {
    const gamerEl: HTMLAnchorElement = document.querySelector('nav a[href="https://webgamer.io"]')
    gamerEl?.setAttribute('rel', 'noopener')

    const fn = async () => {
      const res = await fetch(
        'https://discord.com/api/v9/invites/5Z28wjTeyh?with_counts=true&with_expiration=true',
      )
      const data = await res.json()
      const el: HTMLAnchorElement = document.querySelector(
        'nav a[href="https://webgamedev.com/discord"]',
      )
      el.style.top = '4px'

      if (!document.querySelector('.discord-count')) {
        const discordCount = document.createElement('div')
        discordCount.classList.add('discord-count')
        discordCount.innerText = data.approximate_member_count
        el.appendChild(discordCount)
      }
    }
    fn()
  }, [])

  return (
    <>
      <PlausibleProvider
        domain="webgamedev.com"
        trackOutboundLinks
        selfHosted
        customDomain="https://pl.v1v2.io"
      >
        {/* eslint-disable no-useless-escape */}
        <style global jsx>{`
          html[class~='dark'] .dark-invert-filter {
            filter: invert(100%);
          }
          nav a[href="https://webgamedev.com/discord"]
          {
            position: relative;
            top: 0px;
            transition: all 0.15s ease-in-out;
          }
          .title-container {
            padding-right: 12px;
            border-right: 1px solid #ddd;
            margin-right: 12px;
          }
          html[class~='dark'] .title-container {
            border-right: 1px solid #444;
          }
          @media (max-width: 900px) {
            .title-container {
              border-width: 0;
              margin-right: 0;
              padding-right: 0;
            }
            html[class~='dark'] .title-container {
              border-width: 0;
            }
            .tagline {
              display: none;
            }
          }
          nav a[href="https://webgamer.io"]
          {
            font-weight: bold;
          }
          @media (max-width: 800px) {
            nav a[href="https://webgamer.io"]
            {
              display: none;
            }
          }
          .discord-count {
            position: absolute;
            top: -2px;
            right: 0;
            background-color: #5865f2;
            color: white;
            padding: 0.05rem 0.3rem;
            border-radius: 999px;
            font-size: 0.6rem;
            font-weight: bold;
          }
          .newsletter-iframe {
            max-width: 338px;
            width: 100% !important;
            /* height: 220px; */
          }
          .more-tools {
            border: none;
            box-shadow: none;
          }
          .more-tools > div > div {
            padding: 0;
          }
          @media (max-width: 500px) {
            article main ul {
              margin-left: 1rem !important;
            }
          }
          html[class~='dark'] .dark\:nx-text-neutral-500 {
            --tw-text-opacity: 1;
            color: rgba(230, 230, 230, var(--tw-text-opacity));
          }
          html[class~='dark'] .black-text {
            --tw-text-opacity: 1;
            color: rgba(243, 244, 246, var(--tw-text-opacity));
          }
          /*
          ====== This attempt at a lighter BG only worked after HMR, probably SSR problem ======
          html[class~='dark'] body {
            background-color: ${darkBg};
          }
          html[class~='dark'] .nextra-sidebar-container .contrast-more\:nx-shadow-none {
            box-shadow: 0 -12px 16px ${darkBg};
          }
          @media (max-width: 767px) {
            html[class~='dark'] .nextra-sidebar-container .contrast-more\:nx-shadow-none {
              box-shadow: 0 -12px 16px #121212;
            }
          }
          */
          .black-text {
            color: #333;
          }
          .red-text {
            color: #ed3333;
          }
          .orange-text {
            color: #d78c00;
          }
          .green-text {
            color: #00ad00;
          }

          // Rotate logo on hover with transition, and do the animation once on load
          // spin keyframe
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          nav a:first-child {
            opacity: 1 !important;
          }
          nav a:first-child:hover .logo {
            transform: rotate(360deg);
            opacity: 1 !important;
          }
          .logo {
            transition: transform 0.5s ease;
            animation: spin 0.5s ease-in-out;
          }
          /* https://css-tricks.com/full-width-containers-limited-width-parents/ */
          .callout {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 2rem;
            padding-right: 2rem;
            border-radius: 5px;
            background-color: #f6f6f6;
          }
          .dark .callout {
            background-color: #222;
          }
          .todo {
            margin-top: 1.5rem;
            background: #fff9e6;
            padding: 1rem;
            border-radius: 5;
          }
          .dark .todo {
            background: #482e00;
          }
          @media (max-width: 600px) {
            .project-description {
              display: none;
            }
          }
          .short-years {
            display: none;
          }
          @media (max-width: 450px) {
            .short-years {
              display: inline;
            }
            .long-years {
              display: none;
            }
          }
          .project-description-mobile {
            display: none;
          }
          input[type='search'] {
            border: 1px solid #ddd;
            background-color: rgba(0, 0, 0, 0.035);
          }
          html[class~='dark'] input[type='search'] {
            border: 1px solid #444;
          }
          .nextra-search {
            width: 10rem !important;
            max-width: 100%;
          }
          .nextra-search ul {
            background-color: hsla(0, 0%, 100%, 1);
          }
          html[class~='dark'] .nextra-search ul {
            background-color: hsla(0, 0%, 7%, 1);
          }
          @media (max-width: 600px) {
            .project-description-mobile {
              display: block;
            }
            .project-description-desktop {
              display: none;
            }
            .nextra-search {
              width: 100% !important;
            }
          }
          @media (max-width: 767px) {
            .full-width-mobile {
              width: 98vw;
              position: relative;
              left: 50%;
              right: 50%;
              margin-left: -50vw;
              margin-right: -50vw;
            }
            .callout {
              /* Looks better on Android with those, but worse on desktop, check iOS */
              padding-left: 1.5rem;
              padding-right: 1.5rem;
              border-radius: 0;
            }
          }
          .support {
            position: relative;
            top: -1px; /* Looks better on Chrome desktop, worse on mobile */
          }
          .support-img {
            display: inline-block;
            position: relative;
            top: -1px;
            margin-right: 6px;
          }
          .support-btn {
            background: #171717;
            color: white;
            font-weight: 500;
            padding: 6px 14px;
            margin-left: 6px;
            font-size: 15px;
            border-radius: 999px;
          }
          html[class~='dark'] .support-btn {
            background: #eee;
            color: #111;
          }
          .support-img {
            fill: white;
          }
          html[class~='dark'] .support-img {
            fill: #111;
          }
          @media (max-width: 440px) {
            .support-img {
              margin-right: 0;
            }
            .support {
              display: none;
            }
          }
          @media (max-width: 265px) {
            .title-container {
              display: none;
            }
          }
          @media (max-width: 370px) {
            .support-btn {
              display: none;
            }
          }
          @media (max-width: 315px) {
            nav a[href="https://webgamedev.com/discord"]
            {
              display: none;
            }
          }
          @media (max-width: 425px) {
            nav a[href="https://github.com/verekia/webgamedev"]
            {
              display: none;
            }
          }
          @media (max-width: 530px) {
            .this-project {
              display: none;
            }
          }
          main h1 {
            font-size: 2.8rem !important;
            margin-top: 36px !important;
            text-align: center;
          }
          @media (max-width: 767px) {
            main h1 {
              font-size: 2rem !important;
              margin-top: 12px !important;
            }
          }
          @media (max-width: 560px) {
            .float-img {
              float: none !important;
              margin-left: auto !important;
              margin-right: auto !important;
              height: auto !important;
              width: 100% !important;
              max-width: 250px !important;
            }
          }
          .sp-wrapper {
            margin-top: 1.5rem !important;
          }
          .sp-layout {
            align-items: center !important;
          }
          .jam-slogan {
            font-size: 24px;
          }
          @media (max-width: 767px) {
            .jam-slogan {
              font-size: 18px;
            }
          }
        `}</style>
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  )
}

export default App

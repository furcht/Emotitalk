import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/reset.scss';
import '@/styles/global.scss';
import '@/styles/themes.config.scss';
import '@/styles/mainView.layout.scss';
import '@/styles/mainNav.component.scss';
import '@/styles/chatWindow.component.scss';
import '@/styles/messageBox.component.scss';
import '@/styles/roomsPanel.component.scss';
import '@/styles/overlay.component.scss';

import { Josefin_Sans } from 'next/font/google';
const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${josefinSans.style.fontFamily};
        }
      `}</style>
      <Head>
        {/* <title>EmotiTalk</title> */}
        {/* <meta name="description" content="Be the voice behind the emojis and talk to others" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

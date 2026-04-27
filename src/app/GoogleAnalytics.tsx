import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-33L5HGM6G1"
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-33L5HGM6G1');`}
      </Script>
    </>
  );
}

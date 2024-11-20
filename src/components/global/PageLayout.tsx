import { ReactNode } from 'react'
import { Header, Footer } from '@components/global'
import { GlobalProps } from '@utils/types'
import { SkipToMain } from '@components/utility'
import Script from 'next/script'

export const PageLayout = ({
  children,
  global,
  pageClasses,
}: {
  pageClasses?: string
  children: ReactNode
  global: GlobalProps
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: global.siteTitle,
    url: `${process.env.SITE_URL}`,
  }
  return (
    <main className={pageClasses}>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SkipToMain />
      <Header
        menu={global.navigation}
        title={global.siteTitle}
        phone={global.phone}
        logo={global.logo}
      />
      <div id="bodyContent" tabIndex={-1}>
        {children}
      </div>

      <Footer {...global} />
    </main>
  )
}

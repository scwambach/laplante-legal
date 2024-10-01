import { ReactNode } from 'react'
import { Header, Footer } from '@components/global'
import { GlobalProps } from '@utils/types'
import { SkipToMain } from '@components/utility'

export const PageLayout = ({
  children,
  global,
  pageClasses,
}: {
  pageClasses?: string
  children: ReactNode
  global: GlobalProps
}) => {
  return (
    <main className={pageClasses}>
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

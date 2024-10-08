import { PageLayout } from '@components/global/PageLayout'
import { BlockFactory } from '@components/utility/BlockFactory'
import { client, previewClient } from '@utils/client'
import { GlobalProps, PageProps } from '@utils/types'
import { urlFor } from '@utils/urlFor'
import { notFound } from 'next/navigation'
import { GLOBAL_QUERY } from 'queries/global'
import { PAGE_QUERY } from 'queries/page'

async function getData(slug: string, preview?: boolean) {
  const sanityClient = preview ? previewClient : client

  const globalData = await sanityClient.fetch(GLOBAL_QUERY)
  const pageData = await sanityClient.fetch(PAGE_QUERY, { slug })

  if (!pageData) {
    notFound()
  }

  return {
    globalData,
    pageData,
  }
}

export async function generateMetadata() {
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData('home')

  const ogImage = pageData.ogImage
    ? urlFor(pageData.ogImage).width(1200).height(630).url()
    : undefined
  const description = pageData.description || globalData.siteDescription

  return {
    title: globalData.siteTitle,
    description,
    openGraph: ogImage
      ? {
          images: [ogImage],
        }
      : undefined,
    icons: {
      icon: globalData.favicon,
    },
  }
}

export const revalidate = 0

export default async function Home({
  searchParams: { preview },
}: {
  searchParams: {
    preview: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData('home', preview === process.env.PREVIEW_TOKEN)

  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}

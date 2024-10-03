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

  if (!pageData || slug === 'home') {
    notFound()
  }

  return {
    globalData,
    pageData,
  }
}

export async function generateMetadata({
  params: { slug },
  searchParams: { preview },
}: {
  searchParams: {
    preview: string
  }
  params: {
    slug: string
  }
}) {
  const {
    globalData,
    pageData,
  }: { globalData: GlobalProps; pageData: PageProps } = await getData(
    slug,
    preview === process.env.PREVIEW_TOKEN
  )

  const ogImage = pageData.ogImage
    ? urlFor(pageData.ogImage).width(1200).height(630).url()
    : undefined
  const description = pageData.description || globalData.siteDescription

  return {
    title: pageData.title
      ? `${pageData.title} | ${globalData.siteTitle}`
      : globalData.siteTitle,
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

export default async function Home({
  params: { slug },
  searchParams: { preview },
}: {
  searchParams: {
    preview: string
  }
  params: {
    slug: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug, preview === process.env.PREVIEW_TOKEN)

  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}

import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-04-10',
}

const builder = imageUrlBuilder(config)

export const urlFor = (source: any) => builder.image(source)

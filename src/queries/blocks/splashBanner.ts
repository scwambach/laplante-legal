import { imageQuery, richTextProps } from 'queries/common'

export const splashBanner = `_type == "splashBanner" => {
  ...,
  subheading[] {
    ${richTextProps}
  },
  contentFooter[] {
    ${richTextProps}
  },
  ${imageQuery('backgroundImage', true)},
  ${imageQuery('foregroundMedia')},
  "secondaryLogo": *[_id == 'image-c9fdf17fc9a92794b88309add29180d21b680905-1081x1081-png'][0] {
      "blurDataURL": metadata.lqip,
    "alt": metadata.alt,
    "src": url,
    "height": metadata.dimensions.height,
    "width": metadata.dimensions.width,
  },
}`

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
}`

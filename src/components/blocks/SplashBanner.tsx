import { Button, ImageObject } from '@components/modules'
import { Box, Flex, Heading, Portable } from '@components/utility'
import { BannerProps } from '@utils/types'

interface SplashBannerProps extends BannerProps {
  contentFooter?: string | any[]
}

export const SplashBanner = ({
  backgroundImage,
  bgColor = 'primary',
  className,
  contentFooter,
  componentId,
  foregroundMedia,
  heading,
  headingLevel = 2,
  links,
  markdown,
  style,
  subheading,
  testId,
}: SplashBannerProps) => {
  return (
    <Box
      componentId={componentId}
      className={`splashBanner ${bgColor}${className ? ` ${className}` : ''}${
        backgroundImage ? ' has-image' : ''
      }`}
      testId={testId}
      elementTag="section"
      style={style}
    >
      <Flex fill alignItems="stretch" gap="none" className="inner">
        <Flex
          justifyContent="center"
          alignItems="flex-end"
          direction="column"
          className="content"
        >
          <Box className="inner">
            <Heading level={headingLevel}>{heading}</Heading>
            {subheading && (
              <>
                {markdown ? (
                  <p className="subheading">
                    <strong>{subheading as string}</strong>
                  </p>
                ) : (
                  <Portable content={subheading as any[]} />
                )}
                {links && (
                  <Box className="links">
                    {links.map((link, index) => (
                      <Button key={index} {...link} />
                    ))}
                  </Box>
                )}
              </>
            )}
            {contentFooter && (
              <>
                {markdown ? (
                  <p className="contentFooter">
                    <strong>{contentFooter as string}</strong>
                  </p>
                ) : (
                  <Portable
                    className="contentFooter"
                    content={contentFooter as any[]}
                  />
                )}
              </>
            )}
          </Box>
        </Flex>
        <Box className="image-box">
          <ImageObject {...foregroundMedia} isBackground />
        </Box>
      </Flex>
    </Box>
  )
}
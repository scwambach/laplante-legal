import { ImageObjectProps } from '../../utils/types'
import Image from 'next/image'

export const ImageObject = ({
  alt,
  blurDataURL,
  className,
  componentId,
  height,
  isBackground,
  query,
  sizes,
  src,
  testId,
  width,
}: ImageObjectProps) => {
  return (
    <span
      id={componentId}
      data-testid={testId}
      className={`imageObject${className ? ` ${className}` : ''}`}
      data-label={`${isBackground ? 'background' : 'image'}-container`}
    >
      {src && (
        <Image
          src={`${src}`}
          alt={`${alt}`}
          fill={isBackground}
          sizes={sizes}
          width={!isBackground ? width : undefined}
          height={!isBackground ? height : undefined}
          placeholder={blurDataURL || query ? 'blur' : undefined}
          blurDataURL={
            query
              ? `https://source.unsplash.com/random/10x10?${query}`
              : blurDataURL
          }
        />
      )}
    </span>
  )
}

import { ComponentProps, useState } from 'react'

interface Props extends ComponentProps<'img'> {
  src?: string | any
  alt: string
  fallbackImageSrc?: string
}

export const Img = (props: Props) => {
  const {
    src = 'https://picsum.photos/400/400',
    fallbackImageSrc,
    alt,
    className,
    ...rest
  } = props

  const [isError, setIsError] = useState<boolean>(false)
  const source = isError || !src ? fallbackImageSrc : src

  return (
    <img
      className={className}
      src={source}
      alt={alt}
      onError={() => setIsError(true)}
      {...rest}
    />
  )
}

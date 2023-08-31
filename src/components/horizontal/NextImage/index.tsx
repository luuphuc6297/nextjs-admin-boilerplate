import Image, { ImageProps } from 'next/image'

interface NextImageProps extends Omit<ImageProps, 'width' | 'height'> {
    width?: number
    height?: number
}

export const NextImage = ({ src, alt, width, height, ...rest }: NextImageProps) => {
    return <Image src={src} alt={alt} width={width} height={height} {...rest} />
}

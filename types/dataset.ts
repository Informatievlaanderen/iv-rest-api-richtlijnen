import { Image } from '~/types/image'

export interface Dataset {
    title: string,
    href: string,
    subtitle: string,
    image: Image,
    content: string,
}
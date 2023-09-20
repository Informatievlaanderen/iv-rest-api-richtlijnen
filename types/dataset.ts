import { Image } from '~/types/image'

export interface Dataset {
    title: string,
    href?: string,
    description?: string,
    image?: Image,
    content?: string,
}
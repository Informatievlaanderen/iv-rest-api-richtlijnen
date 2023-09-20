import { Contributor } from '~/types/contributor'

interface Definition {
    title: string,
    description: string,
    href?: string,
    headers: string[],
    rows: Object
}

export interface Configuration {
    title: string
    datePublished: string
    dateModified: string
    lastVersion: string
    authors: Contributor[]
    contributors: Contributor[]
    editors: Contributor[]
    summary: string
    status: string
    license: string
    conformity: string
    overview: string
    classes: Definition[]
    properties: Definition[]
    terminologies: Definition[]
}
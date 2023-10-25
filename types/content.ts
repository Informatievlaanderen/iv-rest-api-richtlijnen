import { Accordion } from "./accordion"

export interface Content {
    title: string
    introduction?: string
    paragraphs?: Array<string>
    faq?: Array<Accordion>
}
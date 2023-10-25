import { Dataset } from '~/types/dataset'
import { Accordion } from '~/types/accordion'
import { NavigationMenu } from '~/types/navigationMenu'

export interface Index {
    datasets?: Dataset[],
    about?: string,
    standards?: string,
    faq?: Accordion[],
    navigation: Array<NavigationMenu>
}
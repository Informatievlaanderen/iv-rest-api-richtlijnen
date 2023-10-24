import { Step } from "~/types/steps"
import { Person } from "~/types/person"
import { DataTable } from '~/types/dataTable'

export interface OSLOService {
    title?: string
    description?: string
    goal?: string
    roadmap?: Array<Step>
    team?: Array<Person>
    estimate?: DataTable
}
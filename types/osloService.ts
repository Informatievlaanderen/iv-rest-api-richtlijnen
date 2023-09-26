import { Step } from "~/types/steps"
import { Person } from "~/types/person"

export interface OSLOService {
    title?: string
    description?: string
    goal?: string
    roadmap?: Array<Step>
    team: Array<Person>
}
import { MarcomAgenda, Agenda } from "~/types/agenda";

export default defineEventHandler(async () => {
    try {
        const osloEventData: Array<Agenda> = (
            await fetch(import.meta.env.VITE_EVENT_API).then((result) =>
                result.json(),
            )
        )
            .filter((x: MarcomAgenda) => x?.campaignTitle?.includes('OSLO'))
            .map((x: MarcomAgenda) => {
                return {
                    title: x.title,
                    startDate: x.startDate,
                    endDate: x.endDate,
                    campaignTitle: x.campaignTitle,
                    registrationLink: x.registrationForm,
                    location: x.physicalLocation,
                }
            })
            .sort(
                (a: MarcomAgenda, b: MarcomAgenda) => {
                    if (a?.startDate && b?.startDate) {
                        return new Date(a.startDate).getTime() - new Date(b?.startDate).getTime()
                    }
                }
            )

        return osloEventData
    } catch (err: any) {
        throw createError({
            message: "Failed to fetch data from MarCom event API",
            statusCode: 400,
            fatal: false,
        });
    }

})
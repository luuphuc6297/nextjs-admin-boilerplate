import axiosMocksClient from '@/apis/mocks/axios-mocks-client'
import { AddEventType, CalendarFiltersType, EventType } from '@/types/app/calendar'

export const userMocksApis = {
    fetchEvent(calendars: CalendarFiltersType): Promise<any> {
        return axiosMocksClient.get('/apps/calendar/events', { params: calendars })
    },
    addEvent(event: AddEventType): Promise<any> {
        return axiosMocksClient.post('/apps/calendar/events', { data: event })
    },
    updateEvent(event: EventType): Promise<any> {
        return axiosMocksClient.post('/apps/calendar/update-event', { data: event })
    },
}

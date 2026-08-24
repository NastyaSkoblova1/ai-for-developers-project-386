import {
  publicEventTypesList,
  publicSlotsList,
  publicBookingsCreate,
  adminOwnerGet,
  adminEventTypesList,
  adminEventTypesCreate,
  adminEventTypeDetailGet,
  adminEventTypeDetailUpdate,
  adminEventTypeDetailDelete,
  adminBookingsList,
} from '@/generated/sdk.gen'
import type {
  EventTypeInput,
  EventTypeInputMergePatchUpdate,
  CreateBookingRequest,
} from '@/generated/types.gen'

// Public API
export const getPublicEventTypes = () => publicEventTypesList()
export const getPublicSlots = (id: string) => publicSlotsList({ path: { id } })
export const createBooking = (body: CreateBookingRequest) => publicBookingsCreate({ body })

// Admin API
export const getOwner = () => adminOwnerGet()
export const getAdminEventTypes = () => adminEventTypesList()
export const createEventType = (body: EventTypeInput) => adminEventTypesCreate({ body })
export const getAdminEventType = (id: string) => adminEventTypeDetailGet({ path: { id } })
export const updateEventType = (id: string, body: EventTypeInputMergePatchUpdate) =>
  adminEventTypeDetailUpdate({ path: { id }, body })
export const deleteEventType = (id: string) => adminEventTypeDetailDelete({ path: { id } })
export const getAdminBookings = () => adminBookingsList()

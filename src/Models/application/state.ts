import { CreateTickets, PurchaseBooking } from "../client/request";
import { Booking, TicketData, Tickets } from "../client/response";

export interface Ticket {
  showForm: boolean;
  showModal: boolean;
  status: "AVAILABLE" | "CANCELLED";
  category: "VIP" | "VVIP" | "REGULAR";
  page: number;
  size: number;
  record: Tickets;
  request: CreateTickets;
  tickets: Tickets;
  response: TicketData;
}

export interface Layout {
  showModal: boolean;
  response: Tickets;
  current: number;
  quality: number;
  request: PurchaseBooking;
  record: Booking;
  page: 1;
  size: 100;
}

// export interface Booking {
//   quality: number;
//   request: PurchaseBooking;
//   record: Booking;
// }

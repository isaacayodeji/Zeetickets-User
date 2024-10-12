export const endpoints = {
  ticket: {
    createTicket: "tickets",
    getOneTicket: "tickets/",
    getAllTicket: "tickets?",
    UpdateTicket: "tickets/",
    deleteTicket: "tickets/",
  },
  booking: {
    purchaseBooking: "bookings/purchase/",
    verifyPayment: "booking/verify?transactionRef=",
    getAllBooking: "bookings/get-all-bookings",
    getOneBooking: "booking/get-one-booking/",
  },
};

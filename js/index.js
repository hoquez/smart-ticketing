function selectingSeat(clickedSeat) {
  const clickedSeatId = clickedSeat.id;
  const selectedSeat = document.getElementById(clickedSeatId);
  selectedSeat.classList.add("bg-green-400", "text-white");
  const currentSeats = getTextElementValueById("total-seats");
  const updatedSeats = currentSeats + 1;
  setTextElementValueById("total-seats", updatedSeats);

  const currentTotalPrice = getTextElementValueById("total-price");
  const updatedPrice = currentTotalPrice + 550;
  setTextElementValueById("total-price", updatedPrice);
  //grand total
  const currentGrandTotal = getTextElementValueById("grand-total");
  const updatedGrandPrice = currentGrandTotal + 550;
  setTextElementValueById("grand-total", updatedGrandPrice);
  //
  selectedSeatOnInvoice(clickedSeat);
  updateSeatLeft();
  selectedSeat.removeAttribute("id");
  //No more than 4
  if (updatedSeats === 4) {
    const seatContainerDiv = document.getElementById("seat-container");
    for (const child of seatContainerDiv.children) {
      child.removeAttribute("id");
    }
  }
}

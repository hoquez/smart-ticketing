//seat planning

function selectedSeatOnInvoice(clickedSeat) {
  const clickedSeatId = clickedSeat.id;
  const selectedSeat = document.getElementById(clickedSeatId);
  const seatOnInvoice = document.getElementById("selected-seat-invoice");
  const divSeatNum = document.createElement("div");
  divSeatNum.innerText = clickedSeatId;
  seatOnInvoice.appendChild(divSeatNum);
  const divSeatClass = document.createElement("div");
  divSeatClass.innerText = "Economy";
  seatOnInvoice.appendChild(divSeatClass);
  const divSeatPrice = document.createElement("div");
  divSeatClass.innerText = "550";
  seatOnInvoice.appendChild(divSeatPrice);

  //
  //const divSeatCl = document.createElement("div");
  //divSeatCl.innerText = "XX";
  //seatOnInvoice.appendChild(divSeatClass);
}

function updateSeatLeft() {
  const currentSeatLeft = getTextElementValueById("seat-left");
  const updatedSeatNum = currentSeatLeft - 1;
  setTextElementValueById("seat-left", updatedSeatNum);
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

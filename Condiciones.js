const MaximoTazasReserva= 2;
const TazaReservada= 1;

if TazaReservada =<1; {
    console.log ("ok se reserva y llego al maximo");
} else {
  console.log ("No se pude reservas mas de 2 tazas");
}
    
const tazasReservadasPersona = 0;
const maxTazasPersona = 2;

if (tazasReservadasPersona === 0) {
    console.log("No tiene tazas reservadas, puede reservar hasta 2");
} else if (tazasReservadasPersona < maxTazasPersona) {
    console.log("Puede reservar una taza más");
} else {
    console.log("No puede reservar más tazas");
}
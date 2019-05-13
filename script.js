/*Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket
per una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti informazioni,
facendo attenzione che il numero generato abbia senso:
- Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
- Numero di punti fatti
- Numero di rimbalzi
- Falli
- Percentuale di successo per tiri da 2 punti
- Percentuale di successo per tiri da 3 punti
Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
Una volta cliccato sul codice giocatore,
nel corpo principale verranno visualizzate le statistiche corrispondenti.
*/

/*Genero 100 schede giocatore e dichiaro le informazioni che deve avere ogni giocatore di basket*/
for (var i = 0; i < 100; i++) {
  var giocatore = {
  "id": "",
  "numero_punti": "",
  "numero_rimbalzi": "",
  "falli": "",
  "perc_2punti": "",
  "perc_3punti": "",
  }

  var giocatori = [];
}

/*Genero 3 lettere random*/
function codici_casuali() {
  var nome = " ";
  var lettere = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
/*Genero 3 numeri random*/
  var numero = " ";
  var id_numero = ["0","1","2","3","4","5","6","7","0","9"];
  var codice_random = [];

  for (var i=0; i<3; i++) {
  var lettere_random = Math.floor(Math.random() * lettere.length);
  codice_random.push(lettere[lettere_random]);
}
 for (var j=0; j<3; j++) {
   var numeri_random = Math.floor(Math.random() * numero.length);
   codice_random.push(id_numero[numeri_random]);
}

/*Creo una funzione per generare tutte le altre caratteristiche dei giocatori:
 -un n° di punti casuale*/
function puntiCasuali () {
  var numero_punti = Math.floor(Math.random() * 60);
  return numero_punti
}

/*-rimbalzi casuali*/
function rimbalziCasuali () {
  var numero_rimbalzi = Math.floor(Math.random() * 40);
  return numero_rimbalzi
}

/*-falli*/
function falliCasuali () {
  var falli = Math.floor(Math.random() * 20);
  return falli
}

/*-percentuale casuale di tiri da 2 punti*/
function perc_2pt_casuale () {
  var perc_2punti = Math.floor(Math.random() * 1000 ) /10;
  return perc_2punti
}

/*percentuale casuale di tiri da 3 punti*/
function perc_3pt_casuale () {
  var perc_3punti = Math.floor(Math.random() * 1000 ) /10;
  return perc_3punti
}

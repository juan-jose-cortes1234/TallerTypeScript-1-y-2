import {series} from "./data"
import {Serie} from "./serie" 
const Tbody: HTMLElement = document.getElementById('seriest')!;
const cardBody : HTMLElement = document.getElementById('cardBody')!;
function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
      
      let tr = document.createElement("tr");
      let tdId = document.createElement("td");
      tdId.innerHTML = `${c.id}`;
      let tdName = document.createElement("td");
      let spanElement = document.createElement("span");
      spanElement.onclick = () => {c.showCard(cardBody)};
      spanElement.textContent = c.name
      tdName.appendChild(spanElement);
      let tdChannel = document.createElement("td");
      tdChannel.innerHTML = `${c.channel}`;
      let tdSeasons = document.createElement("td");
      tdSeasons.innerHTML = `${c.seasons}`;
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdChannel);
      tr.appendChild(tdSeasons)
      Tbody.appendChild(tr);
    });
    let trElement1 = document.createElement("td");

    trElement1.innerHTML = `Seasons average : ${getAverage(series)}`;
    Tbody.appendChild(trElement1);

  }
function getAverage(series: Serie[]): number {
  let sum : number = 0;
  let cant: number = 0;
  series.forEach(c=>{
    sum = sum + c.seasons;
    cant = cant + 1;


  })
  if (cant===0){
    return 0;
  }
  return sum/cant;
}


renderSeriesInTable(series);






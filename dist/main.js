import { series } from "./data.js";
var Tbody = document.getElementById('seriest');
var cardBody = document.getElementById('cardBody');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        tdId.innerHTML = "".concat(c.id);
        var tdName = document.createElement("td");
        var spanElement = document.createElement("span");
        spanElement.onclick = function () { c.showCard(cardBody); };
        spanElement.textContent = c.name;
        tdName.appendChild(spanElement);
        var tdChannel = document.createElement("td");
        tdChannel.innerHTML = "".concat(c.channel);
        var tdSeasons = document.createElement("td");
        tdSeasons.innerHTML = "".concat(c.seasons);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdChannel);
        tr.appendChild(tdSeasons);
        Tbody.appendChild(tr);
    });
    var trElement1 = document.createElement("td");
    trElement1.innerHTML = "Seasons average : ".concat(getAverage(series));
    Tbody.appendChild(trElement1);
}
function getAverage(series) {
    var sum = 0;
    var cant = 0;
    series.forEach(function (c) {
        sum = sum + c.seasons;
        cant = cant + 1;
    });
    if (cant === 0) {
        return 0;
    }
    return sum / cant;
}
renderSeriesInTable(series);

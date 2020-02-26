'use strict';

function getRndmCustNmbrHour(minCustHour, maxCustHour) {
  minCustHour = Math.ceil(minCustHour);
  maxCustHour = Math.floor(maxCustHour);
  return Math.floor(Math.random() * (maxCustHour - minCustHour)) + minCustHour;
}

var workHours = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
var totalOfStores = [];
var container = document.getElementById('cookiesStats');
var h1El = document.createElement('h1');
h1El.textContent = 'Pat\'s Salmon Cookies: Sales Data';
container.appendChild(h1El);
var tableEl = document.createElement('table');
container.appendChild(tableEl);



function CookieLocation (locationName, minCustHour, maxCustHour, avgCookiesCust){
  this.locationName= locationName;
  this.minCustHour= minCustHour;
  this.maxCustHour= maxCustHour;
  this.avgCookiesCust= avgCookiesCust;
  this.cookiesAmntHour= [];
  this.cookiesTotalDay= 0;
  totalOfStores.push(this);
  this.listCookies();
}

CookieLocation.prototype.listCookies = function(){
  for (var i = 0; i < workHours.length; i++) {
    var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
    this.cookiesAmntHour.push(rndmCustNmbr);
    this.cookiesTotalDay += rndmCustNmbr;
    // console.log(this.cookiesTotalDay);
  }
};

CookieLocation.prototype.bodyFun = function (){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var td0El = document.createElement('td');
  td0El.textContent= this.locationName;
  trEl.appendChild(td0El);
  for (var c = 0; c < workHours.length; c++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesAmntHour[c];
    trEl.appendChild(tdEl);
  }
  var tdfEl = document.createElement('td');
  tdfEl.textContent= this.cookiesTotalDay;
  trEl.appendChild(tdfEl);
};

new CookieLocation('Seattle', '23', '65', '6.3');
new CookieLocation('Tokyo', '3', '24', '1.2');
new CookieLocation('Dubai', '11', '38', '3.7');
new CookieLocation('Paris', '20', '38', '2.3');
new CookieLocation('Lima', '2', '16', '4.6');

function headerFun(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var td0El = document.createElement('td');
  td0El.textContent= '  ';
  trEl.appendChild(td0El);
  for (var x = 0; x < workHours.length; x++) {
    var thEl = document.createElement('th');
    thEl.textContent = workHours[x];
    trEl.appendChild(thEl);
  }
}

function footerFun(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var td0El = document.createElement('td');
  td0El.textContent= 'Totals';
  trEl.appendChild(td0El);
  var totalHours;
  var totalOfTotal=0;
  for (var h = 0; h < workHours.length; h++) {
    totalHours = 0;
    for (var s = 0; s < totalOfStores.length; s++) {
      totalHours += totalOfStores[s].cookiesAmntHour[h];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = totalHours;
    totalOfTotal += totalHours;
    trEl.appendChild(tdEl);
  }
  var tdTotalOfTotal = document.createElement('td');
  tdTotalOfTotal.textContent= totalOfTotal;
  trEl.appendChild(tdTotalOfTotal);
}


headerFun();
for (var i = 0; i < totalOfStores.length; i++) {
  totalOfStores[i].bodyFun();
}

footerFun();

'use strict';

function getRndmCustNmbrHour(minCustHour, maxCustHour) {
  minCustHour = Math.ceil(minCustHour);
  maxCustHour = Math.floor(maxCustHour);
  return Math.floor(Math.random() * (maxCustHour - minCustHour)) + minCustHour;
}
var workHours = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','Daily Location Total'];
var container = document.getElementById('cookiesStats');
var tableEl = document.createElement('table');
container.appendChild(tableEl);
function CookieLocation (locationName, minCustHour, maxCustHour, avgCookiesCust, cookiesAmntHour, cookiesTotalDay){
  this.locationName= locationName;
  this.minCustHour= minCustHour;
  this.maxCustHour= maxCustHour;
  this.avgCookiesCust= avgCookiesCust;
  this.cookiesAmntHour= cookiesAmntHour;
  this.cookiesTotalDay= cookiesTotalDay;
}
CookieLocation.prototype.listCookies = function(){
  for (var i = 0; i < workHours.length; i++) {
    var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
    this.cookiesAmntHour.push(rndmCustNmbr);
    this.cookiesTotalDay += rndmCustNmbr;
    // console.log(this.cookiesTotalDay);
  }
};
function headerFun(){
  var h1El = document.createElement('h1');
  container.appendChild(h1El);
  h1El.textContent = 'Pat\'s Salmon Cookies: Sales Data';
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
CookieLocation.prototype.bodyFun = function (){
  container.appendChild(tableEl);
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var td0El = document.createElement('td');
  td0El.textContent= `${this.locationName}`;
  trEl.appendChild(td0El);
  for (var c = 0; c < workHours.length-1; c++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesAmntHour[c];
    trEl.appendChild(tdEl);
  }
  var tdfEl = document.createElement('td');
  tdfEl.textContent= this.cookiesTotalDay;
  trEl.appendChild(tdfEl);
};
// function footerFun(){
//   var trEl = document.createElement('tr');
//   tableEl.appendChild(trEl);
//   var td0El = document.createElement('td');
//   td0El.textContent= 'Totals';
//   trEl.appendChild(td0El);
//   for (var t = 0; t < workHours.length; t++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = this.cookiesAmntHour[t];
//     trEl.appendChild(tdEl);
//   }
// }

headerFun();

var seattle= new CookieLocation('Seattle', 23, 65, 6.3, [], 0);
seattle.listCookies();
seattle.bodyFun();
console.log(seattle.cookiesAmntHour[0]);

var tokyo= new CookieLocation('Tokyo', 3, 24, 1.2, [], 0);
tokyo.listCookies();
tokyo.bodyFun();

var dubai= new CookieLocation('Dubai', 11, 38, 3.7, [], 0);
dubai.listCookies();
dubai.bodyFun();

var paris= new CookieLocation('Paris', 20, 38, 2.3, [], 0);
paris.listCookies();
paris.bodyFun();

var lima= new CookieLocation('Lima', 2, 16, 4.6, [], 0);
lima.listCookies();
lima.bodyFun();

// footerFun();

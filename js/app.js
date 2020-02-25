'use strict';
function getRndmCustNmbrHour(minCustHour, maxCustHour) {
  minCustHour = Math.ceil(minCustHour);
  maxCustHour = Math.floor(maxCustHour);
  return Math.floor(Math.random() * (maxCustHour - minCustHour)) + minCustHour;
}

var workHours = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];

var seattle = {
  locationName : 'Seattle',
  minCustHour : 23,
  maxCustHour : 65,
  avgCookiesCust : 6.3,
  cookiesAmntHour : [],
  cookiesTotalDay :0 ,

  listCookies : function(){
    for (var i = 0; i < workHours.length; i++) {
      var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
      this.cookiesAmntHour.push(rndmCustNmbr);
      this.cookiesTotalDay += rndmCustNmbr;
      // console.log(this.cookiesAmntHour);
      // console.log(this.cookiesTotalDay);
    }
  },
  render : function(){
    var container = document.getElementById('cookiesStats');
    var h1El = document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent = 'Pat\'s Salmon Cookies: Sales Data';
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.locationName;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var r = 0; r < workHours.length; r++) {
      var liEl = document.createElement('li');
      liEl.textContent = `At ${workHours[r]}: ${this.cookiesAmntHour[r]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.cookiesTotalDay}`;
    ulEl.appendChild(liTotal);
  }
};
seattle.listCookies();
seattle.render();

var tokyo = {
  locationName : 'Tokyo',
  minCustHour : 3,
  maxCustHour : 24,
  avgCookiesCust : 1.2,
  cookiesAmntHour : [],
  cookiesTotalDay :0 ,

  listCookies : function(){
    for (var i = 0; i < workHours.length; i++) {
      var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
      this.cookiesAmntHour.push(rndmCustNmbr);
      this.cookiesTotalDay += rndmCustNmbr;
      // console.log(this.cookiesAmntHour);
      // console.log(this.cookiesTotalDay);
    }
  },
  render : function(){
    var container = document.getElementById('cookiesStats');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.locationName;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var r = 0; r < workHours.length; r++) {
      var liEl = document.createElement('li');
      liEl.textContent = `At ${workHours[r]}: ${this.cookiesAmntHour[r]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.cookiesTotalDay}`;
    ulEl.appendChild(liTotal);
  }
};
tokyo.listCookies();
tokyo.render();

var dubai = {
  locationName : 'Dubai',
  minCustHour : 11,
  maxCustHour : 38,
  avgCookiesCust : 3.7,
  cookiesAmntHour : [],
  cookiesTotalDay :0 ,

  listCookies : function(){
    for (var i = 0; i < workHours.length; i++) {
      var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
      this.cookiesAmntHour.push(rndmCustNmbr);
      this.cookiesTotalDay += rndmCustNmbr;
      // console.log(this.cookiesAmntHour);
      // console.log(this.cookiesTotalDay);
    }
  },
  render : function(){
    var container = document.getElementById('cookiesStats');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.locationName;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var r = 0; r < workHours.length; r++) {
      var liEl = document.createElement('li');
      liEl.textContent = `At ${workHours[r]}: ${this.cookiesAmntHour[r]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.cookiesTotalDay}`;
    ulEl.appendChild(liTotal);
  }
};
dubai.listCookies();
dubai.render();

var paris = {
  locationName : 'Paris',
  minCustHour : 20,
  maxCustHour : 38,
  avgCookiesCust : 2.3,
  cookiesAmntHour : [],
  cookiesTotalDay :0 ,

  listCookies : function(){
    for (var i = 0; i < workHours.length; i++) {
      var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
      this.cookiesAmntHour.push(rndmCustNmbr);
      this.cookiesTotalDay += rndmCustNmbr;
      // console.log(this.cookiesAmntHour);
      // console.log(this.cookiesTotalDay);
    }
  },
  render : function(){
    var container = document.getElementById('cookiesStats');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.locationName;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var r = 0; r < workHours.length; r++) {
      var liEl = document.createElement('li');
      liEl.textContent = `At ${workHours[r]}: ${this.cookiesAmntHour[r]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.cookiesTotalDay}`;
    ulEl.appendChild(liTotal);
  }
};
paris.listCookies();
paris.render();

var lima = {
  locationName : 'Lima',
  minCustHour : 2,
  maxCustHour : 16,
  avgCookiesCust : 4.6,
  cookiesAmntHour : [],
  cookiesTotalDay :0 ,

  listCookies : function(){
    for (var i = 0; i < workHours.length; i++) {
      var rndmCustNmbr = Math.floor(getRndmCustNmbrHour(this.minCustHour , this.maxCustHour) * this.avgCookiesCust);
      this.cookiesAmntHour.push(rndmCustNmbr);
      this.cookiesTotalDay += rndmCustNmbr;
      // console.log(this.cookiesAmntHour);
      // console.log(this.cookiesTotalDay);
    }
  },
  render : function(){
    var container = document.getElementById('cookiesStats');
    var h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.locationName;
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var r = 0; r < workHours.length; r++) {
      var liEl = document.createElement('li');
      liEl.textContent = `At ${workHours[r]}: ${this.cookiesAmntHour[r]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.cookiesTotalDay}`;
    ulEl.appendChild(liTotal);
  }
};
lima.listCookies();
lima.render();

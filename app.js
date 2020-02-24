var seattle = {
  Location: 'seattle',
  minCustt: 23,
  maxCustt: 65,
  avgCookie: 6.3,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie: 0,
  randomCus: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
    }
  },
    CookieAmount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);
    }
  },
    CookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },
  renderList: function (){
    var container = document.getElementById('Sales Data');
    var h2location = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);

    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';
  }
  
}
seattle.randomCust();
seattle.CookieAmount();
seattle.CookieTotal();
seattle.renderList();
console.log(seattle);

var Tokyo = {
  Location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie: 0,
  randomCust$$: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
    }
  },
   CookieAmount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);
    }
  },
   CookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },

  renderList: function (){
    var container = document.getElementById('Sales Data');
    var h2location$ = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);
  
    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';
  }
  
}
Tokyo.randomCust();
Tokyo.CookieAmount();
Tokyo.CookieTotal();
Tokyo.renderList();
console.log(Tokyo);

var Dubai = {
  Location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie: 0,
  randomCust: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
    }
  },
 
  CookieAmount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);
    }
  },
  
   CookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },
  renderList: function (){
    var container = document.getElementById('Sales Data');
    var h2location$ = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);
    
    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';
  }
  
}
Dubai.randomCust();
Dubai.CookieAmount();
Dubai.CookieTotal();
Dubai.renderList();
console.log(Dubai);

var Paris = {
  Location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie: 0,
  randomCust$$: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
    }
  },

  CookieAmount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);
    }
  },
  
  CookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },
  renderList: function (){
    var container = document.getElementById('Sales Data');
    var h2location$ = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);
  
    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';
  }
  
}
Paris.randomCust();
Paris.CookieAmount();
Paris.CookieTotal();
Paris.renderList();
console.log(Paris);
 
 var Lima = {
  Location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hours: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  customers: [],
  cookieAmounts: [],
  dailyTotalCookie: 0,
  randomCust: function () {
    for (var i = 0; i < this.hours.length; i++) {
      this.customers[i] = getRandomCust(this.minCust, this.maxCust);
    }
  },
 
 CookieAmount: function () {
    for (var j = 0; j < this.hours.length; j++) {
      this.cookieAmounts[j] = this.customers[j] * this.avgCookie;
      this.cookieAmounts[j] = Math.floor(this.cookieAmounts[j]);
    }
  },
  
  CookieTotal:function(){
    for(var c=0;c<this.cookieAmounts.length;c++){
      this.dailyTotalCookie=this.dailyTotalCookie+this.cookieAmounts[c];
    }
  },
  
  renderList: function (){
    var container = document.getElementById('Sales Data');
    var h2location$ = document.createElement('h2');
    container.appendChild(h2location$);
    h2location$.textContent=this.Location$;
    var ulList = document.createElement('ul');
    container.appendChild(ulList);
   
    for(var a =0; a<this.hours.length ; a++) {
      var liList = document.createElement('li');
      ulList.appendChild(liList);
      liList.textContent = this.hours[a] + ' : ' + this.cookieAmounts[a] + " cookies";
  }
  ulList.appendChild(liList);
  liList.textContent='Total:'+this.dailyTotalCookie+' cookies';
  }
}
Lima.randomCust();
Lima.CookieAmount();
Lima.CookieTotal();
Lima.renderList();
console.log(Lima);

function getRandomCust(min, max) {
var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
return randomCust;
}
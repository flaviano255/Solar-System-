const MOON   = "moon";
const PLANET = "planet";
const AU     = 149597870; // 149 597 870 KMS ASTRONOMICAL UNIT 
const LY     = 9460730472580.8; // 9 460 730 472 580.8 KMS LIGHT YEAR

/*
+-------------------+---------------+
|      Planets      | Distance (km) |
+-------------------+---------------+
| Mercury -> Venus  |      50290000 |
| Venus -> Earth    |      41400000 |
| Earth -> Mars     |      78340000 |
| Mars -> Jupiter   |     550390000 |
| Jupiter -> Saturn |     646270000 |
| Saturn -> Uranus  |    1448950000 |
| Uranus -> Neptune |    1627450000 |
| Neptune -> Pluto  |    1405380000 |
+-------------------+---------------+
*/

var crossDist = [{'from':'Mercury',  'to':'Venus', 'dist_km':'50290000'},
{'from':'Mercury',  'to':'Earth', 'dist_km':'91691000'},
{'from':'Mercury',  'to':'Mars', 'dist_km':'170030000'},
{'from':'Mercury',  'to':'Jupiter', 'dist_km':'720420000'},
{'from':'Mercury',  'to':'Saturn', 'dist_km':'1366690000'},
{'from':'Mercury',  'to':'Uranus', 'dist_km':'2815640000'},
{'from':'Mercury',  'to':'Neptune', 'dist_km':'4443090000'},
{'from':'Venus',  'to':'Earth', 'dist_km':'41400000'},
{'from':'Venus',  'to':'Mars', 'dist_km':'119740000'},
{'from':'Venus',  'to':'Jupiter', 'dist_km':'670130000'},
{'from':'Venus',  'to':'Saturn', 'dist_km':'1316400000'},
{'from':'Venus',  'to':'Uranus', 'dist_km':'2765350000'},
{'from':'Venus',  'to':'Neptune', 'dist_km':'4392800000'},
{'from':'Earth',  'to':'Mars', 'dist_km':'78340000'},
{'from':'Earth',  'to':'Jupiter', 'dist_km':'628730000'},
{'from':'Earth',  'to':'Saturn', 'dist_km':'1275000000'},
{'from':'Earth',  'to':'Uranus', 'dist_km':'2723950000'},
{'from':'Earth',  'to':'Neptune', 'dist_km':'4351400000'},
{'from':'Mars',  'to':'Jupiter', 'dist_km':'550390000'},
{'from':'Mars',  'to':'Saturn', 'dist_km':'1196660000'},
{'from':'Mars',  'to':'Uranus', 'dist_km':'2645610000'},
{'from':'Mars',  'to':'Neptune', 'dist_km':'4273060000'},
{'from':'Jupiter',  'to':'Saturn', 'dist_km':'646270000'},
{'from':'Jupiter',  'to':'Uranus', 'dist_km':'2095220000'},
{'from':'Jupiter',  'to':'Neptune', 'dist_km':'3722670000'},
{'from':'Saturn',  'to':'Uranus', 'dist_km':'1448950000'},
{'from':'Saturn',  'to':'Neptune', 'dist_km':'3076400000'},
{'from':'Uranus',  'to':'Neptune', 'dist_km':'1627450000'}];



var planetsList = [
  {"object":"moon", "name":"moon", "index":"10", "tilt":"6.68", "sidday": "27.322", "sidspeed": "1022", "sidyear":"27.322", "rotspeed": "1", "temp":"-173:127", "distance":"385000", "equatorcirc": "10917", "albedo":"0.136", "mass":"0.0123", "moon":"0", "moonnames":"", "sizefactor":"0.1", "displayfactor":"0.01", "type":"satellite", "diameter":"3476", "gravity":"1.62", "orbiting":"earth", "composition":"silicates", "missions":"23", "missionslist":"<t1>1959-Present</t1>,14/09/1959 URSS Luna 2,26/04/1962 NASA Ranger 4,02/02/1964 NASA Ranger 6,31/07/1964 NASA Ranger 7,20/02/1965 NASA Ranger 8,24/03/1965 NASA Ranger 9,03/02/1966 URSS Luna 9,02/06/1966 NASA Surveyor 1,23/09/1966 NASA Surveyor 2,24/12/1966 URSS Luna 13,20/04/1967 NASA Surveyor 3,20/07/1969 NASA <t2>Apollo</t2> <t2>11</t2>,21/07/1969 URSS Luna 15,19/11/1969 NASA Apollo 12,20/09/1970 URSS Luna 16,05/02/1971 NASA Apollo 14,07/08/1971 NASA Apollo 15,21/04/1972 NASA Apollo 16,11/12/1972 NASA Apollo 17,18/08/1976 URSS Luna 24,14/11/2008 Inde Moon-Imp-Probe 1,14/12/2013 CNSA Yutu-Chang'e 3,03/01/2019 CNSA Chang'e 4","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/moon.jpg"},
  {"object":"moon", "name":"phobos", "index":"11", "tilt":"0", "sidday": "0.739", "sidspeed": "2.138", "sidyear":"0.77", "rotspeed": "11.0", "temp":"−40:-4", "distance":"9376", "equatorcirc": "69.7", "albedo":"0.071", "mass":"1.784", "moon":"0", "moonnames":"", "sizefactor":"0.01", "displayfactor":"0.01", "type":"D-type asteroid", "diameter":"27 × 22 × 18", "gravity":"0.0057", "orbiting":"mars", "composition":"carbon-rich,ice,regolith", "missions":"2", "missionslist":"<t1>2001-Present</t1>,Mars-Odyssey-themis NASA 07/04/2001,Mars-express ESA 02/06/2003","imgurl":"https://www.transportsbuisson.fr/wp-content/uploads/codpen/phobos.png"},
  {"object":"moon", "name":"deimos", "index":"12", "tilt":"27.58", "sidday": "0.739", "sidspeed": "1.3513", "sidyear":"1.3", "rotspeed": "11.0", "temp":"−132:-14", "distance":"23458", "equatorcirc": "39", "albedo":"0.068", "mass":"0.247179", "moon":"0", "moonnames":"", "sizefactor":"0.01", "displayfactor":"0.01", "type":"D-type asteroid", "diameter":"27 × 22 × 18", "gravity":"0.0057", "orbiting":"mars", "composition":"carbon-rich,ice,regolith", "missions":"2", "missionslist":"<t1>2001-Present</t1>,Mars-Odyssey-themis NASA 07/04/2001,Mars-express ESA 02/06/2003","imgurl":"https://www.transportsbuisson.fr/wp-content/uploads/codpen/deimos.png"},
  {"object":"moon", "name":"io", "index":"13", "tilt":"27.58", "sidday": "0.739", "sidspeed": "17.34", "sidyear":"1.77", "rotspeed": "11.0", "temp":"−132:-14", "distance":"421900", "equatorcirc": "", "albedo":"0.068", "mass":"0.247179", "moon":"0", "moonnames":"", "sizefactor":"0.01", "displayfactor":"0.01", "type":"D-type asteroid", "diameter":"3630", "gravity":"0.0057", "orbiting":"jupiter", "composition":"carbon-rich,ice,regolith", "missions":"8", "missionslist":"<t1>1972-Present</t1>,Pioneer-10 NASA 03/03/1972,Pioneer-11 NASA 06/04/1973,Voyager-2 NASA 20/08/1977,Voyager-1 NASA 05/07/1977,Galileo Germ/NASA 09/11/1989,Juno NASA 05/08/2011,Jupiter-IME NASA 2022,Europa-Clipper NASA 2025", "earthdist":"4.2","imgurl":"https://www.transportsbuisson.fr/wp-content/uploads/codpen/io.png"},
  {"object":"moon", "name":"europa", "index":"14", "tilt":"27.58", "sidday": "0.739", "sidspeed": "17.34", "sidyear":"1.77", "rotspeed": "11.0", "temp":"−132:-14", "distance":"421900", "equatorcirc": "9807", "albedo":"0.068", "mass":"0.247179", "moon":"0", "moonnames":"", "sizefactor":"0.01", "displayfactor":"0.01", "type":"D-type asteroid", "diameter":"3630", "gravity":"0.0057", "orbiting":"jupiter", "composition":"carbon-rich,ice,regolith", "missions":"8", "missionslist":"<t1>1972-Present</t1>,Pioneer-10 NASA 03/03/1972,Pioneer-11 NASA 06/04/1973,Voyager-2 NASA 20/08/1977,Voyager-1 NASA 05/07/1977,Galileo Germ/NASA 09/11/1989,Juno NASA 05/08/2011,Jupiter-IME NASA 2022,Europa-Clipper NASA 2025", "earthdist":"4.2","imgurl":"https://www.transportsbuisson.fr/wp-content/uploads/codpen/europa.png"},
  {"object":"planet", "name":"mercury", "index":"1", "tilt":"0.034", "sidday": "58.646", "sidspeed": "47.89", "sidyear":"87.969", "rotspeed": "3.01", "temp":"-173:426", "distance":"0.3871", "equatorcirc": "15329", "albedo":"0.119", "mass":"0.05528", "moon":"0", "moonnames":"", "sizefactor":"0.38299", "displayfactor":"0.1", "type":"terrestrial", "diameter":"4879", "gravity":"3.7", "orbiting":"sun", "composition":"Fe,Ni,Si", "missions":"3", "missionslist":"<t1>1973-Present</t1>,Mariner-10 USA 03/11/1973,messenger USA 03/08/2004,- - 14/01/2008,- - 02/10/2008,- - 28/09/2009,BepiColombo ESA/JAXA 19/10/2018", "earthdist":"0.61","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mercury.jpg"},
  {"object":"planet", "name":"venus", "index":"2", "tilt":"177.3", "sidday": "243.017", "sidspeed": "35.02", "sidyear":"224.68", "rotspeed": "1.81", "temp":"482", "distance":"0.7233", "equatorcirc": "38025", "albedo":"0.750", "mass":"0.815", "moon":"0", "moonnames":"", "sizefactor":"0.94993", "displayfactor":"0.3", "type":"terrestrial", "diameter":"12104", "gravity":"8.87", "orbiting":"sun", "composition":"Fe,Ni,silicates", "missions":"24","missionslist":"<t1>1962-Present</t1>,Mariner-2 USA 14/12/1962,Venera-4 URSS 18/10/1967,Mariner-5 USA 19/10/1967,Venera-5 URSS 16/05/1969,Venera-6 URSS 17/05/1969,<t2>Venera-7</t2> <t2>URSS</t2> <t2>15/10/1970</t2>,Venera-8 URSS 22/07/1972,Venera-9 URSS 08/06/1975,Venera-10 URSS 09/06/1975,Pioneer-venus USA 04/12/1978,- - 01/03/1992,Pioneer-Venus-Multiprobe NASA 09/12/1978,Venera-12 URSS 21/12/1978,Venera-11 URSS 25/12/1978,Venera-13 URSS 01/03/1982,Venera-14 URSS 05/03/1982,Venera-15 URSS 1983–1984,Venera-16 URSS 1983–1984,Vega-1 URSS 11/06/1985,Vega-2-halley URSS 15/06/1985,Magellan NASA 10/08/1990,– - 12/10/1994,Venus-Express ESA 11/04/2006,- – 16/12/2014,Shin'en JAXA 20/05/2010,IKAROS JAXA 20/05/2010,- - 03/04/2015,Akatsuki JAXA 20/05/2010","earthdist":"0.28","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/venus.jpg"},   
  {"object":"planet", "name":"earth", "index":"3", "tilt":"23.44", "sidday": "0.99785", "sidspeed": "29.78", "sidyear":"365.256365", "rotspeed": "437.22", "temp":"-88:58", "distance":"1", "equatorcirc": "40030", "albedo":"0.306", "mass":"1", "moon":"1", "moonnames":"Moon", "sizefactor":"1", "displayfactor":"0.32", "type":"terrestrial", "diameter":"12756", "gravity":"9.807", "orbiting":"sun", "composition":"Fe,Ni,silicates", "missions":"0", "earthdist":"0","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg"},
  {"object":"planet", "name":"mars", "index":"4", "tilt":"25.19", "sidday": "1.026", "sidspeed": "24.077", "sidyear":"686.93", "rotspeed": "240.56", "temp":"-140:20", "distance":"1.5237", "equatorcirc": "21297", "albedo":"0.250", "mass":"0.10745", "moon":"2", "moonnames":"Phobos,Deimos", "sizefactor":"0.53202", "displayfactor":"0.15", "type":"terrestrial", "diameter":"6794", "gravity":"3.721", "orbiting":"sun", "composition":"Fe,S,silicates", "missions":"51", "missionslist":"<t1>1960-Present</t1>,Marsnik-1 URSS 1960,Marsnik-2 URSS 1960,Spoutnik-2 URSS 1962,Mars-1 URSS 1962,Spoutnik-2 URSS 1962,Mariner-3 NASA 1964,Zond-2 URSS 1964,Mariner-4 NASA 1964,Mariner-6 NASA 1969,Mariner-7 NASA 1969,Mars-1969A URSS 1969,Mars-1969B URSS 1969,Mariner-8 NASA 1971,Cosmos-4 URSS 1971,Mariner-9 NASA 1971,mars-07 URSS 1971,mars-09 URSS 1971,mars-11 URSS 1973,mars-12 URSS 1973,mars-13 URSS 1973,Viking-1 NASA 1975,Viking-2-Orbiter NASA 1975,Viking-2-Lander NASA 1976,Phobos-1 URSS 1988,Phobos-2 URSS 1988,Mars-Observer NASA 1992,Mars-Surveyor NASA 1996,Mars-96 RKA 1996,Mars-Pathfinder NASA 1996,Sojourner-1 NASA 1997,Nozomi JAXA 1998,Mars-Climate NASA 1998,Mars-Polar-Lander NASA 1999,Deep-Space-2 NASA 1999,Mars-Odyssey NASA 2001,Mars-Express ESA 2003,Beagle-2 UK 2003,MER-A-Spirit NASA 2003,MER-B-Opportunity NASA 2003,Mars-Reconnaissance NASA 2005,Phoenix-1 NASA 2007,MSL-Curiosity NASA 2011,Mars-Orbiter-Mission ISRO 2013,MAVEN-1 NASA 2013,ExoMars-2016 ESA 2016,Trace-Gas-Orbiter ESA 2016,Schiaparelli ESA 2016,InSight NASA 2018,Mars-Hope NASA 2020,Tianwen-1 CNSA 2020,Perseverance NASA 2020,Ingenuity NASA 2021", "earthdist":"0.52","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mars.jpg"},
  {"object":"planet", "name":"jupiter", "index":"5", "tilt":"13.13", "sidday": "0.414", "sidspeed": "13.07", "sidyear":"4332.59", "rotspeed": "12.66", "temp":"-108", "distance":"5.2028", "equatorcirc": "439264", "albedo":"0.343", "mass":"317.83179", "moon":"79", "moonnames":"Io,Europa,Ganymede,Callisto", "sizefactor":"10.973", "displayfactor":"1", "type":"gaz giant", "diameter":"142984", "gravity":"24.79", "orbiting":"sun", "composition":"Hydrogen,Helium", "missions":"8", "missionslist":"<t1>1972-Present</t1>,Pioneer-10 NASA 03/03/1972,Pioneer-11 NASA 06/04/1973,Voyager-2 NASA 20/08/1977,Voyager-1 NASA 05/07/1977,Galileo Germ/NASA 09/11/1989,Juno NASA 05/08/2011,Jupiter-IME NASA 2022,Europa-Clipper NASA 2025", "earthdist":"4.2","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/jupiter.jpg"},
  {"object":"planet", "name":"saturn", "index":"6", "tilt":"26.73", "sidday": "0.444", "sidspeed": "9.69", "sidyear":"10759.22", "rotspeed": "10.23", "temp":"-139", "distance":"9.5388", "equatorcirc": "365882", "albedo":"0.342", "mass":"95.14531", "moon":"62", "moonnames":"Titan,Rhea,Enceladus", "sizefactor":"9.1402", "displayfactor":"0.8", "type":"gaz", "diameter":"120536", "gravity":"10.44", "orbiting":"sun", "composition":"hydrogen,helium", "missions":"4", "missionslist":"<t1>1973-Present</t1>,Pioneer-11 NASA 06/04/1973,Voyager-2 NASA 20/08/1977,Voyager-1 NASA 05/07/1977,Cassini-huygens ESA/NASA/ASI 15/10/1997,Dragonfly NASA 2027","earthdist":"8.55","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/saturn.jpg"},
  {"object":"planet", "name":"uranus", "index":"7", "tilt":"82.23", "sidday": "0.718", "sidspeed": "6.81", "sidyear":"30685.40", "rotspeed": "4.11", "temp":"-197", "distance":"19.18", "equatorcirc": "159354", "albedo":"0.300", "mass":"14.53228", "moon":"27", "moonnames":"Oberon,Titania,Miranda,Ariel,Umbriel", "sizefactor":"3.9809", "displayfactor":"0.5", "type":"gaz", "diameter":"51118", "gravity":"8.87", "orbiting":"sun", "composition":"ice,silicates", "missions":"1", "missionslist":"<t1>1977-Present</t1>,Voyager-2 NASA 20/08/1977","earthdist":"18.22","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/uranus2.jpg"},
  {"object":"planet", "name":"neptune", "index":"8", "tilt":"28.32", "sidday": "0.671", "sidspeed": "5.43", "sidyear":"60189", "rotspeed": "2.70", "temp":"-214", "distance":"30.0611", "equatorcirc": "154705", "albedo":"0.290", "mass":"17.14711", "moon":"14", "moonnames":"Triton", "sizefactor":"3.8647", "displayfactor":"0.48", "type":"gaz", "diameter":"49528", "gravity":"11.15", "orbiting":"sun", "composition":"ice,silicates", "missions":"1", "missionslist":"<t1>1977-Present</t1>,Voyager-2 NASA 20/08/1977","earthdist":"29.10","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/neptune.jpg"},
  {"object":"planet", "name":"pluto", "index":"9", "tilt":"57.47", "sidday": "6.387", "sidspeed": "4.74", "sidyear":"90560", "rotspeed": "34.23", "temp":"-229", "distance":"39.50", "equatorcirc": "7232", "albedo":"0.72", "mass":"0.00218", "moon":"0", "sizefactor":"0.18584", "displayfactor":"0.1", "type":"gaz dwarf", "diameter":"2376", "gravity":"0.62", "orbiting":"sun", "composition":"ice, silicates", "missions":"1", "missionslist":"<t1>2006-Present</t1>,New-Horizons NASA 19/01/2006","earthdist":"38.50","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/pluto.jpg"},
  {"object":"planet", "name":"sun", "index":"0", "tilt":"7.25", "sidday": "25.38", "sidspeed": "250", "sidyear":"83950000000", "rotspeed": "1000", "temp":"5500", "distance":"0", "equatorcirc": "4370005", "albedo":"-", "mass":"332889.71474", "moon":"0", "moonnames":"", "sizefactor":"109.3", "displayfactor":"2.3", "type":"Gaz Yellow dwarf", "diameter":"1391016", "gravity":"274", "orbiting":"Milky Way Galaxy", "composition":"Hydrogen,Helium", "missions":"20", "missionslist":"<t1>1960–1969</t1>,Pioneer-5 NASA 1960,Pioneer-6 NASA 1965,Pioneer-7 NASA 1966,Pioneer-8 NASA 1967,Pioneer-9 NASA 1968,<t1>1974–1997</t1>,Helios Germ/NASA 1974–1982,Helios-B Germ/NASA 1976–1985,ISEE-3 NASA 1978–1982,Ulysses ESA/NASA 1994-1995,WIND NASA 1994,SOHO ESA/NASA 1996–2020,ACE NASA 1997–2024,<t1>2000-Present</t1>,Ulysses-2 ESA/NASA 2000,Genesis NASA 2001–2004,STEREO-A NASA 2006–Present,STEREO-B NASA 2006-2014,Ulysses-3 ESA/NASA 2007,DSCOVR NASA 2015,Parker-Solar-Probe NASA 2018–2025,Solar-Orbiter ESA 2020-Present","earthdist":"1","imgurl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/sun.jpg"}];

planetsList = _.orderBy(planetsList, ["object",'index'], ['asc','desc']);
var lastcard = "";
var lastsubcard = "";
var SPEED_FACTOR = 5;

function distBetweenPlanets( p1, p2) {
    var q="MeVeEaMaJuSaUrNePl";
    var w=q.indexOf(p1.substring(0,2))/2,
        e=q.indexOf(p2.substring(0,2))/2,
        m=1,
        t=e,
        d=[5029,4140,7834,55039,64627,144895,162745,140538];
    var h=0;
    if(w>e){
        e=w;
        w=t;
        m=-1;
    }
    for(;e-->w;)
        h+=d[e]*1e4;
    return Math.abs(h*m) + " Kms";
}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

function getAuToKms( planet ) {
  return formatNumberWith(parseFloat(planet.distance * AU).toFixed(2), " ") + " Kms";
}

function sidYearTooltipInfo(value) {
  var resu = "<div class='tooltip'><span class='tooltiptext'><table>";
  var newvalue = getStringFromDays(value);
  resu += "<tr><td>" + newvalue + "</td></tr>";
  resu += "</table></span><span class='value'>" + value + "</span></div>";
  return resu;
}

function getTimeYMDHMS(pSidday) {
  var numberOfDays = pSidday;
  var hours, minutes, seconds;
  var years  = Math.floor(numberOfDays / 365);
  var months = Math.floor(numberOfDays % 365 / 30);
  var days   = Math.floor(numberOfDays % 365 % 30);
  if( numberOfDays % 1 ) {
    hours = Math.floor(( numberOfDays % 1 ) * 24);
    if((( numberOfDays % 1 ) * 24) % 1)
      minutes = Math.floor(((( numberOfDays % 1 ) * 24) % 1) * 60);
    if((((( numberOfDays % 1 ) * 24) % 1) * 60) % 1)
      seconds = Math.floor(((((( numberOfDays % 1 ) * 24) % 1) * 60) * 60));
  }
  return {"years":years, "months":months, "days":days, "hours":hours, "minutes":minutes, "seconds":seconds};  
}

function calcPlanetRotationSpeed(planet,factor) {
  var spintime = getTimeYMDHMS(planet.sidday);
  var tsidday = (spintime.years*365)+(spintime.months*30.42)+spintime.days + spintime.hours + spintime.minutes/60;
  return parseFloat(planet.equatorcirc / tsidday).toFixed(2)/factor;
}

function getYMDHMSStringFromSiddays(numberOfDays) {
  var spintime = getTimeYMDHMS(numberOfDays); 
  var yearsDisplay    = spintime.years > 0 ? spintime.years + (spintime.years == 1 ? " yr " : " yrs ") : "";
  var monthsDisplay   = spintime.months > 0 ? spintime.months + (spintime.months == 1 ? " mth " : " mths ") : "";
  var daysDisplay     = spintime.days > 0 ? spintime.days + (spintime.days == 1 ? " d " : " ds ") : "";
  var hoursDisplay    = spintime.hours > 0 ? spintime.hours + (spintime.hours == 1 ? " hr " : " hrs ") : "";
  var minutesDisplay  = spintime.minutes > 0 ? spintime.minutes + (spintime.minutes == 1 ? " mn " : " mns ") : "";
  var secondsDisplay  = spintime.seconds > 0 ? spintime.seconds + (spintime.seconds == 1 ? " s" : " s") : "";
  return formatNumberWith(yearsDisplay," ") + monthsDisplay + daysDisplay + hoursDisplay + minutesDisplay; 
}

function formatNumberWith( value, sep ) {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, sep);
}

function sideraltimeToString( value ) {
  var resu = "", i=0; 
  value.split(":").forEach( function( time ) {
      switch( i ) {
        case 0: // YEAR(S)
          resu += ( parseInt(time) != 0 ? ( parseInt(time) > 1 ? parseInt(time) + " years " : parseInt(time) + " year ") : "" );
          break;
        case 1: // MONTH(S)
          resu += ( parseInt(time) != 0 ? ( parseInt(time) > 1 ? parseInt(time) + " months " : parseInt(time) + " month ") : "" );
          break;
        case 2: // DAY(S)
          resu += ( parseInt(time) != 0 ? ( parseInt(time) > 1 ? parseInt(time) + " days " : parseInt(time) + " day ") : "" );
          break;
        case 3: // HOUR(S)
          resu += ( parseInt(time) != 0 ? ( parseInt(time) > 1 ? parseInt(time) + " hours " : parseInt(time) + " hour ") : "" );
          break;
        case 4: // MINUTE(S)
          resu += ( parseInt(time) != 0 ? ( parseInt(time) > 1 ? parseInt(time) + " minutes " : parseInt(time) + " minute ") : "" );
          break;
      }
    i++;
  });
  return resu;
}

function temperatureToString( value ) {
  var resu = "", i=0; 
  value.split(":").forEach(function ( temp ) {
      switch( i ) {
        case 0: // min temp
          resu += ( parseInt(temp) != 0 ? parseInt(temp) + "°C " : "" );
          break;
        case 1: // max temp
          resu += ( parseInt(temp) != 0 ? " to " + parseInt(temp) + "°C" : "" );
          break;
      }
    i++;
  });
  return resu;
}

function celciusToFahrenheit(value){
  return Math.round((parseInt(value)*9/5)+32) + "°F";
}

function findStyle( pStr, pToken) {
var resu = "";
  if (pStr.includes(pToken))
    resu = pStr;
  console.log(resu);
  return resu;
}

function getStyle( pStr ) {
var b    = pStr.indexOf("<")+1;
var e    = pStr.indexOf(">");
  console.log( pStr.substring(b, e) );
  return pStr.substring(b, e);
}

function getMoons( planet ) {
  var resu = "<div class='moons'>";
  if(planet.moon != "0") {
    planet.moonnames.split(",").forEach(function (name) {
      resu += "<p class='moon-label'><a href='#" + name.toLowerCase() + "' onClick='highlightCardInfo(&apos;" + name.toLowerCase() + "&apos;)'>" + name + "</a></p>";
    }); 
  } else
    resu += "<p class='moon-label-empty'></p>"
  resu += "</div>";
  return resu;  
}

function getMissionsList( planet ) {
  var missionsDetails = "";
  if( planet.missions != "0" ) {
   missionsDetails = "<span class='tooltiptext'><table>";
   planet.missionslist.split(",").forEach(function (mission) {
     missionsDetails += "<tr><td>" + replaceAll( mission , " " , "</td><td>" ) + "</td></tr>";
   });
   missionsDetails += "</table></span>";
  }
  return "<div class='missions tooltip'>" + (planet.missions != "0" ? "<u>" + planet.missions + "</u>" : planet.missions ) + missionsDetails + "</div>";
}

function getMissionsListNew( planet ) {
  var missionsList = "";
  var missions = "";
  var missionDetails = "";
  var missionLine = "";
  var row = 1, col = 1;
  var temp;
  if( planet.missions != "0" ) {
   missionsList = "<span class='tooltiptext'><table class='mission-list'>";
   planet.missionslist.split(",").forEach(function (mission) {
     missionLine = "<tr>";
     missionDetails = "";
     temp = mission.replace("[", "").replace("]", "");
     temp.split(";").forEach(function (infos) {
       if(row==1 && col==1) {
         missionDetails += "<td class='coltitle' colspan=5><u>" + infos + " (" + planet.missions + " missions)</u></td>";
         col++;
       } else if(col==1 && row!=1) {
         missionDetails += "<td class='colfirst'>" + infos + "</td>";
         col++;
       } else {
         missionDetails += "<td class='col" + col + "'>" + infos + "</td>";
         col++;
       }
     });
     missionLine += missionDetails + "</tr>"
     missions += missionLine;
     row++;col = 1;
   });
   missionsList += missions + "</table></span>";
  }
  return "<div class='missions tooltip'>" + missionsList + "</div>";
}


function buildObjectType( title, objecType, infos ) {
var maincontainer = document.createElement("div");
    maincontainer.className = "container";
var titlecontainer = document.createElement("div");
    titlecontainer.className = ( infos ? "title-container" : "subtitle-container" );
var planetscontainer = document.createElement("div");
    planetscontainer.className = ( infos ? "planets-container" : "planets-container-list" );
var maintitle = document.createElement("h1");
    maintitle.className = "main__title";
    maintitle.innerHTML = title;

  titlecontainer.appendChild(maintitle);
  maincontainer.appendChild(titlecontainer);
 
  planetsList.forEach((planet)=>{
    if( objecType == planet.object ) {
        console.log(planet.name);
        calcPlanetRotationSpeed(planet);
        var card = document.createElement("div");
        if( !infos ) {
          card.className = "cardsimple card--" + planet.name;
          card.setAttribute("onmouseover", "showDistance('" + planet.name + "')");
          card.setAttribute("onmouseout", "showDistance('" + planet.name + "')");
        } else {
          card.className = "card card--" + planet.name;
        }
        var planetdist = document.createElement("div");
        planetdist.setAttribute("id", "id" + planet.name );
        planetdist.className = "dist dist__" + planet.name;
        planetdist.innerHTML = planet.distance + " AU" + "<br>" + getAuToKms( planet );
        var scale = document.createElement("div");
        scale.className = "scale";
        scale.style.width = "0px";
        scale.style.height = "0px";
        var cardplanet = document.createElement("div");
        cardplanet.className = "card__planet";
        var stylecardplanet  = cardplanet.appendChild(document.createElement("style"));
        stylecardplanet.innerHTML = ".card--" + planet.name + " .card__planet::before, .cardsimple--" + planet.name + " .card__planet::before {transform: rotate( " + planet.tilt + "deg ) scale(1.2) !important;}";
        var planetatmos = document.createElement("div");
        planetatmos.className = "planet__atmosphere";
      
        var planetsurface = document.createElement("div");
        planetsurface.className = "planet__surface";
        planetsurface.style.backgroundImage = "url('" + planet.imgurl + "')"; 
        planetsurface.style.transform = "rotate(" + planet.tilt + "deg)"; 
        planetsurface.style.animation = "planetRotate " + calcPlanetRotationSpeed(planet,SPEED_FACTOR) + "s linear infinite"; 
        var linkplanet = document.createElement("a");
        var linkmoon   = document.createElement("a");

        if( !infos ) {
          cardplanet.style = "transform: scale(" + planet.displayfactor + ") !important;";
          linkplanet.setAttribute("href", "#" + planet.name + "");
          linkplanet.setAttribute("onClick", "highlightCardInfo('" + planet.name + "')");
      } else {
          linkplanet.setAttribute("href", "#");
          card.setAttribute("id", planet.name);
        }
      
        planetatmos.appendChild(planetsurface);
        cardplanet.appendChild(planetatmos);
        linkplanet.appendChild(cardplanet);
        card.appendChild(planetdist);
        card.appendChild(linkplanet);
        var cardinfotitle = document.createElement("h2");
        cardinfotitle.className = "info__title";
        cardinfotitle.innerHTML = planet.name;
        if( !infos ) {
           cardinfotitle.style     = "font-size: 15px; margin-top: 2em !important;" 
           cardinfotitle.setAttribute("id", "card_title_" + planet.name);
        } else {
           cardinfotitle.setAttribute("id", "cardinfo_title_" + planet.name);
        }
        var cardinfo = document.createElement("div");
        cardinfo.className = "card__info";
        var cardinfoform = document.createElement("div");
        cardinfoform.className = "info__form";
        cardinfo.appendChild(cardinfotitle);

      if( infos ) {
        cardinfoform.appendChild(setInfoItem('Axial tilt', true, 'tilt__icon fas fa-long-arrow-alt-right', planet.tilt, "°"));
        cardinfoform.appendChild(setInfoItem('Sid. day', true, '', getYMDHMSStringFromSiddays(planet.sidday), "" ));
        cardinfoform.appendChild(setInfoItem('Sid. speed', true, '', planet.sidspeed ," km/s"));
        cardinfoform.appendChild(setInfoItem('Sid. year', true, '', getYMDHMSStringFromSiddays(planet.sidyear), ""));
        cardinfoform.appendChild(setInfoItem('Axial rot. speed', true, '', formatNumberWith(calcPlanetRotationSpeed(planet,1), " "), "Km/h"));
        cardinfoform.appendChild(setInfoItem('Temp', true, '', temperatureToString(planet.temp), ""));
        if( planet.object == MOON )
          cardinfoform.appendChild(setInfoItem('Planet Dist', true, '', formatNumberWith(planet.distance, " "), "Kms"));
        else 
          cardinfoform.appendChild(setInfoItem('sun Dist', true, '', formatNumberWith(planet.distance, " "), "AU"));
        cardinfoform.appendChild(setInfoItem('Mass', true, '', formatNumberWith(planet.mass, " "), "x earth"));
        cardinfoform.appendChild(setInfoItem('size', true, '', planet.sizefactor, "x earth"));
        cardinfoform.appendChild(setInfoItem('diameter', true, '', formatNumberWith(planet.diameter, " "), "Kms"));
        cardinfoform.appendChild(setInfoItem('gravity', true, '', planet.gravity, "m/s&sup2;"));
        cardinfoform.appendChild(setInfoItem('type', true, '', planet.type, ""));
        cardinfoform.appendChild(setInfoItem('composition', true, '', planet.composition, ""));
        cardinfoform.appendChild(setInfoItem('orbiting', true, '', planet.orbiting, ""));
        cardinfoform.appendChild(setInfoItem('Albedo (Bond)', true, '', planet.albedo, "/1"));
        cardinfoform.appendChild(setInfoItem('Main mission(s)', true, '', getMissionsList(planet), ""));
        cardinfoform.appendChild(setInfoItem('satellite(s)', true, 'moon-texture fas fa-planet-moon', planet.moon, ""));
        cardinfoform.appendChild(setInfoItem('', false, '', getMoons(planet), "" ));
      }
 
      cardinfo.appendChild(cardinfoform);
      card.appendChild(cardinfo);
      card.appendChild(scale);
      planetscontainer.appendChild(card);
    }
  });

  maincontainer.appendChild(planetscontainer);
  document.body.appendChild(maincontainer);
}

function setInfoItem(label, dots, icontype, value, unit) {
  var item = document.createElement("div");
  item.className = "info__item";
  var cardinfolabel = document.createElement("label");
  cardinfolabel.className = "info__label";
  cardinfolabel.innerHTML = label;
  var cardinfoline = document.createElement("span");
  cardinfoline.className = ( dots ? "info__line" : "" );
  var cardinfoicon = document.createElement("i");
  cardinfoicon.className = icontype;
  if(icontype.includes("tilt__icon"))
    cardinfoicon.style = "transform: rotate( calc( " + value + "deg - 90deg ) ) !important;";
  var cardinfovalue = document.createElement("span");
  cardinfovalue.className = "info__detail";
  cardinfovalue.innerHTML = value + " " + unit;
    
  item.appendChild(cardinfolabel);
  item.appendChild(cardinfoline);
  item.appendChild(cardinfoicon);
  item.appendChild(cardinfovalue);
  
  return item;
}

function setTransform (element, rotationArg, scaleArg, skewXArg, skewYArg) {
    var transformString = ("rotate(" + rotationArg + "deg ) scale(" + scaleArg
        + ") skewX(" + skewXArg + "deg ) skewY(" + skewYArg + "deg )");
    
    element.style.webkitTransform = transformString;
    element.style.MozTransform = transformString;
    element.style.msTransform = transformString;
    element.style.OTransform = transformString;
    element.style.transform = transformString;
}

function earthDay( value ) {
  return ( ( value / 24 ).toFixed(2) + " earth days" );
}

function auToKms( value ) {
  return ( " (" + ( value * AU ).toFixed(2) + " Kms)" );
}

function showDistance( value ) {
  if( document.getElementById( "id" + value ).classList.contains('show') ) {
    document.getElementById( "id" + value ).classList.remove('show');
    document.getElementById( "id" + value ).classList.remove('show__' + value);
    document.getElementById( "card_title_" + value ).classList.remove('bold_title');
  } else {
    document.getElementById( "id" + value ).classList.add('show');
    document.getElementById( "id" + value ).classList.add('show__' + value);
    document.getElementById( "card_title_" + value ).classList.add('bold_title');
  }
}

function highlightCardInfo( value ) {
  console.log('lastcard: ' + lastcard);
  if( lastcard != "" )
    document.getElementById( lastcard ).classList.remove('highlight_title');

  if( document.getElementById( "cardinfo_title_" + value ).classList.contains('highlight_title') ) 
     document.getElementById( "cardinfo_title_" + value ).classList.remove('highlight_title');

  document.getElementById( "cardinfo_title_" + value ).classList.add('highlight_title');
  lastcard = "cardinfo_title_" + value;
  console.log('lastcard: ' + lastcard);
}

buildObjectType("Solar system main planets", PLANET, false);
buildObjectType("Solar system planets informations", PLANET, true);
buildObjectType("main planets naturals sattelites", MOON, true);
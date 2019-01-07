import clock from "clock";
import document from "document";
import asap from "fitbit-asap/app"
import {preferences} from "fitbit-preferences";
import {preferences as user_settings} from "user-settings";
import { battery } from "power";
import dtlib from "../common/datetimelib"

// get user time format preference
dtlib.timeFormat = user_settings.clockDisplay == "12h" ? 1: 0;

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the elements
const time = document.getElementById("time");
const background = document.getElementById("background");
const statusBar = document.getElementById("statusBar");
const date = document.getElementById("date");
const batteryText = document.getElementById("battery");

function updateBattery(charge) {
  batteryText.text = `${charge}%`;
}


function setTimeColor(color) {
  time.style.fill = color;
  statusBar.style.fill = color;
  date.style.fill = color;
  batteryText.style.fill = color;
}

function updateClock() {
  let today = new Date();
 
  // formatting hours based on user preferences
  let hours = dtlib.format1224hour(today.getHours());
  
  // if this is 24H format - prepending 1-digit hours with 0
  if (dtlib.timeFormat == dtlib.TIMEFORMAT_24H) {
      hours = dtlib.zeroPad(hours);
  }
  
  // getting 0-preprended minutes
  let mins = dtlib.zeroPad(today.getMinutes());

  time.text = `${hours}:${mins}`;

  // getting short name of the month in English
  let month = dtlib.getMonthNameShort(dtlib.LANGUAGES.ENGLISH, today.getMonth()).toUpperCase();
  
  // getting 0-preprended day of the month
  let day = dtlib.zeroPad(today.getDate())

  date.text = `${month} ${day}`
 
} 


// Message is received
asap.onmessage = data  => {
  
  switch (data.key) {
    case "timeColor": 
          preferences.timeColor = data.newValue.replace(/["']/g, "");
          setTimeColor(preferences.timeColor);
          break;
    case "backColor":
          preferences.backColor = data.newValue.replace(/["']/g, "");
          background.style.fill = preferences.backColor;
          break;
  };
 
  updateClock(); // and refresh the clock
      
}


// if preferenses not stored - load default ones
if (!preferences.timeColor) {
  preferences.timeColor = 'green';
  preferences.backColor = 'black'
}


// Don't start with a blank screen
background.style.fill = preferences.backColor;
setTimeColor(preferences.timeColor);
updateClock();

//battery
updateBattery(Math.floor(battery.chargeLevel));
battery.onchange = () => updateBattery(Math.floor(battery.chargeLevel));

// Update the clock every tick event
clock.ontick = () => updateClock();

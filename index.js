// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
  }
  
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  const fareDoubler = createFareMultiplier(2);

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
}
const fareTripler = createFareMultiplier(3);

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
}
function selectDifferentDrivers(drivers,selectingDrivers) {
    return selectingDrivers (drivers);
  }
  

  


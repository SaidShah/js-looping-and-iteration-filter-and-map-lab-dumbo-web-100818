// Code your solution here:
function driversWithRevenueOver(givenArray, givenRevenue)  {
  return givenArray.filter(function (actualRevenue) {
      return actualRevenue.revenue > givenRevenue
  })

}
 function driverNamesWithRevenueOver(givenArray, givenRevenue){
   return driversWithRevenueOver(givenArray, givenRevenue).map(function (driver) {
      return driver.name
   });
 }

 function exactMatch(givenArray, givenName) {
   return givenArray.filter(function (eachDriver) {
     let itMathches = false;
      for(const aKey in givenName){
       itMathches = eachDriver[aKey] === givenName[aKey]
     }
          return itMathches;
   })
 }

 function exactMatchToList(drivers, revenue){
   debugger
   return exactMatch(drivers, revenue).map(function (driver) {
     debugger
      return driver.name
   })

 }

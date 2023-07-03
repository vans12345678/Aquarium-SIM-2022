export const testTemperature = (tank, fishes, newFish) => {
  let flag = true;

  if (tank.lowerTemp == 0 || tank.upperTemp == 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.upperTemp = newFish.upperTemp;
    tank.lowerTemp = newFish.lowerTemp;
    //console.log("HEEEJEJ");
    return flag;
  }
  //When there's more than 1 fish
  else
  {
    if(newFish.upperTemp < tank.lowerTemp || newFish.lowerTemp > tank.upperTemp)
    {
      //Invalid temp range
      console.log("Invalid fish temp");
      flag = false;
    }
    
    else
    {
      //Temp range ok
      console.log("Fish temp ok");
    }
    
    return flag;
  }

  //console.log(tank);
  //loop through the fish and check if the values
  for (let i = 0; i < fishes.length; i++) 
  {

  }

  //within the tanks temp range
  //if the new fish's min temp if greater or less than the previous fishes
  //and the fishes are still in range of the temps adjust the tank min temp

  //do similar thing for the max temp(refer to the aquarium api)
  
};

import { Tank } from "./classes/Tank";
import { Fish } from "./classes/Fish";
export const testTemperature = (tank, fishes, newFish) => {
  if (tank.lowerTemp == 0 || tank.upperTemp == 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.upperTemp = newFish.upperTemp;
    tank.lowerTemp = newFish.lowerTemp;
    //console.log("HEEEJEJ");
  }
  //When there's more than 1 fish
  else
  {
    console.log(newFish.upperTemp);
    //if((newFish.upperTemp <= tank.maxTemp && newFish.upperTemp >= tank.minTemp) || (newFish.lowerTemp >= tank.minTemp && newFish.lowerTemp <= tank.maxTemp) || newFish.upperTemp >= tank.maxTemp && newFish.lowerTemp <= tank.minTemp)
    if(newFish.upperTemp < tank.lowerTemp || newFish.lowerTemp > tank.upperTemp)
    {
      //Temp range ok
      console.log("Invalid fish temp");

    }
    //Invalid temp range
    else
    {
      console.log("Fish temp ok");
    }

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

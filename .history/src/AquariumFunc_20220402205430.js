import { Tank } from "./classes/Tank";
import { Fish } from "./classes/Fish";
export const testTemperature = (tank, fishes, newFish) => {
  if (tank.minTemp == "undefined" || tank.maxTemp == "undefined") {
    //set the first fish in the tanks temps as the tanks temps
    tank.maxTemp = newFish.upperTemp;
    tank.minTemp = newFish.lowerTemp;
    console.log("HEEEJEJ");
  }
  //   tank.maxTemp = 6;
  //   tank.minTemp = 6;
  console.log(tank);
  //loop through the fish and check if the values
  for (let i = 0; i < fishes.length; i++) {}

  //within the tanks temp range
  //if the new fish's min temp if greater or less than the previous fishes
  //and the fishes are still in range of the temps adjust the tank min temp

  //do similar thing for the max temp(refer to the aquarium api)
};

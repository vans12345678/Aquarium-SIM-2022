import { Tank } from "./classes/Tank";
import { Fish } from "./classes/Fish";
export const testTemperature = (tank, fishes, newFish) => {
  if (tankMinTemp == 0 || tankMaxTemp == 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.maxTemp = fishes[0].maxTemp;
    tank.minTemp = fishes[0].minTemp;
  }

  //loop through the fish and check if the values
  for (let i = 0; i < fishes.length; i++) {}

  //within the tanks temp range
  //if the new fish's min temp if greater or less than the previous fishes
  //and the fishes are still in range of the temps adjust the tank min temp

  //do similar thing for the max temp(refer to the aquarium api)
};

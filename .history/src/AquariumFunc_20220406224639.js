export const testTemperature = (tank, newFish) => {
  let flag = true;

  if (tank.lowerTemp === 0 || tank.upperTemp === 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.upperTemp = newFish.upperTemp;
    tank.lowerTemp = newFish.lowerTemp;
    //console.log("HEEEJEJ");
    return flag;
  }
  //When there's more than 1 fish
  else {
    if (
      newFish.upperTemp < tank.lowerTemp ||
      newFish.lowerTemp > tank.upperTemp
    ) {
      //Invalid temp range
      // console.log("Invalid fish temp");
      flag = false;
    } else {
      //Temp range ok

      if (newFish.upperTemp < tank.upperTemp) {
        tank.upperTemp = newFish.upperTemp;
      }
      if (newFish.lowerTemp > tank.lowerTemp) {
        tank.lowerTemp = newFish.lowerTemp;
      }

      // console.log("Fish temp ok");
    }

    return flag;
  }

  //console.log(tank);
  //loop through the fish and check if the values

  //within the tanks temp range
  //if the new fish's min temp if greater or less than the previous fishes
  //and the fishes are still in range of the temps adjust the tank min temp

  //do similar thing for the max temp(refer to the aquarium api)
};

export const testPH = (tank, newFish) => {
  let flag = true;

  if (tank.lowerPH === 0 || tank.upperPH === 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.upperPH = newFish.upperPH;
    tank.lowerPH = newFish.lowerPH;
    //console.log("HEEEJEJ");
    return flag;
  }
  //When there's more than 1 fish
  else {
    if (newFish.upperPH < tank.lowerPH || newFish.lowerPH > tank.upperPH) {
      //Invalid temp range
      // console.log("Invalid fish PH");
      flag = false;
    } else {
      //Temp range ok

      if (newFish.upperPH < tank.upperPH) {
        tank.upperPH = newFish.upperPH;
      }
      if (newFish.lowerPH > tank.lowerPH) {
        tank.lowerPH = newFish.lowerPH;
      }

      // console.log("PH ok");
    }

    return flag;
  }
};

export const testFishSize = (userList, newFish, tank) => {
  //Check to see if the new fish being added has a valid size
  if (tank.averageFishSize === 0) {
    tank.averageFishSize = newFish.averageSize;

    // console.log("Upper Size: " + tank.averageFishSize);
    return true;
  } else if (
    newFish.averageSize > tank.averageFishSize + 25 ||
    (newFish.averageSize < tank.averageFishSize - 25 &&
      newFish.averageSize !== tank.averageFishSize)
  ) {
    // console.log("Fish size invalid");
    // console.log("Upper Size: " + tank.averageFishSize);
    return false;
  } else {
    tank.averageFishSize =
      (tank.averageFishSize * userList.length + newFish.averageSize) /
      (userList.length + 1);

    // console.log("Upper Size: " + tank.averageFishSize);
    // console.log(userList);

    return true;
  }
};

export const testCapacity = (tank, newFish) => {
  let flag = true;

  if (
    tank.capacity + (1 - (tank.size - newFish.averageSize) / tank.size) * 100 <=
    100
  ) {
    return flag;
  }
  //When capacity is too high
  else {
    flag = false;
    //console.log("tank full");
  }

  return flag;
};

export const testTankSize = (length, width, height, tank, userList) => {
  let flag = true;
  let sumAllFish = 0;
  let tempTankSize = (tank.size = Math.round(
    (parseInt(length) * parseInt(width) * parseInt(height)) / 1000
  ));

  userList.forEach((element) => {
    sumAllFish = sumAllFish + element.averageSize;
  });

  //If all inputs are numeric and
  if (
    length > 0 &&
    width > 0 &&
    height > 0 &&
    (1 - (tempTankSize - sumAllFish) / tempTankSize) * 100 <= 100
  ) {
    flag = true;
  } else {
    //console.log("DAS");
    flag = false;
  }
  return flag;
};

// export const testTankSize2 = (length, width, height) =>
// {
//   if(length > 0 && width > 0 && height > 0)
//   {

//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }

export const testFishAggression = (userList, newFish) => {
  let flag = true;
  userList.forEach((element) => {
    //Check to see if added fish is same as any fish in list
    if (newFish.id === element.id) {
      //console.log("Same fish");
      if (
        newFish.aggressiveSameSpecies === "aggressive/territorial" ||
        element.aggressiveSameSpecies === "aggressive/territorial"
      ) {
        //console.log("They are aggressive/territorial to each other");
        flag = false;
      }
    }
    //Otherwise they are different fish
    else {
      if (
        newFish.aggressiveOtherSpecies === "peaceful" &&
        element.aggressiveOtherSpecies === "peaceful"
      ) {
        flag = true;
      } else if (
        (newFish.aggressiveOtherSpecies === "peaceful" &&
          element.aggressiveOtherSpecies === "aggressive/territorial") ||
        (newFish.aggressiveOtherSpecies === "aggressive/territorial" &&
          element.aggressiveOtherSpecies === "peaceful")
      ) {
        //console.log("The different fish are aggressive/territorial to each other");
        flag = false;
      }
      //If new fish is peaceful but there are aggressive to smaller in the tank
      else if (
        newFish.aggressiveOtherSpecies === "peaceful" &&
        element.aggressiveOtherSpecies === "aggressive to smaller"
      ) {
        //If the aggressive to smaller in the tank is bigger than new fish
        if (element.averageSize * 0.85 > newFish.averageSize) {
          // console.log("new fish is peaceful, but there is aggressive to smaller in fish list that is bigger");
          flag = false;
        }
      } else if (newFish.aggressiveOtherSpecies === "aggressive to smaller") {
        // console.log("aggressive to smaller1")

        //Check so see if the size of the new fish is bigger than any fish in list
        if (element.averageSize * 0.85 > newFish.averageSize) {
          console.log(
            "new fish (aggressive to smaller) is not smaller than fishes in tank, meaning it will be aggressive to others"
          );
          flag = false;
        }
        //Check to see if new fish is smaller than any in fish list
        else if (newFish.averageSize * 0.85 < element.averageSize) {
          console.log(
            "new fish (aggressive to smaller) is smaller than fishes in tank, meaning it won't be aggressive to others"
          );
          console.log(newFish.aggressiveOtherSpecies);
          console.log(element.averageSize);
          flag = true;
        } else {
          console.log(
            "new fish (aggressive to smaller) is not smaller than fishes in tank, meaning it will be aggressive to others"
          );

          flag = false;
        }
      }
    }
  });
  return flag;
};

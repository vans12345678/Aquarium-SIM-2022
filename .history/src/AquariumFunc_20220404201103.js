export const testTemperature = (tank, newFish) => {
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

      if(newFish.upperTemp < tank.upperTemp)
      {
        tank.upperTemp = newFish.upperTemp;
      }
      if(newFish.lowerTemp > tank.lowerTemp)
      {
        tank.lowerTemp = newFish.lowerTemp; 
      }


      console.log("Fish temp ok");
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

  if (tank.lowerPH == 0 || tank.upperPH == 0) {
    //set the first fish in the tanks temps as the tanks temps
    tank.upperPH = newFish.upperPH;
    tank.lowerPH = newFish.lowerPH;
    //console.log("HEEEJEJ");
    return flag;
  }
  //When there's more than 1 fish
  else
  {
    if(newFish.upperPH < tank.lowerPH || newFish.lowerPH > tank.upperPH)
    {
      //Invalid temp range
      console.log("Invalid fish PH");
      flag = false;
    }
    
    else
    {
      //Temp range ok

      if(newFish.upperPH < tank.upperPH)
      {
        tank.upperPH = newFish.upperPH;
      }
      if(newFish.lowerPH > tank.lowerPH)
      {
        tank.lowerPH = newFish.lowerPH; 
      }


      console.log("PH ok");
    }
    
    return flag;
  }
}

export const testFishSize = (userList, newFish, tank) => {

  //Check to see if the new fish being added has a valid size
  if(tank.averageFishSize == 0)
  {
    tank.averageFishSize = newFish.averageSize;

    console.log("Upper Size: " + tank.averageFishSize);
    return true;
  }
  else if(newFish.averageSize > tank.averageFishSize + 25 || newFish.averageSize < tank.averageFishSize - 25 && newFish.averageSize != tank.averageFishSize)
  {
    console.log("Fish size invalid");
    console.log("Upper Size: " + tank.averageFishSize);
    return false;
  }
  else
  {
   
    tank.averageFishSize = (tank.averageFishSize * userList.length + newFish.averageSize) / (userList.length + 1);

    console.log("Upper Size: " + tank.averageFishSize);
    console.log(userList);
    
    return true;
  }
}


export const testCapacity = (tank, newFish) => {
  let flag = true;

  if ((tank.capacity+(1-((tank.size - (newFish.averageSize))/tank.size))*100) <= 100){
    return flag;
  }
  //When capacity is too high
  else
  {
    flag = false;
    console.log("tank full");
  }
    
    return flag;
  
}


export const testTankSize = (length, width, height) =>
{
  if(length > 0 && width > 0 && height > 0)
  {
    
    return true;
  }
  else
  {
    return false;
  }
}

export const testFishAggression = (userList, newFish) =>
{
  userList.forEach(element => {
    
    //If new fish is same as a fish in userList
    if(newFish.id == element.id)
    {
      console.log("Same fish");
    }

  });
}


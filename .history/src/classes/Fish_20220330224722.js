export class Fish 
{
    constructor(id,commonName, scientificName, averageSize, lowerPH, upperPH, aggressiveSameSpecies, aggressiveOtherSpecies, locationTank, price, image) 
    {
      this.id = id;
      this.commonName = commonName;
      this.scientificName = scientificName;
      this.averageSize = averageSize;
      this.lowerPH = lowerPH
      this.upperPH = upperPH;
      this.aggressiveSameSpecies = aggressiveOtherSpecies
      this.aggressiveOtherSpecies = aggressiveOtherSpecies;
      this.locationTank = locationTank;
      this.image = image;
    }
    toString()
    {
        return "Common name: " + this.commonName + "\n" +
                "Scientific Name: " + this.scientificName + "\n" +
                "Average Size: " + this.averageSize + "\n" +
                "Lower PH: " + this.lowerPH + "\n" +
                "Upper PH: " + this.upperPH + "\n" +
                "Aggressive Same Species: " + this.aggressiveSameSpecies + "\n" +
                "Aggressive Other Species: " + this.aggressiveOtherSpecies + "\n" +
                "Location Tank: " + this.locationTank + "\n" +
                "Price: " + this.price;     
    } 
}

  
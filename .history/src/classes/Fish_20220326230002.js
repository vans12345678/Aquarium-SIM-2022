export class Fish {
    constructor(commonName, scientificName, averageSize, lowerPH, upperPH, aggressiveSameSpecies, aggressiveOtherSpecies, locationTank, price) {
      this.commonName = commonName;
      this.scientificName = scientificName;
      this.averageSize = averageSize;
      this.lowerPH = lowerPH
      this.upperPH = upperPH;
      this.aggressiveSameSpecies = aggressiveOtherSpecies
      this.aggressiveOtherSpecies = aggressiveOtherSpecies;
      this.locationTank = locationTank;
      this.price = price;
    }
    toString()
    {
        return "Common name: " + this.commonName +
                "Scientific Name: " + this.scientificName +
                "Average Size: " + this.averageSize +
                "Lower PH: " + this.lowerPH + 
                "Upper PH: " + this.upperPH + 
                "Aggressive Same Species: " + this.aggressiveSameSpecies + 
                "Aggressive Other Species: " + this.aggressiveOtherSpecies + 
                "Location Tank: " + this.locationTank +
                "Price: " + this.price;
        
        
        
        
        
        
        
        
        
    } 
}
  
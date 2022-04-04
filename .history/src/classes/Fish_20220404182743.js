export class Fish {
  constructor(
    id,
    scientificName,
    commonName,
    averageSize,
    lowerPH,
    upperPH,
    lowerTemp,
    upperTemp,
    aggressiveSameSpecies,
    aggressiveOtherSpecies,
    locationTank,
    image,
    fishKey
  ) {
    this.id = id;
    this.scientificName = scientificName;
    this.commonName = commonName;
    this.averageSize = averageSize;
    this.lowerPH = lowerPH;
    this.upperPH = upperPH;
    this.lowerTemp = lowerTemp;
    this.upperTemp = upperTemp;
    this.aggressiveSameSpecies = aggressiveSameSpecies;
    this.aggressiveOtherSpecies = aggressiveOtherSpecies;
    this.locationTank = locationTank;
    this.image = image;
    this.fishKey = key;
  }
  toString() {
    return (
      "Common name: " +
      this.commonName +
      "\n" +
      "Scientific Name: " +
      this.scientificName +
      "\n" +
      "Average Size: " +
      this.averageSize +
      "\n" +
      "Lower PH: " +
      this.lowerPH +
      "\n" +
      "Upper PH: " +
      this.upperPH +
      "\n" +
      "Aggressive Same Species: " +
      this.aggressiveSameSpecies +
      "\n" +
      "Aggressive Other Species: " +
      this.aggressiveOtherSpecies +
      "\n" +
      "Location Tank: " +
      this.locationTank +
      "\n" +
      "Price: " +
      this.price
    );
  }
}

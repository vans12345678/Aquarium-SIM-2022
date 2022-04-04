export class Tank {
  constructor(length, width, height, upperTemp, lowerTemp, lowerPH, upperPH, size) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.size = size;
    this.upperTemp = upperTemp;
    this.lowerTemp = lowerTemp;
    this.lowerPH = lowerPH;
    this.upperPH = upperPH;
  }
}

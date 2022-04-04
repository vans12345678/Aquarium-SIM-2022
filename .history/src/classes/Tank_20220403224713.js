export class Tank {
  constructor(length, width, height, upperTemp, lowerTemp, lowerPH, upperPH, size, capacity) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.size = size;
    this.capacity = capacity;
    this.upperTemp = upperTemp;
    this.lowerTemp = lowerTemp;
    this.lowerPH = lowerPH;
    this.upperPH = upperPH;
  }
}

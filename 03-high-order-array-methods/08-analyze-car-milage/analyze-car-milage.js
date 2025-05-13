function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);

  const highestMileageCar = cars.reduce((acc, car) => {
    if (acc.mileage > car.mileage) {
      return acc;
    } else {
      return car;
    }
  }, cars[0]);

  const lowestMileageCar = cars.reduce((acc, car) => {
    if (acc.mileage < car.mileage) {
      return acc;
    } else {
      return car;
    }
  }, cars[0]);

  const averageMileage = totalMileage / cars.length;

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;

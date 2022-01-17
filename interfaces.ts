interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name" ${vehicle.name}`);
  console.log(`Name" ${vehicle.year}`);
  console.log(`Name" ${vehicle.broken}`);
  console.log(`Name" ${vehicle.summary}`);
};

printVehicle(oldCivic);

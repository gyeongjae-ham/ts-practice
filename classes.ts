class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk(); // instance에서는 사용 못함

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); // instance에서는 사용 못함

// public : this method can be called any where, any time
// private: this method can only be called by other methods in this class
// protected: this method can be called by other methods in this class, or by other methods in child classes
// protected를 사용하면 자식 클래스 extends 한 클래스에서는 사용가능하지만 intance에서는 사용 불가능 하다 new 로 만든 인스턴스

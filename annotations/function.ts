const add = (a: number, b: number) => {
  return a + b;
};
// 위와 같이 반환값의 type에 대해서 지정하지 않아도 type을 추론해서 number 인 것을 알고 있다.
// 하지만 아래와 같은 상황이 있기 때문에 무조건 지정해 주는 것을 권장한다.

const subtract = (a: number, b: number) => {
  a - b; // 결과 값을 반환해야 하는 함수인데 반환 값 type을 지정해 주지 않아서 typescript에서 에러를 보여주지 않는 상황
};

const subtract2 = (a: number, b: number): number => {
  a - b; // 이렇게 지정해 주니까 바로 에러를 보여준다
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined; 반환 type이 void일 경우 return 값이 없거나 null, undefined도 반환할 수 있다.
};

const throwError = (message: string): never => {
  throw new Error(message); // 에러 처리 같이 아무것도 반환 안할 경우 never를 쓴다
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// nest에서 dto로 사용하는 거랑 똑같음!!
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

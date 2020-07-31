export class Person {
  age: number;
  name: string;
  wealth?: string;
  state?: WorkLifeBalance;
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
}

export enum WorkLifeBalance {
  Happy,
  Unsatisfied,
  ReadyForRevolution
}

export class LoveTestModel {
  firstName: String
  secondName: String
  loveScore: number

  constructor(firstName: string, secondName: string, loveScore: number) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.loveScore = loveScore;
  }
}
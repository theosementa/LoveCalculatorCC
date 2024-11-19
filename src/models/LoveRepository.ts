import { LoveTestModel } from "./LoveTestModel"

export class LoveRepository {
  static shared = new LoveRepository()

  loveTests: LoveTestModel[] = []

  getTests() {
    return this.loveTests
  }

  createLoveTest(firstName: string, secondName: string, score: number) {
   var love = new LoveTestModel(firstName, secondName, score)
   this.loveTests.push(love)
  }
  
}
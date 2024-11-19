import { LoveRepository } from "./LoveRepository";

export class LoveCalculator {

  static calculateLoveScore(firstName: string, secondName: string): number {
    var loveScore = 0;

    if (this.isTheoAndSarah(firstName, secondName)) { 
      loveScore = 100
    } else {
      loveScore = Math.floor(Math.random() * 101);
    }

    LoveRepository.shared.createLoveTest(firstName, secondName, loveScore);
    return loveScore
  }

  private static isTheoAndSarah(firstName: String, secondName: String): boolean {
    const names = [firstName.toLowerCase(), secondName.toLowerCase()];
    return names.includes("theo") && names.includes("sarah");
  }
}

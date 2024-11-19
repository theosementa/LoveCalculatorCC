import * as readlineSync from 'readline-sync';
import './extensions/string';
import { LoveCalculator } from './models/LoveCalculator';
import { LoveRepository } from './models/LoveRepository';

export class LoveGame {
  private quit = false;

  constructor() {
    this.run();
  }

  private run() {
    while (!this.quit) {
      this.displayMenu();
      const choice = readlineSync.question("Veuillez choisir une option (1-3) : ");

      switch (choice) {
        case '1':
          this.makeTest();
          break;

        case '2':
          this.viewTestList();
          break;

        case '3':
          this.quitGame();
          break;

        default:
          console.log("Option invalide. Veuillez choisir une option entre 1 et 3.");
      }
    }
  }

  private displayMenu() {
    console.log("\n--- Menu ---");
    console.log("1. Faire le test");
    console.log("2. Voir la liste des tests déjà faits");
    console.log("3. Quitter le jeu");
  }

  private makeTest() {
    const firstName = readlineSync.question("Entrez le premier nom : ");
    const secondName = readlineSync.question("Entrez le deuxième nom : ");

    const loveScore = LoveCalculator.calculateLoveScore(firstName, secondName);
    console.log(`Le score d'amour entre ${firstName} et ${secondName} est de ${loveScore} %`);
  }

  private viewTestList() {
    const tests = LoveRepository.shared.getTests();
    if (tests.length === 0) {
      console.log("Aucun test n'a été effectué.");
    } else {
      console.log("\nListe des tests d'amour effectués :");
      tests.forEach((test, index) => {
        console.log(`${index + 1}. ${test.firstName} et ${test.secondName} - Score: ${test.loveScore}`);
      });
    }
  }

  private quitGame() {
    this.quit = true;
    console.log("Merci d'avoir joué !");
  }
}

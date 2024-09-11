#include <iostream>
#include <ctime>

char getUserChoice();
char getComputerChoice();
void chooseWinner(char computerChoice, char userChoice);

int main() {
   char computerChoice, userChoice;

   userChoice = getUserChoice();
   computerChoice = getComputerChoice();

   chooseWinner(computerChoice, userChoice);
};

char getUserChoice() {
   int choice;

   std::cout << "Escolha: \n";
   std::cout << "1. Pedra \n";
   std::cout << "2. Papel \n";
   std::cout << "3. Tesoura \n";
   std::cin >> choice;;

   if (choice == 1) {
      return 'r';
   } else if (choice == 2) {
      return 'p';
   } else if (choice == 3) {
      return 's';
   };

   return 0;
};

char getComputerChoice() {
   int choice;
   
   srand(time(NULL));

   choice = (rand() % 3) + 1;

   if (choice == 1) {
      return 'r';
   } else if (choice == 2) {
     return 'p';
   } else if (choice == 3) {
     return 's';
   };

   return 0;
};

void chooseWinner(char computerChoice, char userChoice) {
   switch (userChoice) {
   case 'r':
      if (computerChoice == 'r') {
         std::cout << "Empate \n";
      } else if (computerChoice == 'p') {
         std::cout << "Voce perdeu!\n";
      } else {
         std::cout << "Voce ganhou!!\n";
      };
      break;
   case 'p':
      if (computerChoice == 'r') {
         std::cout << "Voce ganhou!!\n";
      } else if (computerChoice == 'p') {
         std::cout << "Empate!\n";
      } else {
         std::cout << "Voce perdeu!\n";
      };
      break;
   case 's':
      if (computerChoice == 'r') {
         std::cout << "Voce perdeu!\n";
      } else if (computerChoice == 'p') {
         std::cout << "Voce ganhou!!\n";
      } else {
         std::cout << "Empate\n";
      };
      break;
   default:
      std::cout << "Erro!";
      break;
   }
};
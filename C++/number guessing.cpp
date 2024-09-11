#include <iostream>
#include <ctime>

int main() {
   int num, guess, tries;

   srand(time(NULL));

   num = (rand() % 100) + 1;

   std::cout << "***** Descubra o numero aleatorio ***** \n";

   do {
      std::cout << "Digite um numero entre (1 - 100) \n";
      std::cin >> guess;
      tries++;

      if (guess > num) {
         std::cout << "Voce digitou um numero muito alto \n";
      } else if (guess < num) {
         std::cout << "Voce digitou um numero muito baixo \n";
      } else {
         std::cout << "Parabens voce acertou em: " << tries << " tentativas \n";
      }
   } while (guess != num);

   std::cout << "**************************************** \n";
   return 0;
}
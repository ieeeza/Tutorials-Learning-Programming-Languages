#include <iostream>
#include <iomanip>

void showBalance(double balance);
double deposit();
double withdraw(double balance);

int main() {
   double balance = 0;
   int choice = 0;

   do {
      std::cout << "Escola uma opcao do menu: \n";
      std::cout << "1. Mostrar carteira \n";
      std::cout << "2. Depositar. \n";
      std::cout << "3. Sacar \n";
      std::cout << "4. Sair \n";
      std::cin >> choice;

      switch (choice) {
      case 1: showBalance(balance); break;
      case 2: balance += deposit(); showBalance(balance); break;
      case 3: balance -= withdraw(balance); showBalance(balance); break;
      case 4: std::cout << "Obrigado por usar o aplicativo"; break;
      default: std::cout << "Opcao invalida."; break;
      }
   } while (choice != 4);
}

void showBalance(double balance) {
   std::cout << "O seu saldo e: " << std::setprecision(2) << std::fixed << balance << " reais \n";
};

double deposit() {
   double amount = 0;

   std::cout << "Digite a quantidade que deseja depositar: \n";
   std::cin >> amount;

   return amount;
};

double withdraw(double balance) {
   double amount = 0;

   std::cout << "Digite a quantidade que deseja retirar: \n";
   std::cin >> amount;
   
   return amount;
};
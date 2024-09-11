#include <iostream>

int main() {
   double temp;
   char unit;

   std::cout << "F = Fahrenheit \n";
   std::cout << "C = Celsius \n";
   std::cout << "Qual unidade voce gostaria de converter: ";
   std::cin >> unit;

   if (unit == 'F' || unit == 'f') {
      std::cout << "Digite a temperatura em Celcius: \n";
      std::cin >> temp;

      temp = (1.8 * temp) + 32.0;
      std::cout << "A temperatura convertida e: " << temp;
   } else if (unit == 'C' || unit == 'c') {
      std::cout << "Digite a temperatura em Fahrenheit: \n";
      std::cin >> temp;

      temp = (temp - 32) / 1.8;
      std::cout << "A temperatura convertida e: " << temp;
   } else {
      std::cout << "Digite uma opcao valida! \n";
   }
}
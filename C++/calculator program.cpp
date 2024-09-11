#include <iostream>

int main() {
   double a, b, c;
   char op;

   std::cout << "Digite o operador: (+ - * /)\n";
   std::cin >> op;

   std::cout << "Digite o numero 1: \n";
   std::cin >> a;

   std::cout << "Digite o numero 2: \n";
   std::cin >> b;

   switch (op) {
      case '+':
         c = a + b;
         std::cout << "O resultado e: " << c;
         break;
      case '-':
         c = a - b;
         std::cout << "O resultado e: " << c;
         break;
      case '*':
         c = a * b;
         std::cout << "O resultado e: " << c;
         break;
      case '/':
         c = a / b;
         std::cout << "O resultado e: " << c;
         break;
      default:
         std::cout << "Por favor digite um operador valido! \n";
         break;
   };
};
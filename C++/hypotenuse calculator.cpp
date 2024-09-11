#include <iostream>
#include <cmath>



int main() {
   double a, b, c;

   std::cout << "Digite o tamanho de A: \n";
   std::cin >> a;

   std::cout << "Digite o tamanho de B: \n";
   std::cin >> b;

   c = sqrt(pow(a, 2) + pow(b, 2));

   std::cout << "O lado C: " << c;
}
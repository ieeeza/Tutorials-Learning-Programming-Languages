#include <iostream>
#include <string>

// count << insertion operator
// cin >> extraction operator

int main() {
   std::string name;
   int age;

   std::cout << "Qual o seu nome todo? \n";
   std::getline(std::cin >> std::ws, name); // lê toda a linha inves de uma so palavra.

   std::cout << "Quantos anos voce tem? \n";
   std::cin >> age;

   std::cout << "Ola " << name << " Voce tem " << age << " anos.";
}
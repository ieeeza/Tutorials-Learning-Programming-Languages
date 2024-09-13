#include <iostream>

int main() {
   int *pointer = nullptr;
   int x = 123;

   if (pointer == nullptr) {
     std::cout << "Endereço invalido \n";
   } else {
      std::cout << "Endereço valido \n";
   }
   
}
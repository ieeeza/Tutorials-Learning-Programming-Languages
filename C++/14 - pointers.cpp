#include <iostream>

int main() {
   // pointers = variable that stores a memory address of another variable.
   // sometimes is easy to work with an address.

   // & address-of operator
   // * deference operator

   std::string name = "Cesar";
   std::string freePizzas[5] = {"pizza1", "pizza2", "pizza3", "pizza4","pizza5"};

   std::string *pName = &name;
   std::string *pFreePizzas = freePizzas;

   std::cout << *pName;
   std::cout << *pFreePizzas;

   return 0;
}
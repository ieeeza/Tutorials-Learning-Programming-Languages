#include <iostream>

int main() {
   // dynamic memory = memory that is allocated adter the program is already compiled and running.
   // Use the 'new' operator to allocate memory in the heap rather than the stack.

   // Useful when we dont know how much memory we will need.
   // Makes our programs more flexible, especially when accepting user input.

   int *pNum = NULL;
   
   pNum = new int;

   *pNum = 21;

   std::cout << "Address: " << pNum << "\n";
   std::cout << "Value: " << *pNum << "\n";

   delete pNum;

   // --------------------------------------------------------------- //

   char *pGrades = NULL;
   int size;

   std::cout << "Quantas grades de avaliacao: ";
   std::cin >> size;

   pGrades = new char[size];

   for (int i = 0; i < size; i++) {
      std::cout << "Digite a avaliacao: " << i + 1 << ": ";
      std::cin >> pGrades[i]; 
   }

   for (int i = 0; i < size; i++) {
      std::cout << pGrades[i] << " ";
   }

   delete[] pGrades;
}
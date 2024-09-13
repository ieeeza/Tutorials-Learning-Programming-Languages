#include <iostream>

void walk(int steps);
int factorial(int num);

int main() {
   // recursion = a programming technique where a function invokes itself from within break a complex concep into a repeatable single step;

   // (iterative vs recursive)

   // advantages = less code and cleaner, useful for sortin and searching algorithms
   // disavantages = uses more memory, slower.

   walk(100);
   std::cout << factorial(10);
}

void walk(int steps) {
   if (steps > 0) {
      std::cout << "Voce deu um passo! \n";
      walk(steps - 1);
   }
}

int factorial(int num) {
   if (num > 1) {
      return num * factorial(num - 1);
   } else {
      return 1;
   }
}
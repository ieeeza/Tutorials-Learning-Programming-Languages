#include <iostream>
#include <ctime>

int main() {
   // pseudo-random = NOT truly random (but close)

   srand(time(NULL));

   int num1 = (rand() % 6) + 1;

   std::cout << num1;

   return 0;
}
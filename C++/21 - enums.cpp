#include <iostream>

enum Day {sunday = 1, monday = 2, tuesday = 3, wednesday = 4, thursday = 5, friday = 6, saturday = 7};

int main() {
   // enums = a user-defined data type that consists of paired named-integer constants. Great if you have a set of potential options;

   Day today = sunday;

   switch (today) {
      case 1:
         std::cout << "Hoje e domingo! \n";
         break;
      case 2:
         std::cout << "Hoje e segunda! \n";
         break;
      case 3:
         std::cout << "Hoje e terca! \n";
         break;
      case 4:
         std::cout << "Hoje e quarta! \n";
         break;
      case 5:
         std::cout << "Hoje e quinta! \n";
         break;
      case 6:
         std::cout << "Hoje e sexta! \n";
         break;
      case 7:
         std::cout << "Hoje e sabado! \n";
         break;
      default:
         break;
   }
}
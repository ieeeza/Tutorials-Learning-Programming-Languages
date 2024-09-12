#include <iostream>

int searchArray(int array[], int size, int element);

int main() {
  
   int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
   int index;
   int size = sizeof(numbers) / sizeof(numbers[0]);
   int myNum;

   std::cout << "Digite o numero que procura: \n";
   std::cin >> myNum;

   index = searchArray(numbers, size, myNum);

   if (index == -1) {
   std::cout << "O numero que voce digitou nao existe";
   } else {
   std::cout << "O numero que voce digitou contem na lista";
   };

   
   return 0;
}

int searchArray(int numbers[], int size, int myNum) {

for (int i = 0; i < size; i++) {
      if (numbers[i] == myNum) {
      return i;
      };
   };

   return -1;

} 

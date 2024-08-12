#include <stdio.h>
int main() {
   //bitwise operators = special operators used in bit level programming

   // & = AND
   // | = OR
   // ^ = XOR
   // << = LEFT SHIFT
   // >> = RIGHT SHIFT

   int x = 6; //00000110
   int y = 12; //00001100
   int z = 0; // 4 = 00000100

   z = x & y;
   printf("AND = %d \n", z);

   // 00000110
   // 00001100
   // 14 = 00001110

   z = x | y;
   printf("OR = %d \n", z);

   // 00000110
   // 00001100
   // 10 = 00001010

   z = x ^ y;
   printf("XOR = %d \n", z);

   // 00000110 = 00001100

   z = x << y;
   printf("SHIFT LEFT = %d \n", z);

   // 00000110 = 00000011

   z = x >> y;
   printf("SHIFT RIGHT = %d \n", z);

   return 0;
}
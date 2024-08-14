#include <stdio.h>

int main() {
   // memory = an array of bytes within RAM
   // memory block = a single unit (byte) within memory, used to hold some value
   // memory address = the address of where a memory block is located

   char a;
   char b[3];

   printf("%c", a);
   printf("%s", b);

   printf("%p", &a);
   printf("%p", &b);

}
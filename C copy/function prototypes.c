#include <stdio.h>

void hello(char name[], int);

int main() {
   // function prototype

   // Function declation, w/o body, before main()
   // Ensure that calls to a function are made with the correct arguments

   // Many C compilers do not check for parameters matching
   // Missing arguments will result in unexpected behavior
   // A function prototype causes the compiler to flag an error if arguments are missing

   char name[] = "César";
   int age = 21;

   hello(name, age);
}

void hello (char name[], int age) {
   printf("\n Olá %s", name);
   printf("\n Você tem %d anos de idade", age);
}
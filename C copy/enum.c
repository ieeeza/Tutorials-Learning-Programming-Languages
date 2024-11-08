#include <stdio.h>

enum Day { Sun, Monday, Tue, Wed, Thu, Fri, Sat };

int main() {
   // enum = a user defined type of named integer identifiers
   // helps to make program more readable

   enum Day today = Sat;
   printf("%d", today); // enums are not strings, but they can be treated as int
}
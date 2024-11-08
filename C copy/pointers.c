#include <stdio.h>

void printAge(int *pAge) {
   printf("Você tem %d, anos", *pAge);
};

int main() {
   
   // pointer = a "variable-like" reference that holds a memory address to another variable varable, array, etc.
   // some tasks are performed more easily with pointers;
   // * = indirection operator (value at address);

   // less time in program execution;
   // working on the original variable;
   // with the help of pointers, we can create data strctures (linked-list, stack, queue)
   // returning more than one value from functions
   // searching and sorting large data very easily
   // dynamically memory allocation

   int age = 21;
   int *pAge = NULL; // good practice to assing NULL if declaring a pointer;
   pAge = &age;

   printf("address of age: %p \n", &age);
   printf("value of pAge: %p \n", pAge);

   printf("value of age: %d \n", age);
   printf("value at stored address: %d \n", *pAge);

   printAge(pAge);
}
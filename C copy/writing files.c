#include <stdio.h>

int main() {
   FILE *pF = fopen("test.txt", "w");

   fprintf(pF, "Ola Mundo!");

   fclose(pF);
}
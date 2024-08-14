#include <stdio.h>
#include <time.h>

int main() {
   FILE *pF = fopen("test.txt", "r");
   char buffer[255];

   while (fgets(buffer, 255, pF) != NULL) {
      printf("%s", buffer);
   };

   fclose(pF);
}
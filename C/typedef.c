#include <stdio.h>

typedef struct {
   char name[25];
   char password[12];
   int id;
} User;

int main() {
   // typedef = reserved keyword that gives an existing datatype a "nickname"

   User user1 = {"César", "password123", 123321};
   User user2 = {"Random", "password321", 321123};

   printf("%s \n", user1.name);
   printf("%s \n", user1.password);
   printf("%d \n", user1.id);
   printf("\n");
   printf("%s \n", user2.name);
   printf("%s \n", user2.password);
   printf("%d \n", user2.id);
};
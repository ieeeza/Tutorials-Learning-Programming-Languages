#include <stdbool.h>

int main() {


   char a = 'A'; //sigle character %c
   char b[] = "César"; //Array of characters %s

   float c = 3.141592653589793; //4 bytes (32 bits of precision) 6 - 7 digits %f
   double d = 3.141592653589793; //8 bytes (64 bits of precision) 15 - 16 digits %lf

   bool e = true; //1 byte (true or false) %d (1 = true / 0 = false)

   char f = 100; // 1 byte (-128 to +127) %d for number display or %c for ascii table display

   // unsigned means that the variable cant be negative
   unsigned char g = 255; //1 byte (0 to 255) %d or %c

   short int h = 32767; //2 bytes (-32,768 to 32,767) %d
   unsigned short int i = 65535; //2 bytes (0 to 65,535) %d

   int j = 2147483647; //4 bytes (-2,147,483,648 to +2,147,483,647) %d
   unsigned int k = 4294967295;  //4 bytes (0 to +4,249,967,265) %d

   long long int l = 9223372036854775807; //8 bytes (-9 quintilion to +9 quintilion) %lld
   unsigned long long int m = 18446744073709551615U; //8 bytes (0 to +18 quintillion) %llu (add U in the end)
}
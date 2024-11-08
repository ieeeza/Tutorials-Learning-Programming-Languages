#include <string.h>

int main() {
   char string1[] = "César";
   char string2[] = "Pereira";

   strlwr(string1); // Converts a string to lowercase
   strupr(string1); // Converts a string to uppercase
   strcat(string1, string2); // appends string2 to end of string1
   strncat(string1, string2, 1); //appends n characters from string2 to string1
   strcpy(string1, string2); // Copy srting2 to string1
   strncpy(string1, string2, 2); //copy n characters of string2 to string1

   strset(string1, '?'); // sets all characters of a string to a given character
   strnset(string1, 'x', 1); //sets first n characters of a string to a given character
   strrev(string1); //reverses a string

   int result = strlen(string1); // returns string lenght as int
   int result1 = strcmp(string1, string2); // string compare all characters (if the same will return 0)
   int result2 = strncmp(string1, string2, 1); //string compare n characters
   int result3 = strcmpi(string1, string1); // string compare all (ignore case)
   int result4 = strnicmp(string1, string1, 1); // string compare n characters (ignore case)
}
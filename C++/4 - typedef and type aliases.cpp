#include <iostream>

// typedef std::string text_t;
// typedef int number_t;
using text_t = std::string;
using number_t = int;

int main() {

   // typdef = reserved keyword used to create an additional name (alias) for another data type.
   // New identifier for an existing type.
   // Helps with readability and reduce typos
   // Use when there is a clear benefit
   // Replaced with 'using' (work better w/ templates)

   text_t firstName = "Bro";
   number_t age = 21;
   std::cout << firstName << "\n" << age;
};
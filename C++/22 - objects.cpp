#include <iostream>

class Human {
   public:
      std::string name;
      std::string occupation;
      int age;

      void eat() {
         std::cout << "Esta pessoa esta comendo";
      };

      void drink() { 
         std::cout << "Esta pessoa esta bebendo"; 
      };

      void sleep() { 
         std::cout << "Esta pessoa esta dormindo"; 
      };
};

int main() {
   // object = A collection of attributes and methods.
   // They can have characteristics and could perform actions 
   // Can be used to mimic real world items (ex: books, phone, dogs)
   // Created from a class wich acts as a "blueprint"

   Human human1;

   human1.name = "Cesar";
   human1.occupation = "Programador";
   human1.age = 21;

   std::cout << human1.name << "\n";
   std::cout << human1.occupation << "\n";
   std::cout << human1.age << "\n";

   human1.eat();
   human1.drink();
   human1.sleep();

   return 0;
}
#include <iostream>

class Animal {
   public:
      bool alive = true;
   
   void eat() {
      std::cout << "O animal esta comendo \n";
   };
};

class Dog : public Animal {
   public:

   void bark() {
      std::cout << "O cachorro esta latindo";
   }
};

int main() {
   // inheritance = A class can receive attributes and methods from another class.
   // children classes inherit from a Parent class.
   // Helps to reuse similar code found within multiple classes.

   Dog dog;

   std::cout << dog.alive << "\n";
   dog.eat();
   dog.bark();
}
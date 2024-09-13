#include <iostream>

class Student {
   public:
      std::string name;
      int age;
      double gpa;

   Student(std::string name, int age, double gpa) {
      this -> name = name;
      this -> age = age;
      this -> gpa = gpa;

      // se o nome dos parametros for diferente das variaveis nao é necessario coloca o this.

      // name = x;
      // age = y;
      // gpa = z;
   };
};

int main() {
   // constructor = special method that is automatically called when an object is instantiated. Useful for assigning values to attributes as arguments.

   Student student1("Cesar", 25, 5.0);

   std::cout << student1.name << "\n";
   std::cout << student1.age << "\n";
   std::cout << student1.gpa << "\n";
}
#include <iostream>

struct Student {
   std::string name;
   double gpa;
   bool enrolled;
};

int main() {
   // struct = A structure that group related variables under one name
   // struct can contain many different data types (string, int, boolean, double, etc)
   // variables in a struct are know as "members"
   // members can be access with. "Class Member Access Operator"

   Student student1;
   student1.name = "Cesar";
   student1.gpa = 3.2;
   student1.enrolled = true;

   std::cout << student1.name << "\n";
   std::cout << student1.gpa << "\n";
   std::cout << student1.enrolled << "\n";
}
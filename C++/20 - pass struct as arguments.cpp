#include <iostream>

struct Car {
   std::string model;
   int year;
   std::string color;
};

void printCar(Car car);

int main() {

   Car car1;
   Car car2;

   car1.model = "Mustang";
   car1.year = 2023;
   car1.color = "Amarelo";

   car1.model = "Corvette";
   car1.year = 2024;
   car1.color = "Azul";

   printCar(car1);
   
}

void printCar(Car car) {
   std::cout << car.model << "\n";
   std::cout << car.year << "\n";
   std::cout << car.color << "\n";
};
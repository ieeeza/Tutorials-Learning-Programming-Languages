#include <iostream>

class Stove {
   private:
      int temperature = 0;
   
   public:
      int getTemperature() {
         return temperature;
      };

      void setTemperature(int temperature) {
         this->temperature = temperature;
      };
};

int main() {
   // Abstraction = hiding unnecessary data from outside a class
   // getter = function that makes a private attribute readble;
   // setter = function that makes a private attribute writeble;

   Stove stove;

   stove.setTemperature(1000);

   std::cout << stove.getTemperature();
}
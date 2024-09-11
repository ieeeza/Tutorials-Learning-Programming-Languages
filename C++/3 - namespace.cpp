#include <iostream>

namespace second {
   int x = 2;
};

namespace first {
   int x = 1;
};

int main() {

   // using namespace first;
   // using namespace std::cout;

   // namespace = provides a solution for preventing name conflicts in large projects. Each entity needs a unique name. A namespace allows for identically named entites as long as the namespace are different.

   int x = 0;

   std::cout << x;
   std::cout << first::x;
}
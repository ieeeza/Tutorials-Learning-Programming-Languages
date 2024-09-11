#include <iostream>
#include <string>

int main() {
   std::string name;

   std::cout << "Digite o seu nome: \n";
   std::getline(std::cin >> std::ws, name);

   if (name.empty()) {
      std::cout << "Voce nao digitou seu nome! \n";
   };

   if (name.length() > 12) {
      std::cout << "Seu nome nao pode ser maior que 12! \n";
   } else {
      std::cout << "Bem vindo! " << name;
   };

   name.clear(); // limpa o que estiver dentro da variavel.

   name.append("@gmail.com");
   std::cout << "Seu username agora é: " << name;

   // name.at(0); Retorna caractere na posição indicada.

   // name.insert(0 , "@"); Inseri uma caractere no local indicado.

   // name.erase(0, 3); Remove as caracteres entre o local indicado.

   // name.find(' '); Retorna a posição da caractere especificada.

   return 0;
}
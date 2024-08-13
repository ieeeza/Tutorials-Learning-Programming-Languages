# Usar 'w'como segundo argumento caso deseja alterar o arquivo. Por padrão vem 'r' de read

text = 'Eu ainda quero me matar\nEu realmente quero me matar isso não é uma brincadeira '

with open('teste.txt', 'w') as file:
    file.write(text)
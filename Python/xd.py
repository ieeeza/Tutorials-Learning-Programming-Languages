word_without_vowels = ""
# Solicita que o usuário insira uma palavra
# e atribua-a à variável user_word.

user_word = input("Digite uma palavra: ")

for letter in user_word:
    if letter in "IOUEA":
        continue
    word_without_vowels.join(letter)
    print(word_without_vowels)





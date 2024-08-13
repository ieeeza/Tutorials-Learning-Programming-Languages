# index operator [] = gives access to a sequence's element (str, list, tuples)

name = 'césar'

if name[0].islower():
    name = name.capitalize()

# first_name = name[:3] \\ nao especificar onde começar faz com que comece a contar sempre do primeiro caractere
# last_name = name[4:] \\ não especificar onde vai terminar faz com que termine de contar sempre no ultimo caractere
# last_character = name[-1] \\ informar valor negativo faz com que a contagem comece do ultimo para o primeiro


print(name)
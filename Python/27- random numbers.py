import random

# x = random.randint(1, 6) \\ numero aleátorio entre os do valores passados
# y = random.random() \\ um numero aleatorio entre 0 e 1

myList = ['rock', 'paper', 'scissors']
z = random.choice(myList)

cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

random.shuffle(cards)

print(cards)


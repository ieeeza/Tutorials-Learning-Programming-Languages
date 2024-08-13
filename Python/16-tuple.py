# tuples =  collection which is ordered and unchangeable used to group together related data

student = ('César', 21, 'masculino')

# student.count('César') \\ conta quantas esses o valor passado aparece
# student.index('masculino') \\ mostra a posição do valor passado

for x in student:
    print(x)

if 'César' in student:
    print('César esta aqui')
# Em casos de abrir arquivo é sempre bom usar um try catch para caso der erro.
try:
    with open('teste.tx') as file:
        print(file.read())
except FileNotFoundError as e:
    print(f'Esse arquivo não foi encontrado {e}')
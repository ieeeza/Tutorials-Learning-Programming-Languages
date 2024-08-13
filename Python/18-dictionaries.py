# dictionary = A changeable, unordered collection of unique key:value pairs. Fast because they use hashing, allow us to access a value quickly.

capitals = {'USA': 'Washington DC',
            'India': 'New Dehli',
            'China': 'Beijing',
            'Russia': 'Moscow'}

# capitals.update({'Germany': 'Berlin'}) \\ update pode ser usado tanto para adicionar um novo valor ou atualizar um que ja existe
# capitals.update({'USA': 'Las Vegas'})

# print(capitals['Germany'])
# print(capitals.get('Germany')) \\ Usar .get para evitar erros de input de usuários
# print(capitals.keys()) \\ Retorna os valores chaves
# print(capitals.values()) Retorna os valores das chaves
# print(capitals.items()) Retorna todos os valores

for key,value in capitals.items():
    print(key, value)
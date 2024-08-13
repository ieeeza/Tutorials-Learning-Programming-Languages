import os

path = 'C:\\Users\\cesar\\OneDrive\\Área de Trabalho'

if os.path.exists(path):
    print('that location exist')
    if os.path.isfile(path):
        print('that is a file')
    elif os.path.isdir(path):
        print('thats a directory')
else:
    print('that location doesnt exist!')
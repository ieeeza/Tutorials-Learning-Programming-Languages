# exception = events detected during execution that interrupt the flow of a program

try:
    numerator = int(input('Enter a number to divide: '))
    denominator = int(input('Enter a number to divide by: '))
    result = numerator / denominator
except ZeroDivisionError as e:
    print(e)
    print('You cant divide by zero!')
except ValueError as e:
    print(e)
    print('Enter only numbers please!')
except Exception as e:
    print(e)
    print('Something went wrong')
else:
    print(result)
finally:  # \\ blocos de código que vão sempre executar não importa se vai ter erro ou não
    print('Esse bloco de código vai saempre executar')

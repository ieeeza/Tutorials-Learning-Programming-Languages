# **kwargs = parameter that will pack all arguments into a dictionary
# useful so that a function can accept a varying amount of keyword arguments

def hello(**names):
    print('hello', end=" ")
    for key, value in names.items():
        print(value, end=" ")


hello(first='cesar', middle='pereira')
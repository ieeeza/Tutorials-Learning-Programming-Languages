# logical operators (and, or, not) = used to check if one or more conditional statement is true
temp = int(input("Whats the temperature outside? "))
if 0 <= temp <= 30:
    # temp >= 0 and temp <= 30:
    print("The temperature is good today")
    print("go outside")
elif temp < 0 or temp > 30:
    print("the temperature is bad today")
    print("stay inside")
# not = reverse the statement. True turns in false and false turns in true

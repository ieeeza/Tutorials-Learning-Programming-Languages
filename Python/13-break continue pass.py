# loop control statements = change a loops execution from its normal sequenc

# break = used to terminate the loop entirely
# continue = skips to the next iteration of the loop
# pass = does nothing, acts as a placeholder

# while True:
#     name = input("Enter your name: ")
#     if name != "":
#         break

# phone_number = "123-213-3214"
#
# for i in phone_number:
#     if i == "":
#         continue
#     print(i, end="")

for i in range(1, 21):
    if i == 13:
        pass
    else:
        print(f'{i}, ', end="")

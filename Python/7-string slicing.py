# slicing = create a substring by extracting elements from another string
# indexing[] or slice()
# [start:stop:step]
name = "César Pereira"
first_name = name[0:5]
# start is inclusive and stop is exclusive
# first_name = name[:5]
# last_name = name[6:]
last_name = name[6:13]
# funky_name = name[::2]
funky_name = name[0:13:2]
reverse_name = name[::-1]

print(reverse_name)

website = "http://google.com"
cut = slice(7, -4)
# you can crop from the end using "-" in stop argument

print(website[cut])

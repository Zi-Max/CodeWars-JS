# solution 1
def disemvowel(string_):
    new_str = []

    for char in string_:
        if char.lower() not in "aeiou":
            new_str.append(char)

    return "".join(new_str)

print(disemvowel("This website is for losers LOL!")) # Ths wbst s fr lsrs LL!


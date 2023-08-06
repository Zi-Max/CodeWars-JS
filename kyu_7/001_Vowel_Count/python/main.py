# solution 1
def get_count(sentence):
    result = 0

    for char in sentence:
        if char in "aeiou":
            result += 1

    return result

print(get_count("aeiou")) # 5


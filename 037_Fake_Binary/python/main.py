# solution 1
def fake_bin(x):
    result = ""
    for char in x:
        if ord(char) < ord('5'):
            result += "0"
        else:
            result += "1"

    return result

print(fake_bin("453855")) # 010111


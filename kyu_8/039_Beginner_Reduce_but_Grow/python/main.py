# solution 1
def grow(arr):
    result = 1

    for item in arr:
        result *= item

    return result

print(grow([1, 2, 3, 4])) # 24


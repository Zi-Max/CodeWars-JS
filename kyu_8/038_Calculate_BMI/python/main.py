# Solution 1
def bmi(weight, height):
    result = weight / height ** 2

    if result <= 18.5:
        return "Underweight"
    elif result <= 25.0:
        return "Normal"
    elif result <= 30.0:
        return "Overweight"
    return "Obese"

print(bmi(80, 1.8)) # Normal


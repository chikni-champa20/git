# Factorial generator
def Factorial(n):
    if n == 0 : 
        return 1
    else:
        return n * Factorial(n-1)

number = 5
result = Factorial(number)
print(f"The factorial of {number} is {result}")
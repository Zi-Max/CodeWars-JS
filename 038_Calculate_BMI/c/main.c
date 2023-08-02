#include <stdio.h>


const char *bmi (int weight, double height)
{
	double result = weight / (height * height);

	if (result <= 18.5)
		return ("Underweight");
	else if (result <= 25.0)
		return ("Normal");
	else if (result <= 30.0)
		return ("Overweight");
	return ("Obese");
}

int main(void)
{
	printf("%s\n", bmi(80, 1.8)); /*Normal*/

	return (0);
}

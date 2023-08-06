#include <stddef.h>
#include <stdio.h>


int grow(size_t size, const int arr[size]) {
  	int result = 1;
	size_t i;

	for (i = 0; i < size; i++)
		result *= arr[i];

	return (result);
}

int main(void)
{
	size_t size = 4;
	int array[] = {1, 2, 3, 4};

	printf("%d\n", grow(size, array)); /* 24 */

	return (0);
}

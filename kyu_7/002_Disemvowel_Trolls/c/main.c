#include <stdlib.h>
#include <stdio.h>
#include <string.h>


char *disemvowel(const char *str)
{
	char *new_str, *match = "aeiouAEIOU";
	size_t size = 0; 
	int i, j, skip;

	new_str = malloc(sizeof(char) * (size + 1));
	if (!new_str)
		return (NULL);

	for (i = 0; i < (int)strlen(str); i++)
	{
		skip = 0;
		for (j = 0; j < (int)strlen(match); j++)
		{
			if (str[i] == match[j])
			{
				skip = 1;
				break;
			}
		}
		if (!skip)
		{
			size++;
			new_str = realloc(new_str, sizeof(char) * (size + 1));
			new_str[size - 1] = str[i];
		}
	}

	new_str[size] = 0;

	return (new_str);
}

int main(void)
{
	char *str = "This website is for losers LOL!";

	printf("%s\n", disemvowel(str)); /* Ths wbst s fr lsrs LL! */

	return (0);
}

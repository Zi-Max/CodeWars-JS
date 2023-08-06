#include <stddef.h>

size_t get_count(const char *s)
{
	int i, j;
	char *match = "aeiou";
	size_t result = 0;

	for (i = 0; s[i]; i++)
	{
		for (j = 0; match[j]; j++)
		{
			if (s[i] == match[j])
			{
				result++;
				break;
			}
		}
	}

    return result;
}

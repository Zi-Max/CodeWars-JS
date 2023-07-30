void fakeBin(const char *digits, char *binary) {
	int i;

	for (i = 0; digits[i]; i++)
	{
		if (digits[i] < '5')
			*binary = '0';
		else
			*binary = '1';
		*binary++;
	}
 	*binary = '\0';
}

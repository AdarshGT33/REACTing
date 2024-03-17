/*
#include<stdio.h>
int main(){
	int roll;
	char name[20];
	float m1, m2, m3, total, percent;
	printf("Enter roll number: ");
	scanf("%d", &roll);
	printf("Enter the name of the student: ");
	scanf("%s",&name);
	printf("Enter the marks of the student: ");
	scanf("%f", &m1);
	scanf("%f", &m2);
	scanf("%f", &m3);
	total = m1 + m2 + m3;
	percent = total/3;
	printf("total = 3%f percent = 2%f \n", total, percent);
	if (percent >= 90)
	{
		printf("Grade A+");
	} else if(percent >= 80){
		printf("Grade A");
	}else if(percent >= 70){
		printf("Grade B+");
	}else if(percent >= 60){
		printf("Grade B");
	}else if(percent >= 50){
		printf("Grade C");
	}else if (percent >=40){
		printf("Grade D");
	}else {
		printf("Grade E");
	}
	return 0;
}
*/


/*
# include<stdio.h>
int main(){
	for(int i = 1; i<= 100; i++){
		if (i % 3 == 0 && i % 5 == 0){
			printf("FizzBuzz\n");
		}else if(i % 3 == 0){
			printf("Fizz\n");
		}else if(i % 5 == 0){
			printf("Buzz\n");
		}else{
			printf("%d\n",i);
		}
	}
}
*/


/*
#include<stdio.h>
// function declaration
void printHello();
void printGoodBye();

int main(){
	printHello();//function call
	printGoodBye();//function call
	return 0;
}
//function definition
void printHello(){
	printf("Hello!\n");
}
//function definition
void printGoodBye(){
	printf("GoodBye!");
}
*/


/*
#include<stdio.h>

void indianUser();
void frenchUser();

int main(){
	char ch;
	printf("Are you an Indian(i) or a French(f): ");
	scanf("%c", &ch);
	if ( ch == 'i'){
		indianUser();
	}else if (ch == 'f'){
		frenchUser();
	}else{
		printf("Invalid Entry\n");
	}

	return 0;
}

void indianUser(){
	printf("Namaste\n");
}

void frenchUser(){
	printf("Bonjour\n");
}
*/


/*
#include<stdio.h>

int sum(int a, int b);

int main(){
	int num1;
	int num2;
	printf("Enter number 1: ");
	scanf("%d", &num1);
	printf("Enter number 2: ");
	scanf("%d", &num2);
	printf("The sum of number is: %d ", sum(num1,num2));
	return 0;
}

int sum(int a, int b){
	return a + b;
}
*/


/*
#include<stdio.h>

int tables(int n);

int main(){
	int a;
	printf("Enter the number to generate the table: ");
	scanf("%d", &a);
	tables(a);
	return 0;
}

int tables(int n){
	int t;
	for (int i = 1; i <= 10; i++){
		t = n * i;
		printf("%d = %d * %d\n", t, n, i);
	}
}
*/

/*
#include<stdio.h>
#include<math.h>

int main(){
	int n;
	printf("Enter the number to be squared: ");
	scanf("%d", &n);
	printf("The number squared is : %d\n", (int) pow(n,2));
	return 0;
}
*/


/*
#include<stdio.h>

void areaOfTheSquare(int a);
void areaOfTheRectangle(int a, int b);
void areaOfTheCircle(float r);

int main(){
	int x, y;
	int w;
	float z;
	printf("Enter the dimensions for the square: ");
	scanf("%d", &w);
	printf("Enter the dimensions for the rectangle: ");
	scanf("%d %d", &x, &y);
	printf("Enter the radius of the circle: ");
	scanf("%f", &z);
	areaOfTheSquare(w);
	areaOfTheRectangle(x,y);
	areaOfTheCircle(z);
	return 0;
}

void areaOfTheCircle(float r){
	float aoc;
	aoc = 3.14 * (r * r);
	printf("Area of the circle is: %f\n", aoc);
}

void areaOfTheSquare(int a){
	int aos;
	aos = a * a;
	printf("Area of the square is: %d\n", aos);
}

void areaOfTheRectangle(int a, int b){
	int aor;
	aor = a * b;
	printf("Area of the rectangle is: %d\n", aor);
}
*/


/*
#include<stdio.h>

int sum(int n);

int main(){
	int n;
	printf("Enter the number: ");
	scanf("%d", &n);
	printf("Sum of the numbers upto %d is: %d", n, sum(n));
	return 0;
}

int sum(int n){
	if (n == 1){
		return 1;
	}
	int sumOfNm1 = sum(n-1);
	int sumN = sumOfNm1 + n;
	return sumN;
}
*/


/*
#include<stdio.h>

int factorial(int n);

int main(){
	int n;
	printf("Enter the number: ");
	scanf("%d", &n);
	printf("The factorial of %d is: %d", n, factorial(n));
	return 0;
}

int factorial(int n){
	if ( n == 1){
		return 1;
	}
	int factNm1 = factorial(n-1);
	int factN = factNm1 * n;
	return factN;
}
*/

/*
#include<stdio.h>

int fibonacci(int n);

int main(){
	int n;
	printf("Enter the number: ");
	scanf("%d", &n);
	printf("The Fibonacci Sequence till %d is: %d\n ", n, fibonacci(n));
	return 0;
}

int fibonacci(int n){
	if ( n == 0){
		return 1;
	}
	if (n == 1){
		return 1;
	}
	int fibNm1 = fibonacci(n-1);
	int fibNm2 = fibonacci(n-2);
	int fibN = fibNm1 + fibNm2;
	return fibN;
}
*/


// #include<stdio.h>

// int powerFunc(int x, int n);

// int main(){
// 	int a;
// 	printf("Enter the base value(x): ");
// 	scanf("%d", &a);
// 	int b;
// 	printf("Enter the power value(n): ");
// 	scanf("%d", &b);
// 	printf("The Exponential operation on %d for power %d is: %d", a, b, powerFunc(a,b));
// 	return 0;
// }

// int powerFunc(int x, int n){
// 	if ( n == 0){
// 		return 1;
// 	}
// 	if ( x == 0){
// 		return 0;
// 	}
// 	int poxNm1 = powerFunc(x,n-1);
// 	int poxN = poxNm1 * x;
// 	return poxN;
// }


/*
#include<stdio.h>

int fibonacci();

int main(){
	fibonacci();
	return 0;
}

int fibonacci(){
	int n1 = 0;
	int n2 = 1;
	int n3;
	int limit;
	printf("Enter the limit: ");
	scanf("%d", &limit);
	printf("%d\n%d\n", n1, n2);
	n3 = n1 + n2;
	while (n3 <= limit){
		printf("%d\n", n3);
		n1 = n2;
		n2 = n3;
		n3 = n1 + n2;
	}
	return n3;
}
*/

/*
#include<stdio.h>

int main(){
	int value = 25;
	int *ptr = &value;
	int num = *ptr;
	//printf("%d\n", num);
	printf("%p\n", ptr);
	int *nptr = &num;
	int n = *nptr;
	printf("%d\n", n);
	printf("%u", nptr);
	return 0;
}
*/

// #include<stdio.h>

// int main(){
// 	int a[30], i,j,t,n;
// 	printf("Enter the total number of elements in array: ");
// 	scanf("%d", &n);
// 	for(i = 0; i < n; i++){
// 		printf("Enter the %d element: ", i);
// 		scanf("%d", &a[i]);
// 	}
// 	for(i = 0; i < n; i++){
// 		for (j = 0; j < n-1; j++){
// 			if (a[j] > a[j+1]){
// 				t = a[j];
// 				a[j] = a[j+1];
// 				a[j+1] = t;
// 			}
// 		}
// 	}
// 	printf("Sorted element list is:\n");
// 	for(i = 0; i < n; i++){
// 		printf("%d\n", a[i]);
// 	}
// 	return 0;
// }


// #include<stdio.h>
// const int max = 3;

// int main (){
// 	int a[] = {10, 100, 200};
// 	int i, *ptr;
// 	ptr = &a;
// 	for (i = 0; i < max; i++){
// 		printf("Address of a[%d] = %x\n", i, ptr);
// 		printf("Address of a[%d] = %d\n", i, ptr);
// 		ptr++;
// 	}
// 	return 0;
// }


// #include<stdio.h>

// int oddInArr(int arr[], int n);

// int main(){
// 	int array[] = {3, 5, 2, 14, 66, 0, 99, 23};
// 	printf("%d\n", oddInArr(array, 8));
// 	return 0;
// }

// int oddInArr(int arr[], int n){
// 	int count = 0;
// 	for ( int i = 0; i < n; i++){
// 		if ( arr[i] % 2 != 0){
// 			count++;
// 		}
// 		if ( arr[i] == 0){
// 			continue;
// 		}
// 	}
// 	return count;
// }

/*
#include<stdio.h>

void arrayReverse(int arr[], int n);

int main(){
	int array[] = {1, 2, 3, 4, 5};
	int n = 5;

	arrayReverse(array,n);
	printf("Reversed Array: ");
	for (int i = 0; i < n; i++){
		printf("%d", array[i]);
	}
	printf("\n");
	return 0;
}

void arrayReverse(int arr[], int n){
	for (int i = 0; i < n/2; i++){
		int firstValue = arr[i];
		int secondValue = arr[n-i-1];
		arr[i] = secondValue;
		arr[n-i-1] = firstValue;
	}
}
*/

/*
#include<stdio.h>

int main(){
	int n;
	printf("Enter the nth number: ");
	scanf("%d", &n);

	int fib[n];

	fib[0] = 0;
	fib[1] = 1;
	printf("%d    %d    ", fib[0], fib[1]);
	for ( int i = 2; i < n; i++){
		fib[i] = fib[i-1] + fib[i-2];
		printf("%d\t", fib[i]);
	}
	printf("\n");
	return 0;
}
*/

/*
#include<stdio.h>

void tablesinArray(int arr[][10], int n, int m, int number);

int main(){
	int tables[2][10];
	tablesinArray(tables, 0, 10, 2);
	tablesinArray(tables, 1, 10, 3);

	for ( int i = 0; i < 10; i++){
		printf("%d\t", tables[0][i]);
	}
	printf("\n");

	for ( int i = 0; i < 10; i++){
		printf("%d\t", tables[1][i]);
	}
	printf("\n");
	return 0;
}

void tablesinArray(int arr[][10], int n, int m, int number){
	for (int i = 0; i < m; i++){
		arr[n][i] = number * (i + 1);
	}
}
*/


/*
#include<stdio.h>

void swap(int *x, int *y);

int main(){
	int a;
	printf("Enter the first number: ");
	scanf("%d", &a);
	int b;
	printf("Enter the second number: ");
	scanf("%d", &b);

	printf("Numbers before swapping were: a = %d , b = %d \n", a,b);

	swap(&a, &b);// reference call was made.

	printf("Numbers after swapping are: a = %d, b = %d\n", a,b);

	return 0;
}

void swap(int *x, int *y){
	int temp = *y;
	*y = *x;
	*x = temp;
}
*/


/*
#include<stdio.h>

int countNumber(int arr[], int n, int number);

int main(){
	int array[] = {2, 3, 4, 4, 2, 2, 4, 6, 7, 8};
	int n = 10;
	int num;
	printf("Enter the number to check for: ");
	scanf("%d", &num);
	printf("The number %d occurs %d times in array.", num, countNumber(array, n, num));
	return 0;
}


int countNumber(int arr[], int n, int number){
	int count = 0;
	for (int i = 0; i < n; i++){
		if ( number == arr[i]){
			count++;
		}
	}
	return count;
}
*/


/*
#include<stdio.h>


int findingLargestNumberinArray(int arr[], int n);

int main(){
	int array[] = {1, 3, 9, 33, 89, -188, 2};
	int n = 7;
	int largest = findingLargestNumberinArray(array, n);
	printf("The largest number in the array is %d\n", largest);
	return 0;
}

int findingLargestNumberinArray(int arr[], int n){
	int *p1 = &arr[0];
	int largest = *p1;

	for ( int i = 0; i < n; i++){
		p1++;
		if ( *p1 > largest){
			largest = *p1;
		}
	}
	return largest;
}
*/


/*
#include<stdio.h>

void insertInArray(int *arr, int *n, int number);

int main(){
	int array[30];
	int n;
	printf("Enter the total required length of the array: ");
	scanf("%d", &n);
	for (int i = 0; i < n; i++){
		printf("Enter the %d element of the array: ", i);
		scanf("%d", &array[i]);
	}

	int number;
	printf("Enter the number wish to add: ");
	scanf("%d", &number);

	insertInArray(array,&n,number);
	printf("Modified Array: ");
	for ( int i = 0; i < n; i++){
		printf("%d\t", array[i]);
	}
	printf("\n");
	return 0;
}

void insertInArray(int *arr, int *n, int number){
	arr[*n] = number;
	(*n)++;
}
*/

/*
#include<stdio.h>
struct student{
	int roll;
	char name[20];
	float m1, m2, m3, total, percent;
}s;

int main(){
	printf("Enter roll, name, m1, m2, m3");
	scanf("%d %s %f %f %f", &s.roll, &s.name, &s.m1, &s.m2, &s.m3);
	s.total = s.m1 + s.m2 + s.m3;
	s.percent = s.total/3;
	printf("total = %f  percent = %f", s.total, s.percent);
	return 0;
}
*/

/*
#include<stdio.h>
struct student{
	int roll, age;
	char name[20];
}s[5];

int main(){
	for (int i = 0; i < 5; i++){
		printf("Enter the roll number and age of the student: ");
		scanf("%d %d", &s[i].roll, &s[i].age);
		printf("Enter the name of the student: ");
		scanf("%s", &s[i].name);
	}
	for (int i = 0; i < 5; i++){
		printf("Roll Number: %d Age: %d Name:%s \n", s[i].roll, s[i].age, s[i].name);
	}
}
*/


/*
#include<stdio.h>

void printString(char arr[]);

int main(){
	char firstName[20];
	char lastName[20];
	printf("Enter the first name: ");
	scanf("%s", firstName);
	printf("Enter the last name: ");
	scanf("%s", lastName);
	printf("The first name is %s and the last name is %s\n", firstName, lastName);
	printString(firstName);
	printString(lastName);
	return 0;
}

void printString(char arr[]){
	for ( int i = 0; arr[i] != '\0'; i++){
		printf("%c\n", arr[i]);
	}
	printf("\n");
}
*/


/*
#include<stdio.h>

int countLength(char arr[]);

int main(){
	char name[100];
	fgets(name, 100, stdin);
	printf("The length of the array is %d", countLength(name));
	return 0;
}

int countLength(char arr[]){
	int count = 0;
	for (int i = 0; arr[i] != '\0'; i++){
		count++;
	}
	return count-1;// count is increasing with the same pace as i and i counts the null value too, so we have to return count with decreasing its value by one.
}*/


/*
#include<stdio.h>

void slice(char arr[], int index1, int index2);

int main(){
	char str[100];
	fgets(str, 100, stdin);
	puts(str);
	int n;
	printf("Enter the first index: ");
	scanf("%d", &n);
	int m;
	printf("Enter the second index: ");
	scanf("%d", &m);
	printf("The new sliced string is: \n");
	slice(str, n, m);
	return 0;
}

void slice(char arr[], int index1, int index2){
	char slicedStr[100];
	int j = 0;
	for (int i = index1; i <= index2; i++){
		slicedStr[j] = arr[i];
		j++;
	}
	slicedStr[j] = '\0';
	puts(slicedStr);
}
*/


/*
#include<stdio.h>

int vowelsinString(char arr[]);

int main(){
	char string[100];
	fgets(string, 100, stdin);
	printf("The total vowels in the string are: %d", vowelsinString(string));
	return 0;
}


int vowelsinString(char arr[]){
	int count = 0;
	for (int i = 0; arr[i] != '\0'; i++){
		if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' ||
			arr[i] == 'A' || arr[i] == 'E' || arr[i] == 'I' || arr[i] == 'O' || arr[i] == 'U'){
		count ++;
	}
	}
	return count;
}
*/


/*
#include<stdio.h>

void charispresent(char arr[], char ch);

int main(){
	char string[] = "Narayan";
	char e;
	printf("Enter the character you want to verify: ");
	scanf("%c", &e);
	charispresent(string,e);
	return 0;
}

void charispresent(char arr[], char ch){
	for (int i = 0; arr[i] != '\0'; i++){
		if (arr[i] == ch){
			printf("character is present :)");
			return;
		}
	}
	printf("character is not present :(");
}
*/
/*
#include<stdio.h>

struct address
{
	int houseNo;
	int block;
	char city[100];
	char state[100];
};

void printStruct(struct add);

int main(){
	struct address add[5];
	printf("Enter info for first person: ");
	scanf("%d", &add[0].houseNo);
	scanf("%d", &add[0].block);
	scanf("%s", add[0].city);
	scanf("%s", add[0].state);

	printf("Enter info for second person: ");
	scanf("%d", &add[1].houseNo);
	scanf("%d", &add[1].block);
	scanf("%s", add[1].city);
	scanf("%s", add[1].state);

	printf("Enter info for third person: ");
	scanf("%d", &add[2].houseNo);
	scanf("%d", &add[2].block);
	scanf("%s", add[2].city);
	scanf("%s", add[2].state);

	printf("Enter info for fourth person: ");
	scanf("%d", &add[3].houseNo);
	scanf("%d", &add[3].block);
	scanf("%s", add[3].city);
	scanf("%s", add[3].state);

	printf("Enter info for fifth person: ");
	scanf("%d", &add[4].houseNo);
	scanf("%d", &add[4].block);
	scanf("%s", add[4].city);
	scanf("%s", add[4].state);

	printStruct(address[0]);
	printStruct(address[1]);
	printStruct(address[2]);
	printStruct(address[3]);
	printStruct(address[4]);

	return 0;
}

void printStruct(struct add){
	printf("info for first person is: ");
	printf("house number: %d", add.houseNo);
	printf("block: %d", add.block);
	printf("city: %s", add.city);
	printf("state: %s", add.state);

	printf("info for second person is: ");
	printf("house number: %d", add.houseNo);
	printf("block: %d", add.block);
	printf("city: %s", add.city);
	printf("state: %s", add.state);

	printf("info for third person is: ");
	printf("house number: %d", add.houseNo);
	printf("block: %d", add.block);
	printf("city: %s", add.city);
	printf("state: %s", add.state);

	printf("info for fourth person is: ");
	printf("house number: %d", add.houseNo);
	printf("block: %d", add.block);
	printf("city: %s", add.city);
	printf("state: %s", add.state);

	printf("info for fifth person is: ");
	printf("house number: %d", add.houseNo);
	printf("block: %d", add.block);
	printf("city: %s", add.city);
	printf("state: %s", add.state);
}
*/

/*
#include<stdio.h>
#include<string.h>

// user defined datatype unlike int, char or float which are c defined
struct student{
	int rollNo;
	float cgpa;
	char name[100];
};

int main(){
	struct student s1;
	s1.rollNo = 88;
	s1.cgpa = 9.9;
	strcpy(s1.name, "adarsh");

	printf("roll number is: %d\n", s1.rollNo);
	printf("cgpa is: %f\n", s1.cgpa);
	printf("name of the student is: %s\n", s1.name);
}
*/


/*
#include<stdio.h>
#include<string.h>

struct student{
	int rollNo;
	float cgpa;
	char name[100];
};

int main(){
	struct student s1;
	s1.rollNo = 99;
	s1.cgpa = 9.9;
	strcpy(s1.name, "aadu");

	printf("roll number of the studen is: %d\n", s1.rollNo);
	printf("cgpa of the student is: %f\n", s1.cgpa);
	printf("name of the student is: %s\n", s1.name);

	struct student s2;
	s2.rollNo = 82;
	s2.cgpa = 9.9;
	strcpy(s2.name, "siddhu");

	printf("roll number of the student is: %d\n", s2.rollNo);
	printf("cgpa of the student is: %f\n", s2.cgpa);
	printf("name of the student is: %s\n", s2.name);

	struct student s3;
	s3.rollNo = 33;
	s3.cgpa = 9.9;
	strcpy(s3.name, "deepu");

	printf("roll number of the student is: %d\n", s3.rollNo);
	printf("cgpa of the student is: %f\n", s3.cgpa);
	printf("name of the student is: %s\n", s3.name);
}
*/

/*
#include<stdio.h>
#include<string.h>

struct student{
	int rollNo;
	float cgpa;
	char name[100];
};

int main(){
	struct student s1 = {33, 9.9, "aadu"};
	printf("name of the student is: %s\n", s1.name);
	return 0;
}
*/

/*
#include<stdio.h>
#include<string.h>

struct student{
	int rollNo;
	float cgpa;
	char name[100];
};

int main(){
	struct student coe[100];
	coe[0].rollNo = 88;
	strcpy(coe[0].name, "aadu");
	printf("name of the student is: %s\n", coe[0].name);
	return 0;
}
*/

/*
#include<stdio.h>
#include<string.h>

struct student{
	int rollNo;
	char name[100];
};

void printInfo(struct student s1);

int main(){
	struct student s1 = {88, "ram"};
	printInfo(s1);
	return 0;
}

void printInfo(struct student s1){
	printf("roll number of the student is: %d\n", s1.rollNo);
	printf("name of the student is: %s\n", s1.name);
}
*/

/*
#include<stdio.h>
#include<string.h>

typedef struct computerScienceStudent{
	int rollNo;
	char name[100];
}css;

int main(){
	css s1;
	s1.rollNo = 9;
	css s2;
	s2.rollNo = 10;
	printf("roll number of student one is: %d\n", s1.rollNo);
	printf("roll number of student two is : %d\n", s2.rollNo);
}
*/

/*
#include<stdio.h>
#include<string.h>

struct address{
	int houseno;
	int block;
	char city[100];
	char state[100];
};

void printInfo(struct address p);

int main(){
	struct address p1 = {92, 10, "Jabalpur", "M.P."};
	struct address p2 = {33, 12, "Nagpur", "Maharashtra"};
	struct address p3 = {42, 11, "Bastar", "Chattisgarh"};
	struct address p4 = {83, 10, "Bhubneshwar", "Orrisa"};
	struct address p5 = {14, 22, "Gangtok", "Sikkim"};
	printInfo(p1);
	printInfo(p2);
	printInfo(p3);
	printInfo(p4);
	printInfo(p5);
	return 0;
}

void printInfo(struct address p){
	printf("house number is: %d\n", p.houseno);
	printf("block is: %d\n", p.block);
	printf("city is: %s\n", p.city);
	printf("state is: %s\n", p.state);
}
*/
/*
#include<stdio.h>
#include<stdlib.h>

int main(){
	float *ptr;
	ptr = (float *)malloc(5 * sizeof(float));

	ptr[0] = 65.00;
	ptr[1] = 33.23;
	ptr[2] = 55.45;
	ptr[3] = 89.99;
	ptr[4] = 51.11;

	for (int i = 0; i < 5; i++){
		printf("The price of product is: %f\n", ptr[i]);
	}
}
*/
/*
#include<stdio.h>
#include<stdlib.h>

int main(){
	int *ptr;
	ptr = (int *)calloc(5,sizeof(int));
	printf("Enter the numbers(5): ");
	for (int i = 0; i < 5; i++){
		scanf("%d",&ptr[i]);
	}
	for (int i = 0; i < 5; i++){
		printf("the numbers entered by the user are: %d\n", ptr[i]);
	}

	
	return 0;
}
*/

#include<stdio.h>
#include<stdlib.h>

int main(){
	int *ptr;
	ptr = (int *)calloc(5,sizeof(int));
	printf("Enter first five odd numbers: ");
	for(int i = 0; i < 5; i++){
		scanf("%d", &ptr[i]);
	}
	for(int i = 0; i < 5; i++){
		printf("The %d odd number is: %d\n",i,ptr[i]);
	}

	ptr = realloc(ptr,6);

	ptr = (int *)calloc(6,sizeof(int));
	printf("Enter the first six even numbers: ");
	for (int i = 0; i < 6; i++){
		scanf("%d", &ptr[i]);
	}

	for(int i = 0; i < 6; i++){
		printf("The %d even number is: %d\n", i, ptr[i]);
	}
	return 0;
}
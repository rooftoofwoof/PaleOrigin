#include <iostream>
#include "Batch.h"

using namespace FoodProduction;
int main(void)
{
	Batch a;
	std::cout << "Debug 2" << std::endl;
	std::cout << a.totalNumberOfBatches() << std::endl;
	Batch b(a);
	Batch c(b);
	Batch d(c);
	std::cout << d.history.size() << " blah blah" << std::endl;
	std::cout << d.totalNumberOfBatches() << std::endl;
}

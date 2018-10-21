#include <iostream>
#include "Batch.h"

using namespace FoodProduction;
int main(void)
{
	Batch a;
	std::cout << "Debug 2" << std::endl;
	std::cout << a.totalNumberOfBatches() << std::endl;
	Batch b; b.appendBatch(a, "", "", 0);
	Batch c; c.appendBatch(b, "", "", 0);
	Batch d; d.appendBatch(c, "", "", 0);
	std::cout << "Debug 1" << std::endl;
	std::cout << d.totalNumberOfBatches() << std::endl;
}

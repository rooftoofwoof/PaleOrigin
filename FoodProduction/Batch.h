
#pragma once
#include "ProductType.h"
#include <string>
#include <vector>

namespace FoodProduction
{
	class Batch
	{
		public:
		
		std::string batchID;
		std::string batchInformation;
		ProductType type;
		std::vector<Batch> history;
		void newBatch(std::string, std::string, int);
		void appendBatch(Batch, std::string, std::string, int);
		void appendBatch(std::vector<Batch>, std::string, std::string, int);
		int totalNumberOfBatches() const;
		Batch(const Batch &);
		Batch();
		~Batch();
		private:
		int totalNumberOfBatches(const std::vector<Batch> &) const;
	};
}

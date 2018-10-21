#include "Batch.h"

namespace FoodProduction
{
	void Batch::newBatch(std::string newID, std::string newInformation, int newType)
	{
		Batch newB;
		newB.batchID = newID;
		newB.batchInformation = newInformation;
		// COME BACK HERE FOR TYPE STUFF
	}
		
	void Batch::appendBatch(Batch oldB, std::string newID = "", std::string newInformation = "", int newType = 0)
	{
		Batch newB;
		std::vector<Batch> newHistory = {oldB};
		newB.history = newHistory;
		newB.batchID = newID;
		newB.batchInformation = newInformation;
		// COME BACK HERE FOR TYPE STUFF
	}
	void Batch::appendBatch(std::vector<Batch> oldV, std::string newID, std::string newInformation, int newType)
	{
		Batch newB;
		std::vector<Batch> newHistory = oldV;
		newB.history = newHistory;
		newB.batchID = newID;
		newB.batchInformation = newInformation;
		// COME BACK HERE FOR TYPE STUFF
	}
	Batch::Batch(const Batch &oldB)
	{
		history = oldB.history;
	}
	
	int Batch::totalNumberOfBatches() const
	{
		return totalNumberOfBatches(history);
	}
	int Batch::totalNumberOfBatches(const std::vector<Batch> &thisBatch) const
	{
		for (int i = 0; i < thisBatch.size(); ++i)
		{
			1 + totalNumberOfBatches(thisBatch[i].history);
		}
	}
	
	Batch::Batch()
	{
		
	}
	Batch::~Batch()
	{
		
	}
	
}

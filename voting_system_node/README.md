# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:
Project : Vating system 

Requirement : Create a contract for vatting system

Contract: 
-Create public varible 
	Address-owner
	uint-total_vates
	uint-TeamAVoterCount
	uint-TeamBVoterCount
	uint -TeamcVoterCount

	struct = Voter{
		bool is_voted
		uint age,
	} 

-Create a mapping for total votes
mapping(address=>voter) info

-Create custructor for save owner of contract

-create a modifire for check owner

-create 3 function for teamA, teamB, teamC which will call if user will press respected team button for vote.
		-check here a user can only vote 1 time
		-do increase team ++ vote
		-and total vate count
		-return thankyou message
		
-Create a function which will return total votes

-create a function which will show winner result.




```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

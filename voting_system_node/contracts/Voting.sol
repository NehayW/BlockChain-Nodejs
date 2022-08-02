// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
contract Voting {
  	address owner;
  	uint public totalVote;
  	uint public totalVoteTeamA;
  	uint public totalVoteTeamB;
  	uint public totalVoteTeamC;
    bool public votingClosed;
  	struct Voter{
  		bool voted;
  		uint age;
  	}

  	mapping(address=>Voter) public voterMap;

	constructor() {
	    owner = msg.sender;
	}

	modifier onlyOwner{
		require(msg.sender == owner);
		_;
	}

	function teamAvote(address _voterAddress, uint _age) public returns(string memory)
	{
        require(!votingClosed, "Votting is closed...!!!");
		require(!voterMap[_voterAddress].voted, "You have already given vote");
		voterMap[_voterAddress].voted = true;
		voterMap[_voterAddress].age = _age;
		totalVote++;
		totalVoteTeamA++;
		return("Thankyou for vote...!!!");
	} 

	function teamBvote(address _voterAddress, uint _age) public returns(string memory)
	{
        require(!votingClosed, "Votting is closed...!!!");
		require(!voterMap[_voterAddress].voted, "You have already given vote");
		voterMap[_voterAddress].voted = true;
		voterMap[_voterAddress].age = _age;
		totalVote++;
		totalVoteTeamB++;
		return("Thankyou for vote...!!");

	}

	function teamCvote(address _voterAddress, uint _age) public returns(string memory)
	{
        require(!votingClosed, "Votting is closed...!!!");
		require(!voterMap[_voterAddress].voted, "You have already given vote");
		voterMap[_voterAddress].voted = true;
		voterMap[_voterAddress].age = _age;
		totalVote++;
		totalVoteTeamB++;
		return("Thankyou for vote...!!");
	}

    function voting(uint _age, string memory _teamName, address _voterAddress) external
	{
		if(keccak256(bytes(_teamName)) == "teamAvote")
		{
			teamAvote(_voterAddress, _age);
		}
		if(keccak256(bytes(_teamName)) == "teamBvote")
		{
			teamBvote(_voterAddress, _age);
		}
		if(keccak256(bytes(_teamName)) == "teamCvote")

		{
			teamCvote(_voterAddress, _age);
		}
	}

    function closeVoting() external onlyOwner{
    	require(!votingClosed, "Voting is already closed...!!");
        votingClosed = true;
    }

	function getTotalVote() view public returns(uint)
	{
        require(votingClosed, "Votting is not closed yet...!!!");
		return totalVote;
	}

	function winner() view public returns(string memory)
	{
        require(votingClosed, "Votting is not closed yet...!!!");
		if(totalVoteTeamA > totalVoteTeamB && totalVoteTeamA > totalVoteTeamC)
		{
			return("Team A is winner...!!");
		}
		else if(totalVoteTeamB > totalVoteTeamA && totalVoteTeamB > totalVoteTeamC)
		{
			return("Team B is winner...!!");
		}
        else if(totalVoteTeamB == totalVoteTeamA && totalVoteTeamB == totalVoteTeamC)
		{
            return("No one is winner");
        }
        else
		{
			return("Team C is winner...!!");
		}
	}

	function openVoting() external onlyOwner{
		votingClosed = false;
		totalVote = 0;
		totalVoteTeamA = 0;
		totalVoteTeamB = 0;
		totalVoteTeamC = 0;
	}

}


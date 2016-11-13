var prospectiveCompanies = [
  { name: "Git Rich Quick", amount: 1250000 },
  { name: "Luz Ur Muni", amount: 2000000 },
  { name: "Burn Dat Cash", amount: 40000000 }
]

var company = prompt('Invest in (1)Git Rich Quick, (2)Luz Ur Muni or (3)Burn Dat Cash')

var investor = {
  cash: 500000000,
  portfolio: [ 
    { name: "Google", amount: 5000000 },
    { name: "Twitter", amount: 1000000 }
  ],
  invest: function (company) {
  	while (investor.cash > 0) {
  	for (var i = 0; i < prospectiveCompanies.length; i++) {
  		if (company = 1) 
  		{
  			investor.portfolio.splice(i, 0, prospectiveCompanies[0]);
  			investor.cash -= prospectiveCompanies[0].amount;
  		}
  		else if (company = 2)
  		{
  			investor.portfolio.splice(i, 0, prospectiveCompanies[1]);
  			investor.cash -= prospectiveCompanies[2].amount;	
  		}
  		else if (company = 3)
  		{
  			investor.portfolio.splice(i, 0, prospectiveCompanies[2]);
  			investor.cash -= prospectiveCompanies[2].amount;
  		}
  		else
  		{
  			prompt('*empty pockets*')
  		}
  		break;
  	}
  }
 }
};


investor.invest();




  		// if (investor.cash>=40000000)
  		// 	{
  		// 		var choice = prompt('Invest in Burn Dat Cash, Luz Ur Muni or Git Rich Quick?')
  		// 		investor.portfolio.splice(i, 0, prospectiveCompanies[i]);
  		// 		investor.cash -= prospectiveCompanies[i].amount
  		// 	} 
  		// 	else if (investor.cash>=2000000 && investor.cash<40000000)
  		// 	{
  		// 		choice = prompt('Invest in Luz Ur Muni or Git Rich Quick?')
  		// 		investor.portfolio.splice(i, 0, choice);	
  		// 	} 
  		// 	else if (investor.cash>=1250000 && investor.cash<2000000)
  		// 	{
  		// 		choice = prompt('Invest in Git Rich Quick?')
  		// 		investor.portfolio.splice(i, 0, choice);	
  		// 	}
  		// 	else
  		// 	{
  		// 		prompt('*empty pockets....*')
  		// 	}
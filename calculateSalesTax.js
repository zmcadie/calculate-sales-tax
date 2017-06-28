var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var companyTaxData = {}
  for (var i = 0; i < companySalesData.length; i ++) {
    var company = companySalesData[i]
    var name = company['name']
    var province = company['province']
    var sales = company['sales']

    if (companyTaxData[name] !== undefined) {
      companyTaxData[name]['totalSales'] += calculateTotalSales(sales)
      companyTaxData[name]['totalTaxes'] += calculateTotalTaxes(province, sales)
      continue
    }

    companyTaxData[name] = {
      totalSales: calculateTotalSales(sales),
      totalTaxes: calculateTotalTaxes(province, sales)
    };
  };
  console.log(companyTaxData);
};

function calculateTotalSales(arrayOfSales) {
  return arrayOfSales.reduce((a, b) => a + b, 0);
};

function calculateTotalTaxes(province, sales) {
  return calculateTotalSales(sales) * salesTaxRates[province]
};

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
console.log("Estos queries estan hechos para correr en mysql, quite el CAST de todos")

//const CountProductos = db.prepare('SELECT COUNT(*) AS count FROM products as Productos').all();
//console.log(CountProductos);

//const AverageProducts = db.prepare('Select AVG(value) AS Promedio FROM products').get();
//console.log(AverageProducts);

//const MaxPrice = db.prepare('SELECT MAX(value) AS valorMaximo FROM products').all();
//console.log(MaxPrice);

//const MaxPrice = db.prepare('SELECT MIN(value) AS valorMaximo FROM products').all();
//console.log(MaxPrice);

//const ProductNumberCurrencty = db.prepare('SELECT COUNT(*) as Cantidad, valueCurrency FROM products GROUP BY valueCurrency').all();
//console.log(ProductNumberCurrencty);

//const AvgByCurrency = db.prepare('SELECT AVG((value)) AS Promedio, valueCurrency AS valueCurrency FROM products GROUP BY valueCurrency').all();
//console.log(AvgByCurrency);

//const MaxByProductType = db.prepare('SELECT MAX((value)) AS maxValue, productType FROM products GROUP BY productType').all();
//console.log(MaxByProductType);

//const MaxMinByType = db.prepare('SELECT productType, MAX((value)) AS ValorMaximo, MIN((value)) AS ValorMinimo FROM products GROUP BY productType').all();
//console.log(MaxMinByType);

//const AvgByCategory = db.prepare('SELECT ("category.code") AS categoryCode, AVG((value)) AS Promedio FROM products GROUP BY TRIM("category.code")').all();
//console.log(AvgByCategory);

//const TotalByBrand = db.prepare('SELECT ("brand.code") AS brandCode, SUM((value)) AS ValorTotal FROM products GROUP BY ("brand.code")').all();
//console.log(TotalByBrand);

//const UniqueParts = db.prepare('SELECT COUNT(DISTINCT partNumber) AS TotalUnicos FROM products').get();
//console.log(UniqueParts);

//const AvgByLine = db.prepare('SELECT ("line.code") AS lineCode, AVG(value) AS Promedio, COUNT(*) AS Cantidad FROM products GROUP BY ("line.code")').all();
//console.log(AvgByLine);

//const MaxByPlanner = db.prepare('SELECT (plannerCode) AS plannerCode, name, MAX(value) AS ValorMaximo FROM products GROUP BY (plannerCode)').all();
//console.log(MaxByPlanner);
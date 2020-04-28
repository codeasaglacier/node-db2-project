exports.seed = async function( knex ) {
  await knex( "cars" ).truncate()

  await knex( "cars" ).insert( [
    { VIN: "123456", make: "Tesla", model: "Cybertruck", mileage: "2345" }, 
    { VIN: "234567", make: "Tesla", model: "Model S", mileage: "8365" },
    { VIN: "345678", make: "Tesla", model: "Model 3", mileage: "5483" }, 
    { VIN: "456789", make: "Tesla", model: "Model X", mileage: "39373" },
    { VIN: "567890", make: "Tesla", model: "Model Y", mileage: "94739" }
  ] )
}
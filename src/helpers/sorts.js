export const topSales = (data) => {
  let result = data.sort((a,b) => a.sales - b.sales)
  return result
}

export const lowSales = (data) => {
  let result = data.sort((a,b) => b.sales - a.sales)
  return result
}
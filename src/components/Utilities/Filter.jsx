
export default function Filter(array, cat, subcat) {
    //console.log(array)
    const items = array
    // console.log(items)
    // console.log(cat)
    // console.log(subcat)
    const filtered = array.filter((item) => item[cat].toLowerCase() === subcat)
    return filtered

// if (arg === 'brandasc') {
//     return sortByBrandAsc(items)
// } else if (arg === 'branddesc') {
//     return sortByBrandDesc(items)
// } else if (arg === 'priceasc') {
//     return sortByPriceAsc(items)
// } else if (arg === 'pricedesc') {
//     return sortByPriceDesc(items)
// }


}

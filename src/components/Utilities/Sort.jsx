import { useEffect } from "react";

export default function Sort(array, arg) {

const items = array
const sortByBrandAsc = (items) => {
    items.sort(function(a,b) {
        const itemA = a.brand.toUpperCase()
        const itemB = b.brand.toUpperCase()
        return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
    })
    return items
}
const sortByBrandDesc = (items) => {
    items.sort(function(a,b) {
        const itemA = a.brand.toUpperCase()
        const itemB = b.brand.toUpperCase()
        return (itemB < itemA) ? -1 : (itemB > itemA) ? 1 : 0;
    })
    return items
}
const sortByPriceAsc = (items) => {
    items.sort(function(a,b) {
        return a.price - b.price;
    })
    return items
}
const sortByPriceDesc = (items) => {
    items.sort(function(a,b) {
        return b.price - a.price;
    })
    return items
}

if (arg === 'brandasc') {
    return sortByBrandAsc(items)
} else if (arg === 'branddesc') {
    return sortByBrandDesc(items)
} else if (arg === 'priceasc') {
    return sortByPriceAsc(items)
} else if (arg === 'pricedesc') {
    return sortByPriceDesc(items)
}

  return null;
}

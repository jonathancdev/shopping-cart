
export default function Filter(array, cat, subcat) {
    const items = array
    const filtered = array.filter((item) => item[cat].toLowerCase() === subcat)
    return filtered

}

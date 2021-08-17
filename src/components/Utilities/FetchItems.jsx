const FetchItems = async () => {

        const data = await fetch('http://localhost:3500/items.json')
        const items = await data.json()
        items.items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
        return items.items.filter((item) => item.brand !== " ")

}

export default FetchItems
export const API_PRODUCTS = {
  products: {
    list: async () => {
      return fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxRSWqZ7UrDm3c2b7ZDGvO0kfe9QiIzwbIF9dHGk6oNo5lfRQxdhLTD1hk2AcoH1a-wXGJNep1j8kg/pub?gid=0&single=true&output=tsv'
      )
        .then(res => res.text())
        .then(text =>
          text
            .split('\n')
            .slice(1)
            .map(row => {
              const [
                id,
                title,
                description,
                price,
                categorie,
                stock,
                priceEnd,
                discount,
                sizes,
                images
              ] = row.split('\t')

              return {
                id: parseInt(id),
                title,
                description,
                price,
                categorie,
                stock: parseInt(stock),
                priceEnd,
                discount: parseFloat(discount),
                sizes: sizes.split(', ').map(item => {
                  let partes = item.split(' ')
                  return { size: partes[0], stock: parseInt(partes[1]) }
                }),
                images
              }
            })
        )
    }
  }
}

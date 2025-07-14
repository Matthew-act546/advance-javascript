

const fetchs = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/1')
    const json = await response.json()

    console.log(json);
  } catch (err) {
    console.log(err);
  }
}

fetchs()
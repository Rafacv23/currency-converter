import axios from "axios"

const apiUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"

const getData = async (currency, secondCurrency) => {
  try {
    const response = await axios.get(`${apiUrl}${currency}/${secondCurrency}.json`)
    const data = response.data
    const value = data[secondCurrency.toLowerCase()]

    return { data, value }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { getData }

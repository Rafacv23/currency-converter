import axios from "axios"

const currency = "eur"
const secondCurrency = "jpy"

const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/${secondCurrency}.json`

const getData = async (currency, secondCurrency) => {
  try {
    const response = await axios.get(apiUrl)
    const data = response.data
    const jpyValue = data.jpy

    return { data, jpyValue }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { getData, currency, secondCurrency }

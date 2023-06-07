// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDetails

  return (
    <li className="item">
      <div className="logo-title-container">
        <img className="logo" alt={currencyName} src={currencyLogoUrl} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

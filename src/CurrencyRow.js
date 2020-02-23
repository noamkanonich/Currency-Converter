import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div>
      <input type="number" 
      className="input" 
      value={amount} 
      onChange={onChangeAmount}  
      style={{width: 300, height:31, fontSize: 18, marginTop:- 10}}
      />

      <select value={selectedCurrency} 
      onChange={onChangeCurrency} 
      style={{fontWeight: 'bold', fontSize: 18}}>
        {currencyOptions.map(option => (
          <option key={option} value={option} style={{fontWeight: 'bold'}}>{option}</option>
        ))}
      </select>
    </div>
  )
}
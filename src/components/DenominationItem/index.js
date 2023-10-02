// Write your code here
import './index.css'

const DenominationItem = props => {
  const {withdraw, cashWithdraw} = props
  const {value} = withdraw
  const drawCash = () => {
    cashWithdraw(value)
  }
  return (
    <li>
      <button type="button" className="withdraw-btn" onClick={drawCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

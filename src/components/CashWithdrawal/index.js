// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {account: 2000}

  cashWithdraw = value => {
    const {account} = this.state
    const cash = parseInt(value)

    if (account >= 0) {
      this.setState(prevState => {
        const accountBalance = prevState.account
        const draw = accountBalance - cash
        if (cash > account) {
          return {amount: prevState.account}
        }
        if (draw >= 0) {
          return {account: draw}
        }

        return {account: 0}
      })
    }
    return {account: 0}
  }

  render() {
    const {account} = this.state
    const {denominationsList} = this.props

    return (
      <div className="home-bg">
        <div className="withdraw-card">
          <div className="logo-container">
            <button className="logo" type="button">
              S
            </button>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <div className="balance-description">
              <p className="balance-heading">Your Balance</p>
            </div>
            <div>
              <p className="balance">{account}</p>
              <p className="inr">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-heading">Withdraw</p>
            <p className="choosing-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                withdraw={eachItem}
                key={eachItem.id}
                cashWithdraw={this.cashWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

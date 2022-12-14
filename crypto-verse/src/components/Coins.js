import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'
import './Coins.css'

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} target="_blank" element={<Coin />} key={coins.id} rel="noopener noreferrer">
                        <CoinItem coins={coins}  />
                    </Link>
             
                )
            })}
        </div>
    </div>
  )
}

export default Coins
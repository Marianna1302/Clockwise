const React = require('react');
import {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    const [merchants] = useState(false);
    useEffect(() => {
      getMerchant();
    }, []);
    function getMerchant() {
      fetch('http://localhost:8000')
        .then(response => {
          return response.text();
        })
    }
    return (
        <div>
             <form>
        <label>
          Имя: {merchants ? merchants : 'There is no merchant data available'}
          <input type="text"  />
        </label>
        <input type="submit" value="Отправить" />
      </form>
        </div>
    )
}
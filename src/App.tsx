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
        <p><label>
          Введите Имя : 
            <input type="text"  />
        </label></p>
        <p> <label>
          Введите Email: 
            <input type="email"  />
        </label></p>
        <p> <label>
          Размер часов: 
            <select>
              <option>Маленькие</option>
              <option>Средние</option>
              <option>Большие</option>

            </select>
        </label></p>
        <p> <label>
          Город: 
            <select>
              <option>Днепр</option>
              <option>Киев</option>
              <option>Харьков</option>
            </select>
        </label></p>
      
        <input type="submit" value="Отправить" />
      </form>
      
        </div>
    )
}
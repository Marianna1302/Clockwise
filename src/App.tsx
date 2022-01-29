const React = require('react');
import { hot } from 'react-hot-loader/root'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    return (
        <div>
             <form>
        <label>
          Имя:
          <input type="text"  />
        </label>
        <input type="submit" value="Отправить" />
      </form>
        </div>
    )
}
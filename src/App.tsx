import type { FC } from 'react'
import { Provider } from 'react-redux'

import Actions from './components/Actions'
import List from './components/List'
import { setupStore } from './shared/store'

const store = setupStore()

const App: FC = () => {
  return (
    <Provider store={store}>
      <Actions />
      <List />
    </Provider>
  )
}

export default App

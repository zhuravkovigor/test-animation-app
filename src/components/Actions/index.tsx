import type { FC } from 'react'

import { useAppDispatch } from '../../shared/hooks/redux'
import { addList, removeList } from '../../shared/store/slices/list'
import './styles.scss'

const Actions: FC = () => {
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    dispatch(addList())
  }
  const handleRemove = () => {
    dispatch(removeList())
  }

  return (
    <div className='actions'>
      <button className='actions__button' onClick={handleAdd}>
        Добавить элемент
      </button>
      <button className='actions__button' onClick={handleRemove}>
        Удалить элемент
      </button>
    </div>
  )
}

export default Actions

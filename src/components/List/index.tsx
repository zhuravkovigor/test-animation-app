import { FC } from 'react'

import { useAppSelector } from '../../shared/hooks/redux'
import './styles.scss'

import { AnimatePresence, motion } from 'framer-motion'

const List: FC = () => {
  const items = useAppSelector((state) => state.list.items)

  return (
    <div className='list'>
      <AnimatePresence>
        {items.map((item) => (
          <motion.span
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{
              type: 'just',
            }}
            key={item.color}
            layoutId={item.color}
            style={{
              background: item.color,
            }}
            className='list__element'
          ></motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default List

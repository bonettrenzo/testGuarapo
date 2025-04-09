import React from 'react'

const useModal = () => {
  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const toggleModal = () => setVisible(!visible)

  return {
    visible,
    showModal,
    hideModal,
    toggleModal
  }
}

export default useModal
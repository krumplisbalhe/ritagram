import { useState } from 'react';

const useModal = () => {
  const [activeId, setActiveId] = useState(null)

  function toggle(postName) {
    setActiveId(postName)
    postName != null ? document.body.classList.add('modalOpen') : document.body.classList.remove('modalOpen')
  }

  return {
    activeId,
    toggle
  }
}

export default useModal

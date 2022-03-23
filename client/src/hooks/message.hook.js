import React from 'react'
import { useCallback } from 'react' //Для того, чтобы реакт не входил в цикличную рекурсию
export const useMessage = () => {
  return useCallback((text) => {
    if (window.M && text) {
      window.M.toast({ html: text })
    }
  }, [])
}

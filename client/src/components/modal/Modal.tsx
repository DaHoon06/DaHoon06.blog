import React, { ComponentProps, useRef } from 'react'
import ReactDOM from 'react-dom'
import '@/components/modal/Modal.scss'

interface IModal extends ComponentProps<'div'> {
  isOpen: boolean
  onRequestClose?: () => void
  layerStyle?: React.CSSProperties
  cardStyle?: React.CSSProperties
}

export const Modal = (props: IModal) => {
  const { isOpen, onRequestClose, layerStyle, cardStyle } = props
  const modal = document.getElementById('modal') as HTMLElement
  const el = useRef<any>(null)

  const onClickOutside = (e: React.MouseEvent) => {
    const { target } = e
    if (el && !el.current.contains(target)) {
      if (onRequestClose) onRequestClose()
    }
  }

  return (
    isOpen &&
    ReactDOM.createPortal(
      <article className={'modal'} onClick={onClickOutside} style={layerStyle}>
        <section className={'modal--body'} ref={el} style={cardStyle}>
          {props.children}
        </section>
      </article>,
      modal
    )
  )
}

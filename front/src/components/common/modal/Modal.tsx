import React, { ComponentProps, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface IModal extends ComponentProps<'div'> {
  isOpen: boolean
  onRequestClose?: () => void
  layerStyle?: React.CSSProperties
  cardStyle?: React.CSSProperties
}

const ModalContainer = styled.div``
const ModalBody = styled.div``

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
      <ModalContainer
        className={'modal'}
        onClick={onClickOutside}
        style={layerStyle}
      >
        <ModalBody className={'modal__body'} ref={el} style={cardStyle}>
          {props.children}
        </ModalBody>
      </ModalContainer>,
      modal
    )
  )
}

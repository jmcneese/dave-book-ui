import { Modal, ModalProps } from '@mantine/core'
import { type FC } from 'react'

import { SceneForm, type SceneFormData } from './SceneForm'

export interface AddSceneModalProps extends Omit<ModalProps, 'onSubmit'> {
  onSubmit(values: SceneFormData): void
}

export const AddSceneModal: FC<AddSceneModalProps> = ({ onSubmit, ...props }) => (
  <Modal
    centered
    title='Add Scene'
    {...props}
  >
    <SceneForm onSubmit={onSubmit} />
  </Modal>
)

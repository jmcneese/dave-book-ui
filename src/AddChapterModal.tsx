import { Modal, ModalProps } from '@mantine/core'
import { type FC } from 'react'

import { ChapterForm, type ChapterFormData } from './ChapterForm'

export interface AddChapterModalProps extends Omit<ModalProps, 'onSubmit'> {
  onSubmit(values: ChapterFormData): void
}

export const AddChapterModal: FC<AddChapterModalProps> = ({ onSubmit, ...props }) => (
  <Modal
    centered
    title='Add Chapter'
    {...props}
  >
    <ChapterForm onSubmit={onSubmit} />
  </Modal>
)

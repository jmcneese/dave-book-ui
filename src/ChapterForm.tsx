import { Textarea, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { type FC, useEffect } from 'react'
import z from 'zod'

import { Form } from './Form'
import { type Chapter } from './types'

const formSchema = z.object({
  summary: z.string().trim().nonempty('Cannot be empty'),
  title: z.string().trim().nonempty('Cannot be empty').min(10, 'Must be at least 10 characters')
})

export interface ChapterFormData {
  summary: string
  title: string
}

export interface ChapterFormProps {
  chapter?: Chapter
  isSaving?: boolean
  onChange?(values: ChapterFormData, isValid: boolean): void
  onSubmit?(values: ChapterFormData): void
}

export const ChapterForm: FC<ChapterFormProps> = ({ chapter, isSaving, onChange, onSubmit }) => {
  const form = useForm({
    initialValues: {
      summary: chapter?.summary || '',
      title: chapter?.title || ''
    },
    validate: zodResolver(formSchema),
    validateInputOnChange: true
  })

  useEffect(() => {
    if (form.isDirty()) {
      onChange?.(form.values, form.isValid())
    }
  }, [form, form.values, onChange])

  return (
    <Form
      buttons={!!onSubmit}
      isSaving={isSaving}
      isValid={form.isValid()}
      onSubmit={onSubmit && form.onSubmit(onSubmit)}
    >
      <TextInput
        autoCapitalize='words'
        label='Title'
        mb='xs'
        required
        spellCheck
        {...form.getInputProps('title')}
      />
      <Textarea
        autoCapitalize='sentences'
        autosize
        label='Summary'
        mb='xs'
        minRows={4}
        required
        spellCheck
        {...form.getInputProps('summary')}
      />
    </Form>
  )
}

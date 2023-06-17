import { Textarea, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { type FC } from 'react'
import z from 'zod'

import { useBookContext } from './Book.context'
import { type Chapter } from './types'
import { useDebouncedEffect } from './useDebouncedEffect'

const formSchema = z.object({
  summary: z.string().trim().nonempty('Cannot be empty'),
  title: z.string().trim().nonempty('Cannot be empty').min(10, 'Must be at least 10 characters')
})

export interface ChapterFormProps {
  chapter: Chapter
}

export const ChapterForm: FC<ChapterFormProps> = ({ chapter }) => {
  const { updateChapter } = useBookContext()
  const form = useForm({
    initialValues: {
      summary: chapter.summary,
      title: chapter.title
    },
    validate: zodResolver(formSchema),
    validateInputOnChange: true
  })

  useDebouncedEffect(
    () => {
      if (form.isDirty() && form.isValid()) {
        updateChapter({
          ...chapter,
          ...form.values
        })
      }
    },
    [form.values],
    {
      delay: 300
    }
  )

  return (
    <>
      <TextInput
        autoCapitalize='words'
        label='Title'
        required
        spellCheck
        {...form.getInputProps('title')}
      />
      <Textarea
        autoCapitalize='sentences'
        autosize
        label='Summary'
        minRows={4}
        required
        spellCheck
        {...form.getInputProps('summary')}
      />
    </>
  )
}

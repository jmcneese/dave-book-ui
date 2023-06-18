import { Box, BoxProps, Button, createStyles, Group, LoadingOverlay } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { type FC, type FormEvent, type ReactNode } from 'react'

const useStyles = createStyles({
  form: {
    position: 'relative'
  }
})

export interface FormProps extends BoxProps {
  buttons?: ReactNode | boolean
  children: ReactNode
  isSaving?: boolean
  isValid?: boolean
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export const Form: FC<FormProps> = ({
  buttons = true,
  children,
  className,
  isSaving,
  isValid = true,
  onSubmit,
  ...props
}) => {
  const { classes, cx } = useStyles()

  return (
    <Box
      className={cx(classes.form, className)}
      {...props}
    >
      <form onSubmit={onSubmit}>
        <LoadingOverlay visible={!!isSaving} />
        {children}
        {buttons ? (
          <Group position='right'>
            {buttons === true ? (
              <Button
                color='green'
                disabled={isSaving || !isValid}
                leftIcon={<IconCheck size={18} />}
                loading={isSaving}
                type='submit'
              >
                Save
              </Button>
            ) : (
              buttons
            )}
          </Group>
        ) : null}
      </form>
    </Box>
  )
}

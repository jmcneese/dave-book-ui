import { ThemeProvider } from './ThemeProvider'
import { Book } from './Book'

export default function App () {
  return (
    <ThemeProvider>
      <Book />
    </ThemeProvider>
  )
}

export interface Scene {
  id: string
  chapterId: string
  title: string
  summary: string
  sequence: number
}

export interface Chapter {
  id: string
  title: string
  summary: string
  scenes: Scene[]
  sequence: number
}

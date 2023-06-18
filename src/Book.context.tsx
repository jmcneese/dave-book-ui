import { createContext, useContext } from 'react'

import { type ChapterFormData } from './ChapterForm'
import { type Chapter, type Scene } from './types'
import { type SceneFormData } from './SceneForm'

export interface BookContextValue {
  activeChapter: Chapter
  activeScene: Scene
  chapters: Chapter[]
  addChapter(chapterData: ChapterFormData): void
  addScene(chapterId: string, sceneData: SceneFormData): void
  hideAddChapterModal(): void
  hideAddSceneModal(): void
  reorderChapter(from: number, to: number): void
  reorderScene(chapterId: string, from: number, to: number): void
  setActiveChapter(chapter: Chapter): void
  setActiveScene(chapter: Chapter, scene: Scene): void
  showAddChapterModal(): void
  showAddSceneModal(): void
  updateChapter(chapter: Chapter): void
  updateScene(scene: Scene): void
}

// @ts-ignore
export const BookContext = createContext<BookContextValue>(null)

export const useBookContext = () => useContext(BookContext)

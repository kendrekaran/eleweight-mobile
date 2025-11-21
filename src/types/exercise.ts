export interface Exercise {
  id: string
  name: string
  muscle: string
  gif_url: string
  description1: string
  description2: string
}

export interface ExerciseData {
  exercises: {
    [category: string]: Exercise[]
  }
}

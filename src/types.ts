export enum CommentEmotion {
  GOOD = 'good',
  NEUTRAL = 'neutral',
  BAD = 'bad',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  UNKNOWN = 'unknown',
}

export interface Comment {
  body: string
  emotion: CommentEmotion
  name: string
}

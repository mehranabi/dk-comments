import { type Comment, CommentEmotion, Gender } from '../types'
import type { DKComment } from './types'

function rateToEmotion(rate: number): CommentEmotion {
  if (rate > 3) return CommentEmotion.GOOD
  if (rate < 3) return CommentEmotion.NEUTRAL
  return CommentEmotion.NEUTRAL
}

function nameToGender(name: string): Gender {
  return Gender.UNKNOWN
}

export function parseComment({ body, rate, user_name }: DKComment): Comment {
  return {
    body,
    emotion: rateToEmotion(rate),
    name: user_name,
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

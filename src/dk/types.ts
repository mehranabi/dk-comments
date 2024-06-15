import { Comment } from '../types'

export interface DKComment {
  body: string
  rate: number
  user_name: string
}

export interface DKCommentsApiResponse {
  status: number
  data: {
    comments: DKComment[]
    pager: {
      total_pages: number
    }
  }
}

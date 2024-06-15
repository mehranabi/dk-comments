import axios from 'axios'
import type { Comment } from '../types'
import { parseComment, sleep } from './utils'
import type { DKCommentsApiResponse } from './types'

const API_TIMEOUT = 3000 as const
const API_SLEEP = 1000 as const
const DEFAULT_MAX_COMMENTS = 100 as const

export async function fetchComments(
  productId: string,
  page: number = 1
): Promise<{
  comments: Comment[]
  lastPage: number
}> {
  try {
    const { data } = await axios.get<DKCommentsApiResponse>(
      `https://api.digikala.com/v1/rate-review/products/${productId}/?page=${page}`,
      { timeout: API_TIMEOUT }
    )

    return {
      comments: data.data.comments.map(parseComment),
      lastPage: data.data.pager.total_pages,
    }
  } catch (error) {
    console.error(error)
  }

  return {
    comments: [],
    lastPage: page,
  }
}

export async function fetchAllComments(
  productId: string,
  maxComments: number = DEFAULT_MAX_COMMENTS,
  page: number = 1,
  prevComments: Comment[] = []
): Promise<Comment[]> {
  console.info('fetching page', page)

  const { comments, lastPage } = await fetchComments(productId, page)
  const latestResult = [...prevComments, ...comments]

  if (lastPage === page) return latestResult
  if (latestResult.length >= maxComments) return latestResult

  await sleep(API_SLEEP)
  return await fetchAllComments(productId, maxComments, page + 1, latestResult)
}

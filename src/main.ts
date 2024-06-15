import { fetchAllComments } from './dk/api'
import { Comment } from './types'
import { generateCSVfromJSON, saveCSV } from './utils/cvs'

async function run(productId: string): Promise<void> {
  const comments = await fetchAllComments(productId, 100)
  console.info(comments.length, 'comments extracted')
  console.log(comments)
  saveCSV(generateCSVfromJSON<Comment>(comments))
}

void run('14175877')

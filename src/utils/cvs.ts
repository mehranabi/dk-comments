import * as fs from 'fs'

const OUTPUT_ADDRESS = './.out/comments.csv' as const

export function normalizeField(field: string): string {
  return JSON.stringify(
    field
      .replace('\r\n', '. ')
      .replace('\r', '. ')
      .replace('\n', '. ')
      .replace(',', '.')
  )
}

export function generateCSVfromJSON<T>(items: T[]): string {
  const csv = []

  const header = Object.keys(items[0])
  csv.push(header.join(','))

  for (let index = 0; index < items.length; index++) {
    const row = items[index]
    csv.push(Object.values(row).map(normalizeField).join(','))
  }

  return csv.join('\r\n')
}

export function saveCSV(content: string): void {
  fs.writeFile(OUTPUT_ADDRESS, content, (error: any) => {
    if (error) {
      console.error(error)
    } else {
      console.info('CSV File has been created successfully.', OUTPUT_ADDRESS)
    }
  })
}

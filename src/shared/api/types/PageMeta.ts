export type PageMeta = {
  page: number
  limit: number
  total: number
  pages: number
  hasPrev: boolean
  hasNext: boolean
  prevPage: number | null
  nextPage: number | null
}

export interface DefaultRepository<T> {
  list(query?: QueryParams): Promise<T[]>
  save(data: T): Promise<any>
  update(data: T): Promise<any>
  delete(id: string): Promise<any>
}

export interface QueryParams {}
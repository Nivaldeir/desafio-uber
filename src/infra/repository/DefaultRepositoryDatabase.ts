import { DefaultRepository, QueryParams } from "../../aplication/repository/DefaultRepository";

export class DefaultRepositoryDatabase<T> implements DefaultRepository<T> {
  constructor(private readonly client: any) { }
  list(query?: QueryParams | undefined): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  async save(data: T): Promise<any> {
    console.log(data)
    return await this.client.create({
      data: data,
    })
  }
  update(data: T): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
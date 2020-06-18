export interface ICrudRepository<T, K> {
    findAll(keyword?: string, page?: number, limit?: number): T[];
    findOne(k: K): T;
}
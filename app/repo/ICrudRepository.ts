export interface ICrudRepository<T, K> {
    findAll(keyword?: string, status?: string, page?: number, limit?: number): T[];
    findOne(k: K): T;
}
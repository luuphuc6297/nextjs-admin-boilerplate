export interface Response<T> {
    data: T
    message: string
    statusCode: number
}

export interface PaginationParams {
    _limit: number
    _page: number
    _totalRows: number
}

export interface ListResponse<T> {
    paginate: any
    data: T[]
    pagination: PaginationParams
}

export interface ListParams {
    _page?: number
    _limit?: number
    _sort?: string
    _order?: 'asc' | 'desc'

    [key: string]: any
}

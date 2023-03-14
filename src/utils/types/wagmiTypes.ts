import { BigNumber } from "ethers"

export type UseToken = {
    data?: {
        address: string
        decimals: number
        name: string
        symbol: string
        totalSupply: {
            formatted: string
            value: BigNumber
        }
    }
    error?: Error
    isIdle: boolean
    isLoading: boolean
    isFetching: boolean
    isSuccess: boolean
    isError: boolean
    isFetched: boolean
    isFetchedAfterMount: boolean
    isRefetching: boolean
    refetch: (options: {
        throwOnError: boolean
        cancelRefetch: boolean
    }) => Promise<{
        address: string
        decimals: number
        symbol: string
        totalSupply: {
            formatted: string
            value: BigNumber
        }
    }>
    status: 'idle' | 'error' | 'loading' | 'success'
}
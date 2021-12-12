type Database = {
        id: string,
        title: string,
        details: string,
        photos: string[],
        coordinates: number[],
        bookedDates: [],
        price: number
    }

export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number) : Date

export const backendPort: number
export const localStorageKey: string
type Parameters = {
    city: string
    checkInDate: Date
    checkOutDate: Date
    priceLimit: number
}
export class FlatRentSdk {
    constructor()
    get(id: string): Promise<Database|null>
    
    search(parameters: Parameters): Parameters[]
    book(flatId: number, checkInDate: Date, checkOutDate: Date) : number
    _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
    _resetTime(date: Date): void
    _calculateDifferenceInDays(startDate: Date, endDate: Date): number
    _generateDateRange(from: Date, to: Date): Date[] 
    _generateTransactionId(): number

    _areAllDatesAvailable(flat: Database, dateRange: Date[]): boolean

    _formatFlatObject(flat: Database, nightNumber: number): Database
    _readDatabase(): string|null

    _writeDatabase(database: Database[]): string

    _syncDatabase(database: Database[]) : void
}
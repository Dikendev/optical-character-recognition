export abstract class SheetRepository {
  abstract read(file: any): Promise<any>;
  abstract save<T>(file: T): Promise<T>;
}

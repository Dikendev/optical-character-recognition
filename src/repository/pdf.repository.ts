export abstract class PdfRepository {
  abstract read(file: any): Promise<any>;
}

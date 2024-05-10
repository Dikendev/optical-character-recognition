export abstract class PdfRepository {
  abstract read(file: Express.Multer.File): Promise<any>;
}

import { Module } from '@nestjs/common';
import { SuccessReadFile } from './success-read-file';

@Module({
  imports: [],
  providers: [SuccessReadFile],
  exports: [SuccessReadFile],
})
export class SuccessReadFileModule {}

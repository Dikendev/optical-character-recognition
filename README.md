<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
# Optical Character Recognition (OCR) for Enhanced Candidate Screening in Human Resources

Human Resources departments are increasingly leveraging the power of technologies to streamline and optimize their recruitment processes. One such technology that I'm going to focus on is Optical Character Recognition (OCR), which enables the automated extraction of text from images and documents. I will develop a simple algorithm to simulate what big tech companies use to analyze resumes and assess candidates suitability for further consideration.

## Installation

To install all the dependencies, use the package manager [npm](https://www.npmjs.com/)

```bash
npm install
```

## Dependencies

- @nestjs/common: ^10.0.0
- @nestjs/core: ^10.0.0
- @nestjs/platform-express: ^10.0.0
- class-transformer: ^0.5.1
- class-validator: ^0.14.1
- exceljs: ^4.4.0
- pdf-ts: ^0.0.2
- tesseract.js: ^5.0.5

## Routes

POST /ocr
Performs OCR on the uploaded files and finds the specified words.

Request:
Body: A multipart/form-data request with a files field containing the files to perform OCR on.
Query: An OcrQueryDto object with a wordsToFind field containing an array of words to find.

Response:
A object containing the results of the OCR and word finding operation.

## Demonstration Images

Documentation in development....

## Conclusion

The proposed project aims to leverage OCR technology used in Human Resources, offering a scalable, efficient, and data-driven approach to talent acquisition. By demonstrating the power of OCR and machine learning in recruitment.

## Contributing

Pull requests are welcome <3. Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

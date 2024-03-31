<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
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

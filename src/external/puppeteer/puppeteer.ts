import { Logger } from '@nestjs/common';
import puppeteer, { Browser, Page } from 'puppeteer';

export class Puppeteer {
  page: Page;
  browser: Browser;

  constructor(private readonly logger: Logger) {}

  async init() {
    try {
      this.browser = await puppeteer.launch({ headless: false });
      this.page = await this.browser.newPage();
    } catch (error) {
      console.log('Error in init function', error);
    }
  }

  async navigate(url: string) {
    try {
      this.logger.log(`Navigating to ${url}`);
      await this.page.goto(url, { waitUntil: 'networkidle2' });

      this.logger.log('Getting images URL');
      const imagesUrl = await this.page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));

        console.log('images', images);
        return images.map((img) => {
          return {
            alt: img.alt,
            src: img.src,
          };
        });
      });
      this.logger.log('Images URL, success');

      const images = await this.imagesToBase64(imagesUrl);
      console.log('images', images);
    } catch (error) {
      console.log('Error in navigate function', error);
    }
  }

  async imagesToBase64(
    imagesUrls: {
      alt: string;
      src: string;
    }[],
  ) {
    const result = [];

    for (const imageUrl of imagesUrls) {
      this.logger.log(`Converting image to base64`);
      const viewSource = await this.page.goto(imageUrl.src);
      const buffer = await viewSource.buffer();
      const imageBufferString = buffer.toString('base64');

      result.push({
        alt: imageUrl.alt,
        src: imageUrl.src,
        base64: imageBufferString,
      });
      // console.log('imageBufferString', imageBufferString);
      // console.log('buffer', buffer);
    }
    return result;
  }
}

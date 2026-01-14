import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('/booking (GET)', () => {
    it('should return 401 if no API key is provided', () => {
      return request(app.getHttpServer())
        .get('/booking')
        .expect(401);
    });

    it('should return 200 if valid API key is provided', () => {
      return request(app.getHttpServer())
        .get('/booking')
        .set('x-api-key', 'my-secret-api-key')
        .expect(200);
    });
  });
});

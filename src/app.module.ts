import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaModule} from './prisma/prisma.module';
import {ListModule} from './list/list.module';
import {ListItemModule} from './list-item/list-item.module';
import {LoggerMiddleware} from "./common/middlewares/logger.middleware";

@Module({
  imports: [PrismaModule, ListModule, ListItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Apply LoggerMiddleware to all routes
    // consumer.apply(LoggerMiddleware).forRoutes({path: '/lists', method: RequestMethod.GET}); // Apply LoggerMiddleware only to GET requests on /lists
  }
}

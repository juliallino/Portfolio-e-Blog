import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { DatabaseModule } from './modules/database/database.module';
import { AboutModule } from './modules/about/about.module';
import { HomeModule } from './modules/home/home.module';
import { ProjectModule } from './modules/project/project.module';
import { CertificateModule } from './modules/certificate/certificate.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => [
        {
          ttl: configService.get<number>('THROTTLE_TTL', 60) * 1000, // Converte para milissegundos
          limit: configService.get<number>('THROTTLE_LIMIT', 10),
        },
      ],
    }),
    DatabaseModule,
    AboutModule,
    HomeModule,
    ProjectModule,
    CertificateModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { Energy } from './energy-monitoring/energy.entity';
import { Waste } from './waste-management/waste.entity';
import { EnergyMonitoringModule } from './energy-monitoring/energy-monitoring.module';
import { WasteManagementModule } from './waste-management/waste-management.module';
import { ReportsModule } from './reports/reports.module';
import { SectorsModule } from './sectors/sectors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: 'ENERGY_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: configService.get<string>('RABBITMQ_ENERGY_QUEUE'),
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
      {
        name: 'WASTE_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: configService.get<string>('RABBITMQ_WASTE_QUEUE'),
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
    ]),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [Energy, Waste],
        synchronize: true,
      }),
    }),

    EnergyMonitoringModule,
    WasteManagementModule,
    ReportsModule,
    AuthModule,
    SectorsModule,
  ],
})
export class AppModule {}

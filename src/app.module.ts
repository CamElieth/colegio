import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentsModule } from './students/students.module';
import { GendersModule } from './genders/genders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ej@091019',
      database: 'colegio',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    StudentsModule,
    GendersModule,
    
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
    
export class AppModule {}

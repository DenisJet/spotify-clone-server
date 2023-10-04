import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}

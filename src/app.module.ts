import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://deniskalkopf:denisjet@cluster0.hf7ycbu.mongodb.net/spotify-clone?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}

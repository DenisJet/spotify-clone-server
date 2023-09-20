import { Injectable } from '@nestjs/common';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  async create() {}

  async getAll() {}

  async getOne() {}

  async delete() {}
}

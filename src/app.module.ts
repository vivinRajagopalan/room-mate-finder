import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';
import { UserSchema } from './user/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/roommate-finder'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UserModule,
    MatchModule,
  ],
})
export class AppModule {}

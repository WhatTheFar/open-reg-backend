import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL, UserModel, User } from './user.model';
import { CreateUserFromChulaSsoDTO, UserInfoDto } from './user.dto';
import { registrationForm } from './user.form';
import { prefillAnswer } from '../form/form.utils';
import { FileService } from '../file/file.service';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(USER_MODEL) private readonly userModel: UserModel,
        private readonly fileService: FileService,
    ) { }

    createUserFromChulaSso(info: CreateUserFromChulaSsoDTO) {
        return this.userModel
            .findOneAndUpdate(
                { 'info.chulaId': info.chulaId },
                { $setOnInsert: { info } },
                { new: true, upsert: true },
            )
            .exec();
    }

    async findById(id: string) {
        const user = await this.userModel.findById(id).exec();
        if (!user) throw new NotFoundException('User not found.');
        return user.toObject() as User;
    }

    async getRegistrationForm(id: string) {
        const { info, image } = await this.findById(id);
        const questions = prefillAnswer(registrationForm.questions, {
            ...info,
            image,
        });
        return { ...registrationForm, questions };
    }

    async submitRegistrationForm(
        id: string,
        userInfo: UserInfoDto,
        image: any,
    ) {
        const user = await this.findById(id);
        const oldInfo = user.info;
        const newInfo = { ...oldInfo, ...userInfo };
        return this.userModel.findByIdAndUpdate(
            id,
            { $set: { info: newInfo, image } },
            { new: true },
        );
    }

    async deleteOldImage(id: string) {
        const { image } = await this.findById(id);
        return this.fileService.deleteByUrl(image);
    }
}

import { Form } from '../form/form.model';
import { QuestionTypes, Choice } from '../form/question.model';
export const TitleChoices: Choice[] = [
    { label: 'นาย', value: 'นาย' },
    { label: 'นางสาว', value: 'นางสาว' },
    { label: 'นาง', value: 'นาง' },
];
export const TitleEnChoices: Choice[] = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Ms.', value: 'Ms.' },
    { label: 'Mrs.', value: 'Mrs.' },
];

export const registrationForm: Form = {
    eventId: '',
    title: 'ผู้ใช้',
    groups: [
        {
            title: 'ข้อมูลส่วนตัว',
            description: ' Personal Information',
            order: 1,
        },
        {
            title: 'ข้อมูลการติดต่อ',
            description: 'Contact Information',
            order: 2,
        },
        {
            title: 'รูปภาพ',
            description: 'Image',
            order: 3,
        },
    ],
    questions: [
        {
            order: 1,
            group: 1,
            type: QuestionTypes.DROPDOWN,
            label: 'คำนำหน้า (ภาษาไทย)',
            key: 'title',
            choices: TitleChoices,
            required: true,
        },
        {
            order: 2,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'ชื่อ (ภาษาไทย)',
            key: 'firstName',
            required: true,
        },
        {
            order: 3,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'นามสกุล (ภาษาไทย)',
            key: 'lastName',
            required: true,
        },
        {
            order: 4,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'ชื่อเล่น (ภาษาไทย)',
            key: 'nickName',
            required: true,
        },
        {
            order: 5,
            group: 1,
            type: QuestionTypes.DROPDOWN,
            label: 'คำนำหน้า (ภาษาอังกฤษ)',
            key: 'titleEn',
            choices: TitleEnChoices,
            required: true,
        },
        {
            order: 6,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'ชื่อ (ภาษาอังกฤษ)',
            key: 'firstNameEn',
            required: true,
        },
        {
            order: 7,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'นามสกุล (ภาษาอังกฤษ)',
            key: 'lastNameEn',
            required: true,
        },
        {
            order: 8,
            group: 1,
            type: QuestionTypes.TEXT,
            label: 'ชื่อเล่น (ภาษาอังกฤษ)',
            key: 'nickNameEn',
            required: true,
        },
        {
            order: 1,
            group: 2,
            type: QuestionTypes.PHONE,
            label: 'เบอร์โทรศัพท์',
            key: 'tel',
            required: true,
        },
        {
            order: 2,
            group: 2,
            type: QuestionTypes.EMAIL,
            label: 'อีเมล',
            key: 'email',
            required: true,
        },
        {
            order: 3,
            group: 2,
            type: QuestionTypes.PHONE,
            label: 'เบอร์โทรศัพท์ฉุกเฉิน',
            key: 'emergencyTel',
            required: true,
        },
        {
            order: 4,
            group: 2,
            type: QuestionTypes.TEXT,
            label: 'มีความสัมพันธ์เป็น',
            key: 'emergencyRelationship',
            required: true,
        },
        {
            order: 5,
            group: 2,
            type: QuestionTypes.TEXT,
            label: 'LINE ID',
            key: 'line',
            required: true,
        },
        {
            order: 6,
            group: 2,
            type: QuestionTypes.TEXT,
            label: 'Facebook',
            key: 'facebook',
            required: true,
        },
        {
            order: 1,
            group: 3,
            type: QuestionTypes.IMAGE,
            label: 'Upload Image',
            key: 'image',
            required: true,
            image:
                'https://openreg.s3-ap-southeast-1.amazonaws.com/profile.jpg',
            description:
                'หมายเหตุ:  แนบรูปเดี่ยวของตัวท่านเอง หน้าตรง เห็นใบหน้าชัดเจน ไม่สวมหมวกหรือแว่นตาดำ ขนาดรูปไม่เกิน 3MB [crop image](https://www.iloveimg.com/crop-image) [compress image](https://www.iloveimg.com/compress-image)',
        },
    ],
};

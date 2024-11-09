import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import EducationForm from '../../Component/EducationForm/EducationForm';
import PersonalInfoForm from '../../Component/PersonalInfoForm/PersonalInfoForm';

const JoinTeacher = () => {
    const { user } = useAuth();

    const methods = useForm({
        defaultValues: {
            personalInfo: {
                ageRange: '',
                gender: '',
                disability: ''
            },
            education: []
        }
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="centerwithfixedwidth p-5 border">
            <div>
                <h1 className="text-3xl">
                    Good Luck, <span>{user?.DisplayName}</span>
                </h1>
                <p>
                    Join us and become a beacon of knowledge and inspiration for students around the world. By sharing your expertise, you’ll ignite curiosity, shape futures, and transform lives. Together, we’re building a passionate community where education knows no boundaries, and every student has the chance to grow and succeed. Step into a role that doesn’t just teach – it empowers. Make your impact today.
                </p>
            </div>
            <hr />
            <div className="card">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 p-6 bg-gray-100 rounded-lg">
                        <h2 className="text-2xl font-bold text-center">Main Form</h2>
                        <PersonalInfoForm />
                        <EducationForm />
                        <button type="submit" className="btn btn-primary w-full">Submit</button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default JoinTeacher;

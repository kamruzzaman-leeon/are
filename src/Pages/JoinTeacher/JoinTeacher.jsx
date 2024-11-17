import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import locationData from '../../assets/organized_bd_geo.json'; // Ensure the path to your JSON file is correct

const JoinTeacher = () => {
    const { user } = useAuth();
    // console.log(user.displayName)
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        reset,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            education: [{
                school: '',
                degree: '',
                fieldOfStudy: '',
                startDateMonth: '',
                startDateYear: '',
                endDateMonth: '',
                endDateYear: '',
                grade: '',
            }],
            skills: [],
            targetAudience: [],
        },
    });
    const watchTargetAudience = watch('targetAudience', []);
    const isOtherSelected = watchTargetAudience.includes('Other');

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    });
    const watchEducation = watch('education');

    const handleSkillsChange = (e) => {
        const skillsArray = e.target.value.split(',').map(skill => skill.trim());
        setValue('skills', skillsArray); // Update the skills array in the form
    };

    // Function to validate end date
    const validateEndDate = (index) => {
        const startMonth = parseInt(watchEducation[index]?.startDateMonth || 0);
        const startYear = parseInt(watchEducation[index]?.startDateYear || 0);
        const endMonth = parseInt(watchEducation[index]?.endDateMonth || 0);
        const endYear = parseInt(watchEducation[index]?.endDateYear || 0);

        if (
            (endYear < startYear) ||
            (endYear === startYear && endMonth < startMonth)
        ) {
            setError(`education.${index}.endDateMonth`, {
                type: 'manual',
                message: 'End date cannot be earlier than start date.',
            });
            setError(`education.${index}.endDateYear`, {
                type: 'manual',
                message: 'End date cannot be earlier than start date.',
            });
        }
    };


    const onSubmit = (data) => {
        console.log('Form Data:', data);
        // Add submission logic here
    };
    // console.log(locationData)
    return (
        <div className="container mx-auto p-5">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Good Luck, <span>{user?.displayName}</span>
                </h1>
                <p className="text-justify text-base mb-6">
                    Join us and become a beacon of knowledge and inspiration for students around the world. By sharing
                    your expertise, you’ll ignite curiosity, shape futures, and transform lives. Together, we’re
                    building a passionate community where education knows no boundaries, and every student has the
                    chance to grow and succeed. Step into a role that doesn’t just teach – it empowers. Make your impact
                    today.
                </p>
                <hr className="mb-6" />
            </div>
            <div className="card bg-base-100 p-6 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* personal info section */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        {/* Age Range */}
                        <div className="form-control mb-4">
                            <label className="label">Age Range</label>
                            <div className="space-x-4">
                                <label className="cursor-pointer">
                                    <input type="radio" value="below 18" {...register('ageRange', { required: true })} className="mr-2" />
                                    Below 18
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" value="19-25" {...register('ageRange', { required: true })} className="mr-2" />
                                    19-25
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" value="26-30" {...register('ageRange', { required: true })} className="mr-2" />
                                    26-30
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" value="31+" {...register('ageRange', { required: true })} className="mr-2" />
                                    31+
                                </label>
                            </div>
                            {errors.ageRange && <span className="text-red-500 text-sm">Please select your age range.</span>}
                        </div>

                        {/* Gender */}
                        <div className="form-control mb-4">
                            <label className="label">Gender</label>
                            <div className="space-x-4">
                                <label className="cursor-pointer">
                                    <input type="radio" value="male" {...register('gender', { required: true })} className="mr-2" />
                                    Male
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" value="female" {...register('gender', { required: true })} className="mr-2" />
                                    Female
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" value="other" {...register('gender', { required: true })} className="mr-2" />
                                    Other
                                </label>
                            </div>
                            {errors.gender && <span className="text-red-500 text-sm">Please select your gender.</span>}
                        </div>

                        {/* Mobile Number */}
                        <div className="form-control mb-4">
                            <label className="label">Mobile Number</label>
                            <div className="join">
                                <span className="join-item btn text-gray-700">+88</span>
                                <input
                                    type="text"
                                    {...register('mobile', { required: true, pattern: /^[0-9]{11}$/ })}
                                    placeholder="Enter your mobile number"
                                    className="input input-bordered join-item"
                                    maxLength={11} // Only allow 11 digits for the mobile number
                                />
                            </div>
                            {errors.mobile && <span className="text-red-500 text-sm">Mobile number must be 9 digits (without the +88).</span>}
                        </div>


                        {/* Disability */}
                        <div className="form-control mb-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" {...register('disability')} className="mr-2" />
                                Disability
                            </label>
                        </div>
                    </section>
                    {/* Location */}
                    <section>
                        {/* <div className="form-control mb-4">
                            <label className="label">Location</label>
                            <div className="space-y-4">
                                <select
                                    {...register('division', { required: true })}
                                    onChange={(e) => {
                                        setSelectedDivision(e.target.value);
                                        setSelectedDistrict(''); // Reset district when division changes
                                    }}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Division</option>
                                    {divisions.map((division) => (
                                        <option key={division.id} value={division.id}>
                                            {division.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.division && <span className="text-red-500 text-sm">Division is required.</span>}

                                <select
                                    {...register('district', { required: true })}
                                    onChange={(e) => setSelectedDistrict(e.target.value)}
                                    disabled={!selectedDivision}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select District</option>
                                    {districts.map((district) => (
                                        <option key={district.id} value={district.id}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.district && <span className="text-red-500 text-sm">District is required.</span>}

                                <select
                                    {...register('thana', { required: true })}
                                    disabled={!selectedDistrict}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Upazila/Thana</option>
                                    {thanas.map((thana) => (
                                        <option key={thana.id} value={thana.id}>
                                            {thana.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.thana && <span className="text-red-500 text-sm">Upazila/Thana is required.</span>}
                            </div>
                        </div> */}
                    </section>
                    {/* about section  */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">About Section</h2>
                        <div className="form-control mb-4">
                            <label className="label">Tell Me About Yourself</label>
                            <textarea
                                {...register('about', { required: true })}
                                placeholder="Write about yourself..."
                                className="textarea textarea-bordered w-full"
                            />
                            {errors.about && <span className="text-red-500 text-sm">This field is required.</span>}
                        </div>
                    </section>

                    {/* education section  */}
                    <section>
                        <section>
                            <h2 className="text-xl font-semibold mb-4">Education</h2>

                            {fields.map((field, index) => (
                                <div key={field.id} className="education-entry bg-white p-6 rounded-md mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-medium">Education {index + 1}</h3>
                                        <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="text-red-500 text-sm hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        {/* School */}
                                        <div className="form-group">
                                            <input
                                                placeholder="School"
                                                {...register(`education.${index}.school`, { required: 'School is required' })}
                                                className="input input-bordered w-full"
                                            />
                                            {errors.education?.[index]?.school && (
                                                <p className="text-red-500 text-xs">{errors.education[index].school.message}</p>
                                            )}
                                        </div>

                                        {/* Degree */}
                                        <div className="form-group">
                                            <input
                                                placeholder="Degree"
                                                {...register(`education.${index}.degree`, { required: 'Degree is required' })}
                                                className="input input-bordered w-full"
                                            />
                                            {errors.education?.[index]?.degree && (
                                                <p className="text-red-500 text-xs">{errors.education[index].degree.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Field of Study */}
                                    <div className="form-group mb-4">
                                        <input
                                            placeholder="Field of Study"
                                            {...register(`education.${index}.fieldOfStudy`, { required: 'Field of Study is required' })}
                                            className="input input-bordered w-full"
                                        />
                                        {errors.education?.[index]?.fieldOfStudy && (
                                            <p className="text-red-500 text-xs">{errors.education[index].fieldOfStudy.message}</p>
                                        )}
                                    </div>

                                    {/* Start Date (Month, Year) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <select
                                                {...register(`education.${index}.startDateMonth`, { required: 'Start Month is required' })}
                                                className="input input-bordered w-full"
                                            >
                                                <option value="">Select Start Month</option>
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i} value={i + 1}>
                                                        {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.education?.[index]?.startDateMonth && (
                                                <p className="text-red-500 text-xs">{errors.education[index].startDateMonth.message}</p>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <select
                                                {...register(`education.${index}.startDateYear`, { required: 'Start Year is required' })}
                                                className="input input-bordered w-full"
                                            >
                                                <option value="">Select Start Year</option>
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i} value={new Date().getFullYear() - i}>
                                                        {new Date().getFullYear() - i}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.education?.[index]?.startDateYear && (
                                                <p className="text-red-500 text-xs">{errors.education[index].startDateYear.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* End Date (Month, Year) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <select
                                                {...register(`education.${index}.endDateMonth`, { required: 'End Month is required' })}
                                                className="input input-bordered w-full"
                                                onBlur={() => validateEndDate(index)} // Validate onBlur event
                                            >
                                                <option value="">Select End Month</option>
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i} value={i + 1}>
                                                        {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.education?.[index]?.endDateMonth && (
                                                <p className="text-red-500 text-xs">{errors.education[index].endDateMonth.message}</p>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <select
                                                {...register(`education.${index}.endDateYear`, { required: 'End Year is required' })}
                                                className="input input-bordered w-full"
                                                onBlur={() => validateEndDate(index)} // Validate onBlur event
                                            >
                                                <option value="">Select End Year</option>
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i} value={new Date().getFullYear() - i}>
                                                        {new Date().getFullYear() - i}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.education?.[index]?.endDateYear && (
                                                <p className="text-red-500 text-xs">{errors.education[index].endDateYear.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Grade */}
                                    <div className="form-group mb-4">
                                        <input
                                            placeholder="Grade"
                                            {...register(`education.${index}.grade`, { required: 'Grade is required' })}
                                            className="input input-bordered w-full"
                                        />
                                        {errors.education?.[index]?.grade && (
                                            <p className="text-red-500 text-xs">{errors.education[index].grade.message}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Button to add new education */}
                            <div className="mb-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        append({
                                            school: '',
                                            degree: '',
                                            fieldOfStudy: '',
                                            startDateMonth: '',
                                            startDateYear: '',
                                            endDateMonth: '',
                                            endDateYear: '',
                                            grade: '',
                                        })
                                    }
                                    className="btn btn-primary w-full md:w-auto"
                                >
                                    Add Education
                                </button>
                            </div>
                        </section>
                    </section>
                    {/* skills  */}
                    <section>
                        <section>
                            <h2 className="text-xl font-semibold mb-4">Skills</h2>

                            {/* Skills Input */}
                            <div className="form-group mb-4">
                                <textarea
                                    {...register('skills')} // Register the skills field
                                    type="text"
                                    placeholder="Enter skills, separated by commas"
                                    className="input input-bordered w-full"
                                    onChange={handleSkillsChange} // Convert the input into an array
                                />
                                {errors.skills && (
                                    <p className="text-red-500 text-xs">{errors.skills.message}</p>
                                )}
                            </div>


                        </section>
                    </section>
                    {/* target Audiance */}
                    <section>
                        <h2 className="text-xl font-semibold mb-6">Target Audience</h2>
                        <div className="form-control mb-6">
                            <div className="space-y-4">
                                {['Bangla Version', 'English Version', 'English Medium', 'Special Child'].map((option, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value={option}
                                            {...register('targetAudience')}
                                            className="checkbox checkbox-primary"
                                        />
                                        <label className="test-base">{option}</label>
                                    </div>
                                ))}

                                <div className="flex items-center space-x-2 mt-4">
                                    <input
                                        type="checkbox"
                                        value="Other"
                                        {...register('targetAudience')}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label className="text-base">Other</label>

                                    {/* Show 'Specify' input if 'Other' is selected */}
                                    {isOtherSelected && (
                                        <input
                                            type="text"
                                            {...register('otherTargetAudience')}
                                            placeholder="Specify"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <h2>Remuneration range</h2>
                    <div></div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default JoinTeacher;

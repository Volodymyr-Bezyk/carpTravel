'use client';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { CareerFormDataTypes } from '@/types';
import { FormInput, FormSubmitBtn } from '.';

const CareerForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<CareerFormDataTypes>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      position: '',
      tel: '',
      message: '',
      agreement: '',
    },
  });

  const onSubmit: SubmitHandler<CareerFormDataTypes> = data =>
    console.log('submit', data);

  // const data = watch();
  // console.log('watch', data, 'errors', errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-408px tablet:w-220px tablet:content-between desktop:h-466px desktop:w-72 desktop:-translate-y-86px"
    >
      <p className="secondaryText ml-auto mb-6 w-45 tablet:ml-0 tablet:mb-7 tablet:w-220px desktop:mb-14px desktop:w-60 ">
        Don&rsquo;t miss your opportunity! Fill out the form right now and join
        our team!
      </p>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormInput
            labelText="Full name"
            inputType="text"
            placeholderValue="John Smith"
            errorMsg="Invalid name"
            field={field}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FormInput
            labelText="E-mail"
            inputType="email"
            placeholderValue="johnsmith@email.com"
            errorMsg="Incorrect email"
            field={field}
          />
        )}
      />

      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <FormInput
            labelText="Position"
            inputType="text"
            placeholderValue="Movie maker"
            field={field}
          />
        )}
      />

      <Controller
        name="tel"
        control={control}
        render={({ field }) => (
          <FormInput
            labelText="Phone"
            inputType="tel"
            placeholderValue="+ 38 (097) 12 34 567"
            errorMsg="Incorrect phone"
            field={field}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <label className=" mb-4 block tablet:ml-5 tablet:w-220px tablet:order-2 tablet:mt-auto tablet:mb-2 desktop:w-294px desktop:mb-8 desktop:ml-6 ">
            <span className="opacity-60 mb-1 block text-xs font-extralight leading-6 tracking-2.4">
              Message
            </span>
            <textarea
              {...field}
              className="formInputText px-2 h-196px resize-none bg-inputBg w-full outline-none tablet:h-230px desktop:py-2px desktop:h-268px"
            />
          </label>
        )}
      />

      <Controller
        name="agreement"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <label className=" mb-4 flex tablet:mb-0">
            <input className=" hidden peer" type="checkbox" {...field} />
            <span className=" checkboxFrame relative shrink-0 w-22px h-22px border-1 border-white bg-inputBg peer-checked:bg-white transition-colors duration-300"></span>
            <p className=" opacity-60 ml-2 text-xs font-extralight leading-1.83 desktop:leading-6">
              I confirm my consent to the processing of personal data.
            </p>
          </label>
        )}
      />

      <FormSubmitBtn
        text="send"
        aria="send form data"
        customStyles="ml-auto block w-20 tablet:order-2 tablet:w-auto"
      />
    </form>
  );
};

export default CareerForm;

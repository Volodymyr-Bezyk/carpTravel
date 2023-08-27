'use client';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';

import { footerValidationSchema } from '@/validationSchema';
import { FooterFormDataTypes } from '@/types';
import { FormInput, FormSubmitBtn } from '.';

const FooterForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FooterFormDataTypes>({
    mode: 'onChange',
    resolver: yupResolver(footerValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FooterFormDataTypes> = data => {
    console.log('submitFooterForm', data);
    reset({ name: '', email: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-305px desktop:flex-row desktop:h-auto desktop:w-606px "
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormInput
            labelText="Full name"
            inputType="text"
            placeholderValue="John Smith"
            errorMsg="Invalid name"
            labelStyles="mb-6 tablet:mb-7 tablet:w-56 desktop:w-294px desktop:mb-0"
            err={errors.name?.message ? errors.name?.message : ''}
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
            labelStyles="mb-6 tablet:w-56 desktop:w-294px desktop:mb-0 desktop:ml-auto"
            err={errors.email?.message ? errors.email?.message : ''}
            field={field}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <label className=" mb-4 block tablet:ml-5 tablet:w-463px tablet:h-244px desktop:ml-0 desktop:w-606px desktop:mt-10   ">
            <span className="opacity-60 mb-1 block text-xs font-extralight leading-6 tracking-2.4">
              Message
            </span>
            <textarea
              {...field}
              className="formInputText px-2 h-196px resize-none bg-inputBg w-full outline-none tablet:h-220px desktop:py-2px"
              aria-label="Enter your message"
            />
          </label>
        )}
      />

      <FormSubmitBtn
        text="send"
        aria="send form"
        customStyles="ml-auto block w-20 tablet:w-auto"
        disabled={Object.keys(errors).length > 0 ? true : false}
      />
    </form>
  );
};

export default FooterForm;

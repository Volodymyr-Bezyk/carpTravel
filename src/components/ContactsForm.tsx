'use client';
import toast from 'react-hot-toast';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import React, { useEffect } from 'react';

import { useLocalStorage } from '@/hooks';
import { footerValidationSchema } from '@/validationSchema';
import { ContactsFormDataTypes } from '@/types';
import { LS_KEYS } from '@/constants';
import { FormInput, FormSubmitBtn } from '.';

const ContactsForm: React.FC = () => {
  const [data, setData] = useLocalStorage(LS_KEYS.contacts);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactsFormDataTypes>({
    mode: 'onChange',
    resolver: yupResolver(footerValidationSchema),
    defaultValues: {
      name: data?.name || '',
      email: data?.email || '',
      message: data?.message || '',
    },
  });

  const formData: ContactsFormDataTypes = watch();

  useEffect(() => {
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        if (formData[key] !== data[key]) {
          setData(formData);
        }
      }
    }
  }, [data, formData, setData]);

  const onSubmit: SubmitHandler<ContactsFormDataTypes> = data => {
    console.log('submitFooterForm', data);
    reset({ name: '', email: '', message: '' });
    toast.success(`Form sended! Thanks. We contact you soon!`);
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
              className="formInputText px-2 h-196px resize-none bg-inputBg w-full tablet:h-220px desktop:py-2px"
            />
          </label>
        )}
      />

      <FormSubmitBtn
        text="send"
        customStyles="ml-auto block w-20 tablet:w-auto"
        disabled={Object.keys(errors).length > 0 ? true : false}
      />
    </form>
  );
};

export default ContactsForm;

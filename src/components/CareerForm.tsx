'use client';
import toast from 'react-hot-toast';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import React, { useEffect } from 'react';

import { useLocalStorage } from '@/hooks';
import { careerValidationSchema } from '@/validationSchema';
import { CareerFormDataTypes } from '@/types';
import { LS_KEYS } from '@/constants';
import { formatPhoneNumber } from '@/utils';
import { FormInput, FormSubmitBtn } from '.';
import content from '../content/content.json';

const CareerForm: React.FC = () => {
  const [data, setData] = useLocalStorage(LS_KEYS.career);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<CareerFormDataTypes>({
    mode: 'onChange',
    resolver: yupResolver(careerValidationSchema),
    defaultValues: {
      name: data?.name || '',
      email: data?.email || '',
      position: data?.position || '',
      tel: data?.tel || '',
      message: data?.message || '',
      agreement: data?.agreement || false,
    },
  });

  const formData: CareerFormDataTypes = watch();
  useEffect(() => {
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        if (formData[key] !== data[key]) {
          setData(formData);
        }
      }
    }
  }, [data, formData, setData]);

  const onSubmit: SubmitHandler<CareerFormDataTypes> = data => {
    console.log('submitCareerForm', data);
    reset({
      name: '',
      email: '',
      position: '',
      tel: '',
      message: '',
      agreement: false,
    });
    toast.success(`Form sended! Thanks. We contact you soon!`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-408px tablet:w-220px tablet:content-between desktop:h-466px desktop:w-72 desktop:-translate-y-86px"
    >
      <p className="secondaryText ml-auto mb-6 w-45 tablet:ml-0 tablet:mb-7 tablet:w-220px desktop:mb-14px desktop:w-60 ">
        {content.career.formText}
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
            err={errors.email?.message ? errors.email?.message : ''}
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
          <label className={`relative mb-4 block desktop:mb-6`}>
            <span
              className={`mb-1 block text-xs font-extralight leading-6 tracking-2.4 transition-all duration-300  ${
                errors.tel && 'text-error'
              } ${errors.tel ? 'opacity-95' : 'opacity-60'}`}
            >
              Phone
            </span>
            <input
              className={`formInputText pl-10 desktop:pl-14 pr-2 bg-inputBg w-full desktop:py-2px transition-all duration-300 ${
                errors.tel && 'text-error'
              } ${errors.tel && 'opacity-95'}`}
              type={'tel'}
              placeholder="(097) 12 34 567"
              {...field}
              value={formatPhoneNumber(field.value)}
              onChange={e => field.onChange(formatPhoneNumber(e.target.value))}
            />

            <span
              className={` error absolute bottom-0 right-0 translate-y-full text-xs font-extralight leading-6 tracking-2.4 text-error flex items-center ${
                errors.tel && 'opacity-95'
              }`}
            >
              Incorrect phone
            </span>
            <span className=" absolute left-2 bottom-0  desktop:bottom-0.5 text-13 font-extralight leading-6 desktop:text-xl desktop:leading-6 ">
              + 38
            </span>
          </label>
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
              className="formInputText px-2 h-196px resize-none bg-inputBg w-full tablet:h-230px desktop:py-2px desktop:h-268px"
            />
          </label>
        )}
      />

      <Controller
        name="agreement"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <label className=" mb-4 flex tablet:mb-0" tabIndex={0}>
            <input
              className=" hidden peer"
              type="checkbox"
              {...field}
              checked={field.value}
              value={''}
              onChange={e => field.onChange(e.target.checked)}
              aria-label="Agreement"
            />
            <span className=" checkboxFrame relative shrink-0 w-22px h-22px border-1 border-white bg-inputBg peer-checked:bg-white transition-colors duration-300"></span>
            <span
              className={`opacity-60 ml-2 text-xs font-extralight leading-1.83 desktop:leading-6 transition-all duration-300 ${
                errors.agreement && 'text-error'
              } ${errors.agreement && 'opacity-90'}`}
            >
              {content.career.formAgreement}
            </span>
          </label>
        )}
      />

      <FormSubmitBtn
        text="send"
        customStyles="ml-auto block w-20 tablet:order-2 tablet:w-auto"
        disabled={Object.keys(errors).length > 0 ? true : false}
      />
    </form>
  );
};

export default CareerForm;

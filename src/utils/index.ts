export function formatPhoneNumber(value: string) {
  const cleanedValue = value.replace(/[^\d]/g, '');

  if (cleanedValue.length <= 10) {
    const formattedValue = cleanedValue.replace(
      /(\d{3})(\d{2})(\d{2})(\d{1,3})/,
      '($1) $2 $3 $4'
    );
    return formattedValue.trim();
  } else {
    const formattedValue = cleanedValue
      .slice(0, 10)
      .replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2 $3 $4');
    return formattedValue.trim();
  }
}

export function formatNumberWithLeadingZero(num: number): string {
  if ((num += 1) < 10) {
    return `0${num}`;
  }

  return num.toString();
}

export const swipeToSlide = (idx: number, swiperRef: any) => {
  if (swiperRef.current) {
    swiperRef.current.swiper.slideTo(idx, 300);
  }
};

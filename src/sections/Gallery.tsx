import React from 'react';
import Image from 'next/image';
import { Section, Container, SectionTitle } from '@/components';

const Gallery = () => (
  <Section id="gallery" customStyles="responsive gallery">
    <Container>
      <SectionTitle
        text="OUR "
        strongText="GALLERY"
        customStyles="mb-6 tablet:mb-72px tablet:text-center tablet:leading-tight desktop:mb-6 desktop:leading-normal desktop:text-left"
      />

      <ul className=" grid place-items-center gap-6 tablet:grid-flow-col ">
        <li className=" relative  tablet:h-full tablet:col-span-1 tablet:flex tablet:flex-col tablet:justify-center ">
          <div className="relative galleryLayer">
            <Image
              width={460}
              height={250}
              src="https://s3-alpha-sig.figma.com/img/6df7/220e/14fc7939fe2cc296422c5658790ca536?Expires=1693785600&Signature=PVr9OeKF74mUIPZSyIB7q-SzKXaRCWjPaI4AC0XKTQeaJJTLv9Vb4TIA1W4fYIDcKFOHW6aPfiZwlCSnogJ5RDZ3ljF2D0WLgGEjGJzU2NOGm9tsD-dxMALU6XR6haZoge1ukuCVnReSVjArUabOX9Yd3uSsKxsD7oJII94gImU5F4CzqdizDFJ3HXTaTc9bBvmxiXz0YHskt0olKxJUFgIcAj0QcmdS69HyrJdLhrBpJc0hmgbTsqbhbzGWgyxiU8WgWMwl6dGCI9W6Fm1BRO4r1OwlC2lEIJEp5B3coNNgeSBmkCYPx~mEx6sPkQfh1jfjVgM3f3zAoPI~FAZ~lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Mountains"
              className="tablet:w-120px desktop:w-300px shadow-galleryShadow"
            />
          </div>

          <button
            className="opacity-50 hidden absolute bottom-4 left-0  w-full text-right text-33 font-thin leading-normal tablet:block desktop:bottom-0 hover:opacity-100 transition-opacity duration-300"
            type="button"
            aria-label="Previous image"
          >
            BACK
          </button>
        </li>

        <li className=" tablet:col-span-1">
          <div>
            <Image
              width={460}
              height={250}
              src="https://s3-alpha-sig.figma.com/img/e0c0/1047/09e209ca76e04687e2606f05fade702e?Expires=1693785600&Signature=KMiG6lbRDfNzeIhuyQwHdxQv5SGNjy37lSqAt0zwG7le9umiayXcssDwC05ZpfWdJtWjxhmGwylLniZ-VaV2ckaBvzQMVRC4LUQyo30bc-2GrUfAWB-6bV~5WPSD6rqwLD6CyOijsNQ7EcMz5uDvZ~LIKD2n-sYEogkJJd6xpJ-RD9YsyuwoZYGkXDJwsKPN55FGTpVv-LfT6Oy1eNOv82p33TG61kT8fK~dTWj7ldIQ0P75427jQgEBA2K~D2Rs2esnE7dBfL8A7JXDTAuBKMN579l-ax9bNy40cSAZd4wZ8QZ9KmlSbuY5FXSyCO5pDEsl53vi1hqZGXKd~aXJXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Mountains"
              className=" desktop:w-606px desktop:h-436px"
            />
          </div>
        </li>

        <li className=" relative  tablet:h-full tablet:col-span-1 tablet:flex tablet:flex-col tablet:justify-center ">
          <div className="relative galleryLayer">
            <Image
              width={460}
              height={250}
              src="https://s3-alpha-sig.figma.com/img/32ac/5b43/c0109965c0d25370810e123963404844?Expires=1693785600&Signature=XDeG13y04CdJ5tUNmggMtV7vmz9N9VwIHnMoSAfjsRmvIkbwR~meTDSRl~4JTwgPhaSUhGfRjhpSI2~Mxn5pd~kzT4CVQQlvRS2ezU8~F7KF2hS5DSsnF-eFrKr3mfAU4PEiQWK1ELTF-bHujVy~faJKT2oc0nrPTopvoCu9uERefwgrJIvrjT9KNmyyhcJI3qnknHArxMCZsLiAqrH3DgLwa2NCrJz0HRIPkupzUPXWb1rq9Y2a~Zlx5rnYCVuQmUvinyKwOJ0EY528YluDdOEziSF2VLKDzAYfGr0rzVMpgFQaH4Ih5hQXahf5rui~~FFc22Lg6BXKzXAicIxwjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Mountains"
              className=" tablet:w-120px desktop:w-300px shadow-galleryShadow"
            />
          </div>
          <button
            className="opacity-50 hidden absolute bottom-4 left-0 w-full text-left text-33 font-thin leading-normal tablet:block desktop:bottom-0 hover:opacity-100 transition-opacity duration-300"
            type="button"
            aria-label="Next image"
          >
            NEXT
          </button>
        </li>
      </ul>
    </Container>
  </Section>
);

export default Gallery;

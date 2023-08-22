import React from 'react'

import { SectionProps } from '@/types'

const Section = ( { children, id, customStyles }: SectionProps ) => <section
    className={ `py-14 tablet:py-16 desktop:py-104px ${ customStyles }` }
    id={ id }
>{ children }</section>


export default Section

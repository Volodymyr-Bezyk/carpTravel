import React from 'react';
import { MobileMenuBtnProps } from '@/types';

const MobileMenuBtn = ( {
    text,
    btnType = 'button',
    customStyles,
    handleClick,
    aria,
}: MobileMenuBtnProps ) => (
    <button
        className={ `uppercase text-sm  leading-normal tracking-1.4 ${ customStyles }` }
        type={ btnType === 'submit' ? 'submit' : 'button' }
        aria-label={ aria }
        onClick={ handleClick }
    >
        { text }
    </button>
);

export default MobileMenuBtn;

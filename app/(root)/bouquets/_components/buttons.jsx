'use client'
import React, { useState } from 'react'
import { styles } from '../../_components/helpers'

const ActionButtons = () => {
    const [isAdd, setIsAdd] = useState(true)
    return (
        <div div className='w-full flex items-center justify-between gap-[18px]' >
            {/* LEFT */}
            <div className='w-[162px] bg-[#F9EFF1] h-[54px] rounded-[20px] grid grid-cols-3'>
                <div onClick={() => setIsAdd(true)} className={`w-full group rounded-[20px] active:bg-mainBlack h-full flex items-center justify-center ${styles.active} ${isAdd && "border-2 border-mainBlack"}`}>
                    <svg className='fill-mainBlack group-active:fill-white transition-all duration-400 ease-linear' width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0905 8.99993C17.0904 8.7471 16.99 8.50464 16.8112 8.32587C16.6324 8.14709 16.39 8.04664 16.1372 8.0466L9.95333 8.0466L9.95333 1.86277C9.95329 1.60995 9.85284 1.36749 9.67406 1.18871C9.49529 1.00994 9.25283 0.909484 9 0.909446C8.74717 0.909484 8.50471 1.00994 8.32594 1.18871C8.14716 1.36749 8.04671 1.60995 8.04667 1.86277L8.04667 8.0466L1.86284 8.0466C1.61002 8.04664 1.36756 8.14709 1.18878 8.32587C1.01001 8.50464 0.909555 8.7471 0.909517 8.99993C0.909554 9.25276 1.01001 9.49522 1.18878 9.67399C1.36756 9.85277 1.61002 9.95322 1.86285 9.95326L8.04667 9.95326L8.04667 16.1371C8.04671 16.3899 8.14716 16.6324 8.32594 16.8111C8.50471 16.9899 8.74717 17.0904 9 17.0904C9.25283 17.0904 9.49529 16.9899 9.67406 16.8111C9.85284 16.6324 9.95329 16.3899 9.95333 16.1371V9.95326L16.1372 9.95326C16.39 9.95322 16.6324 9.85277 16.8112 9.67399C16.99 9.49522 17.0904 9.25276 17.0905 8.99993Z" fill="" />
                    </svg>
                </div>
                <div className={`w-full h-full flex items-center justify-center`}>
                    <p className='text-[18px] leading-[24px] font-montserrat font-medium text-mainBlack'>1</p>
                </div>
                <div onClick={() => setIsAdd(false)} className={`w-full group rounded-[20px] active:bg-mainBlack h-full flex items-center justify-center ${styles.active} ${!isAdd && "border-2 border-mainBlack"}`}>
                    <svg width={12} className='fill-mainBlack group-active:fill-white transition-all duration-400 ease-linear' height={2} viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H11C11.5523 2 12 1.55228 12 1C12 0.447715 11.5523 0 11 0Z" fill="" />
                    </svg>
                </div>
            </div>

            {/* MIDDLE */}
            <div className={`w-[167px] h-[54px] flex items-center rounded-[20px] justify-center text-white bg-[#7D6064] text-[18px] font-medium font-montserrat ${styles.active}`}>
                <p>Купить</p>
            </div>

            {/* END */}
            <div className={`w-[205px] h-[54px] flex items-center rounded-[20px] justify-center text-mainBlack border-[2px] border-mainBlack text-[18px] font-medium font-montserrat ${styles.active}`}>
                <p>Купить в 1 клик</p>
            </div>
        </div>
    )
}

export default ActionButtons
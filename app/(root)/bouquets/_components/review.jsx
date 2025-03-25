import React from 'react'
import { StarRating, styles } from '../../_components/helpers'
import CustomImage from '../../_components/image'

const ReviewProduct = () => {
    return (
        <div className='w-full min-h-[854px] rounded-[24px] bg-[#fff] py-[30px] px-[50px] flex flex-col gap-[30px]'>
            <div className='w-full grid grid-cols-2'>
                <p className='text-[48px] leading-[54px] font-semibold font-montserrat text-mainBlack'>Отзывы</p>

                <div className='flex items-center gap-[10px] lg:gap-[20px]'>
                    <div className='w-[60px] h-[60px] rounded-full border-[2px] border-[#FFC232] bg-white flex items-center justify-center'>
                        <p className='text-[24px] leading-[32px] font-semibold font-montserrat text-[#FFC232]'>4.5</p>
                    </div>
                    <StarRating rating={4} />
                    <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>На основании 3 отзывов</p>
                </div>
            </div>

            <div className='h-[1px] w-full bg-mainBlack/50'></div>


            <div className='w-full grid grid-cols-2 gap-[50px]'>
                <div className='w-full flex flex-col gap-[30px]'>
                    {Array(3).fill(0).map(_ => (
                        <div className='w-full flex items-start gap-[20px]'>
                            {/* Avatar */}
                            <div className='w-[160px] h-[160px] rounded-[20px] relative'>
                                <CustomImage image={'/images/smot.webp'} title='review' fill className1='object-cover w-full h-full rounded-[20px]' />
                            </div>

                            <div className='w-full flex flex-col gap-[10px]'>
                                <div className='w-full flex items-center gap-[10px]'>
                                    <div className='w-[46px] h-[46px] rounded-full bg-mainBlack flex flex-col items-center justify-center'>
                                        <p className='text-[18px] leading-[20px] text-white font-semibold font-montserrat'>05</p>
                                        <p className='text-[11px] leading-[13px] text-white font-normal font-montserrat'>авг.</p>
                                    </div>
                                    <p className='text-[18px] leading-[20px] text-mainBlack font-semibold font-montserrat'>Юлия</p>
                                    <StarRating rating={4} />
                                </div>
                                <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainBlack'>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-[30px]'>
                    <p className='text-[30px] leading-[36px] text-mainBlack font-semibold font-montserrat'>Оставить отзыв</p>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat'>Ваше имя <span className='text-red-500'>*</span></p>
                        <input type="text" className='w-full h-[54px] rounded-[8px] border-[1px] border-mainBlack/50 px-[20px] text-mainBlack/50 text-[18px] leading-[24px] font-medium font-montserrat' placeholder='Имя' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat'>Ваш отзыв <span className='text-red-500'>*</span></p>
                        <textarea type="text" className='w-full h-[220px] rounded-[8px] border-[1px] border-mainBlack/50 py-[10px] px-[20px] text-mainBlack/50 text-[18px] leading-[24px] font-medium font-montserrat' placeholder='Ваш отзыв' />
                    </div>

                    <div className='flex items-center gap-[20px]'>
                        <p className='text-[16px] leading-[20px] font-semibold font-montserrat text-mainBlack'>Загрузить фото</p>
                        <div>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12.5858V1C10 0.447715 10.4477 0 11 0C11.5523 0 12 0.447715 12 1V12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L10 12.5858Z" fill="#453C3C" />
                                <path d="M1 14C1.55228 14 2 14.4477 2 15V19C2 19.5523 2.44772 20 3 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 20.6569 20.6569 22 19 22H3C1.34315 22 0 20.6569 0 19V15C0 14.4477 0.447715 14 1 14Z" fill="#453C3C" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex items-center gap-[20px]'>
                        <p className='text-[16px] leading-[20px] text-mainBlack font-semibold font-montserrat'>Ваша оценка <span className='text-red-500'>*</span></p>
                        <StarRating rating={3} />
                    </div>

                    <button className={`${styles.active} w-[208px] h-[54px] rounded-[27px] bg-[#F0F0F1] flex items-center justify-center`}>
                        <p className='text-[18px] leading-[24px] text-[#9A9699] font-medium font-montserrat'>Оставить отзыв</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewProduct
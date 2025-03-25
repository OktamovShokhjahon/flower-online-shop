import { Heart } from 'lucide-react'
import React from 'react'
import { StarRating, styles } from '../../_components/helpers'
import ActionButtons from './buttons'
import AddInService from './addInService'
import ReviewProduct from './review'


const ProductDetails = () => {
    return (
        <div className='w-full bg-[#F5E7E7] rounded-[24px] p-[30px] xl:p-[50px] flex flex-col gap-[30px]'>
            {/* TITLE */}
            <div className='flex flex-row items-end gap-4'>
                {/* LEFT */}
                <div className='w-[90%]'>
                    <p className='text-[24px] leading-[28px] xl:text-[30px] xl:leading-[36px] font-semibold text-[#453C3C] font-montserrat'>Букет из светло-персиковых кустовых роз Павлова</p>
                </div>
                {/* RIGHT */}
                <div className={`w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center ${styles.active}`}>
                    <Heart className='text-red-600' size={30} />
                </div>
            </div>

            {/* PRICE */}
            <div className='w-full flex flex-col gap-[9px]'>
                {/* TOP */}
                <div className='flex items-center justify-between'>
                    {/* LEFT */}
                    <div className='flex items-center gap-[15px]'>
                        <div className='min-w-[65px] h-[23px] bg-[#EE2A23] flex items-center justify-center'>
                            <p className='text-[15px] leading-[18px] text-white font-semibold font-montserrat'>4890 ₽</p>
                        </div>

                        <p className='text-[28px] leading-[32px] font-semibold font-montserrat text-mainBlack'>4 290 <span className='text-[16px] leading-[20px]'>₽</span></p>

                        <div className='flex items-center gap-[10px]'>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainBlack'>Cashback 10%</p>
                            <div>
                                <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.94136 5.87903C4.43358 3.71435 6.65246 2.15642 9.19524 1.48802C11.738 0.819608 14.4361 1.08502 16.7999 2.23608C19.1637 3.38715 21.0366 5.34757 22.0785 7.76151C23.1203 10.1755 23.262 12.8829 22.478 15.3925C21.6941 17.9021 20.0365 20.0474 17.8059 21.4391C15.5752 22.8308 12.9195 23.3767 10.3209 22.9776C7.72216 22.5785 5.35267 21.2608 3.64248 19.2639C1.9323 17.267 0.994749 14.7231 1.00002 12.0939" stroke="#453C3C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.10469 5.98897H2.2207V1.10498" stroke="#453C3C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex items-center gap-[10px]'>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainBlack'>в наличии</p>
                            <div>
                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.9766" cy="12.105" r={12} fill="#453C3C" />
                                    <path d="M7.97656 12.8194L10.8337 15.6765L17.9766 8.53369" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={`w-[54px] h-[54px] bg-white rounded-full flex flex-col items-center justify-center gap-[3px] ${styles.active}`}>
                        <svg width={20} height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.829862 7.74991L3.05486 9.37491L2.20986 11.9918C2.07331 12.3977 2.07158 12.8368 2.20493 13.2437C2.33828 13.6506 2.59958 14.0036 2.94986 14.2499C3.29414 14.5041 3.71136 14.6403 4.13933 14.6382C4.56731 14.6361 4.98314 14.4957 5.32486 14.238L7.50049 12.6368L9.67674 14.2362C10.0204 14.4889 10.4354 14.6262 10.862 14.6283C11.2886 14.6304 11.7049 14.4972 12.051 14.2477C12.3971 13.9983 12.6552 13.6456 12.7882 13.2402C12.9212 12.8349 12.9222 12.3978 12.7911 11.9918L11.9461 9.37491L14.1711 7.74991C14.5143 7.49898 14.7695 7.146 14.9001 6.7414C15.0307 6.3368 15.0301 5.90128 14.8984 5.49703C14.7667 5.09278 14.5106 4.74049 14.1667 4.49048C13.8229 4.24046 13.4088 4.10552 12.9836 4.10491H10.2505L9.42111 1.51991C9.29069 1.11301 9.0344 0.758044 8.68922 0.506201C8.34403 0.254358 7.92778 0.118652 7.50049 0.118652C7.07319 0.118652 6.65694 0.254358 6.31176 0.506201C5.96657 0.758044 5.71029 1.11301 5.57986 1.51991L4.75049 4.10491H2.01986C1.5947 4.10552 1.18061 4.24046 0.836724 4.49048C0.492842 4.74049 0.236762 5.09278 0.105063 5.49703C-0.0266369 5.90128 -0.0272199 6.3368 0.103397 6.7414C0.234014 7.146 0.48915 7.49898 0.832362 7.74991H0.829862Z" fill="#FFA800" />
                        </svg>

                        <p className='text-[14px] leading-[17px] font-montserrat font-semibold text-[#453C3C]'>4.5</p>
                    </div>
                </div>

                {/* BOTTOM */}
                <StarRating rating={2.5} />
            </div>

            {/* PACKAGE */}
            <div className='w-full flex flex-row gap-[80px] items-center'>
                <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Упаковка</p>
                <button className='w-[300px] h-[52px] rounded-[8px] bg-[#F9EFF1] border border-mainBlack/30 flex justify-between px-[15px] items-center'>
                    <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Крафт бумага</p>
                    <div className={`${styles.active}`}>
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.9688" cy={12} r={12} fill="#453C3C" />
                            <path d="M16.8255 10.7019C16.6548 10.702 16.4912 10.7698 16.3705 10.8905L13.4198 13.8412C13.2974 13.9587 13.1344 14.0242 12.9649 14.0242C12.7953 14.0242 12.6323 13.9587 12.51 13.8412L9.55918 10.8905C9.43783 10.7733 9.2753 10.7084 9.10659 10.7099C8.93789 10.7113 8.7765 10.779 8.65721 10.8983C8.53791 11.0176 8.47024 11.179 8.46877 11.3477C8.46731 11.5164 8.53216 11.6789 8.64937 11.8003L11.6001 14.7511C11.9679 15.102 12.4568 15.2979 12.9652 15.2979C13.4736 15.2979 13.9624 15.102 14.3302 14.7511L17.2804 11.8003C17.3703 11.7103 17.4316 11.5957 17.4564 11.4709C17.4812 11.3461 17.4685 11.2167 17.4198 11.0992C17.3711 10.9816 17.2886 10.8811 17.1829 10.8104C17.0771 10.7397 16.9527 10.702 16.8255 10.7019Z" fill="#F9EFF1" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* SIZING BOQUET */}
            <div className='w-full flex items-center gap-[30px]'>
                <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Размер букета</p>
                <div className='flex items-center gap-[10px]'>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>S</button>
                    <button className={`w-[42px] h-[42px] border-[2px] border-mainBlack rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>M</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>L</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>XL</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>XXL</button>
                </div>
            </div>

            {/* SIZING BOQUET */}
            <div className='w-full flex items-center gap-[30px]'>
                <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium max-w-[140px]'>Количество цветов</p>
                <div className='flex items-center gap-[10px]'>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>15</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>21</button>
                    <button className={`w-[42px] h-[42px] border-[2px] border-mainBlack rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>51</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>61</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>75</button>
                    <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>105</button>
                </div>
            </div>

            {/* INFO */}
            <div className='flex flex-col gap-[15px]'>
                <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Продавец: <span className='font-bold'>“ООО 51 роза Аква”</span></p>
                <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Не реализованый товар: 34 упаковки с 21.03.2018 на бирже</p>
            </div>

            <ActionButtons />

            <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-semibold uppercase'>Дополнительные услуги</p>

            <AddInService />

            
        </div>
    )
}

export default ProductDetails
'use client'
import React, { useState } from 'react'
import { styles } from '../../_components/helpers'

const AddInService = () => {
    const [isCheck, setIsCheck] = useState(false)
    const [isCheck2, setIsCheck2] = useState(false)
    const [info, setInfo] = useState({ info1: false, info2: false, info3: false })
    return (
        <>
            <div className='w-full max-h-[121px] bg-[#F9EFF1] rounded-[12px] p-[20px] gap-[15px] flex flex-col'>
                <div className='w-full flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <div>
                            {isCheck ? (
                                <svg className={`${styles.active}`} onClick={() => setIsCheck(!isCheck)} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={1} y={1} width={22} height={22} rx={5} fill="#F9EFF1" stroke="#453C3C" strokeWidth={2} />
                                    <path d="M5.5 12.9284L9.21429 16.6426L18.5 7.35693" stroke="#453C3C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className={`${styles.active}`} onClick={() => setIsCheck(!isCheck)} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={1} y={1} width={22} height={22} rx={5} fill="#F9EFF1" stroke="#453C3C" strokeWidth={2} />
                                </svg>
                            )}
                        </div>
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Xочу добавить вазу в свой заказ</p>
                    </div>

                    {isCheck && (
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-semibold'>1 290 ₽</p>
                    )}
                </div>

                {/* SIZING VASE */}
                {isCheck && (
                    <div className='w-full flex items-center gap-[30px] px-[54px]'>
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Размер вазы</p>
                        <div className='flex items-center gap-[10px]'>
                            <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>S</button>
                            <button className={`w-[42px] h-[42px] border-[2px] border-mainBlack rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>M</button>
                            <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>L</button>
                            <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>XL</button>
                            <button className={`w-[42px] h-[42px] rounded-full bg-[#F9EFF1] text-[14px] leading-[18px] text-mainBlack font-medium font-montserrat ${styles.active}`}>XXL</button>
                        </div>
                    </div>
                )}
            </div>

            <div className='w-full max-h-[121px] bg-[#F9EFF1] rounded-[12px] p-[20px] gap-[15px] flex flex-col'>
                <div className='w-full flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <div>
                            {isCheck2 ? (
                                <svg className={`${styles.active}`} onClick={() => setIsCheck2(!isCheck2)} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={1} y={1} width={22} height={22} rx={5} fill="#F9EFF1" stroke="#453C3C" strokeWidth={2} />
                                    <path d="M5.5 12.9284L9.21429 16.6426L18.5 7.35693" stroke="#453C3C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className={`${styles.active}`} onClick={() => setIsCheck2(!isCheck2)} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={1} y={1} width={22} height={22} rx={5} fill="#F9EFF1" stroke="#453C3C" strokeWidth={2} />
                                </svg>
                            )}
                        </div>
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Xочу добавить открытку</p>
                    </div>

                    <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-semibold'>90 ₽</p>

                </div>
            </div>

            <div className='w-full grid grid-cols-2 gap-[20px] z-[2]'>
                {/* Info 1 */}
                <div className={`w-full h-[64px] bg-[#F9EFF1] px-[15px] rounded-[12px] ${!info.info1 && "border-[2px]"} border-mainBlack flex items-center justify-between relative`}>
                    <div className='flex items-center gap-[10px]'>
                        <div>
                            <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={42} height={42} rx={21} fill="#453C3C" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 16.5C11 15.1193 12.1193 14 13.5 14H21.8333C23.214 14 24.3333 15.1193 24.3333 16.5V17.3333H27.3095C27.5435 17.3333 27.7667 17.4317 27.9245 17.6044L30.7817 20.7294C30.9221 20.883 31 21.0835 31 21.2917V26.5C31 26.9602 30.6269 27.3333 30.1667 27.3333H28.3577C28.0145 28.3043 27.0885 29 26 29C24.9072 29 23.9782 28.2989 23.6383 27.3219C23.5933 27.3294 23.5471 27.3333 23.5 27.3333H18.3577C18.0145 28.3043 17.0885 29 16 29C14.9115 29 13.9855 28.3043 13.6423 27.3333H11.8333C11.3731 27.3333 11 26.9602 11 26.5V16.5ZM13.6423 25.6667C13.9855 24.6957 14.9115 24 16 24C17.0885 24 18.0145 24.6957 18.3577 25.6667H22.6667V23.1667H12.6667V25.6667H13.6423ZM12.6667 21.5H22.6667V16.5C22.6667 16.0398 22.2936 15.6667 21.8333 15.6667H13.5C13.0398 15.6667 12.6667 16.0398 12.6667 16.5V21.5ZM24.3333 24.6366V19H26.9423L29.3333 21.6152V25.6667H28.3577C28.0145 24.6957 27.0885 24 26 24C25.3597 24 24.7756 24.2407 24.3333 24.6366ZM16 25.6667C15.5398 25.6667 15.1667 26.0398 15.1667 26.5C15.1667 26.9602 15.5398 27.3333 16 27.3333C16.4602 27.3333 16.8333 26.9602 16.8333 26.5C16.8333 26.0398 16.4602 25.6667 16 25.6667ZM26 25.6667C25.5398 25.6667 25.1667 26.0398 25.1667 26.5C25.1667 26.9602 25.5398 27.3333 26 27.3333C26.4602 27.3333 26.8333 26.9602 26.8333 26.5C26.8333 26.0398 26.4602 25.6667 26 25.6667Z" fill="#F5E7E7" />
                            </svg>
                        </div>
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Доставка</p>
                    </div>

                    <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info1: !info.info1, info2: false, info3: false })}>
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H8M16 8H8M8 8V0M8 8V16" stroke="#453C3C" strokeWidth={2} />
                        </svg>
                    </div>

                    {info.info1 && (
                        <div className='absolute inset-0 w-full h-[227px] bg-[#F5E7E7] border-[2px] border-mainBlack rounded-[12px] flex gap-[20px] py-[9px] px-[15px] flex-col'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center gap-[10px]'>
                                    <div>
                                        <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={42} height={42} rx={21} fill="#453C3C" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11 16.5C11 15.1193 12.1193 14 13.5 14H21.8333C23.214 14 24.3333 15.1193 24.3333 16.5V17.3333H27.3095C27.5435 17.3333 27.7667 17.4317 27.9245 17.6044L30.7817 20.7294C30.9221 20.883 31 21.0835 31 21.2917V26.5C31 26.9602 30.6269 27.3333 30.1667 27.3333H28.3577C28.0145 28.3043 27.0885 29 26 29C24.9072 29 23.9782 28.2989 23.6383 27.3219C23.5933 27.3294 23.5471 27.3333 23.5 27.3333H18.3577C18.0145 28.3043 17.0885 29 16 29C14.9115 29 13.9855 28.3043 13.6423 27.3333H11.8333C11.3731 27.3333 11 26.9602 11 26.5V16.5ZM13.6423 25.6667C13.9855 24.6957 14.9115 24 16 24C17.0885 24 18.0145 24.6957 18.3577 25.6667H22.6667V23.1667H12.6667V25.6667H13.6423ZM12.6667 21.5H22.6667V16.5C22.6667 16.0398 22.2936 15.6667 21.8333 15.6667H13.5C13.0398 15.6667 12.6667 16.0398 12.6667 16.5V21.5ZM24.3333 24.6366V19H26.9423L29.3333 21.6152V25.6667H28.3577C28.0145 24.6957 27.0885 24 26 24C25.3597 24 24.7756 24.2407 24.3333 24.6366ZM16 25.6667C15.5398 25.6667 15.1667 26.0398 15.1667 26.5C15.1667 26.9602 15.5398 27.3333 16 27.3333C16.4602 27.3333 16.8333 26.9602 16.8333 26.5C16.8333 26.0398 16.4602 25.6667 16 25.6667ZM26 25.6667C25.5398 25.6667 25.1667 26.0398 25.1667 26.5C25.1667 26.9602 25.5398 27.3333 26 27.3333C26.4602 27.3333 26.8333 26.9602 26.8333 26.5C26.8333 26.0398 26.4602 25.6667 26 25.6667Z" fill="#F5E7E7" />
                                        </svg>
                                    </div>
                                    <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Доставка</p>
                                </div>

                                <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info1: !info.info1, info2: false, info3: false })}>
                                    <svg width={16} height={16} viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H8H16" stroke="#453C3C" strokeWidth={2} />
                                    </svg>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[20px]'>
                                <p className='text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack'>Я получу заказ</p>
                                <p className='text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack'>Другой человек</p>
                                <p className='text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack'>Анонимная доставка</p>
                                <p className='text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack'>По номеру телефона</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info 2 */}
                <div className={`w-full h-[64px] bg-[#F9EFF1] px-[15px] rounded-[12px] ${!info.info2 && "border-[2px]"} border-mainBlack flex items-center justify-between relative`}>
                    <div className='flex items-center gap-[10px]'>
                        <div>
                            <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={42} height={42} rx={21} fill="#453C3C" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.7273 11.9092C12.221 11.9092 11 13.1302 11 14.6365V27.3637C11 28.87 12.221 30.091 13.7273 30.091H26.4545C27.9608 30.091 29.1818 28.87 29.1818 27.3637V26.2994C30.2411 25.925 31 24.9148 31 23.7274V21.9092C31 20.7217 30.2411 19.7115 29.1818 19.3371V18.2728C29.1818 16.7666 27.9608 15.5455 26.4545 15.5455V14.6365C26.4545 13.1302 25.2335 11.9092 23.7273 11.9092H13.7273ZM13.7273 13.7274C13.2252 13.7274 12.8182 14.1344 12.8182 14.6365C12.8182 15.1385 13.2252 15.5455 13.7273 15.5455H24.6364V14.6365C24.6364 14.1344 24.2294 13.7274 23.7273 13.7274H13.7273ZM12.8182 17.2085V27.3637C12.8182 27.8658 13.2252 28.2728 13.7273 28.2728H26.4545C26.9566 28.2728 27.3636 27.8658 27.3636 27.3637V26.4546H24.6364C23.1301 26.4546 21.9091 25.2336 21.9091 23.7274V21.9092C21.9091 20.4029 23.1301 19.1819 24.6364 19.1819H27.3636V18.2728C27.3636 17.7707 26.9566 17.3637 26.4545 17.3637H13.7273C13.4085 17.3637 13.1025 17.309 12.8182 17.2085ZM24.6364 21.0001C24.1343 21.0001 23.7273 21.4071 23.7273 21.9092V23.7274C23.7273 24.2294 24.1343 24.6365 24.6364 24.6365H28.2727C28.7748 24.6365 29.1818 24.2294 29.1818 23.7274V21.9092C29.1818 21.4071 28.7748 21.0001 28.2727 21.0001H24.6364Z" fill="#F5E7E7" />
                            </svg>

                        </div>
                        <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Способы оплаты</p>
                    </div>

                    <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info2: !info.info2, info1: false, info3: false })}>
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H8M16 8H8M8 8V0M8 8V16" stroke="#453C3C" strokeWidth={2} />
                        </svg>
                    </div>

                    {info.info2 && (
                        <div className='absolute inset-0 w-full h-[197px] bg-[#F5E7E7] border-[2px] border-mainBlack rounded-[12px] flex gap-[20px] py-[9px] px-[15px] flex-col'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center gap-[10px]'>
                                    <div>
                                        <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={42} height={42} rx={21} fill="#453C3C" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7273 11.9092C12.221 11.9092 11 13.1302 11 14.6365V27.3637C11 28.87 12.221 30.091 13.7273 30.091H26.4545C27.9608 30.091 29.1818 28.87 29.1818 27.3637V26.2994C30.2411 25.925 31 24.9148 31 23.7274V21.9092C31 20.7217 30.2411 19.7115 29.1818 19.3371V18.2728C29.1818 16.7666 27.9608 15.5455 26.4545 15.5455V14.6365C26.4545 13.1302 25.2335 11.9092 23.7273 11.9092H13.7273ZM13.7273 13.7274C13.2252 13.7274 12.8182 14.1344 12.8182 14.6365C12.8182 15.1385 13.2252 15.5455 13.7273 15.5455H24.6364V14.6365C24.6364 14.1344 24.2294 13.7274 23.7273 13.7274H13.7273ZM12.8182 17.2085V27.3637C12.8182 27.8658 13.2252 28.2728 13.7273 28.2728H26.4545C26.9566 28.2728 27.3636 27.8658 27.3636 27.3637V26.4546H24.6364C23.1301 26.4546 21.9091 25.2336 21.9091 23.7274V21.9092C21.9091 20.4029 23.1301 19.1819 24.6364 19.1819H27.3636V18.2728C27.3636 17.7707 26.9566 17.3637 26.4545 17.3637H13.7273C13.4085 17.3637 13.1025 17.309 12.8182 17.2085ZM24.6364 21.0001C24.1343 21.0001 23.7273 21.4071 23.7273 21.9092V23.7274C23.7273 24.2294 24.1343 24.6365 24.6364 24.6365H28.2727C28.7748 24.6365 29.1818 24.2294 29.1818 23.7274V21.9092C29.1818 21.4071 28.7748 21.0001 28.2727 21.0001H24.6364Z" fill="#F5E7E7" />
                                        </svg>
                                    </div>
                                    <p className='text-[18px] leading-[24px] text-mainBlack font-montserrat font-medium'>Способы оплаты</p>
                                </div>

                                <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info2: !info.info2, info1: false, info3: false })}>
                                    <svg width={16} height={16} viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H8H16" stroke="#453C3C" strokeWidth={2} />
                                    </svg>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[20px]'>
                                <p className='text-[16px] leading-[20px] font-medium font-montserrat text-mainBlack'>Visa / Mastercard / МИР, Иностранные карты Visa Mastercard, электронные кошельки, карты рассрочки и др., СБП, T-банк</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Info3 */}
            <div className={`w-full h-[64px] bg-[#7D6064] px-[15px] rounded-[12px] flex items-center justify-between relative`}>
                <div className='flex items-center gap-[10px]'>
                    <div>
                        <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={1} y={1} width={40} height={40} rx={20} stroke="#F5E7E7" strokeWidth={2} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3644 14.7037C17.3872 13.562 17.7539 12.6182 18.4398 11.9563C19.1409 11.2799 20.0697 11 20.9996 11C21.9295 11 22.8583 11.2799 23.5593 11.9563C24.2453 12.6182 24.6119 13.562 24.6348 14.7038C25.6349 14.1528 26.6355 13.9985 27.5517 14.2616C28.488 14.5304 29.1948 15.1949 29.6598 16.0002C30.1247 16.8055 30.3467 17.7499 30.1114 18.6952C29.8812 19.62 29.2473 20.4094 28.2703 21C29.2473 21.5906 29.8811 22.38 30.1114 23.3048C30.3467 24.2501 30.1247 25.1945 29.6597 25.9998C29.1947 26.8051 28.4879 27.4695 27.5516 27.7384C26.6355 28.0015 25.6349 27.8472 24.6349 27.2963C24.612 28.438 24.2453 29.3818 23.5594 30.0437C22.8584 30.7201 21.9295 31 20.9996 31C20.0697 31 19.1409 30.7201 18.4399 30.0437C17.7539 29.3818 17.3873 28.438 17.3644 27.2962C16.3643 27.8472 15.3637 28.0015 14.4475 27.7384C13.5112 27.4696 12.8044 26.8051 12.3395 25.9998C11.8745 25.1945 11.6525 24.2501 11.8878 23.3048C12.118 22.38 12.7519 21.5906 13.729 21C12.7519 20.4094 12.1181 19.62 11.8879 18.6952C11.6526 17.7499 11.8746 16.8055 12.3395 16.0002C12.8045 15.1949 13.5113 14.5305 14.4476 14.2616C15.3637 13.9985 16.3643 14.1528 17.3644 14.7037ZM16.489 21.9167C15.8807 22.0092 15.2565 22.2162 14.737 22.5161C14.031 22.9237 13.7456 23.3687 13.6521 23.744C13.5561 24.1298 13.6259 24.5916 13.914 25.0907C14.2022 25.5898 14.5673 25.8811 14.9494 25.9909C15.3211 26.0976 15.8492 26.0729 16.5552 25.6653C17.0751 25.3651 17.5669 24.9276 17.9512 24.4465C17.9591 24.4287 17.967 24.4108 17.975 24.3931C17.2606 23.7558 16.7487 22.8962 16.5479 21.923C16.5283 21.921 16.5086 21.9189 16.489 21.9167ZM25.4513 21.923L25.5103 21.9167C26.1185 22.0092 26.7427 22.2162 27.2621 22.5161C27.9681 22.9237 28.2536 23.3687 28.347 23.744C28.443 24.1298 28.3733 24.5916 28.0851 25.0907C27.7969 25.5898 27.4319 25.8811 27.0498 25.9909C26.678 26.0976 26.1499 26.0729 25.444 25.6653C24.9241 25.3652 24.4325 24.9277 24.0481 24.4468L24.0243 24.3931C24.7387 23.7558 25.2506 22.8962 25.4513 21.923ZM19.1814 14.8182C19.1814 14.003 19.424 13.5333 19.7024 13.2647C19.9884 12.9887 20.4233 12.8182 20.9996 12.8182C21.5759 12.8182 22.0107 12.9887 22.2968 13.2647C22.5751 13.5333 22.8178 14.003 22.8178 14.8182C22.8178 15.4186 22.6847 16.0633 22.4602 16.6367L22.4265 16.683C21.9778 16.5348 21.4981 16.4545 20.9996 16.4545C20.5012 16.4545 20.0215 16.5348 19.5727 16.683L19.5388 16.6365C19.3144 16.0631 19.1814 15.4185 19.1814 14.8182ZM17.9511 17.5532L17.9749 17.6069C17.257 18.2474 16.7436 19.1123 16.545 20.0915C15.9192 20.0034 15.2725 19.793 14.7371 19.4839C14.0311 19.0763 13.7456 18.6313 13.6522 18.256C13.5562 17.8702 13.6259 17.4084 13.9141 16.9093C14.2023 16.4102 14.5673 16.1189 14.9494 16.0091C15.3212 15.9024 15.8493 15.9271 16.5552 16.3347C17.0751 16.6348 17.5667 17.0723 17.9511 17.5532ZM24.0243 17.6069L24.048 17.5535C24.4323 17.0724 24.9241 16.6349 25.444 16.3347C26.15 15.9271 26.6781 15.9024 27.0498 16.0091C27.4319 16.1189 27.797 16.4102 28.0852 16.9093C28.3733 17.4084 28.4431 17.8702 28.3471 18.256C28.2536 18.6313 27.9682 19.0763 27.2622 19.4839C26.7268 19.793 26.0801 20.0034 25.4543 20.0915C25.2556 19.1123 24.7422 18.2473 24.0243 17.6069ZM20.9996 23.7273C22.5059 23.7273 23.7269 22.5062 23.7269 21C23.7269 19.4938 22.5059 18.2727 20.9996 18.2727C19.4934 18.2727 18.2724 19.4938 18.2724 21C18.2724 22.5062 19.4934 23.7273 20.9996 23.7273ZM20.9996 25.5454C21.5031 25.5454 21.9875 25.4636 22.4401 25.3125C22.6767 25.8984 22.8178 26.5636 22.8178 27.1818C22.8178 27.997 22.5752 28.4667 22.2969 28.7353C22.0108 29.0113 21.576 29.1818 20.9996 29.1818C20.4233 29.1818 19.9885 29.0113 19.7024 28.7353C19.4241 28.4667 19.1814 27.997 19.1814 27.1818C19.1814 26.5636 19.3225 25.8984 19.5592 25.3125C20.0118 25.4636 20.4962 25.5454 20.9996 25.5454Z" fill="#F5E7E7" />
                        </svg>
                    </div>
                    <p className='text-[18px] leading-[24px] text-mainWhite font-montserrat font-medium'>Инструкция свежести</p>
                </div>

                <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info3: !info.info3, info1: false, info2: false })}>
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8H8M16 8H8M8 8V0M8 8V16" stroke="#F5E7E7" strokeWidth={2} />
                    </svg>
                </div>

                {info.info3 && (
                    <div className='absolute inset-0 w-full min-h-[622px] bg-[#7D6064] rounded-[12px] flex gap-[20px] py-[9px] px-[15px] flex-col'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center gap-[10px]'>
                                <div>
                                    <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x={1} y={1} width={40} height={40} rx={20} stroke="#F5E7E7" strokeWidth={2} />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3644 14.7037C17.3872 13.562 17.7539 12.6182 18.4398 11.9563C19.1409 11.2799 20.0697 11 20.9996 11C21.9295 11 22.8583 11.2799 23.5593 11.9563C24.2453 12.6182 24.6119 13.562 24.6348 14.7038C25.6349 14.1528 26.6355 13.9985 27.5517 14.2616C28.488 14.5304 29.1948 15.1949 29.6598 16.0002C30.1247 16.8055 30.3467 17.7499 30.1114 18.6952C29.8812 19.62 29.2473 20.4094 28.2703 21C29.2473 21.5906 29.8811 22.38 30.1114 23.3048C30.3467 24.2501 30.1247 25.1945 29.6597 25.9998C29.1947 26.8051 28.4879 27.4695 27.5516 27.7384C26.6355 28.0015 25.6349 27.8472 24.6349 27.2963C24.612 28.438 24.2453 29.3818 23.5594 30.0437C22.8584 30.7201 21.9295 31 20.9996 31C20.0697 31 19.1409 30.7201 18.4399 30.0437C17.7539 29.3818 17.3873 28.438 17.3644 27.2962C16.3643 27.8472 15.3637 28.0015 14.4475 27.7384C13.5112 27.4696 12.8044 26.8051 12.3395 25.9998C11.8745 25.1945 11.6525 24.2501 11.8878 23.3048C12.118 22.38 12.7519 21.5906 13.729 21C12.7519 20.4094 12.1181 19.62 11.8879 18.6952C11.6526 17.7499 11.8746 16.8055 12.3395 16.0002C12.8045 15.1949 13.5113 14.5305 14.4476 14.2616C15.3637 13.9985 16.3643 14.1528 17.3644 14.7037ZM16.489 21.9167C15.8807 22.0092 15.2565 22.2162 14.737 22.5161C14.031 22.9237 13.7456 23.3687 13.6521 23.744C13.5561 24.1298 13.6259 24.5916 13.914 25.0907C14.2022 25.5898 14.5673 25.8811 14.9494 25.9909C15.3211 26.0976 15.8492 26.0729 16.5552 25.6653C17.0751 25.3651 17.5669 24.9276 17.9512 24.4465C17.9591 24.4287 17.967 24.4108 17.975 24.3931C17.2606 23.7558 16.7487 22.8962 16.5479 21.923C16.5283 21.921 16.5086 21.9189 16.489 21.9167ZM25.4513 21.923L25.5103 21.9167C26.1185 22.0092 26.7427 22.2162 27.2621 22.5161C27.9681 22.9237 28.2536 23.3687 28.347 23.744C28.443 24.1298 28.3733 24.5916 28.0851 25.0907C27.7969 25.5898 27.4319 25.8811 27.0498 25.9909C26.678 26.0976 26.1499 26.0729 25.444 25.6653C24.9241 25.3652 24.4325 24.9277 24.0481 24.4468L24.0243 24.3931C24.7387 23.7558 25.2506 22.8962 25.4513 21.923ZM19.1814 14.8182C19.1814 14.003 19.424 13.5333 19.7024 13.2647C19.9884 12.9887 20.4233 12.8182 20.9996 12.8182C21.5759 12.8182 22.0107 12.9887 22.2968 13.2647C22.5751 13.5333 22.8178 14.003 22.8178 14.8182C22.8178 15.4186 22.6847 16.0633 22.4602 16.6367L22.4265 16.683C21.9778 16.5348 21.4981 16.4545 20.9996 16.4545C20.5012 16.4545 20.0215 16.5348 19.5727 16.683L19.5388 16.6365C19.3144 16.0631 19.1814 15.4185 19.1814 14.8182ZM17.9511 17.5532L17.9749 17.6069C17.257 18.2474 16.7436 19.1123 16.545 20.0915C15.9192 20.0034 15.2725 19.793 14.7371 19.4839C14.0311 19.0763 13.7456 18.6313 13.6522 18.256C13.5562 17.8702 13.6259 17.4084 13.9141 16.9093C14.2023 16.4102 14.5673 16.1189 14.9494 16.0091C15.3212 15.9024 15.8493 15.9271 16.5552 16.3347C17.0751 16.6348 17.5667 17.0723 17.9511 17.5532ZM24.0243 17.6069L24.048 17.5535C24.4323 17.0724 24.9241 16.6349 25.444 16.3347C26.15 15.9271 26.6781 15.9024 27.0498 16.0091C27.4319 16.1189 27.797 16.4102 28.0852 16.9093C28.3733 17.4084 28.4431 17.8702 28.3471 18.256C28.2536 18.6313 27.9682 19.0763 27.2622 19.4839C26.7268 19.793 26.0801 20.0034 25.4543 20.0915C25.2556 19.1123 24.7422 18.2473 24.0243 17.6069ZM20.9996 23.7273C22.5059 23.7273 23.7269 22.5062 23.7269 21C23.7269 19.4938 22.5059 18.2727 20.9996 18.2727C19.4934 18.2727 18.2724 19.4938 18.2724 21C18.2724 22.5062 19.4934 23.7273 20.9996 23.7273ZM20.9996 25.5454C21.5031 25.5454 21.9875 25.4636 22.4401 25.3125C22.6767 25.8984 22.8178 26.5636 22.8178 27.1818C22.8178 27.997 22.5752 28.4667 22.2969 28.7353C22.0108 29.0113 21.576 29.1818 20.9996 29.1818C20.4233 29.1818 19.9885 29.0113 19.7024 28.7353C19.4241 28.4667 19.1814 27.997 19.1814 27.1818C19.1814 26.5636 19.3225 25.8984 19.5592 25.3125C20.0118 25.4636 20.4962 25.5454 20.9996 25.5454Z" fill="#F5E7E7" />
                                    </svg>
                                </div>
                                <p className='text-[18px] leading-[24px] text-mainWhite font-montserrat font-medium'>Инструкция свежести</p>
                            </div>

                            <div className={`${styles.active}`} onClick={() => setInfo({ ...info, info3: !info.info3, info1: false, info2: false })}>
                                <svg width={16} height={16} viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H8H16" stroke="#F5E7E7" strokeWidth={2} />
                                </svg>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>После покупки букета роз следуйте этим рекомендациям, чтобы продлить их жизнь:</p>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>1. Сразу по прибытии домой подрежьте стебли под углом 45° острым ножом (не ножницами!) на 2-3 см.</p>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>2. Удалите все листья, которые будут находиться под водой, чтобы избежать гниения.</p>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>3. Подготовьте вазу: тщательно вымойте её с мылом и ополосните.</p>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>4. Наполните вазу прохладной водой (20-22°C). Можно добавить специальный консервант для срезанных цветов или:</p>
                            <ul className='space-y-[10px] list-disc pl-[20px] marker:text-white'>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>1 ч.л. сахара + 2-3 капли лимонного сока на литр воды</p>
                                </li>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>1 таблетку аспирина на литр воды</p>
                                </li>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>1 ч.л. водки на литр воды</p>
                                </li>
                            </ul>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>5. Меняйте воду каждые 2 дня, при этом обновляя срез стеблей на один см.</p>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>6. Поставьте вазу с розами вдали от:</p>
                            <ul className='space-y-[10px] list-disc pl-[20px] marker:text-white'>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>Прямых солнечных лучей</p>
                                </li>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>Источников тепла (батарей, обогревателей)</p>
                                </li>
                                <li>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>Сквозняков</p>
                                    <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>Фруктов (они выделяют этилен, ускоряющий увядание)</p>
                                </li>
                            </ul>
                            <p className='text-[14px] leading-[18px] font-medium font-montserrat text-mainWhite'>7. Ночью можно выносить букет в прохладное место (12-15°C), что продлит жизнь цветов.</p>
                        </div>
                    </div>
                )}
            </div>

            <p className='text-[18px] leading-[20px] text-mainBlack font-montserrat font-semibold uppercase'>Описание</p>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[14px] leading-[18px] font-montserrat font-normal text-mainBlack'>Букет из светло-персиковых кустовых роз Павлова представляет собой изысканную цветочную композицию, отличающуюся следующими особенностями:</p>

                <p className='text-[14px] leading-[18px] font-montserrat font-normal text-mainBlack'>Внешний вид:</p>

                <ul className='space-y-[10px] list-disc pl-[20px] marker:text-mainBlack'>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Нежный светло-персиковый оттенок с едва заметными розоватыми переливами</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Элегантные бутоны среднего размера (4-5 см в диаметре)</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>На каждом стебле формируется 3-5 цветков, создающих пышную композицию</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Бархатистые лепестки с плавным градиентом от центра к краям</p>
                    </li>
                </ul>

                <p className='text-[14px] leading-[18px] font-montserrat font-normal text-mainBlack'>Аромат:</p>

                <ul className='space-y-[10px] list-disc pl-[20px] marker:text-mainBlack'>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Тонкий, ненавязчивый с легкими фруктовыми нотами</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Деликатный цветочный шлейф, не вызывающий аллергических реакций</p>
                    </li>
                </ul>

                <p className='text-[14px] leading-[18px] font-montserrat font-normal text-mainBlack'>Символизм:</p>

                <ul className='space-y-[10px] list-disc pl-[20px] marker:text-mainBlack'>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Светло-персиковый цвет символизирует нежность, благодарность и искренние чувства</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Кустовые розы Павлова выражают восхищение и уважение</p>
                    </li>
                    <li>
                        <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Идеально подходят для выражения теплых чувств без романтического подтекста</p>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <p className='text-[18px] leading-[20px] text-mainBlack font-montserrat font-semibold uppercase'>Состав</p>
                <p className='text-[14px] leading-[18px] font-normal font-montserrat text-mainBlack'>Розы, Лента, Бумага</p>
            </div>

        </>
    )
}

export default AddInService
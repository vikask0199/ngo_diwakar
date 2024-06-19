import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { formErrorMessageStyle, formInputStyle, formLevelStyle, phoneRegExp } from '../../constants';
import { useGetSubPaisaEncKeyMutation } from '../../store/features/payment/subpaisApiSlice';
import { RequiredStar } from '../reusable/form';


const data = {
    encData: 'xqYhfkmiAkAR2NH1GDV4CgatV79idI2KG1LmSM/gTdX7HT624iYVypB2P0aWxE4Iyqaj64CGC/ptmcnn0c/t36tVpXeYbttLMK24wgxxxVv995mrUkXy6OtW/p41EK/qdl483chgHtRIMj9hLESKpB3vDd9W7vKGAxTqcOYX5t1FkLJLvjjr66wBdYlmn2ZLtyg0zBAwI0DnlxJJE/xxtOtEVFK0JxeiQCfq7z8prLSwHkswwgS5mvrQfSm+b8dT3Bbi3xTrj5MTljvHYQsFQFDAfVwg94cvtKj4XoRbkT8ahiErVDDadrAOakAMlFBKfy6q5fo6Tmx3bKsT8t3gS60HiO/Upn9GVkhwfV2ju6c=',
    clientCode: 'LPSD1'
}

const DonateForm = () => {
    const location = useLocation();
    const { state } = location;
    const isVerified = state?.isVerified
    console.log(isVerified)
    const [subPaisaReq, subPisaRes] = useGetSubPaisaEncKeyMutation()
    const navigate = useNavigate();
    useEffect(() => {
        if (subPisaRes.isSuccess) {
            toast.info('Please wait while we are redirecting to payment page')
            navigate('/subpaisapay', { state: { optional: subPisaRes.data } })
        }
        else if (subPisaRes.isError) {
            toast.error('Something went wrong')
        }
    }, [subPisaRes.isSuccess, subPisaRes.isError])

    useEffect(() => {
        if (isVerified === false || isVerified === undefined) {
            navigate('/verify-not-robot')
        }
    }, [])


    return (
        <div className='flex md:justify-around items-center md:items-start bg-hero-pattern bg-cover bg-no-repeat bg-center flex-col md:flex-row md:py-10 py-5 gap-y-10'>
            <div className='flex md:w-1/4 w-[95%] flex-col rounded-lg p-2 shadow-md bg-white bg-opacity-90'>
                <div className='flex justify-center pb-5 font-bold'>Donate</div>
                <Formik
                    initialValues={{ name: '', email: '', phone: '', amount: "1000", }}

                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                        name: Yup.string().required('Required'),
                        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                        amount: Yup.number()
                            .typeError('Amount must be a valid number')
                            .required('Amount is required')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        values.amount = +values.amount
                        console.log(values)
                        await subPaisaReq(values)
                        setSubmitting(false)

                    }}
                >
                    {({ isSubmitting, values }) => (
                        <Form className='flex flex-col gap-2'>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3'>
                                <label htmlFor="name" className={formLevelStyle}>Name <RequiredStar /></label>
                                <div className=''>
                                    <Field name="name" type="text" placeholder="name" className={formInputStyle} />
                                    <ErrorMessage name="name" className={formErrorMessageStyle} component={"div"} />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3'>
                                <label htmlFor="email" className={formLevelStyle}>Email Address <RequiredStar /></label>
                                <div>
                                    <Field name="email" type="text" placeholder="email" className={formInputStyle} />
                                    <ErrorMessage name="email" className={formErrorMessageStyle} component={"div"} />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3'>
                                <label htmlFor="phone" className={formLevelStyle}>Phone Number <RequiredStar /></label>
                                <div>
                                    <Field name="phone" type="phone" placeholder="Phone Number" className={formInputStyle} />
                                    <ErrorMessage name="phone" className={formErrorMessageStyle} component={"div"} />
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3'>
                                <label htmlFor="amount" className={formLevelStyle}>Amount &#8377; <RequiredStar /></label>
                                <div>
                                    <Field name="amount" type="text" placeholder="Amount" className={formInputStyle} />
                                    <div role="group"
                                        className='flex justify-center gap-5 mb-1'>
                                        <div className='flex gap-2 w-full'>
                                            <Field id='500' type="radio" name="amount" value="500" className='peer hidden' />
                                            <label htmlFor="500" className='flex w-full justify-center items-center cursor-pointer border select-none rounded-xl px-2 py-1 text-center peer-checked:bg-gray-500 peer-checked:font-bold peer-checked:text-white'>500</label>
                                        </div>
                                        <div className='flex gap-2 w-full'>
                                            <Field id='1000' type="radio" name="amount" value="1000" className="peer hidden" />
                                            <label htmlFor="1000" className='flex w-full justify-center items-center border cursor-pointer select-none rounded-xl px-2 py-1 text-center peer-checked:bg-gray-500 peer-checked:font-bold peer-checked:text-white'>1000</label>
                                        </div>
                                        <div className='flex gap-2 w-full'>
                                            <Field id='5000' type="radio" name="amount" value="5000" className="peer hidden" />
                                            <label htmlFor="5000" className='flex w-full justify-center items-center border items-center rounded-xl cursor-pointer px-2 py-1  text-center peer-checked:bg-gray-500 peer-checked:font-bold peer-checked:text-white'>5000</label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="amount" className={formErrorMessageStyle} component={"div"} />
                                </div>
                            </div>

                            <button type="submit" disabled={isSubmitting} className='bg-amber-300 p-1 mt-8'>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className='flex md:w-1/3 w-[95%] flex-col shadow-md p-2 bg-white bg-opacity-90 rounded-lg font-medium text-slate-600'>
                Dear valued supporter,
                <br />
                <br />
                <p>
                    Thank you for considering a donation to our non-profit charity. Your generous contribution plays a crucial role in supporting the well-being and future of orphaned children in our society. As a non-profit organization, our primary mission is to provide essential resources such as food, clothing, education, and healthcare to those in need.
                </p>
                <br />
                <p>
                    Every donation, no matter the size, directly contributes to making a positive impact on the lives of these children. Your support enables us to create a nurturing environment, ensuring they receive the care and opportunities they deserve.
                </p>
                <br />
                <p>
                    Together, we can make a difference and build a brighter future for the orphaned children in our community. Your kindness and generosity empower us to continue our mission of spreading hope and improving the lives of those who need it most.
                </p>
                <br />
                <p>
                    Thank you for being a part of our mission to make the world a better place for every child.
                </p>
                <br />
                <br />
                With gratitude,
                <br />
                <p className='font-semibold'>Vikas</p>
            </div>
        </div>
    )
}

export default DonateForm


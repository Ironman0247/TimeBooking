import { useCallback } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import Select from '@/components/ui/Select'
import { FormItem, FormContainer } from '@/components/ui/Form'
import { Field, Form, Formik } from 'formik'
import get from 'lodash/get'
import { countryList } from '@/constants/countries.constant'
import * as Yup from 'yup'
import type { Address } from '../store'
import type { FieldProps, FormikTouched, FormikErrors } from 'formik'

type FormModel = Address

type AddressInfomationProps = {
    data: Address
    onNextChange?: (
        values: FormModel,
        formName: string,
        setSubmitting: (isSubmitting: boolean) => void
    ) => void
    onBackChange?: () => void
    currentStepStatus?: string
}

type AddressFormProps = {
    values: FormModel
    touched: FormikTouched<FormModel>
    errors: FormikErrors<FormModel>
    countryName: string
    addressLine1Name: string
    addressLine2Name: string
    cityName: string
    stateName: string
    zipCodeName: string
}

const validationSchema = Yup.object().shape({
    country: Yup.string().required('Улсаа сонгоно уу'),
    addressLine1: Yup.string().required('Хотоо сонгоно уу'),
    addressLine2: Yup.string().required('Дүүргээ сонгоно уу'),
    city: Yup.string().required('Хороогоо сонгоно уу'),
    state: Yup.string().required('Байр | Гудмаа оруулна уу'),
    zipCode: Yup.string().required('Тоотоо оруулна уу'),
})

const AddressForm = (props: AddressFormProps) => {
    const {
        values,
        touched,
        errors,
        countryName,
        addressLine1Name,
        addressLine2Name,
        cityName,
        stateName,
        zipCodeName,
    } = props

    const getError = useCallback(
        (name: string) => {
            return get(errors, name)
        },
        [errors]
    )

    const getTouched = useCallback(
        (name: string) => {
            return get(touched, name)
        },
        [touched]
    )

    return (
        <>
            <div className="md:grid grid-cols-2 gap-4">
                <FormItem
                    label="Улс"
                    invalid={getError(countryName) && getTouched(countryName)}
                    errorMessage={getError(countryName)}
                >
                    <Field name={countryName}>
                        {({ field, form }: FieldProps) => (
                            <Select
                                placeholder="Улс"
                                field={field}
                                form={form}
                                options={countryList}
                                value={countryList.filter(
                                    (c) => c.value === get(values, countryName)
                                )}
                                onChange={(c) =>
                                    form.setFieldValue(field.name, c?.value)
                                }
                            />
                        )}
                    </Field>
                </FormItem>
                <FormItem
                    label="Хот"
                    invalid={
                        getError(addressLine1Name) &&
                        getTouched(addressLine1Name)
                    }
                    errorMessage={getError(addressLine1Name)}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={addressLine1Name}
                        placeholder="Хот"
                        component={Input}
                    />
                </FormItem>
            </div>
            <div className="md:grid grid-cols-2 gap-4">
                <FormItem
                    label="Дүүрэг"
                    invalid={
                        getError(addressLine2Name) &&
                        getTouched(addressLine2Name)
                    }
                    errorMessage={getError(addressLine2Name)}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={addressLine2Name}
                        placeholder="Дүүрэг"
                        component={Input}
                    />
                </FormItem>
                <FormItem
                    label="Хороо"
                    invalid={getError(cityName) && getTouched(cityName)}
                    errorMessage={getError(cityName)}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={cityName}
                        placeholder="Хороо"
                        component={Input}
                    />
                </FormItem>
            </div>
            <div className="md:grid grid-cols-2 gap-4">
                <FormItem
                    label="Хотхон, Гудам"
                    invalid={getError(stateName) && getTouched(stateName)}
                    errorMessage={getError(stateName)}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={stateName}
                        placeholder="Байр | Гудам"
                        component={Input}
                    />
                </FormItem>
                <FormItem
                    label="Тоот"
                    invalid={getError(zipCodeName) && getTouched(zipCodeName)}
                    errorMessage={getError(zipCodeName)}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={zipCodeName}
                        placeholder="Тоот"
                        component={Input}
                    />
                </FormItem>
            </div>
        </>
    )
}

const AddressInfomation = ({
    data = {
        country: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        sameCorrespondenceAddress: true,
        correspondenceAddress: {
            country: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
        },
    },
    onNextChange,
    onBackChange,
    currentStepStatus,
}: AddressInfomationProps) => {
    const onNext = (
        values: FormModel,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        onNextChange?.(values, 'addressInformation', setSubmitting)
    }

    const onBack = () => {
        onBackChange?.()
    }

    return (
        <>
            <div className="mb-8">
                <h3 className="mb-2">Байршлын мэдээлэл</h3>
            </div>
            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    setTimeout(() => {
                        onNext(values, setSubmitting)
                    }, 1000)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => {
                    const formProps = { values, touched, errors }
                    return (
                        <Form>
                            <FormContainer>
                                <h5 className="mb-4">Байнгийн хаяг</h5>
                                <AddressForm
                                    countryName="Улс"
                                    addressLine1Name="Хот"
                                    addressLine2Name="Дүүрэг"
                                    cityName="Хороо"
                                    stateName="Байр | Гудам"
                                    zipCodeName="Тоот"
                                    {...formProps}
                                />
                                <div className="flex justify-end gap-2">
                                    <Button type="button" onClick={onBack}>
                                        Буцах
                                    </Button>
                                    <Button
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                    >
                                        {currentStepStatus === 'complete'
                                            ? 'Хадгалах'
                                            : 'Дараагийн'}
                                    </Button>
                                </div>
                            </FormContainer>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default AddressInfomation

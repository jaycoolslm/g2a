import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

// Stylesheet

import './hostForm.module.css'

// Component

const SignupForm = () => {

    const descriptionHeight = {
      height: '400px'
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
      initialValues: {
        name: '',
        numOfVolunteers: '',
        email: '',
        mobileNum: '',
        description: '',
        language: ''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
        numOfVolunteers: Yup.number()
          .min(1, 'You must be able to host one volunteer or more')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        mobileNum: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
        description: Yup.string().min(100, 'Your volunteering description must be more detailed').required('Required'),
        language: Yup.string().min(4, 'You must specify what language the volunteers will need to be able to speak').required('Required')
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });


    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Personal / Business name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        
        <div>
          <label htmlFor="numOfVolunteers">Maximum Number of Volunteers</label>
          <input
            id="numOfVolunteers"
            name="numOfVolunteers"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numOfVolunteers}
          />
          {formik.touched.numOfVolunteers && formik.errors.numOfVolunteers ? (
            <div>{formik.errors.numOfVolunteers}</div>
          ) : null}  
        </div>
        
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}  
        </div>
        
        <div>
          <label htmlFor="mobileNum">Mobile Number</label>
          <input
            id="mobileNum"
            name="mobileNum"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNum}
          />
          {formik.touched.mobileNum && formik.errors.mobileNum ? (
            <div>{formik.errors.mobileNum}</div>
          ) : null}  
        </div>
        
        <div>
          <label htmlFor="description">Description of Volunteer Work</label>
          <input
            id="description"
            name="description"
            type="text"
            style={descriptionHeight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}  
        </div>

        <div>
          <label htmlFor="language">Required Language</label>
          <input
            id="language"
            name="language"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          />
          {formik.touched.language && formik.errors.language ? (
            <div>{formik.errors.language}</div>
          ) : null}
        </div>
        
  
        <button type="submit">Submit</button>
      </form>
    );
  };

export default SignupForm
import React, {useState} from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';


// Stylesheet

import {
  buttonDiv,
  closed,
  show
} from './hostForm.module.css'



// Email form handling

import emailjs from "emailjs-com";
emailjs.init('user_Ifh3Sj4fnoi3UUEWAz6Er')


// Component

const SignupForm = () => {

  function sendEmail() {
    let templateParams = formik.values

    emailjs.send('service_mdtterr', 'template_x6jugca', templateParams)
      .then((result) => {
          console.log('SUCCESS!', result.status, result.text)  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log('FAILED...', error);
      });

      alert(`Success! Form submitted.`)
  }

  const [foodToggle, displayFood] = useState(true)

  function handleFoodClick() {
    if (foodToggle) {
      displayFood(false)
    } else displayFood(true)
  }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
      initialValues: {
        name: '',
        numOfVolunteers: '',
        email: '',
        mobileNum: '',
        description: '',
        language: '',
        location: '',
        food: ''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
        numOfVolunteers: Yup.number().min(1, 'You must be able to host one volunteer or more').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        mobileNum: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        description: Yup.string().min(100, 'Your volunteering description must be more detailed').required('Required'),
        language: Yup.string().min(4, 'You must specify what language the volunteers will need to be able to speak').required('Required'),
        location: Yup.string().min(10, 'You must include the country and rough area').required('Required'),
        food: Yup.string()
      }),
      onSubmit: sendEmail,
    });


    return (
      <form onSubmit={formik.handleSubmit} className="form">
        <div>
          <TextField
            variant="outlined"
            id="name"
            name="name"
            type="text"
            label="Personal / Business name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        
        <div>
          <TextField 
            variant="outlined"
            id="numOfVolunteers"
            name="numOfVolunteers"
            type="number"
            label="Maximum Number of Volunteers"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numOfVolunteers}
          />
          {formik.touched.numOfVolunteers && formik.errors.numOfVolunteers ? (
            <div>{formik.errors.numOfVolunteers}</div>
          ) : null}  
        </div>
        
        <div>
          
          <TextField 
            variant="outlined"
            id="email"
            name="email"
            type="email"
            label="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          

          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}  

        </div>
        
        <div>

          <TextField 
            variant="outlined"
            id="mobileNum"
            name="mobileNum"
            type="number"
            label="Mobile Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNum}
          />

          {formik.touched.mobileNum && formik.errors.mobileNum ? (
            <div>{formik.errors.mobileNum}</div>
          ) : null}  
        </div>
        

        <div>
          <TextField 
            variant="outlined"
            id="location"
            name="location"
            type="text"
            label="Location eg. London, United Kingdom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />

          {formik.touched.location && formik.errors.location ? (
            <div>{formik.errors.location}</div>
          ) : null}
        </div>

        <div>
          <TextField 
            variant="outlined"
            id="description"
            name="description"
            type="text"
            label="Description of Volunteer Work"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            multiline
            minRows='5'
          />

          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}  
        </div>
        
        <div>
          <FormControlLabel
          control={<Checkbox 
            color='primary'
            onChange={handleFoodClick}
            checkedIcon={<FastfoodIcon/>}
          />}

          label="Is food included"
        >
          
        </FormControlLabel>
        </div>
        
        
        <div className={foodToggle ? closed : show}>
          <TextField
            variant="outlined"
            id="food"
            name="food"
            type="text"
            label="Further information about food"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.food}
          />

          {formik.touched.language && formik.errors.language ? (
            <div>{formik.errors.food}</div>
          ) : null}
        </div>
        
        <div>
          <TextField 
            variant="outlined"
            id="language"
            name="language"
            type="text"
            label="Necessary Language / Languages"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          />

          {formik.touched.language && formik.errors.language ? (
            <div>{formik.errors.language}</div>
          ) : null}
        </div>
        
        <div className={buttonDiv}>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    );
  };

export default SignupForm
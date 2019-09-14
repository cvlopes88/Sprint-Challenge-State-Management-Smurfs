import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";




const SmurfsForm = ({errors, touched, status}) => {
   


return (
    <div className="smurfForm">
    <h1>Smurfs Form</h1>
    <Form>
     <Field type="text" name="name" placeholder="Name" />
     {touched.name && errors.name && (
         <p className="error">{errors.name}</p>
     )}
     <Field type="number" name="age" placeholder="years old" />
     {touched.age && errors.age && (
         <p className="error">{errors.age}</p>
     )}
     <Field type="number" name="height" placeholder="00" />
     {touched.height && errors.height && (
         <p className="error">{errors.height}</p>
     )}
    

     <button type="submit">Submit!</button>
        </Form>    


    </div>
);


};


 const FormikSmurfsForm = withFormik({

    mapPropsToValues({name, age, height }) {
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("please type your name"),
        age: Yup.string().required("are you that old"),
        height: Yup.string().required("tall smurfs allowed")
       
    }),
    handleSubmit(values, { setStatus}) {
    axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

})(SmurfsForm) ;

export default FormikSmurfsForm;
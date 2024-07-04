<template>
  <div>
    <Form class="row g-3 needs-validation"  :validation-schema="categorie()"  @submit="AfficherCategorie" novalidate>
            <div class="col-md-4">
                    <label for="code" class="form-label">Code</label>
                    <Field name="code" class="form-control" type="String"/>
                    <ErrorMessage name="code" />
            </div>
            <div class="col-md-4">
                    <label for="libelle" class="form-label">Libellé</label>
                    <Field name="libelle" class="form-control" type="String"/>
                    <ErrorMessage name="libelle" />
            </div>
           
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Ajouter</button>
            </div>
        
    </Form>
 </div>
    
    </template>
    
    
    
    <script setup lang="ts">
    
    
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';
    import { configure } from 'vee-validate'
    configure({
        validateOnBlur: true,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: false,
    });
    
    const categorie = () => {
        return yup.object().shape({
            code: yup.string().required("Le code est requis."),
            libelle: yup.string().required("Le libellé est requis."),
            
        
        })
    }
     const AfficherCategorie = (valeur:any) => {
    alert(valeur)
     }
    
    
    </script>
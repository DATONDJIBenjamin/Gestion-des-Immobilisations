<template>

<div>
    <Form class="row g-3 needs-validation"  :validation-schema="mouvement()"  @submit="AfficherMouvement" novalidate>
            <div class="col-md-4">
                    <label for="ref" class="form-label">Référence</label>
                    <Field name="ref" class="form-control" type="String"/>
                    <ErrorMessage name="ref" />
            </div>
            <div class="col-md-4">
                    <label for="type" class="form-label">Type</label>
                    <Field name="type" class="form-control" type="String"/>
                    <ErrorMessage name="type" />
            </div>
            <div class="col-md-4">
                    <label for="date" class="form-label">Date Mouvement</label>
                    <Field name="date" class="form-control" type="String"/>
                    <ErrorMessage name="date" />
            </div>
            <div class="col-md-4">
                    <label for="infosComplementaire" class="form-label">Infos complementaire</label>
                    <Field name="infosComplementaire" class="form-control" type="String"/>
                    <ErrorMessage name="infosComplementaire" />
            </div>
            <div class="col-md-4">
                    <label for="ancienEmplacement" class="form-label">Ancien Emplacement</label>
                    <Field name="ancienEmplacement" class="form-control" type="String"/>
                    <ErrorMessage name="ancienEmplacement" />
            </div>
            <div class="col-md-4">
                    <label for="nouvelEmplacement" class="form-label">Nouvel Emplacement</label>
                    <Field name="nouvelEmplacement" class="form-control" type="String"/>
                    <ErrorMessage name="nouvelEmplacement" />
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Ajouter</button>
            </div>
        </Form>
    </div>
          <router-view/> 

    
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
    
    const mouvement = () => {
        return yup.object().shape({
            ref: yup.string().required("La référence est requise."),
            type: yup.string().required("Le type est requis."),
            date: yup.date().required("la date est requise."),
            infosCompletaire: yup.string().required("l'information complementaire est requise."),
            ancienEmplacement: yup.string().required("l'ancien Emplacement est requis."),
            nouvelEmplacement: yup.string().required("le nouvel Emplacement est requis."),
            
        
        })
    }
     const AfficherMouvement = (valeur:any) => {
    alert(valeur)
     }
    
    
    </script>
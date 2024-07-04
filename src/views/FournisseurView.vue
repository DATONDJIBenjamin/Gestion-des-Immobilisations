<template>

<div>
    <Form class="row g-3 needs-validation"  :validation-schema="fournisseur()"  @submit="AfficherFournisseur" novalidate>
            <div class="col-md-4">
                    <label for="nom" class="form-label">Nom Fournisseur</label>
                    <Field name="nom" class="form-control" type="String"/>
                    <ErrorMessage name="nom" />
            </div>
            <div class="col-md-4">
                    <label for="telephone" class="form-label">Téléphone</label>
                    <Field name="telephone" class="form-control" type="number"/>
                    <ErrorMessage name="telephone" />
            </div>
            <div class="col-md-4">
                    <label for="adresse" class="form-label">Adresse</label>
                    <Field name="adresse" class="form-control" type="Date"/>
                    <ErrorMessage name="adresse" />
            </div>
        
            

            <div class="col-12">
                <button class="btn btn-primary" type="submit">Ajouter</button>
            </div>
        </Form>
</div> 
       <RetourForm/>
       <router-view/>  
    
    </template>
  
    
    
    <script setup lang="ts">
          import RetourForm from '../components/RetourForm.vue';
    
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';
    import { configure } from 'vee-validate'
    configure({
        validateOnBlur: true,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: false,
    });
    
    const fournisseur = () => {
        return yup.object().shape({
            nom: yup.string().required("Le Nom est requis."),
            telephone: yup.string().required("Le téléphone est requis."),
            adresse: yup.string().required("l'adresse est requise."),
            
        
        })
    }
     const AfficherFournisseur = (valeur:any) => {
    alert(valeur)
     }
    
    
    </script>
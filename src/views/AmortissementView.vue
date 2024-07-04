<template>

<div>
    <Form class="row g-3 needs-validation"  :validation-schema="amortissement()"  @submit="AfficherAmortissement" novalidate>
            <div class="col-md-4">
                    <label for="taux" class="form-label">Taux d'amortissement</label>
                    <Field name="taux" class="form-control" type="number"/>
                    <ErrorMessage name="taux" />
            </div>
            <div class="col-md-4">
                    <label for="valeurNetteComptable" class="form-label">Valeur Nette Comptable</label>
                    <Field name="valeurNetteComptable" class="form-control" type="number"/>
                    <ErrorMessage name="valeurNetteComptable" />
            </div>
            <div class="col-md-4">
                    <label for="dureeUtilisation" class="form-label">Duree Utilisation</label>
                    <Field name="dureeUtilisation" class="form-control" type="Date"/>
                    <ErrorMessage name="dureeUtilisation" />
            </div>
        
            

            <div class="col-12">
                <button class="btn btn-primary" type="submit">Calculer</button>
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

const amortissement = () => {
    return yup.object().shape({
        taux: yup.number().required("Le taux est requis."),
        valeurNetteComptable: yup.number().required("La valeur nette comptable est requise."),
        dureeUtilisation: yup.date().required("La durée d'utilisation est requise."),
    
    })
}
 const AfficherAmortissement = (valeur:any) => {
console.log("valeur= ",valeur)
 }


</script>
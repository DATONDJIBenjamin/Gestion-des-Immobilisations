<template>
  
   
    <div>
        <Form class="row g-3 needs-validation"  :validation-schema="bien()"  @submit="AfficherBien" novalidate>
            <div class="col-md-4">
                    <label for="ref" class="form-label">Référence</label>
                    <Field name="ref" class="form-control" type="String"/>
                    <ErrorMessage name="ref" />
            </div>
            <div class="col-md-4">
                    <label for="nom" class="form-label">Nom</label>
                    <Field name="nom" class="form-control" type="String"/>
                    <ErrorMessage name="nom" />
            </div>
            <div class="col-md-4">
                    <label for="CoutAcquisition" class="form-label">Cout Acquisition</label>
                    <Field name="CoutAcquisition" class="form-control" type="number"/>
                    <ErrorMessage name="CoutAcquisition" />
            </div>
  
            <div class="col-md-4">
                    <label for="DateAcquisition" class="form-label"> Date d'Acquisition</label>
                    <Field name="DateAcquisition"  class="form-control" type="Date"/>
                    <ErrorMessage name="DateAcquisition" />
            </div>
            <div class="col-md-4">
                    <label for="dureeVie" class="form-label">Duree de Vie</label>
                    <Field name="dureeVie" class="form-control" type="Date"/>
                    <ErrorMessage name="dureeVie" />
            </div>

            <div class="col-md-4">
                    <label for="dateMiseService" class="form-label">Date Mise Service</label>
                    <Field name="dateMiseService" class="form-control" type="Date"/>
                    <ErrorMessage name="dateMiseService" />
            </div>
            <div class="col-md-4">
                    <label for="numeroEnregistrement" class="form-label">Numero Enregistrement</label>
                    <Field name="numeroEnregistrement" class="form-control" type="number"/>
                    <ErrorMessage name="numeroEnregistrement" />
            </div>
            <div class="col-md-4">
                    <label for="codeBar" class="form-label">codeBar</label>
                    <Field name="codeBar" class="form-control" type="number"/>
                    <ErrorMessage name="codeBar" />
         </div>
         <div class="col-md-4">
                    <label for="localisation" class="form-label">Localisation</label>
                    <Field name="localisation"  class="form-control" type="number"/>
                    <ErrorMessage name="localisation" />
         </div>
         <div class="col-md-4">
                    <label for="longitude" class="form-label">Longitude</label>
                    <Field name="longitude" class="form-control" type="number"/>
                    <ErrorMessage name="longitude" />
         </div>
         <div class="col-md-4">
                    <label for="latitude" class="form-label">Latitude</label>
                    <Field name="latitude" class="form-control" type="number"/>
                    <ErrorMessage name="latitude" />
         </div>
         <div class="col-md-4">
                    <label for="modeAmortissement" class="form-label">Mode Amortissement</label>
                    <Field name="modeAmortissement" class="form-control" type="String"/>
                    <ErrorMessage name="modeAmortissement" />
         </div>
         <div class="col-md-12">
                    <label for="valeurNetteComptable" class="form-label">Valeur Nette Comptable</label>
                    <Field name="valeurNetteComptable" class="form-control" type="number"/>
                    <ErrorMessage name="modeAmortissement" />
                    
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
    
    const bien = () => {
        return yup.object().shape({
            
           ref: yup.string().required("La Référence est requise."),
            nom: yup.string().required("Le nom est requis."),
            CoutAcquisition: yup.number().required("Le cout_Aquisition est requis."),
            DateAcquisition: yup.date().required("La Date_Acquisition est requise."),
            dureeVie: yup.date().required("La durée_vie est requise."),
            dateMiseService: yup.date().required("La date de mise en service est requise."),
            numeroEnregistrement: yup.number().required("Le numero d'enregistrement est requis."),
            codeBar: yup.number().required("Le codeBar est requis."),
            localisation: yup.number().required("La localisation est requise."),
            longitude: yup.number().required("La longitude est requise."),
            latitude: yup.number().required("La latitude est requise."),
            modeAmortissement: yup.string().required("Le Mode Amortissement est requis."),
            valeurNetteComptable: yup.number().required("La Valeur Nette Comptable est requise."),
        
        })
    }
     const AfficherBien = (valeur:any) => {
    alert(valeur)
     }
     </script>



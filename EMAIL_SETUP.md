# Configuration Email pour l'Académie SON

## Variables d'environnement requises

Pour que le formulaire d'inscription envoie les emails automatiquement, vous devez configurer les variables d'environnement suivantes dans votre projet Vercel :

### 1. EMAIL_USER
Votre adresse email Gmail (ex: casilvag10@gmail.com)

### 2. EMAIL_PASS
Votre mot de passe d'application Gmail (pas votre mot de passe habituel)

## Comment obtenir un mot de passe d'application Gmail :

1. Allez dans votre compte Google
2. Sécurité → Validation en deux étapes (doit être activée)
3. Mots de passe des applications
4. Sélectionnez "Autre" et tapez "Académie SON"
5. Copiez le mot de passe généré (16 caractères)

## Configuration dans Vercel :

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez :
   - `EMAIL_USER` = votre email Gmail
   - `EMAIL_PASS` = le mot de passe d'application

## Test :

Une fois configuré, chaque soumission du formulaire d'inscription enverra automatiquement un email à casilvag10@gmail.com avec toutes les informations de l'étudiant.

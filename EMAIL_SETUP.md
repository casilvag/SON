# Configuration Email pour Academy SON

## Variables d'environnement requises

Pour que les formulaires de contact et consultation envoient les emails automatiquement, vous devez configurer la variable d'environnement suivante dans votre projet Vercel :

### RESEND_API_KEY
Votre clé API Resend pour l'envoi d'emails

## Comment obtenir une clé API Resend :

1. Allez sur [resend.com](https://resend.com) et créez un compte gratuit
2. Vérifiez votre domaine ou utilisez le domaine de test fourni
3. Allez dans "API Keys" dans votre dashboard
4. Créez une nouvelle clé API avec les permissions d'envoi d'emails
5. Copiez la clé API générée

## Configuration dans Vercel :

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez :
   - `RESEND_API_KEY` = votre clé API Resend

## Configuration des emails :

Dans les fichiers API (`app/api/contact/route.ts` et `app/api/consultation/route.ts`), remplacez :
- `contact@academyson.com` par votre vraie adresse email
- `noreply@academyson.com` par votre domaine vérifié dans Resend

## Test :

Une fois configuré, chaque soumission des formulaires enverra automatiquement :
1. Un email de notification à votre adresse
2. Un email de confirmation à l'utilisateur

## Plan gratuit Resend :
- 3,000 emails par mois
- 100 emails par jour
- Parfait pour commencer

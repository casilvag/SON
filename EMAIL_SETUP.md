# Configuration Email Gmail pour Academy SON

## Variables d'environnement requises

Pour que les formulaires de contact et consultation envoient les emails automatiquement via Gmail, vous devez configurer les variables d'environnement suivantes dans votre projet Vercel :

### GMAIL_USER
Votre adresse Gmail complète (exemple: votre-email@gmail.com)

### GMAIL_APP_PASSWORD
Votre mot de passe d'application Gmail (pas votre mot de passe normal)

## Comment obtenir un mot de passe d'application Gmail :

1. **Activez la vérification en 2 étapes** sur votre compte Google si ce n'est pas déjà fait
2. Allez dans votre compte Google → Sécurité
3. Dans "Se connecter à Google", cliquez sur "Mots de passe des applications"
4. Sélectionnez "Autre (nom personnalisé)" et tapez "Academy SON Website"
5. Google générera un mot de passe de 16 caractères
6. **Copiez ce mot de passe** (vous ne pourrez plus le voir après)

## Configuration dans Vercel :

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez :
   - `GMAIL_USER` = votre adresse Gmail complète
   - `GMAIL_APP_PASSWORD` = le mot de passe d'application généré

## Configuration des emails :

Les emails seront automatiquement envoyés à votre adresse Gmail configurée dans `GMAIL_USER`. Tous les messages de contact et demandes de consultation arriveront dans votre boîte de réception Gmail.

## Test :

Une fois configuré, chaque soumission des formulaires enverra automatiquement un email de notification à votre Gmail avec :
- Les informations du contact (nom, email, téléphone)
- Le message ou la question posée
- L'horodatage de la soumission

## Avantages de Gmail :
- Gratuit et fiable
- Pas de limite d'emails pour usage personnel
- Interface familière
- Intégration facile avec votre workflow existant

## Sécurité :
- Utilisez toujours un mot de passe d'application, jamais votre mot de passe Gmail principal
- Le mot de passe d'application est spécifique à cette application et peut être révoqué à tout moment
